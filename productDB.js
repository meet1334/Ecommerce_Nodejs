require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/product");

const productJson = require("./products.json");
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    await Product.create(productJson);
    console.log("successful");
  } catch (error) {
    console.log(error);
  }
};

start();
