import { Post, posts } from "shared/posts";
import { renderLayout } from "shared/ui/layout";
import { registerCSS } from "shared/lib/styles";
import { renderMarkdown } from "shared/ui/markdown";
import { renderPageHeading } from "shared/ui/pageHeading";
import { makeMetaDescription } from "shared/lib";

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
