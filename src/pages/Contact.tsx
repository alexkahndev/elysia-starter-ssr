import Navbar from "../components/utils/Navbar";
import Footer from "../components/utils/Footer";
import { useState } from "react";

const Contact = () => {
  const [count, setCount] = useState(0);
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Awesome.Social</title>
        <meta name="description" content="Bun, Elysia & React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/styles/Contact.css" />
        <link rel="icon" href="/assets/favicon.ico" />
      </head>
      <body>
        <header></header>
        <main></main>
        <footer></footer>
      </body>
    </html>
  );
};

export default Contact;
