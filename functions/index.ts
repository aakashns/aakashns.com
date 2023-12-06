import { Post, posts } from "@/src/lib/posts";
import { renderLayout } from "@/src/ui/layout";

const renderPostMetadata = ({ slug, title, date }: Post) => /* HTML */ `
  <div class="mt-8">
    <h2 class="text-xl">
      <a href="/posts/${slug}" class="text-gray-100 hover:text-gray-300">${title}</a>
    </h2>
    <div class="text-gray-400">${date}</div>
  </div>
`;

const homePage = renderLayout(
  /* HTML */ `
    <h1 class="font-medium text-2xl mt-8 mb-4 text-gray-100">Aakash N S</h1>

    <p class="text-gray-200">
      I'm the founder and CEO of
      <a href="https://jovian.com" class="underline hover:text-gray-300" target="_blank">Jovian</a>, a learning platform
      for software development and data science. I've previously worked as a Software Engineer at
      <a href="https://twitter.com" class="underline hover:text-gray-300" target="_blank">Twitter</a> and I hold a
      bachelor's degree in Computer Science from the Indian Institute of Technology Bombay. Online courses I've taught
      have garnered over 10 million views on
      <a href="https://youtube.com/@jovianhq" class="underline hover:text-gray-300" target="_blank">YouTube</a>.
    </p>

    ${posts.map((post) => renderPostMetadata(post)).join("\n")}
  `,
  { title: "Aakash N S " }
);

export async function onRequestGet() {
  return new Response(homePage, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  });
}
