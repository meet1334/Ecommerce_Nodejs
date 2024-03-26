const getAllProducts = async (req, res) => {
  res.status(200).json({
    msg: "i am happy!!!",
  });
};

const getAllProductsTesting = async (req, res) => {
  res.status(200).json({
    msg: "i am happy testing only!!!",
  });
};

module.exports = { getAllProducts, getAllProductsTesting };
