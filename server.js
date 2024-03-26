const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

const products_routes= require('./routes/products')
app.get("/", (req, res) => {
  res.send("hi,i am live");
});

//middleware or set router
app.use('/api/products/',products_routes)

const start = async (req, res) => {
  try {
    app.listen(PORT, () => {
      console.log(`${PORT} is listening!!!`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
