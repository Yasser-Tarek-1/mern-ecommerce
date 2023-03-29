import { Request, Response } from "express";
import { Cart } from "../models/cart.model";

export const getCartProducts = async (req: Request, res: Response) => {
  const cartProducts = await Cart.find({});
  if (!cartProducts[0]) {
    return res.status(400).send({
      error: "Cart is empty",
    });
  }
  res.status(200).send({
    success: true,
    message: "The products have been successful",
    cart: cartProducts,
  });
};
