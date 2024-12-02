const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  try {
    const { brand, price, fields } = req.query;
    const queryObject = {};

    // Add filters based on query parameters
    if (brand) {
      queryObject.brand = brand;
    }
    if (price) {
      queryObject.price = Number(price);
    }

    // Base query
    let result = Product.find(queryObject);

    // Select specific fields if provided
    if (fields) {
      const fieldsList = fields.split(",").join(" ");
      result = result.select(fieldsList);
    }

    const myData = await result;
    res.status(200).json({ success: true, data: myData });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getAllProducts };