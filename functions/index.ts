import { posts } from "@/src/lib/posts";
import { renderLayout } from "@/src/ui/layout";
import { renderMarkdown } from "@/src/ui/markdown";
import { renderPageHeading } from "@/src/ui/pageHeading";
import { renderPostItem } from "@/src/ui/postItem";

const bio = `
I'm the founder and CEO of [Jovian](https://jovian.com), a learning platform for 
software development and data science. I've previously worked as a software 
engineer at [Twitter](https://twitter.com) and I hold a bachelor's degree in
computer science from [IIT Bombay](https://www.cse.iitb.ac.in). Online courses 
I've created have garnered over 10 million views on 
[YouTube](https://youtube.com/@jovianhq).`;

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
