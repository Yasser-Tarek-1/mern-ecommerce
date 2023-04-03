import { Response } from "express";
import { AuthenticatedRequest } from "../middleware/auth";
import { Cart, CartI } from "../models/cart.model";
import Product, { ProductI } from "../models/Products.model";
import { User } from "../models/user.model";
export const getCartItems = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const cartItems: CartI[] | any = await Cart.find({
    "user.email": req.user.email,
  });
  res.status(200).send({
    success: true,
    message: "fetched your cart item successfully",
    cartItems,
  });
};
export const createOrder = async (req: AuthenticatedRequest, res: Response) => {
  const product = await Product.findById(req.body.product);
  const user = await User.findById(req.user._id);
  if (!product || !user) {
    return res.status(400).send({
      error: "Your request failed!",
    });
  }
  const checkingExisted = await Cart.findOne({
    "product.title": product.title,
    "user.email": user.email,
  });
  if (checkingExisted) {
    return res.status(400).send({
      error: "Product already in cart!",
    });
  }
  const newOrder = await new Cart({
    product: {
      ...product,
      quantity: req.body.quantity,
    },
    user,
  });
  newOrder.save();
  res.status(200).send({
    success: true,
    message: "Product is added to cart successfully",
  });
};

export const removeOrder = async (req: AuthenticatedRequest, res: Response) => {
  const checkExisted = await Cart.findOne({
    "user.email": req.user.email,
    "product._id": req.params.id,
  });
  if (!checkExisted) {
    return res.status(400).send({
      error: "Product is not existed or removed before!",
    });
  }
  await Cart.findOneAndRemove({
    "user.email": req.user.email,
    "product._id": req.params.id,
  });
  res.status(200).send({
    success: true,
    messaage: "Deleted successfully",
  });
};

export const updateQuantity = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const product = await Product.findById(req.params.id);
  await Cart.findOneAndUpdate(
    {
      "product._id": req.params.id,
      "user.email": req.user.email,
    },
    {
      user: req.user,
      product: {
        ...product,
        quantity: req.body.quantity,
      },
    },
    { new: true }
  );
};
