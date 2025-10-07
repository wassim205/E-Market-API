const Categories = require("../models/categories");

// ALL API'S NEED TO BE TESTED NOTHING IS SURELY WORKS !!

async function getCategories(req, res) {
  try {
    const categories = await Categories.find();
    res.status(200).json({
      message: "all categories found",
      categories: categories,
    });
  } catch (error) {
    console.error(error);
  }
}

async function getOneCategory(req, res) {
  const id = req.params.id;
  const category = await Categories.findById(id);
  if (!category) {
    res.status(400).json({ message: "category not found" });
  }
  res.status(200).json({
    message: "category found succesfully",
    category: category,
  });
}

async function createCategory(req, res) {
  try {
    const { name } = req.body;
    const category = Categories.create({
      name,
    });
    res.status(201).json({
      message: "product created successfully",
      category: category,
    });
  } catch (error) {
    res.status(400).json({ message: "error whil creating category" });
  }
}

// NOT FUNCTIONING !!!
// PLEASE FIX THE LINE 52. IT NEEDS TO BE FIXED
async function editCategory(req, res) {
  const id = req.params.id;
  const category = await Categories.findById(id);
  if (!category) {
    res.status(400).json({ message: "category not found" });
  }
  category.updateOne();
  res.status(200).json({
    message: "category found succesfully",
    category: category,
  });
}

async function deleteCategory(req, res) {
  try {
    const category = Categories.findById();
    await Categories.deleteOne(category);
    res.status(200).json("category deleted successfully");
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getCategories,
  getOneCategory,
  createCategory,
  editCategory,
  deleteCategory,
};
