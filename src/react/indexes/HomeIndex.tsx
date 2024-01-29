/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { hydrateRoot } from "react-dom/client";
import Home from "../pages/Home";

hydrateRoot(document, <Home />);
