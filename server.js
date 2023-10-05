const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, LifeLiftPro!");
});

app.listen(port, () => {
  console.log(`LifeLiftPro backend running at http://localhost:${port}`);
});