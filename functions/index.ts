import { posts } from "shared/posts";
import { renderLayout } from "shared/ui/layout";
import { renderMarkdown } from "shared/ui/markdown";
import { renderPageHeading } from "shared/ui/pageHeading";
import { renderPostItem } from "shared/ui/postItem";

const bio = `I write, code, and teach.`;

const homePage = renderLayout(
  /* HTML */ `
    ${renderPageHeading("Aakash N S")}
    <div>${renderMarkdown(bio)}</div>
    <div>${posts.map((post) => renderPostItem(post)).join("\n")}</div>
  `,
  { title: "Aakash N S", description: "I write, code, and teach." }
);

export async function onRequestGet() {
  return new Response(homePage, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
      "Cache-Control": "stale-while-revalidate=60",
    },
  });
}
