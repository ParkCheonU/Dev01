const express = require("express");
const app = express();

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/input.html");
});

app.listen(8080);
