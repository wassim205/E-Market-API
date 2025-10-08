const Categories = require("../models/categories");


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
    const category = await Categories.create({
      name,
    });
    res.status(201).json({
      message: "product created successfully",
      category: category.toObject(),
    });
  } catch (error) {
    res.status(400).json({ message: "error whil creating category" });
  }
}

// NEED OPTIMISATIONS
async function editCategory(req, res) {
  const id = req.params.id;
  const category = await Categories.findByIdAndUpdate(
    id,
    {
      name: req.body.name,
    },
    { new: true }
  );
  res.status(200).json({
    message: "category found succesfully",
    category: category,
  });
}

async function deleteCategory(req, res) {
  try {
    await Categories.findByIdAndDelete(req.params.id);
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
