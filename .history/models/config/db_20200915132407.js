const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
  )
  .then(() => console.log("MongoDB conncected"))
  .catch((err) => console.log(err));
