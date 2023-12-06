import { registerCSS } from "../lib/styles";

registerCSS(
  "nav",
  /* CSS */ `
    .nav {
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
</nav>`;
