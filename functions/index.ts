import { withLayout } from "@/src/lib/withLayout";

const homepage = withLayout(/* HTML */ `
<div class="max-w-2xl mb-40 mx-4 mt-8 lg:mx-auto">
    <nav>
      <a class="mr-2 py-1 text-gray-100 hover:text-gray-200" href="/">Home</a>
      <a class="py-1 text-gray-100 hover:text-gray-200" href="/about">About</a>
    </nav>

    <h1 class="font-medium text-2xl my-8">👋 Hi, I'm Aakash!</h1>
  
      <p>  
      I'm the founder and CEO of <a href="https://jovian.com>Jovian</a>, a learning platform for software development and data science. 
      I've previously worked as a Software Engineer at Twitter and I hold a bachelor's degree in Computer Science from
      the Indian Institute of Technology Bombay. Online courses I've taught have over 10 million 
      views on <a href="https://youtube.com/@jovianhq">YouTube</a>.
    </p>
  </div>
`);

export async function onRequestGet(context: EventContext<unknown, string, unknown>) {
  return new Response(homepage, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  });
}
