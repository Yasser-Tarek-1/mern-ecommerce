import { Request, Response } from "express";
import Product from "../models/Products.model";
export const getAllProducts = async (req: Request, res: Response) => {
  const products = await Product.find();
  if (!products[0]) {
    return res.status(400).send({
      error: "No products found",
    });
  }
  res.status(200).send({
    success: true,
    message: "products are fetched successfully",
    products,
  });
};
export const getProductById = async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(400).send({
      error: "Product is not already existed",
    });
  }
  res.status(200).send({
    success: true,
    message: "Product is fetched successfully",
    product,
  });
};
export const addProduct = async (req: Request, res: Response) => {
  const isExisted: {} | null = await Product.findOne({
    name: req.body.name,
  });
  if (isExisted) {
    return res.status(400).send({
      error: "Product is already existed",
    });
  }
  const newProduct: any = new Product({ ...req.body });
  newProduct.save();
  res.status(200).send({
    success: true,
    message: "Product is added suucessfully",
  });
};
