const express = require("express");
const { productModel } = require("../Models/ProductModel");
const app = express.Router();
const cloudinary = require("cloudinary");

app.get("/", async (req, res) => {
  try {
    let product = await productModel.find();
    res.status(200).send(product);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

// product for admin
app.get("/allproductadmin", async (req, res) => {
  try {
    let product = await productModel.find();
    res.status(200).send(product);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

// get element by id

app.get("/:id", async (req, res) => {
  try {
    let product = await productModel.findById({ _id: req.params.id });
    return res.status(200).send(product);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

// all admin products

// post request
app.post("/", async (req, res) => {
  const payload = req.body;
  try {
    const product = new productModel(payload);
    await product.save();
    return res.status(201).send({ message: "product added successfully" });
  } catch (error) {
    return res.status(400).send(error.message);
  }
});
app.delete("/:id", async (req, res) => {
  try {
    let product = await productModel.findByIdAndDelete({
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
    await productModel.findByIdAndUpdate({ _id: req.params.id }, payload);
    return res.status(200).send({ message: "product updated successfully  " });
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

module.exports = app;
