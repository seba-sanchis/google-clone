import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { ResultContextProvider } from "./contexts/ResultContextProvider";
import "./global.css";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);
root.render(
  <ResultContextProvider>
    <Router>
      <App />
    </Router>
  </ResultContextProvider>
);
