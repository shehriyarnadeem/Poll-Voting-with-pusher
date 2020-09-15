const mongoos = require("mongoose");

const Schema = mongoose.Schema;

const VoteSchema = new Schema({
  os: {
    type: String,
    required: true,
  },
  points: {
    type: String,
    required: true,
  },
});
