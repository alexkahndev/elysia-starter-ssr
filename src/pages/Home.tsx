import { useState } from "react";
import { Navbar } from "../components/utils/Navbar";

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Bun, Elysia & React</title>
        <meta name="description" content="Bun, Elysia & React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Navbar />
        <h1>Counter {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <div>
          <h2>This is the home page</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quod voluptatum, quae, voluptatem, quos voluptate quia quibusdam
            quas voluptatibus quidem doloribus. Quisquam quod voluptatum, quae,
            voluptatem, quos voluptate quia quibusdam quas voluptatibus quidem
            doloribus.
          </p>
        </div>
      </body>
    </html>
  );
};

export default Home;
