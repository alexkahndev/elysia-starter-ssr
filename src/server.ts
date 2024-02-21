import { Elysia, t } from "elysia";
import { staticPlugin } from "@elysiajs/static";
import { renderToReadableStream } from "react-dom/server";
import { swagger } from "@elysiajs/swagger";
import { createElement } from "react";
import { createUser, loginUser } from "./handlers/UserHandler";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

const host = Bun.env.HOST || "localhost";
const port = Bun.env.PORT || 3000;

await Bun.build({
  entrypoints: [
    "./src/indexes/HomeIndex.tsx",
    "./src/indexes/AboutIndex.tsx",
    "./src/indexes/ServicesIndex.tsx",
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
  .post("/create-user", async ({ body }) => createUser(body), {
    body: t.Object({
      firstName: t.String(),
      lastName: t.String(),
      email: t.String(),
      phone: t.String(),
      password: t.String(),
      business_type: t.String(),
      industry_type: t.String(),
      business_name: t.String(),
      revenue: t.String(),
    })
    
  })
  .get("/login", () => loginUser())
  .listen(3000, () => {
    console.log(`server started on http://${host}:${port}`);
  })
  .on("error", (error) => {
    console.error(`Server error: ${error.code}`);
  });
