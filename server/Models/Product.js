import mongoose from "mongoose";
const ProductSchema=new mongoose.Schema({
name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    stock: {
      type: Number,
      required: true,
      min: 0
    },
    category: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;