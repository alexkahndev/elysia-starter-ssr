/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { hydrateRoot } from "react-dom/client";
import Contact from "../pages/Contact";

hydrateRoot(document, <Contact />);
