import { Post, posts } from "shared/posts";
import { renderMarkdown } from "shared/ui/markdown";

export function onRequestGet(context: EventContext<unknown, string, unknown>) {
  const baseUrl = new URL(context.request.url).origin;

  const entryTemplate = (post: Post) => /*xml*/ `
    <entry>
      <title>${post.title}</title>
      <link href="${baseUrl}/${post.slug}" />
      <id>${baseUrl}/${post.slug}</id>
      <updated>${new Date(post.date).toISOString()}</updated>
      <content type="html">
        <![CDATA[${renderMarkdown(post.content)}]]>
      </content>
    </entry>
  `;

  const entries = posts.map(entryTemplate).join("\n");

  const feed = /*xml*/ `<?xml version="1.0" encoding="utf-8"?>
    <feed xmlns="http://www.w3.org/2005/Atom">
    <title>Aakash N S</title>
    <subtitle>I write, code, and teach.</subtitle>
    <link href="${baseUrl}/feed.xml" rel="self"/>
    <link href="${baseUrl}" />
    <updated>${new Date(posts[0].date).toISOString()}</updated>
    <id>${baseUrl}</id>
    <author>
      <name>Aakash N S</name>
    </author>
      ${entries}
    </feed>
`;

  return new Response(feed, {
    headers: {
      "content-type": "text/xml;charset=UTF-8",
      "Cache-Control": "stale-while-revalidate=60",
    },
  });
}
