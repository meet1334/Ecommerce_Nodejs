const Product = require("../models/product");
const getAllProducts = async (req, res) => {
  const queryObject = {};
  const { company, sort, name, featured } = req.query;

  // for finding by fields

  if (company) {
    queryObject.company = company;
  }

  if (featured) {
    queryObject.featured = featured;
  }

  // seaching by regex

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  let apiData = Product.find(queryObject);

  //for sorting by fields
  //sorting was immplement btw 2 fields sort = name,price

  if (sort) {
    let sortFix = sort.replace(",", " ");
    // console.log(sortFix);
    apiData = apiData.sort(sortFix);
  }

  const myData = await apiData;
  res.status(200).json({
    myData,
    length: myData.length,
    filterby: queryObject,
  });
};


//only sort api

const getProductsBySort = async (req, res) => {
  const { sort } = req.query;
  
  if (sort) {
    sortFix = sort.replace(",", " ");
  }
  console.log(sortFix);
  const myData = await Product.find().sort(sortFix);
  res.status(200).json({ myData, length: myData.length });
};

module.exports = { getAllProducts, getProductsBySort };
