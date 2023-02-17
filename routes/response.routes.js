const { Router } = require("express");
const express = require("express");
const router = express.Router();
const {
  createResponse,
  getResponses,
  deleteResponse,
} = require("../controllers/response.controllers");
const { isAuthenticated } = require("../middleware/jwt.middleware");

router.post("/create-response", isAuthenticated, createResponse);
router.get("/get-responses", isAuthenticated, getResponses);
router.delete("/delete-response/:id", isAuthenticated, deleteResponse);

module.exports = router;
