import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";
import { renderToReadableStream } from "react-dom/server";
import { swagger } from "@elysiajs/swagger";
import { createElement } from "react";
import Home from "./react/pages/Home";
import About from "./react/pages/About";

const port = Bun.env.PORT || 3000;

await Bun.build({
  entrypoints: [
    "./src/react/indexes/HomeIndex.tsx",
    "./src/react/indexes/AboutIndex.tsx",
  ],
  outdir: "./build",
});

const doYouLikeSwaggerUIBetter = false;

async function handleRequest(
  pageComponent: React.ComponentType,
  index: string,
) {
  const page = createElement(pageComponent);
  const stream = await renderToReadableStream(page, {
    bootstrapScripts: [index],
  });

  return new Response(stream, {
    headers: { "Content-Type": "text/html" },
  });
}

export const server = new Elysia()
  .use(
    staticPlugin({
      assets: "./build",
      prefix: "",
    }),
  )
  .use(
    swagger({
      provider: doYouLikeSwaggerUIBetter ? "swagger-ui" : "scalar",
    }),
  )
  .get("/", () => handleRequest(Home, "/HomeIndex.js"))
  .get("/about", () => handleRequest(About, "/AboutIndex.js"))
  .listen(3000, () => {
    console.log(`server started on port ${port}`);
  })
  .on("error", (error) => {
    console.error(`Server error: ${error.code}`);
  });
