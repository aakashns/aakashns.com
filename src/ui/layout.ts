import { generateCSS, registerCSS } from "../lib/styles";
import { nav } from "./nav";

registerCSS(
  "body",
  /* CSS */ `
    body {
      background-color: #000;
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    }
  `
);

registerCSS(
  "container",
  /* CSS */ `
    .container {
      max-width: 672px;
      margin: 32px 16px 160px 16px;
    }

    @media screen and (min-width: 768px) {
      .container {
        margin-left: auto;
        margin-right: auto;
      }
      
    }
  `
);

export const renderLayout = (children: string, options: { title: string }) =>
  /* HTML */
  `<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>${options.title}</title>
        <link rel="stylesheet" href="/styles/normalize.css" />
        <link rel="stylesheet" href="/styles/markdown.css" />
        <style type="text/css">
          ${generateCSS()}
        </style>
      </head>
      <body>
        <div class="container">${nav} ${children}</div>
      </body>
    </html>`;
