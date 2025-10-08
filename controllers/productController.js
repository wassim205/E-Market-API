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
    const { title, description, price, stock, category_id, imageUrl } =
      req.body;
    const product = await Products.create({
      title,
      description,
      price,
      stock,
      category_id,
      imageUrl,
    });
    res.status(201).json({
      message: "product created successfully",
      product: product.toObject(),
    });
  } catch (error) {
    // res.status(400).json({ message: "error whil creating product" });
    throw error;
  }
}

// NEED OPTIMISATION
async function editProduct(req, res) {
  const id = req.params.id;
  const newProduct = await Products.findByIdAndUpdate(
    id,
    {
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      stock: req.body.stock,
      category_id: req.body.category_id,
      imageUrl: req.body.imageUrl,
    },
    { new: true }
  );
  res.status(200).json({
    message: "product Updated successfully ",
    product: newProduct,
  });
}

async function deleteProduct(req, res) {
  try {
    await Products.findByIdAndDelete(req.params.id);
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
