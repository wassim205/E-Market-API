const express = require("express");
const {
  getCategories,
  getOneCategory,
  createCategory,
  editCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const router = express.Router();

router.get("/", getCategories);
router.get("/:id", getOneCategory);
router.post("/", createCategory);
router.put("/:id", editCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
