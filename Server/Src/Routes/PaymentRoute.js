const express = require("express");
const { PaymentModel } = require("../Models/PaymentModel");

const app = express.Router();

app.get("/", async (req, res) => {
  try {
    const payment = await PaymentModel.find();
    res.status(200).json(payment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

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

app.delete("/:id", async (req, res) => {
  try {
    let product = await PaymentModel.findByIdAndDelete({
      _id: req.params.id,
    });
    return res.status(200).send({ message: "Payment Deleted successfully " });
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

app.patch("/:id", async (req, res) => {
  const payload = req.body;
  try {
    await PaymentModel.findByIdAndUpdate({ _id: req.params.id }, payload);
    return res.status(200).send({ message: "Payment updated successfully  " });
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

module.exports = app;
