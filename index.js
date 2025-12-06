const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World dari Render! 🚀");
});

app.listen(port, () => {
  console.log(`App berjalan di port ${port}`);
});
