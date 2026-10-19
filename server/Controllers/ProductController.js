import Product from "../Models/Product.js";

// Insert Product
export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      data: product,
      message: "Product Created Successfully"
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

// Display All Products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      data: products,
      message: "Products Fetched Successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
export default{createProduct,getAllProducts};