import { Navbar } from "../components/utils/Navbar";
import { Footer } from "../components/utils/Footer";
import { useState } from "react";

export const ClientPortal = () => {
  const [count, setCount] = useState(0);
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Awesome.Social</title>
        <meta name="description" content="Bun, Elysia & React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/styles/About.css" />
        <link rel="icon" href="/assets/favicon.ico" />
      </head>
      <body>
        <Navbar />
        <main>
          <h1>Client Portal</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            malesuada, eros nec cursus tincidunt, mi nunc ultricies erat, at
            lacinia elit ex nec turpis. Aliquam erat volutpat. Nulla facilisi.
            Nullam sit amet turpis nec nunc tincidunt lacinia. Proin euismod
            risus eu enim iaculis, vel ultricies nunc varius. Nullam auctor
            tincidunt sapien, nec ultricies erat. Nullam nec risus auctor,
            efficitur nunc in, tincidunt lorem. Donec sit amet magna nec nunc
            tincidunt ultricies. Nulla facilisi. Sed id nunc auctor, ultricies
            purus nec, vehicula ex. Nullam nec nunc et nunc tincidunt interdum
            sit amet nec eros. Sed nec magna nec eros tincidunt pharetra. Nullam
            nec dolor ut nisi vehicula ultricies. Nulla facilisi. Nullam
            tincidunt, ex nec luctus vehicula, nunc nunc tincidunt metus, eget
            ultricies nunc eros nec libero. Nullam nec odio nec nunc tincidunt
            ultricies. Nulla facilisi. Nullam nec nunc tincidunt, ultricies
            turpis nec, vehicula nunc. Nulla facilisi. Nullam nec nunc
            tincidunt, ultricies turpis nec, vehicula nunc. Nulla facilisi.
            Nullam nec nunc tincidunt, ultricies turpis nec, vehicula nunc.
            Nulla facilisi.
          </p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
          <p>Count: {count}</p>
        </main>
        <Footer />
      </body>
    </html>
  );
};
