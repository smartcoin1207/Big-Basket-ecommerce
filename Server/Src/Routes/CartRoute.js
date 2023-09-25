const express = require("express");
const { productModel } = require("../Models/ProductModel");
const { CartModel } = require("../Models/CartModel");
const app = express.Router();

app.get("", async (req, res) => {
  try {
    let cart = await CartModel.find({ user: req._id });
    // .populate([
    //   //   "user",
    //   "product",
    // ]);
    return res.send({ message: "product in cart", cart: cart });
  } catch (e) {
    return res.send(e.message);
  }
});

app.post("/:id", async (req, res) => {
  const {
    quantity,
    type,
    image,
    title1,
    title2,
    title3,
    title4,
    offer,
    price,
    rating,
  } = req.body;
  const productID = req.params.id;
  try {
    let product = await productModel.findById({ _id: productID });
    let cartItem = await CartModel.findOne({
      user: req._id,
      product: productID,
    });
    if (!cartItem) {
      if (Check(product.quantity, quantity)) {
        return res.send({
          message: `Database hav only ${product.quantity} quantity left`,
        });
      } else {
        let cart = await CartModel.create({
          product: productID,
          user: req._id,
          quantity: quantity,
          image: image,
          title1: title1,
          title2: title2,
          title3: title4,
          title4: title4,
          offer: offer,
          price: price,
          rating: rating,
        });
        await productModel.findByIdAndUpdate(
          { _id: productID },
          { $inc: { quantity: -1 } }
        );
        return res.send(cart);
      }
    } else {
      if (!type) {
        return res.send("Type is missing");
      } else if (type === "asc") {
        if (Check(product.quantity, quantity)) {
          return res.send({
            message: `Database hav only ${product.quantity} quantity left`,
          });
        } else {
          let cart = await CartModel.findOneAndUpdate(
            {
              product: productID,
            },
            {
              $inc: { quantity: 1 },
            }
          );
          await productModel.findByIdAndUpdate(
            { _id: productID },
            { $inc: { quantity: -1 } }
          );
          return res.send("Updated");
        }
      } else if (type === "desc") {
        if (cartItem.quantity == 1) {
          await productModel.findByIdAndUpdate(
            { _id: product._id },
            {
              $inc: { quantity: cartItem.quantity },
            }
          );
          await Cart.findOneAndDelete({ _id: cartItem._id });
          return res.send("Deleted Successfully by minus");
        } else {
          let cart = await CartModel.findOneAndUpdate(
            {
              product: productID,
            },
            {
              $inc: { quantity: -1 },
            }
          );
          await productModel.findByIdAndUpdate(
            { _id: productID },
            { $inc: { quantity: 1 } }
          );
          return res.send(cart);
        }
      }
    }
  } catch (e) {
    return res.send(e.message);
  }
});

function Check(productQunatity, comingQuantity) {
  if (productQunatity < comingQuantity) {
    return true;
  } else {
    return false;
  }
}

app.delete("/:id", async (req, res) => {
  try {
    let product = await CartModel.findByIdAndDelete({
      _id: req.params.id,
    });
    return res.status(200).send({ message: "product Deleted successfully " });
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

module.exports = app;
