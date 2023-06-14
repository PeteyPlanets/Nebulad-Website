export default function extractTextFromHTML(html) {
  const parser = new DOMParser();
  const parsedHtml = parser.parseFromString(html, "text/html");
  return parsedHtml.body.textContent || "";
}
