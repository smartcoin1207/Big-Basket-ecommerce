const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const { AdminModel } = require("../Models/AdminModel");
const app = express.Router();
require("dotenv").config();

// register admin
app.post("/register", async (req, res) => {
  // Destructure user data from the request body
  const { name, email, password, phoneNumber, gender } = req.body;

  try {
    // Check if an admin with the same email already exists
    const existingAdmin = await AdminModel.findOne({ email });

    if (existingAdmin) {
      // If an admin with the same email exists, return an error response
      return res.status(409).json({ message: "Admin already exists" });
    }

    // Hash the user's password for security
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new admin instance with the hashed password
    const newAdmin = new AdminModel({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
      gender,
    });

    // Save the new admin in the database
    await newAdmin.save();

    // Return a success response
    res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    // Handle errors and return an error response
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error in admin registration", error });
  }
});

// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Find the admin by email
//     const admin = await AdminModel.findOne({ email });

//     // Check if the admin exists
//     if (!admin) {
//       return res.status(404).json({ message: "Admin not found" });
//     }

//     // Compare the provided password with the hashed password in the database
//     const passwordMatch = await bcrypt.compare(password, admin.password);

//     if (passwordMatch) {
//       // Passwords match, so the login is successful
//       res.status(200).json({ message: "Login successful" });
//     } else {
//       // Passwords don't match
//       res.status(401).json({ message: "Invalid credentials" });
//     }
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Error during login", error });
//   }
// });

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the admin by email
    const admin = await AdminModel.findOne({ email });

    // Check if the admin exists
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, admin.password);

    if (passwordMatch) {
      // Passwords match, generate a JWT token
      const secretKey = "Anju"; // Replace with your secret key
      const token = jwt.sign({ userId: admin._id }, secretKey, {
        expiresIn: "7days", // Token expires in 1 hour (adjust as needed)
      });

      // Return the JWT token as part of the response
      res.status(200).json({ message: "Login successful", token });
    } else {
      // Passwords don't match
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error during login", error });
  }
});
module.exports = app;
