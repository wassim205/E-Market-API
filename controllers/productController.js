const Products = require("../models/products");

// ALL API'S NEED TO BE TESTED NOTHING IS SURELY WORKS !!

async function getProducts(req, res) {
  try {
    const products = await Products.find();
    res.status(200).json({
      message: "all products found",
      products: products,
    });
  } catch (error) {
    console.error(error);
  }
}

async function getOneProduct(req, res) {
  const id = req.params.id;
  const product = await Products.findById(id);
  if (!product) {
    res.status(400).json({ message: "product not found" });
  }
  res.status(200).json({
    message: "product found succesfully",
    product: product,
  });
}

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
      message: "product created successfully",
      product: product,
    });
  } catch (error) {
    //   throw error
    res.status(400).json({ message: "error whil creating product" });
  }
}

// NOT FUNCTIONING !!!
// PLEASE FIX THE LINE 58. IT NEEDS TO BE FIXED
async function editProduct(req, res) {
  const id = req.params.id;
  const product = await Products.findById(id);
  if (!product) {
    res.status(400).json({ message: "product not found" });
  }
  product.updateOne();
  res.status(200).json({
    message: "product found succesfully",
    product: product,
  });
}

async function deleteProduct(req, res) {
  try {
    const product = Products.findById();
    await Products.deleteOne(product);
    res.status(200).json("product deleted successfully");
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getProducts,
  getOneProduct,
  createProduct,
  editProduct,
  deleteProduct,
};
