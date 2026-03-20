const server = Bun.serve({
  port: 3000,
  routes: {
    "/": () => new Response("Bun!"),
    "/favicon.ico": () =>
      new Response(Bun.file("favicon.svg"), {
        headers: { "Content-Type": "image/svg+xml" },
      }),
  },
});

console.log(`Listening on ${server.url}`);
