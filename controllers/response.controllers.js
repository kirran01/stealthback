const { trusted } = require("mongoose");
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
const deleteResponse = async (req, res) => {
  try {
    const deletedResponse = await Response.deleteOne({_id: req.params.id});
    if (deletedResponse.deletedCount === 1) {
      res.send("deleted");
    } else {
      res.send("something went wrong 😖 !");
    }
  } catch (err) {
    res.send(err);
  }
};

module.exports = { createResponse, getResponses, deleteResponse };
