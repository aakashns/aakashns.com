export interface Post {
  slug: string;
  title: string;
  date: string;
}

export const posts: Post[] = [
  {
    slug: "subscriptions",
    title: "The Trouble with Subscriptions",
    date: "December 7, 2023",
  },
  {
    slug: "genai",
    title: "What's up with Generative AI?",
    date: "November 28, 2023",
  },
  {
    slug: "webdev",
    title: "Modern Web Development is Too Complex",
    date: "April 28, 2023",
  },
];
