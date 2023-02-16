const Response = require("../models/Response.model");

const createResponse = async (req, res) => {
  const { response, email, ticket } = req.body;
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
const getResponses = async (req, res) => {
  try {
    const allResponses = await Response.find();
    if (allResponses) {
      res.send(allResponses);
    }
  } catch (err) {
    res.send(err);
  }
};

module.exports = { createResponse, getResponses };
