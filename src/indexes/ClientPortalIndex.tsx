/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { hydrateRoot } from "react-dom/client";
import { ClientPortal } from "../pages/ClientPortal";

hydrateRoot(document, <ClientPortal />);
