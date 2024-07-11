import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";
import { renderToReadableStream } from "react-dom/server.browser";
import { swagger } from "@elysiajs/swagger";
import { createElement } from "react";
import { Home } from "./pages/Home";
import { ClientPortal } from "./pages/ClientPortal";
import { build } from "./build";

const host = Bun.env.HOST || "localhost";
const port = Bun.env.PORT || 3000;

const buildTimeStamp = await build();

const doYouLikeSwaggerUIBetter = false;

async function handleRequest(pageComponent: any, index: string) {
	const page = createElement(pageComponent);
	const stream = await renderToReadableStream(page, {
		bootstrapScripts: [index]
	});

	return new Response(stream, {
		headers: { "Content-Type": "text/html" }
	});
}

export const server = new Elysia()

	.use(
		staticPlugin({
			assets: "./build",
			prefix: ""
		})
	)
	.use(
		swagger({
			provider: doYouLikeSwaggerUIBetter ? "swagger-ui" : "scalar"
		})
	)
	.get("/", () =>
		handleRequest(Home, `indexes/HomeIndex.${buildTimeStamp}.js`)
	)
	.get("/portal", () =>
		handleRequest(
			ClientPortal,
			`indexes/ClientPortalIndex.${buildTimeStamp}.js`
		)
	)

	.listen(port, () => {
		console.log(`server started on http://${host}:${port}`);
	})
	.on("error", (error) => {
		console.error(`Server error: ${error.code}`);
	});
