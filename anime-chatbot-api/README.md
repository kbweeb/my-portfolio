Anime Chatbot API (C# .NET) — Minimal Setup

Overview
- Minimal .NET API that exposes POST /chat { message } and returns { reply } using OpenAI (or compatible) API.
- Deploy to Render/Azure; set the frontend env var NEXT_PUBLIC_CHATBOT_API to the public URL.

Quick start
1) dotnet new web -n AnimeChatbotApi
2) Replace Program.cs with a minimal handler calling OpenAI
3) Add OPENAI_API_KEY in the hosting platform

Program.cs (example)
using System.Text.Json;
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapPost("/chat", async (HttpContext ctx) => {
    var body = await JsonSerializer.DeserializeAsync<JsonElement>(ctx.Request.Body);
    var message = body.GetProperty("message").GetString();
    // Call OpenAI here; return mock if no key
    var apiKey = Environment.GetEnvironmentVariable("OPENAI_API_KEY");
    string reply = string.IsNullOrWhiteSpace(apiKey)
        ? "(Mock) Hello from Anime Chatbot!"
        : await CallOpenAiAsync(apiKey!, message ?? "");
    await ctx.Response.WriteAsJsonAsync(new { reply });
});

app.Run();

static async Task<string> CallOpenAiAsync(string apiKey, string message)
{
    // Use HttpClient to call OpenAI's chat completions endpoint
    return $"(Demo) You asked: {message}";
}

Deploy
- Render: New Web Service → .NET → set OPENAI_API_KEY → deploy
- Azure App Service: publish .NET, set OPENAI_API_KEY in settings

Frontend config
- In this repo, set NEXT_PUBLIC_CHATBOT_API to your deployed API base URL.
