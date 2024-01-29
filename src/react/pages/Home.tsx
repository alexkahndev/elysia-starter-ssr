import React, { useState } from "react";
import { Route } from "react-router-dom";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page.</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>You clicked {count} times</p>
      <a href="/about">About</a>
    </div>
  );
};

export default Home;
