const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

//set public folder

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json);

app.use(express.Router());

app.listen(8080, () => {
  console.log("Server running on 8080");
});
