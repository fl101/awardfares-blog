const findAndReplaceUrls = () => {
  document.querySelectorAll("a").forEach((el) => {
    if (el.href.includes("utm_") || (!el.href.startsWith("https://awardfares.com") && !el.href.startsWith("http://www.awardfares.com")) || el.href.includes("mailto:")) {
      return;
    }
    const url = new URL(el.href);
    url.searchParams.set("utm_source", window.utm_source);
    url.searchParams.set("utm_medium", "blog");
    url.searchParams.set("utm_content", el.text);
    el.href = decodeURIComponent(url.toString());
  });
};

findAndReplaceUrls();
