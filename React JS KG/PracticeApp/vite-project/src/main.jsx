// src/main.jsx (or src/index.js)

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx"; // Adjust path if needed

// *** THESE TWO LINES ARE CRUCIAL ***
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
