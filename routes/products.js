const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductsBySort,
} = require("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/sort").get(getProductsBySort);

module.exports = router;
