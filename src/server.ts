import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";
import { renderToReadableStream } from "react-dom/server";
import { swagger } from "@elysiajs/swagger";
import { PrismaClient } from "@prisma/client";
import { createElement } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

const host = Bun.env.HOST || "localhost";
const port = Bun.env.PORT || 3000;

await Bun.build({
  entrypoints: [
    "./src/indexes/HomeIndex.tsx",
    "./src/indexes/AboutIndex.tsx",
    "./src/indexes/ServicesIndex.tsx",
    "./src/indexes/ContactIndex.tsx"
  ],
  outdir: "./build",
  minify: true,
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

const prisma = new PrismaClient();

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
  .get("/services", () => handleRequest(Services, "/ServicesIndex.js"))
  .get("/contact", () => handleRequest(Contact, "/ContactIndex.js"))
  .listen(3000, () => {
    console.log(`server started on http://${host}:${port}`);
  })
  .on("error", (error) => {
    console.error(`Server error: ${error.code}`);
  });
