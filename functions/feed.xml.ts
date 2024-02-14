import { posts } from "@/src/posts";

export function onRequestGet(context: EventContext<unknown, string, unknown>) {
  const baseUrl = new URL(context.request.url).origin;
  const items = posts
    .map(
      (post) => `
    <item>
      <title>${post.title}</title>
      <link>${baseUrl}/${post.slug}</link>
      <guid>${baseUrl}/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.content}]]></description>
    </item>
  `
    )
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>Aakash N S</title>
        <link>${baseUrl}</link>
        <description>I write, code, and teach</description>
        <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
        ${items}
      </channel>
    </rss>
  `;

  return new Response(rssFeed, {
    headers: {
      "content-type": "application/rss+xml;charset=UTF-8",
      "Cache-Control": "stale-while-revalidate=60",
    },
  });
}
