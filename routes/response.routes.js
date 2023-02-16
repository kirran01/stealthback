const express = require("express");
const router = express.Router();
const { createResponse } = require("../controllers/response.controllers");
const { isAuthenticated } = require("../middleware/jwt.middleware");

router.post("/create-response", isAuthenticated, createResponse);

module.exports = router;
