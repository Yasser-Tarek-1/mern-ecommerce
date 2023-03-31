import { Request, Response } from "express";
import { AuthenticatedRequest } from "../middleware/auth";
import { Cart, CartI } from "../models/cart.model";
export const getCartItems = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const cartItems: CartI[] | any = await Cart.find({ user: req.user._id });
  if (!cartItems[0]) {
    return res.status(400).send({
      error: "No cart items yet...",
    });
  }
  res.status(200).send({
    success: true,
    message: "fetched your cart item successfully",
    cartItems,
  });
};
export const createOrder = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const checkExisted = await Cart.findOne({
    product: {
      _id: req.params.id,
    },
  });
  if (checkExisted) {
    return res.status(400).send({
      error: "Product is ordered before!",
    });
  }
  const newOrder: any = await new Cart({
    user: req.user._id,
    product: req.params.id,
    quantity: 1,
  });
  newOrder.save();
  res.status(200).send({
    success: true,
    message: "Product is added to cart successfully",
  });
};

export const removeOrder = async (req: AuthenticatedRequest, res: Response) => {
  const checkOrderIsNotExisted: any = await Cart.findOne({
    product: req.params.id,
  });
  if (checkOrderIsNotExisted) {
    return res.status(400).send({
      error: "Product is not existed to remove",
    });
  }
  await Cart.findByIdAndRemove(req.params.id);
  res.status(200).send({
    error: "deleted successfully",
  });
};
