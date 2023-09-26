const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    mobile: {
      type: Number,
      required: true,
      validate: [mobileValidator, "Mobile number must be 10 digits"],
    },
    address: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    pincode: {
      type: Number,
      required: true,
      validate: [pincodeValidator, "Pincode must be 6 digits"],
    },
    cardNumber: {
      type: Number,
      required: true,
      validate: [cardNumberValidator, "Card number must be 16 digits"],
    },
    month: { type: Number, required: true },
    year: { type: Number, required: true },
    cvv: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// Custom validators
function mobileValidator(value) {
  return /^\d{10}$/.test(value);
}

function pincodeValidator(value) {
  return /^\d{6}$/.test(value);
}

function cardNumberValidator(value) {
  return /^\d{16}$/.test(value);
}
// model
const PaymentModel = mongoose.model("payment", PaymentSchema);

module.exports = { PaymentModel };
