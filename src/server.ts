// Import necessary modules from Elysia, React and other libraries
import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";
import { renderToReadableStream } from "react-dom/server";
import { swagger } from "@elysiajs/swagger";
import { ReactNode, createElement } from "react";
import App from "./react/pages/App";

// Define the port for the server to listen on, defaulting to 3000 if not provided in the environment
const port = Bun.env.PORT || 3000;

// Bundle client-side React code each time the server starts
// This ensures that the latest version of the client-side code is always served
await Bun.build({
  entrypoints: ["./src/react/main.tsx"],
  outdir: "./public",
});

// Flag to toggle between Swagger UI and Scalar (Elysia's default)
// This can be useful if you prefer Swagger's UI for API documentation
const doYouLikeSwaggerUIBetter = false;

async function renderAndRespond(component: ReactNode) {
  try {
    // Render the component to a readable stream
    const stream = await renderToReadableStream(component, {
      bootstrapScripts: ["main.js"],
    });

    // Output the stream as the response
    // The Content-Type header is set to "text/html" to indicate that the response contains HTML
    return new Response(stream, {
      headers: { "Content-Type": "text/html" },
    });
  } catch (error) {
    // Log any errors that occur during server-side rendering
    console.error(`Error occurred during server-side rendering: ${error}`);
    // Re-throw the error after logging
    throw error;
  }
}

// Create a new Elysia server instance
export const server = new Elysia()
  // Use the static plugin to serve static assets from the public directory
  .use(
    staticPlugin({
      assets: "./public",
      prefix: "",
    }),
  )
  // Use the Swagger plugin for API documentation
  // The provider is determined by the doYouLikeSwaggerUIBetter flag
  .use(
    swagger({
      provider: doYouLikeSwaggerUIBetter ? "swagger-ui" : "scalar",
    }),
  )
  // Define a GET route for the root path ("/")
  .get("/", async () => {
    try {
      // Create our React App component
      const app = createElement(App);

      return renderAndRespond(app);

    } catch (error) {
      // Log any errors that occur during server-side rendering
      console.error(`Error occurred during server-side rendering: ${error}`);
      // Re-throw the error after logging
      throw error;
    }
  })
  // Start the server and listen on the specified port
  .listen(3000, () => {
    console.log(`server started on port ${port}`);
  })
  // Log any errors that occur on the server
  .on("error", (error) => {
    console.error(`Server error: ${error.code}`);
  });
