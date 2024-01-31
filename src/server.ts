import { Elysia, t } from "elysia";
import { staticPlugin } from "@elysiajs/static";
import { renderToReadableStream } from "react-dom/server";
import { swagger } from "@elysiajs/swagger";
import { PrismaClient } from '@prisma/client'
import { createElement } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import { createUser } from "./handlers/UserHandler";

const port = Bun.env.PORT || 3000;

await Bun.build({
  entrypoints: [
    "./src/indexes/HomeIndex.tsx",
    "./src/indexes/AboutIndex.tsx",
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
  .get("/api/users", async () => {
    const users = await prisma.users.findMany();
    return new Response(JSON.stringify(users), {
      headers: { "Content-Type": "application/json" },
    });
  })
  .post("/api/create-user", async ({ body }) => createUser(body), {
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
  .listen(3000, () => {
    console.log(`server started on port ${port}`);
  })
  .on("error", (error) => {
    console.error(`Server error: ${error.code}`);
  });

