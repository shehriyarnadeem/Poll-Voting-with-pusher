const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb://localhost:27017/Testpuser/readPreference=primary&appname=MongoDB%20Compass&ssl=false",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB conncected"))
  .catch((err) => console.log(err));
