// app/utils/log-article-click.js
export const logArticleClick = async (title, page = "unknown") => {
  try {
    await fetch("/api/log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "article", title, page }),
    });
  } catch (err) {
    console.error("Failed to log article click:", err);
  }
};
