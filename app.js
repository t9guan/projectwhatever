const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("hello world"); // this will most likely change
});

app.listen(PORT, () => {
  console.log("server is runnning at", PORT);
});
