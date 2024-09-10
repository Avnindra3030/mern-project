const express = require("express");
const { getALLProducts } = require("../controllers/productController");
const router=express.Router();
 
router.route("/products").get(getALLProducts);

module.exports=router