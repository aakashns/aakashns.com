import { Post } from "../lib/posts";
import { registerCSS } from "../lib/styles";

registerCSS(
  "post-item",
  /* CSS */ `
  .post-item {
    margin-top: 32px;

    & .post-title {
      font-size: 20px;
      font-weight: 400;
      line-height: 28px;
      margin-bottom: 8px;

      & .post-title-link {
        text-decoration: none; 
        color: rgb(243 244 246);
      }

      & .post-title-link:hover {
        color: rgb(209 213 219);
      }
    }

    & .post-date {
      color: rgb(156 163 175);
    }
    
  }
`
);

export const renderPostItem = ({ slug, title, date }: Post) => /* HTML */ `
  <div class="post-item">
    <h2 class="post-title">
      <a class="post-title-link" href="/${slug}">${title}</a>
    </h2>
    <div class="post-date">${date}</div>
  </div>
`;
