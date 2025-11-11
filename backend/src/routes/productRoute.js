import express from "express";
import {
  addProduct,
  removeProduct,
  listProducts,
  singleProduct,
} from "../controllers/productController.js";
import { adminAuth, userAuth } from "../middlewares/auth.js";
import upload from "../middlewares/multer.js";

const productRouter = express.Router();

// Route to add a new product
productRouter.post(
  "/add",
  adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);

// Route to remove a product
productRouter.post("/remove", adminAuth, removeProduct);

// Get all the product details
productRouter.get("/list", listProducts);

// Get the details for a single Product
productRouter.post("/single", singleProduct);

export default productRouter;
