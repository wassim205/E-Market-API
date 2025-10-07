const Products = require("../models/products");

function getProducts() {}

function getOneProduct() {}

async function createProduct(req, res) {
  try {
    const { title, description, price, stock, imageUrl } = req.body;
    const product = Products.create({
      title,
      description,
      price,
      stock,
      //   category,
      imageUrl,
    });
    //   const product = productCreated.toObject();
    res.status(201).json({
      message: "project created successfully",
      product: product,
    });
  } catch (error) {
    //   throw error
    res.status(400).json({ message: "error whil creating product" });
  }
}

function editProduct() {}

function deleteProduct() {}

module.exports = {
  getProducts,
  getOneProduct,
  createProduct,
  editProduct,
  deleteProduct,
};
