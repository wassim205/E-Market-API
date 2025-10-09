const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const logger = require('./middlewares/logger');
const errorHandler = require("./middlewares/errorHandler");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(logger);

mongoose.connect(process.env.MONGO_URI);

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);

app.use(require('./middlewares/notFound'));

async function run() {
  try {
    console.log("running goes well");
  } catch (error) {
    console.log(error);
  }
}
app.use(errorHandler);

app.listen(process.env.PORT, run());
