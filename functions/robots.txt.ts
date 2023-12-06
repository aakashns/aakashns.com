const robots = `
User-agent: *
Disallow:
`;

export async function onRequestGet() {
  return new Response(robots, {
    headers: {
      "content-type": "text/plain;charset=UTF-8",
      "Cache-Control": "stale-while-revalidate=60",
    },
  });
}
