using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;

namespace AnimeChatBlazor.Services;

public record ChatMessage(string Role, string Content);

public class ChatService
{
    private readonly IHttpClientFactory _httpClientFactory;

    public ChatService(IHttpClientFactory httpClientFactory)
    {
        _httpClientFactory = httpClientFactory;
    }

    public async Task<string> SendAsync(IReadOnlyList<ChatMessage> history, string userMessage, CancellationToken ct = default)
    {
        var apiKey = Environment.GetEnvironmentVariable("ANIME_AI_API_KEY");
        var apiBase = Environment.GetEnvironmentVariable("ANIME_AI_API_BASE");
        var model = Environment.GetEnvironmentVariable("ANIME_AI_MODEL") ?? "anime-gpt";

        if (string.IsNullOrWhiteSpace(apiKey))
        {
            // Do not expose the key or any secret in UI; return a safe message.
            return "The AI backend is not configured. Please set ANIME_AI_API_KEY on the server.";
        }

        if (string.IsNullOrWhiteSpace(apiBase))
        {
            // Without a base URL we cannot call the provider reliably. Avoid guessing providers.
            return "AI provider base URL is not configured. Set ANIME_AI_API_BASE on the server.";
        }

        var http = _httpClientFactory.CreateClient();
        http.BaseAddress = new Uri(apiBase.TrimEnd('/') + "/");
        http.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", apiKey);

        // Prepare an OpenAI-compatible request shape for portability.
        var messages = new List<object>();
        messages.Add(new { role = "system", content = "You are an anime expert AI assistant. Answer concisely." });
        foreach (var m in history)
        {
            messages.Add(new { role = m.Role, content = m.Content });
        }
        messages.Add(new { role = "user", content = userMessage });

        var payload = new
        {
            model,
            messages,
            stream = false
        };

        using var req = new HttpRequestMessage(HttpMethod.Post, "v1/chat/completions")
        {
            Content = new StringContent(JsonSerializer.Serialize(payload), Encoding.UTF8, "application/json")
        };

        using var resp = await http.SendAsync(req, HttpCompletionOption.ResponseHeadersRead, ct);
        if (!resp.IsSuccessStatusCode)
        {
            var body = await resp.Content.ReadAsStringAsync(ct);
            return $"Provider error: {(int)resp.StatusCode}."; // Do not echo secrets or full body.
        }

        using var stream = await resp.Content.ReadAsStreamAsync(ct);
        using var doc = await JsonDocument.ParseAsync(stream, cancellationToken: ct);

        // Expect OpenAI-like response: { choices: [ { message: { content: "..." } } ] }
        if (doc.RootElement.TryGetProperty("choices", out var choices) && choices.GetArrayLength() > 0)
        {
            var first = choices[0];
            if (first.TryGetProperty("message", out var message) && message.TryGetProperty("content", out var contentEl))
            {
                return contentEl.GetString() ?? string.Empty;
            }
        }

        return "No response content received.";
    }
}
