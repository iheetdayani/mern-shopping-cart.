import ProductController from "../Controllers/ProductController.js";
import express from "express";

const router=express.Router();

router.post("/",ProductController.createProduct);

router.get("/",ProductController.getAllProducts);

export default router;