const express = require("express");
require("dotenv").config();
const connect = require("./Src/Config/db");
const productrouter = require("./Src/Routes/ProductRoute");
const paymentrouter = require("./Src/Routes/PaymentRoute");
const app = express();
app.use(express.json());

app.use("/product", productrouter);
app.use("/payment", paymentrouter);

app.get("/", (req, res) => {
  res.send("welcome to big basket");
});

app.listen(4000, async (req, res) => {
  try {
    await connect();
    console.log("connected to server");
  } catch (error) {
    console.log(error);
  }
  console.log("server running at port 3000");
});
