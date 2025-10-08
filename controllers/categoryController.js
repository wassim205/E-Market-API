const Categories = require("../models/categories");

async function getCategories(req, res, next) {
  try {
    const categories = await Categories.find();
    res.status(200).json({
      message: "all categories found",
      categories: categories,
    });
  } catch (error) {
    next(error);
    // console.error(error);
  }
}

async function getOneCategory(req, res, next) {
  try {
    const id = req.params.id;
    const category = await Categories.findById(id);
    if (!category) {
      res.status(400).json({ message: "category not found" });
    }
    res.status(200).json({
      message: "category found succesfully",
      category: category,
    });
  } catch (error) {
    next(error);
  }
}

async function createCategory(req, res, next) {
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
    next(error);
    // res.status(400).json({ message: "error whil creating category" });
  }
}

// NEED OPTIMISATIONS
async function editCategory(req, res, next) {
  try {
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
  } catch (error) {
    next(error);
  }
}

async function deleteCategory(req, res, next) {
  try {
    await Categories.findByIdAndDelete(req.params.id);
    res.status(200).json("category deleted successfully");
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getCategories,
  getOneCategory,
  createCategory,
  editCategory,
  deleteCategory,
};
