import { Post, posts } from "@/src/lib/posts";
import { renderLayout } from "@/src/ui/layout";
import { registerCSS } from "@/src/lib/styles";
import { renderMarkdown } from "@/src/ui/markdown";
import { renderPageHeading } from "@/src/ui/pageHeading";

registerCSS(
  "post-page",
  /* CSS */ `
    .post-page {
      & .post-date {
        color: rgb(156 163 175); 
        margin: 16px 0;
      }
    }`
);

const renderPostPage = (post: Post, content: string) =>
  renderLayout(
    /* HTML */ `
      <div class="post-page">
        ${renderPageHeading(post.title)}
        <div class="post-date">${post.date}</div>
        ${renderMarkdown(content)}
      </div>
    `,
    { title: `${post.title} - Aakash N S` }
  );

export async function onRequestGet(
  context: EventContext<unknown, string, unknown>
) {
  const slug = context.params.slug;
  const request = context.request;

  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    return new Response("not found");
  }

  const contentUrl = `${new URL(request.url).origin}/posts/${post.slug}.md`;
  const content = await fetch(contentUrl).then((r) => r.text());

  return new Response(renderPostPage(post, content), {
    headers: {
      "content-type": "text/html;charset=UTF-8",
      "Cache-Control": "stale-while-revalidate=60",
    },
  });
}
