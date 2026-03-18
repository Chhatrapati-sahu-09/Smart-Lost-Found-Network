/**
 * Main App Component
 * Sets up routing for the entire application
 * Routes: / (Login) and /register (Register)
 * Uses React Router v6 with BrowserRouter for client-side navigation
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
