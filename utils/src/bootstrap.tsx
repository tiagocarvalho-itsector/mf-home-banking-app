import React from "react";
import { createRoot } from "react-dom/client";
import FallbackRemote from "./components/FallbackRemote";
import Loading from "./components/Loading";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("!container root");
}

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <FallbackRemote name={""} />
    <Loading />
  </React.StrictMode>
);
