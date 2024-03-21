import { Footer } from '../components/utils/Footer';
import { Navbar } from '../components/utils/Navbar';
import { AccordionList } from '../components/content/AccordionList';

const FAQMain = () => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Awesome.Social</title>
        <meta name="description" content="Bun, Elysia & React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/styles/FAQMain.css" />
        <link rel="icon" href="/assets/favicon.ico" />
      </head>
      <body>
        <Navbar />
        <main>
          <AccordionList />
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default FAQMain;
