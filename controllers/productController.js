const Products = require("../models/products");

// ALL API'S NEED TO BE TESTED NOTHING IS SURELY WORKS !!

async function getProducts(req, res, next) {
  try {
    const products = await Products.find();
    res.status(200).json({
      message: "all products found",
      products: products,
    });
  } catch (error) {
    // console.error(error);
    next(error);
  }
}

async function getOneProduct(req, res, next) {
  try {
    const id = req.params.id;
    const product = await Products.findById(id);
    if (!product) {
      res.status(400).json({ message: "product not found" });
    }
    res.status(200).json({
      message: "product found succesfully",
      product: product,
    });
  } catch (error) {
    next(error);
  }
}

async function createProduct(req, res, next) {
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
    // throw error;
    next(error);
  }
}

// NEED OPTIMISATION
async function editProduct(req, res, next) {
  try {
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
  } catch (error) {
    next(error)
  }
}

async function deleteProduct(req, res, next) {
  try {
    await Products.findByIdAndDelete(req.params.id);
    res.status(200).json("product deleted successfully");
  } catch (error) {
    // throw error;
    next(error);
  }
}

module.exports = {
  getProducts,
  getOneProduct,
  createProduct,
  editProduct,
  deleteProduct,
};
