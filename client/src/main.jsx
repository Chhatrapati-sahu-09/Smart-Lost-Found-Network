/**
 * React Application Entry Point
 * Mounts the App component to the root DOM element
 * React.StrictMode enabled for development warnings and best practices
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
