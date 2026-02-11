const express = require("express");
const router = express.Router();
const productController = require("../controller/productcontroller");


router.post("/products", productController.createPengguna);
router.get("/products", productController.getAllProduct);
router.get("/products/:id", productController.checkIfAdminExists);

module.exports = router;