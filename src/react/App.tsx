import { useState } from "react";
import { Navbar }  from "./components/Navbar";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Awesome Social</title>
        <meta name="description" content="Bun, Elysia & React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Navbar />
        <h1>Counter {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </body>
    </html>
  );
}