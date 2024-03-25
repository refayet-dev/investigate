const express = require("express");
const env = require("dotenv");
const path = require("path");
env.config();
const app = express();
app.use(express.json());

app.use(express.static('public'));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

const port = 5000 || process.env.PORT;
app.listen(port);
