const express = require("express");
const mongoose = require("mongoose");
// const User = require("./models/user");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
require("dotenv").config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.use("/users", userRoutes);
app.use("/products", productRoutes);

async function run() {
  try {
    console.log("running goes well");
  } catch (error) {
    console.log(error);
  }
}

app.listen(3000, run());
