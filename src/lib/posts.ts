export interface Post {
  slug: string;
  title: string;
  date: string;
}

export const posts: Post[] = [
  {
    slug: "delete",
    title: "Deleting 50,000 Lines of Code in 3 Days",
    date: "December 13, 2023",
  },
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
  {
    slug: "work",
    title: "Leaving Work at Work",
    date: "February 13, 2022",
  },
];
