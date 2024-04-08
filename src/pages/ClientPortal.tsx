import { Sidebar } from "../components/utils/Sidebar";
import { SearchBar } from "../components/utils/SearchBar";
import { useEffect, useState } from "react";
import FAQ from "./subpages/FAQ";
import History from "./subpages/History";
import Services from "./subpages/Services";

const ClientPortal = () => {
  const [page, setPage] = useState<string>("");

  const handlePageChange = (newPage: string) => {
    setPage(newPage);
    sessionStorage.setItem("currentPage", newPage);
  };

  useEffect(() => {
    const storedPage = sessionStorage.getItem("currentPage");
    if (storedPage) {
      setPage(storedPage);
      document.getElementById(storedPage || "")?.classList.add("Active");
    } else {
      setPage("services");
      document.getElementById("services")?.classList.add("Active");
    }
  }, [page]);

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Awesome.Social</title>
        <meta name="description" content="Bun, Elysia & React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/styles/ClientPortal.css" />
        <link rel="icon" href="/assets/favicon.ico" />
      </head>
      <body>
        <Sidebar onPageChange={handlePageChange} />
        <header>
          <SearchBar />
        </header>
        {page === "services" && <Services />}
        {page === "history" && <History />}
        {page === "dashboard" && <h1>Dashboard</h1>}
        {page === "print-report" && <h1>Print Report</h1>}
        {page === "faqs" && <FAQ />}
        {page === "support" && <h1>Support</h1>}
        {page === "settings" && <h1>Settings</h1>}
      </body>
    </html>
  );
};

export default ClientPortal;
