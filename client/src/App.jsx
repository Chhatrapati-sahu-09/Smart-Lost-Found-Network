/**
 * Main App Component
 * Sets up routing for the entire application
 * Routes: / (Login) and /register (Register)
 * Uses React Router v6 with BrowserRouter for client-side navigation
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostItem from "./pages/PostItem";
import Dashboard from "./pages/Dashboard";
import Matches from "./pages/Matches";
import Chat from "./pages/Chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post" element={<PostItem />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/matches/:id" element={<Matches />} />
        <Route path="/chat/:roomId" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
