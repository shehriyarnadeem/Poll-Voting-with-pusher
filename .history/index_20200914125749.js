const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

app.use(express.Router());

app.listen(8080, () => {
  console.log("Server running on 8080");
});
