const express = require("express");
const { AdminProductModel } = require("../Models/AdminProductModel");
const app = express.Router();

app.get("/", async (req, res) => {
  try {
    let product = await AdminProductModel.find();
    res.status(200).send(product);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

// get element by id

app.get("/:id", async (req, res) => {
  try {
    let product = await AdminProductModel.findById({ _id: req.params.id });
    return res.status(200).send(product);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

app.post("/", async (req, res) => {
  const payload = req.body;
  try {
    const product = new AdminProductModel(payload);
    await product.save();
    return res.status(201).send({ message: "product added successfully" });
  } catch (error) {
    return res.status(400).send(error.message);
  }
});
app.delete("/:id", async (req, res) => {
  try {
    let product = await AdminProductModel.findByIdAndDelete({
      _id: req.params.id,
    });
    return res.status(200).send({ message: "product Deleted successfully " });
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

app.patch("/:id", async (req, res) => {
  const payload = req.body;
  try {
    await AdminProductModel.findByIdAndUpdate({ _id: req.params.id }, payload);
    return res.status(200).send({ message: "product updated successfully  " });
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

module.exports = app;
