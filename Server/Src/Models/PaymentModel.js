const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    mobile: { type: Number, required: true },
    address: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    pincode: { type: Number, required: true },

    //   payment details

    cardNumber: { type: Number, required: true },
    month: { type: Number, required: true },
    year: { type: Number, required: true },
    cvv: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
// model
const PaymentModel = mongoose.model("payment", PaymentSchema);

module.exports = { PaymentModel };
