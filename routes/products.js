const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductsBySort,
  getProductsByPage,
} = require("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/sort").get(getProductsBySort);
router.route('/pagi').get(getProductsByPage);

module.exports = router;
