const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema(
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

const CartModel = mongoose.model("Cart", CartSchema);

module.exports = { CartModel };
