const express = require("express");
const app = express();
const port = 5000;
const path = require("path");

app.use(express.static("js"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "html", "index.html"));
});

app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "html", "admin.html"));
});

app.get("/shop", (req, res) => {
  res.sendFile(path.join(__dirname, "html", "shop.html"));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
