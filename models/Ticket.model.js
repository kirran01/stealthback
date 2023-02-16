const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  day: {
    type: Date,
    required: false,
  },
  problem: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
});

const Ticket = mongoose.model("Ticket", ticketSchema);
module.exports = Ticket;
