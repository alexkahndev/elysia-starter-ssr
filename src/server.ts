import { Elysia, t } from 'elysia';
import { staticPlugin } from '@elysiajs/static';
import { renderToReadableStream } from 'react-dom/server';
import { swagger } from '@elysiajs/swagger';
import { createElement } from 'react';
import { createUser, loginUser } from './handlers/UserHandler';
import {
  getServices,
  getServiceById,
  getCategories,
  getServicesByCategory,
  createService,
  updateService,
  deleteService,
} from './handlers/ServicesHandler';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQMain from './pages/FAQMain';
import ClientPortal from './pages/ClientPortal';

const host = Bun.env.HOST || 'localhost';
const port = Bun.env.PORT || 3000;

await Bun.build({
  entrypoints: [
    './src/indexes/HomeIndex.tsx',
    './src/indexes/AboutIndex.tsx',
    './src/indexes/ContactIndex.tsx',
    './src/indexes/ClientPortalIndex.tsx',
    './src/indexes/FAQMainIndex.tsx',
  ],
  outdir: './build',
  minify: true,
});

const doYouLikeSwaggerUIBetter = false;

async function handleRequest(
  pageComponent: React.ComponentType,
  index: string
) {
  const page = createElement(pageComponent);
  const stream = await renderToReadableStream(page, {
    bootstrapScripts: [index],
  });

  return new Response(stream, {
    headers: { 'Content-Type': 'text/html' },
  });
}

export const server = new Elysia()

  .use(
    staticPlugin({
      assets: './build',
      prefix: '',
    })
  )
  .use(
    swagger({
      provider: doYouLikeSwaggerUIBetter ? 'swagger-ui' : 'scalar',
    })
  )
  .get('/', () => handleRequest(Home, '/HomeIndex.js'))
  .get('/about', () => handleRequest(About, '/AboutIndex.js'))
  .get('/faq', () => handleRequest(FAQMain, '/FAQMainIndex.js'))
  .post('/create-user', ({ body }) => createUser(body), {
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
    }),
  })
  .get('/login', () => loginUser())
  .get('/contact', () => handleRequest(Contact, '/ContactIndex.js'))
  .get('/portal', () => handleRequest(ClientPortal, '/ClientPortalIndex.js'))

  //API Endpoints for services

  //Retrieve list of all services
  .get('/services/list', async () => getServices())

  //Retrieve a service based on its ID
  .get('/services/:id', async (req) => {
    const id = parseInt(req.params.id);
    return getServiceById(id);
  })
  //Retrieves list of categories from stored services
  .get('/services/categories', async () => getCategories())

  //Retrieves list of services from a specific category
  .get('/services/category/:category', async (req) => {
    const category = req.params.category;
    return getServicesByCategory(category);
  })

  //Create a new service
  .post('/services/create', async ({ body }) => createService(body), {
    body: t.Object({
      service_name: t.String(),
      service_description: t.String(),
      price: t.Number(),
      category: t.String(),
    }),
  })

  //Update an existing service based on ID
  /*
  .put("/services/:id", async (req: any, { body }: { body: {service_name: string, service_description: string, price: number, category: string }} ) => {
    const id = parseInt(req.params.id);
    return updateService(id, body);
})*/

  //Delete an entry based on ID
  .delete('/services/:id', async (req) => {
    const id = parseInt(req.params.id);
    return deleteService(id);
  })

  .listen(3000, () => {
    console.log(`server started on http://${host}:${port}`);
  })
  .on('error', (error) => {
    console.error(`Server error: ${error.code}`);
  });
