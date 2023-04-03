import { Schema, model } from "mongoose";
// import joi from "joi";

export interface ProductI  {
  title: string;
  image: string;
  description: string;
  price: number;
  category: string;
};
const productsSchema = new Schema<ProductI>({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});
const Product = model("product", productsSchema);
export default Product;
