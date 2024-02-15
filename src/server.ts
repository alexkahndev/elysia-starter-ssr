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
  
  //API Endpoints for services

  //Retrieve list of all services
 .get("/services", async () => {
    const services = await prisma.services.findMany();
    return new Response(JSON.stringify(services), {
      headers: { 'Content-Type': 'application/json' },
    });
  })

  //Retrieve a service based on its ID
  .get("/services/:id", async (req) => { 
    const id = parseInt(req.params.id);
    const service = await prisma.services.findUnique({
      where: { service_id: id },
    });
    return service
      ? new Response(JSON.stringify(service), {
          headers: { 'Content-Type': 'application/json' },
        })
      : new Response("Service not found", { status: 404 });
  })

  //Retrieves list of categories from stored services
  .get("/services/categories", async () => { 
    const categories = await prisma.services.findMany({
      select: { category: true },
      distinct: ['category'],
    });
    return new Response(JSON.stringify(categories), {
      headers: { 'Content-Type': 'application/json' },
    });
  })

  //Retrieves list of services from a specific category
  .get("/services/category/:category", async (req) => { 
    const category = req.params.category;
    const services = await prisma.services.findMany({
      where: { category: category },
    });
    return new Response(JSON.stringify(services), {
      headers: { 'Content-Type': 'application/json' },
    });
  })

  //Create a new service
  .post("/services", async (req) => {
    let data;
    try {
      data = await req.request.json();    } catch (error) {
      return new Response(JSON.stringify({ error: "Invalid JSON" }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    const createdService = await prisma.services.create({
      data,
    });
    return new Response(JSON.stringify(createdService), {
      headers: { 'Content-Type': 'application/json' },
      status: 201,
    });
  })

  //Update an existing service based on ID
  .patch("/services/:id", async (req) => {
    const id = parseInt(req.params.id);
    try {
        let data;
        if (req.body && typeof req.body === 'object') {
            data = req.body;
        } else {
            const requestData = await req.request.text();
            data = JSON.parse(requestData);
        }
        const updatedService = await prisma.services.update({
            where: { service_id: id },
            data,
        });
        return new Response(JSON.stringify(updatedService), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error("Error processing request:", error);
        return new Response(JSON.stringify({ error: "Error processing request"}), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
  })

  //Delete an entry based on ID
  .delete("/services/:id", async (req) => {
    const id = parseInt(req.params.id);
    try {
        const deletedService = await prisma.services.delete({
            where: { service_id: id },
        });
        return new Response(JSON.stringify({ message: "Service deleted successfully" }), {
            status: 200, 
            headers: { 'Content-Type': 'application/json' },
        });
      } catch (error) {
        console.error("Error deleting service:", error);
        return new Response(JSON.stringify({ error: "Error deleting service" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
          });
      }
  })
  
  .listen(3000, () => {
    console.log(`server started on http://${host}:${port}`);
  })
  .on("error", (error) => {
    console.error(`Server error: ${error.code}`);
  });
