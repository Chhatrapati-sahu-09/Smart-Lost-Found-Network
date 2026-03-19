/**
 * Express Server Configuration
 * Main entry point for the Smart Lost & Found Network API
 *
 * Features:
 * - MongoDB connection with Mongoose
 * - CORS enabled for frontend requests
 * - JWT-based authentication
 * - Express middleware for JSON parsing
 * - Protected routes with authMiddleware
 */

const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Load environment variables from .env file
const connectDB = require("./config/db"); // MongoDB connection function

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/items", require("./routes/itemRoutes"));

// Basic route
app.get("/", (req, res) => {
  res.send("API Running");
});

// Protected route example
const authMiddleware = require("./middleware/authMiddleware");
app.get("/api/test", authMiddleware, (req, res) => {
  res.send("Protected route accessed");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
