const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connect = require("./Src/Config/db");
const productrouter = require("./Src/Routes/ProductRoute");
const adminrouter = require("./Src/Routes/AdminRoute");
const cartrouter = require("./Src/Routes/CartRoute");
const app = express();
app.use(express.json());
app.use(cors());

app.use("/product", productrouter);
app.use("/cart", cartrouter);

// admin page data

app.use("/admin", adminrouter);

app.get("/", (req, res) => {
  res.send("welcome to big basket");
});

app.listen(process.env.port, async (req, res) => {
  try {
    await connect();
    console.log("connected to server");
  } catch (error) {
    console.log(error);
  }
  console.log(`server running port ${process.env.port}`);
});
