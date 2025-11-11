import { v2 as cloudinary } from "cloudinary";
import { validateProductAddData } from "../utils/validation.js";
import Product from "../models/product.js";

// Adding the products
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestSeller,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (img) => img !== undefined
    );

    // check 1: validate the incoming data
    validateProductAddData(req);

    // upload images to cloudinary and get the URLs
    let imagesUrl = await Promise.all(
      images.map(async (image) => {
        const result = await cloudinary.uploader.upload(image.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    // add product to the database
    const product = new Product({
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      date: Date.now(),
      bestSeller: bestSeller === "true" ? true : false,
      image: imagesUrl,
      date: Date.now(),
    });

    // save the product to the database
    await product.save();

    res.status(200).json({
      success: true,
      message: "Product added successfully",
      data: {
        product: {
          _id: product._id,
          name: product.name,
          description: product.description,
          price: product.price,
          category: product.category,
          subCategory: product.subCategory,
          sizes: product.sizes,
          bestSeller: product.bestSeller,
          image: product.image,
          date: product.date,
        },
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Removing the products
const removeProduct = async (req, res) => {};

// Getting the total products list
const listProducts = async (req, res) => {};

// Getting a single product details
const singleProduct = async (req, res) => {};

export { addProduct, removeProduct, listProducts, singleProduct };
