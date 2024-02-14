import { Post, posts } from "@/src/posts";
import { renderLayout } from "@/src/ui/layout";
import { registerCSS } from "@/src/lib/styles";
import { renderMarkdown } from "@/src/ui/markdown";
import { renderPageHeading } from "@/src/ui/pageHeading";
import { makeMetaDescription } from "@/src/lib";

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

const renderPostPage = (post: Post) =>
  renderLayout(
    /* HTML */ `
      <div class="post-page">
        ${renderPageHeading(post.title)}
        <div class="post-date">${post.date}</div>
        ${renderMarkdown(post.content)}
      </div>
    `,
    {
      title: `${post.title} - Aakash N S`,
      description: makeMetaDescription(post.content),
    }
  );

export async function onRequestGet(
  context: EventContext<unknown, string, unknown>
) {
  const slug = context.params.slug;

  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    return new Response("not found");
  }

  return new Response(renderPostPage(post), {
    headers: {
      "content-type": "text/html;charset=UTF-8",
      "Cache-Control": "stale-while-revalidate=60",
    },
  });
}
