const express = require("express");
const router = express.Router();
const { signup, login, verify } = require("../controllers/auth.controllers");
const { isAuthenticated } = require("../middleware/jwt.middleware");

router.post("/signup", signup);
router.post("/login", login);
router.get("/verify", isAuthenticated, verify);

module.exports = router;
