import { marked } from "marked";

const BAD_CHARS = /^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/;

export function renderMarkdown(content: string) {
  const parsed = marked.parse(content.replace(BAD_CHARS, ""));
  return /* HTML */ `<div class="markdown-body">${parsed}</div>`;
}
