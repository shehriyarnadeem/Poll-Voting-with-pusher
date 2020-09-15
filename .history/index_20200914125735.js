const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.Router());

app.listen(8080, () => {
  console.log("Server running on 8080");
});
