const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    avatar: {
      public_id: { type: String, required: true },
      url: { type: String },
    },
    title1: { type: String },
    title2: { type: String },
    title3: { type: String },
    title4: { type: String },
    offer: { type: String },
    price: { type: Number },
    rating: { type: String },
    quantity: { type: Number },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const productModel = mongoose.model("Product", productSchema);

module.exports = { productModel };

// const UserSchema = new mongoose.Schema({
//   name: { type: String, required: [true, "Please Enter Your Name"] },
//   email: {
//     type: String,
//     required: [true, "Please Enter Your Email"],
//     unique: true,
//     validate: [validator.isEmail, "Please enter a valid email"],
//   },
//   password: {
//     type: String,
//     required: [true, "Please Enter Your Password"],
//     minLength: [6, "min 6 characters"],
//     select: false,
//   },
//   avatar: {
//     public_id: { type: String, required: true },
//     url: { type: String, required: true },
//   },
//   role: { type: String, default: "user" },
//   createdAt: { type: Date, default: Date.now },
//   resetPasswordToken: String,
//   resetPasswordExpire: String,
// });

// const productModel = mongoose.model("Product", UserSchema);

// module.exports = { productModel };
