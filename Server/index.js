const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connect = require("./Src/Config/db");
const productrouter = require("./Src/Routes/ProductRoute");
const paymentrouter = require("./Src/Routes/PaymentRoute");
const adminrouter = require("./Src/Routes/AdminRoute");
// const { authenticate } = require("./src/Middleware/Authentication");
const { authenticate } = require("./Src/MiddleWare/AdminAuth.middleware");
const adminproductrouter = require("./Src/Routes/AdminProductRoute");
const app = express();
app.use(express.json());
app.use(cors());

app.use("/product", productrouter);
app.use("/payment", paymentrouter);

// admin

app.use("/admin", adminrouter);
app.use(authenticate);
app.use("/adminproduct", adminproductrouter);

app.get("/", (req, res) => {
  res.send("welcome to big basket");
});

app.listen(3000, async (req, res) => {
  try {
    await connect();
    console.log("connected to server");
  } catch (error) {
    console.log(error);
  }
  console.log("server running at port 3000");
});
