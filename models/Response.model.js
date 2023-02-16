const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const responseSchema = new Schema({
  day: {
    type: Date,
    required: false,
  },
  response: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const Response = mongoose.model("Response", responseSchema);
module.exports = Response;
