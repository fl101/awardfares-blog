const findAndReplaceUrls = () => {
  document.querySelectorAll("a").forEach((el) => {
    if (
      el.href.includes("utm_") ||
      (!el.href.startsWith("https://awardfares.com") &&
        !el.href.startsWith("http://www.awardfares.com"))
    ) {
      return;
    }
    const url = new URL(el.href);
    const params = {
      utm_source: window.utm_source,
      utm_medium: "blog",
      utm_content: encodeURIComponent(el.text),
    };
    if (el.href.includes("?")) {
      el.href +=
        "&utm_source=" +
        window.utm_source +
        "&utm_medium=blog&utm_content=" +
        encodeURIComponent(el.text);
      console.log(el.text, encodeURIComponent(el.text));
      return;
    }
    url.searchParams.set("utm_source", window.utm_source);
    url.searchParams.set("utm_medium", "blog");
    url.searchParams.set("utm_content", el.text);
    console.log(el.text);
    el.href = url.href;
  });
};

findAndReplaceUrls();
