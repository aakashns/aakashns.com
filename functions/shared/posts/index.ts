import softwareContent from "./software.md.txt";
import deleteContent from "./delete.md.txt";
import subscriptionsContent from "./subscriptions.md.txt";
import genaiContent from "./genai.md.txt";
import webdevContent from "./webdev.md.txt";
import slackContent from "./slack.md.txt";
import workContent from "./work.md.txt";
import typescriptContent from "./typescript.md.txt";
import entrepreneurshipContent from "./entrepreneurship.md.txt";

export interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: "entrepreneurship",
    title: "Highs and Lows of Entrepreneurship",
    date: "March 15, 2024",
    content: entrepreneurshipContent,
  },
  {
    slug: "typescript",
    title: "Moving Away from TypeScript",
    date: "February 27, 2024",
    content: typescriptContent,
  },
  {
    slug: "software",
    title: "The Business of Software",
    date: "February 9, 2024",
    content: softwareContent,
  },
  {
    slug: "delete",
    title: "Deleting 50,000 Lines of Code in 3 Days",
    date: "December 13, 2023",
    content: deleteContent,
  },
  {
    slug: "subscriptions",
    title: "The Trouble with Subscriptions",
    date: "December 7, 2023",
    content: subscriptionsContent,
  },
  {
    slug: "genai",
    title: "What's up with Generative AI?",
    date: "November 28, 2023",
    content: genaiContent,
  },
  {
    slug: "webdev",
    title: "Modern Web Development is Too Complex",
    date: "April 28, 2023",
    content: webdevContent,
  },
  {
    slug: "slack",
    title: "Slack Power User Guide",
    date: "December 2, 2022",
    content: slackContent,
  },
  {
    slug: "work",
    title: "Leaving Work at Work",
    date: "February 13, 2022",
    content: workContent,
  },
];
