window.AnimeChat = {
  scrollToBottom: function (el) {
    try {
      if (!el) return;
      el.scrollTop = el.scrollHeight;
    } catch (_) { }
  }
};
