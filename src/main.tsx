import { createRoot } from "react-dom/client";
import { App } from "./App";

import "./index.css";
import { StrictMode } from "react";

const element = document.getElementById("root")!;

const root = createRoot(element);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
