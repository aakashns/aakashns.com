import { registerCSS } from "../lib/styles";

registerCSS(
  "page-heading",
  /* CSS */ `
  .page-heading {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2rem;
    margin-top: 32px;
    margin-bottom: 16px;
    color: rgb(243 244 246);
  }
`
);

export const renderPageHeading = (content: string) => /* HTML */ `
  <h1 class="page-heading">${content}</h1>
`;
