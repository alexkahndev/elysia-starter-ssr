import Navbar from "../components/utils/Navbar";
import Demo from "../components/content/Demo";
import Banner from "../components/content/Banner";
import Footer from "../components/utils/Footer";
import Testimonials from "../components/content/Testimonials";

const Home = () => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Awesome.Social</title>
        <meta name="description" content="Bun, Elysia & React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/styles/Home.css" />
        <link rel="icon" href="/assets/favicon.ico" />
      </head>
      <body>
        <header>
          <Navbar />
        </header>
        <main>
          <Demo />
          <Banner />
          <Testimonials />
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
};

export default Home;
