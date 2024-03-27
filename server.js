require('dotenv').config();
const express = require("express");
const app = express();

const connectDB = require("./db/connect");

const PORT = process.env.PORT || 8000;

const products_routes = require("./routes/products");

app.get("/", (req, res) => {
  res.send("hi,i am live");
});

//middleware or set router
app.use("/products", products_routes);

const start = async (req, res) => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`${PORT} is listening!!!`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
