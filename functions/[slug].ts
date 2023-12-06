import { Post, posts } from "@/src/lib/posts";
import { renderLayout } from "@/src/ui/layout";
import { registerCSS } from "@/src/lib/styles";
import { marked } from "marked";

function parseMarkdown(content: string) {
  return marked.parse(content.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, ""));
}

registerCSS(
  "post-page",
  /* CSS */ `
    .post-page {
      & .post-title {
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 2rem;
        margin-top: 32px;
        margin-bottom: 16px;
        color: rgb(243 244 246);
      }

      & .post-date {
        color: rgb(156 163 175); 
        margin: 16px 0;
      }

      & .markdown-body {
        color: rgb(209 213 219);;
      }
    }`
);

const renderPostPage = (post: Post, content: string) =>
  renderLayout(
    /* HTML */ `
      <div class="post-page">
        <h1 class="post-title">${post.title}</h1>
        <div class="post-date">${post.date}</div>
        <div class="markdown-body">${parseMarkdown(content)}</div>
      </div>
    `,
    { title: `${post.title} - Aakash N S` }
  );

export async function onRequestGet(context: EventContext<unknown, string, unknown>) {
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
    },
  });
}
