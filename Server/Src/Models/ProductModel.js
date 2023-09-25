const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    image: String,
    title1: String,
    title2: String,
    title3: String,
    title4: String,
    offer: String,
    price: Number,
    rating: String,
    quantity: Number,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const productModel = mongoose.model("Product", productSchema);

module.exports = { productModel };
