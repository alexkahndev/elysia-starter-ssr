import Sidebar from "../components/utils/Sidebar";
import { SearchBar } from "../components/utils/SearchBar";
import { ServiceCards } from "../components/content/ServiceCards";

export const Services = () => {
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
      <body style={{ marginLeft: 72 }}>
        <aside>
          <Sidebar />
        </aside>
        <header>
          <SearchBar />
        </header>
        <main>
          <ServiceCards />
        </main>
      </body>
    </html>
  );
};
