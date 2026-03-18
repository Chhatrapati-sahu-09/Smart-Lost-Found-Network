const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));

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
