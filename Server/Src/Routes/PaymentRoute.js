const express = require("express");
const { PaymentModel } = require("../Models/PaymentModel");
// const { PaymentModel } = require("../Model/PaymentModel");

const app = express.Router();

app.post("/", async (req, res) => {
  const payload = req.body;
  try {
    const product = new PaymentModel(payload);
    await product.save();
    return res
      .status(201)
      .send({ message: "Payment details added successfully" });
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

module.exports = app;
