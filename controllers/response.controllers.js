const Response = require("../models/Response.model");

const createResponse = async (req, res) => {
  const { response, email } = req.body;
  try {
    const createdResponse = await Response.create({
      response,
      email,
      day: Date.now(),
    });
    if (createdResponse) {
      res.send(createdResponse);
    }
  } catch (err) {
    res.send(err);
  }
};

module.exports = { createResponse };
