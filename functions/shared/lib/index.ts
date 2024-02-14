import { renderMarkdown } from "../ui/markdown";

function escapeHTML(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function makeMetaDescription(
  text: string,
  length: number = 160
): string {
  // Finding the end of the first paragraph
  const paragraphEnd = text.indexOf("\n");
  let firstParagraph =
    paragraphEnd > -1 ? text.substring(0, paragraphEnd) : text;

  // Trimming if the paragraph is longer than 160 characters
  if (firstParagraph.length > length) {
    // Finding the last space within the 156 character limit
    const trimEnd = firstParagraph.lastIndexOf(" ", length - 3);
    firstParagraph =
      trimEnd > -1
        ? firstParagraph.substring(0, trimEnd) + "..."
        : firstParagraph;
  }

  return escapeHTML(renderMarkdown(firstParagraph).replace(/<[^>]*>/g, ""));
}
