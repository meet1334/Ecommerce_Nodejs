const Product = require("../models/product");
const getAllProducts = async (req, res) => {
  const queryObject = {};
  const { company, sort, name, featured, select } = req.query;

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
    let sortFix = sort.replaceAll(",", " ");
    // console.log(sortFix);
    apiData = apiData.sort(sortFix);
  }

  //selected fields added

  if (select) {
    let selectFix = select.replaceAll(",", " ");
    console.log(selectFix);
    apiData = apiData.select(selectFix);
  }

  // pagination logic

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 4;
  let skip = (page - 1) * limit;

  const myData = await apiData.skip(skip).limit(limit);
  res.status(200).json({
    myData,
    length: myData.length,
    filterby: queryObject,
    page,
    limit,
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

//Pagination

const getProductsByPage = async (req, res) => {
  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 4;
  let skip = (page - 1) * limit;

  const myData = await Product.find().skip(skip).limit(limit);
  res.status(200).json({ myData, length: myData.length, page, limit });
};

module.exports = { getAllProducts, getProductsBySort, getProductsByPage };
