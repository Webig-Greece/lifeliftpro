require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/database");
const indexRoutes = require("./src/routes");

const app = express();
const port = 3000;

// Function to start the server
const startServer = () => {
  app.listen(port, () => {
    console.log(`LifeLiftPro backend running at http://localhost:${port}`);
  });
};

// Connect to MongoDB Atlas if not in test environment
if (process.env.NODE_ENV !== "test") {
  connectDB(process.env.MONGODB_URI);
  startServer();
}

// Middleware
app.use(express.json());

// Routes
app.use("/", indexRoutes);

module.exports = app;
