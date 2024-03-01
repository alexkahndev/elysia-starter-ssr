import { Sidebar } from "../components/utils/Sidebar"
import { SearchBar } from "../components/utils/SearchBar"
import { Timeline } from "../components/content/Timeline"

const History = () => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Awesome.Social</title>
        <meta name="description" content="Bun, Elysia & React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/styles/History.css" />
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
          <h1>History</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <Timeline />
        </main>
      </body>
    </html>
  )
}

export default History