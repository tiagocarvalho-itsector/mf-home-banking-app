import React from "react";
import { createRoot } from "react-dom/client";
import FallbackRemote from "./components/FallbackRemote";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("!container root");
}

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <FallbackRemote name={""} />
  </React.StrictMode>
);
