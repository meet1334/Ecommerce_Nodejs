const Product = require("../models/product");
const getAllProducts = async (req, res) => {
  const queryObject = {};
  const { company } = req.query;
  if (company) {
    queryObject.company = company;
  }
  console.log(queryObject, "filter by ");
  const myData = await Product.find(queryObject);
  res.status(200).json({
    myData,
    length: myData.length,
    filterby: queryObject,
  });
};

const getAllProductsTesting = async (req, res) => {
  res.status(200).json({
    msg: "i am happy testing only!!!",
  });
};

module.exports = { getAllProducts, getAllProductsTesting };
