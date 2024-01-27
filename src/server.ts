import { Elysia } from "elysia";
import { staticPlugin } from '@elysiajs/static'
import { renderToReadableStream } from 'react-dom/server'
import { swagger } from '@elysiajs/swagger'
import { createElement } from "react";
import App from './react/App'


const port = Bun.env.PORT || 3000;

// bundle client side react-code each time the server starts
await Bun.build({
  entrypoints: ['./src/react/main.tsx'],
  outdir: './public',
});

const server = new Elysia()
    .use(staticPlugin({
      assets: './public',
      prefix: ''
    }  ))
    /*
    .use(swagger(
      {
        path: '/swagger',
        excludeStaticFile: false,
      }
    ))
    */
    .get('/', async () => {
      try {
        // create our react App component
        const app = createElement(App)
  
        // render the app component to a readable stream
        const stream = await renderToReadableStream(app, {
          bootstrapScripts: ['main.js']
        })
  
        // output the stream as the response
        return new Response(stream, {
          headers: { 'Content-Type': 'text/html' }
        })
      } catch (error) {
        console.error(`Error occurred during server-side rendering: ${error}`);
        throw error; // re-throw the error after logging
      }
    })
    .listen(3000, () => {
      console.log(`server started on port ${port}`)
    })
    .on('error', (error) => {
      console.error(`Server error: ${error.code}`);
    });
