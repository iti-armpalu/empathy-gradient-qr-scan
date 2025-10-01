export const logArticleClick = async (title, page = "unknown") => {
  const url = new URL(process.env.NEXT_PUBLIC_LOG_SHEET_URL);
  url.searchParams.set("type", "article");
  url.searchParams.set("title", title);
  url.searchParams.set("page", page);

  try {
    await fetch(url.toString(), {
      method: "GET",
      mode: "no-cors", // prevent browser from caring about CORS at all
    });
  } catch (err) {
    console.error("Failed to log article click:", err);
  }
};
