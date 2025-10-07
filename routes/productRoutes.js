const express = require("express");
const {
  getProducts,
  getOneProduct,
  createProduct,
  editProduct,
  deleteProduct,
} = require("../controllers/productController");
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getOneProduct);
router.post("/", createProduct);
router.put("/:id", editProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
