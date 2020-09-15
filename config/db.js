const mongoose = require("mongoose");
mongoose
  .connect("'mongodb://localhost/Testpuser'", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB conncected"))
  .catch((err) => console.log(err));
