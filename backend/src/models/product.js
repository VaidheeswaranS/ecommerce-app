import mongoose from "mongoose";
import validator from "validator";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
      maxLength: 100,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minLength: 10,
      maxLength: 500,
    },
    price: {
      type: Number,
      required: true,
      min: 1,
    },
    image: {
      type: Array,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Men", "Women", "Kids"],
    },
    subCategory: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
      maxLength: 50,
    },
    sizes: {
      type: [],
      required: true,
      validate: {
        validator: function (v) {
          return v.length > 0;
        },
        message: "At least one size must be specified.",
      },
    },
    date: {
      type: Number,
      required: true,
    },
    bestSeller: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
