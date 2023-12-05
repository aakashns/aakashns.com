export const withLayout = (children: string) =>
  /* HTML */
  `<!DOCTYPE html>
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <title>Aakash N S</title>
      </head>
      <body class="bg-black text-white">
        ${children}
      </body>
    </html>`;
