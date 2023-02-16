const express = require("express");
const {
  createTicket,
  deleteTicket,
  editTicket,
  getTickets,
  getTicketById,
} = require("../controllers/ticket.controllers");
const { isAuthenticated } = require("../middleware/jwt.middleware");
const router = express.Router();

router.get("/get-ticket-by-id/:id", isAuthenticated, getTicketById);
router.get("/get-tickets", isAuthenticated, getTickets);
router.post("/create-ticket", createTicket);
router.delete("/delete-ticket/:id", isAuthenticated, deleteTicket);
router.put("/edit-ticket/:id", isAuthenticated, editTicket);

module.exports = router;
