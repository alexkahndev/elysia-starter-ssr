/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { hydrateRoot } from "react-dom/client";
import App from "./pages/App.js";

hydrateRoot(document, <App />);
