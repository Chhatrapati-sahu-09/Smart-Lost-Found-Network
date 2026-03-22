/**
 * React Application Entry Point
 * Mounts the App component to the root DOM element
 * React.StrictMode enabled for development warnings and best practices
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Toaster position="top-right" />
  </React.StrictMode>,
);
