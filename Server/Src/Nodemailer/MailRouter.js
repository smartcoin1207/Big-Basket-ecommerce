const express = require("express");
const app = express.Router();

const { sendEmail } = require("./Nodemailer");

app.post("/", sendEmail);

module.exports = app;
