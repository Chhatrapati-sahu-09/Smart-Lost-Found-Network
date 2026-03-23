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
const http = require("http");
const { Server } = require("socket.io");
require("dotenv").config(); // Load environment variables from .env file
const connectDB = require("./config/db"); // MongoDB connection function

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/items", require("./routes/itemRoutes"));
app.use("/api/match", require("./routes/matchRoutes"));
app.use("/api/messages", require("./routes/messageRoutes"));

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("joinRoom", (roomId) => {
    socket.join(roomId);
  });

  socket.on("sendMessage", ({ roomId, message, sender }) => {
    io.to(roomId).emit("receiveMessage", {
      text: message,
      sender,
      createdAt: new Date().toISOString(),
    });
  });
});

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
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
