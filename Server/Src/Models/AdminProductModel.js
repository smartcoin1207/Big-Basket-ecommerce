const mongoose = require("mongoose");
const AdminproductSchema = new mongoose.Schema(
  {
    image: String,
    title1: String,
    title2: String,
    title3: String,
    title4: String,
    offer: String,
    price: Number,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const AdminProductModel = mongoose.model("AdminProduct", AdminproductSchema);

module.exports = { AdminProductModel };
