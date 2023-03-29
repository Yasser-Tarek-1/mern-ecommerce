import { Schema, model } from "mongoose";
// import joi from "joi";

type ProductType = {
  name: string;
  image: string;
  description: string;
  price: number;
};

const productsSchema = new Schema<ProductType>({
  
  name: {
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
});
const Product = model("product", productsSchema);
export default Product;
