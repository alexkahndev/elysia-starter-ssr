import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";
import { renderToReadableStream } from "react-dom/server";
import { swagger } from "@elysiajs/swagger";
import { ReactNode, createElement } from "react";
import Home from "./react/pages/Home";
import About from "./react/pages/About";

const port = Bun.env.PORT || 3000;

await Bun.build({
  entrypoints: ["./src/react/index.tsx"],
  outdir: "./public",
});

const doYouLikeSwaggerUIBetter = false;

export const server = new Elysia()
  .use(
    staticPlugin({
      assets: "./public",
      prefix: "",
    }),
  )
  .use(
    swagger({
      provider: doYouLikeSwaggerUIBetter ? "swagger-ui" : "scalar",
    }),
  )
  .get("/", async () => {
    const homePage = createElement(Home);
    const stream = await renderToReadableStream(homePage, {
      bootstrapScripts: ["/index.js"],
    });
    const reader = stream.getReader();
    const htmlStream = new ReadableStream({
      async start(controller) {
        controller.enqueue("<!DOCTYPE html><html><head></head><body>");
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          controller.enqueue(value);
        }
        controller.enqueue("</body></html>");
        controller.close();
      },
    });
    return new Response(htmlStream, {
      headers: { "Content-Type": "text/html" },
    });
  })
  .get("/about", async () => {
    const aboutPage = createElement(About);
    const stream = await renderToReadableStream(aboutPage, {
      bootstrapScripts: ["/index.js"],
    });
    const reader = stream.getReader();
    const htmlStream = new ReadableStream({
      async start(controller) {
        controller.enqueue("<!DOCTYPE html><html><head></head><body>");
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          controller.enqueue(value);
        }
        controller.enqueue("</body></html>");
        controller.close();
      },
    });
    return new Response(htmlStream, {
      headers: { "Content-Type": "text/html" },
    });
  })
  .listen(3000, () => {
    console.log(`server started on port ${port}`);
  })
  .on("error", (error) => {
    console.error(`Server error: ${error.code}`);
  });
