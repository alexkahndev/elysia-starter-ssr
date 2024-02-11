import Sidebar from "../components/utils/Sidebar";
import useComponentSize from "../hooks/useComponentSize";
import { useEffect, useRef, useState } from "react";

const Services = () => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Awesome.Social</title>
        <meta name="description" content="Bun, Elysia & React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/styles/Services.css" />
        <link rel="icon" href="/assets/favicon.ico" />
      </head>
      <body style={{marginLeft: 72}}>
        <Sidebar/>
        <h1>Serivces</h1>
      </body>
    </html>
  );
};

export default Services;
