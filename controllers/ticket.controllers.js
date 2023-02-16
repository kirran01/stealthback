const Ticket = require("../models/Ticket.model");

const createTicket = async (req, res) => {
  const { problem, status, email } = req.body;
  try {
    const createdTicket = await Ticket.create({
      problem,
      status,
      email,
      day: Date.now(),
    });
    if (!problem || !status || !email) {
      return res.status(400).json({
        message: "field(s) are missing",
      });
    } else if (createdTicket) {
      res.send(createdTicket);
    }
  } catch (err) {
    res.send(err);
  }
};
const deleteTicket = async (req, res) => {
  try {
    const deletedTicket = await Ticket.findByIdAndDelete(req.params.id);
    if (deletedTicket) {
      res.send(deletedTicket);
    }
  } catch (err) {
    res.send(err);
  }
};
const editTicket = async (req, res) => {
  const { status } = req.body;
  try {
    const editedTicket = await Ticket.findByIdAndUpdate(
      req.params.id,
      {
        status,
      },
      { new: true }
    ).populate("status");
    if (editedTicket) {
      res.send(editedTicket);
    }
  } catch (err) {
    res.send(err);
  }
};
const getTickets = async (req, res) => {
  try {
    const allTickets = await Ticket.find();
    if (allTickets) {
      res.send(allTickets);
    }
  } catch (err) {
    res.send(err);
  }
};
const getTicketById = async (req, res) => {
  try {
    const foundTicket = await Ticket.findById(req.params.id);
    if (foundTicket) {
      res.send(foundTicket);
    }
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  createTicket,
  deleteTicket,
  editTicket,
  editTicket,
  getTickets,
  getTicketById,
};
