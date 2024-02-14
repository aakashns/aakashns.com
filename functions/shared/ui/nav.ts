import { registerCSS } from "../lib/styles";

registerCSS(
  "nav",
  /* CSS */ `
    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & .nav-link {
        color: rgb(156 163 175);
        text-decoration: none;
      }

      & .nav-link:hover {
        color: rgb(209 213 219);
      }
    }
`
);

export const nav = /* HTML */ ` <nav class="nav">
  <a class="nav-link" href="/">Home</a>
  <a class="nav-link" href="/feed.xml" target="_blank" title="RSS Feed">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-rss"
    >
      <path d="M4 11a9 9 0 0 1 9 9"></path>
      <path d="M4 4a16 16 0 0 1 16 16"></path>
      <circle cx="5" cy="19" r="1"></circle>
    </svg>
  </a>
</nav>`;
