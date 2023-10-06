const express = require("express");
const authRoutes = require("./authRoutes");

const router = express.Router();

router.use("/auth", authRoutes);

router.get("/", (req, res) => {
  res.send("Welcome to LifeLiftPro API");
});

module.exports = router;
