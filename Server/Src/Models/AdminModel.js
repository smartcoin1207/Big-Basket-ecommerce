const { Schema, model } = require("mongoose");

validAdminEmail = [
  "anjutewatia008@gmail.com",
  "sachin@gmail.com",
  "anju@gmail.com",
];

const adminSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, enum: validAdminEmail },
  password: { type: String, required: true },
  phoneNumber: { type: Number, required: true, unique: true },
  gender: { type: String },
  adminId: String,
});

const AdminModel = model("admin", adminSchema);

module.exports = { AdminModel };
