import { Response } from "express";
import { AuthenticatedRequest } from "../middleware/auth";
import { Cart, CartI } from "../models/cart.model";
import Product from "../models/Products.model";

export const getCartItems = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const cartItems: CartI[] | any = await Cart.find({
    user: req.user,
  }).populate("user product");
  res.status(200).send({
    success: true,
    message: "Cart items are fetched successfully",
    cartItems,
  });
};
export const createOrder = async (req: AuthenticatedRequest, res: Response) => {
  const product = await Product.findById(req.body.product);

  if (!product) {
    return res.status(400).send({
      error: "Sorry!..this product is unkown",
    });
  }
  const checkingExisted = await Cart.findOne({
    product: req.body.product,
    user: req.user._id,
  });
  if (checkingExisted) {
    return res.status(400).send({
      error: "Product already in cart!",
    });
  }
  const newOrder = new Cart({
    product: req.body.product,
    quantity: req.body.quantity,
    user: req.user._id,
  });
  newOrder.save();
  res.status(200).send({
    success: true,
    message: "Product is added to cart successfully",
  });
};

export const removeOrder = async (req: AuthenticatedRequest, res: Response) => { 
  const checkExisted = await Cart.findOne({
    user: req.user._id,
    product: req.params.id,
  });
  if (!checkExisted) {
    return res.status(400).send({
      error: "Product is not existed or removed before!",
    });
  }
  await Cart.findOneAndRemove({
    user: req.user._id,
    product: req.params.id,
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
  const product: any = await Product.findById(req.params.id);
  const checkExisted = await Cart.findOne({
    user: req.user._id,
    product: req.params.id,
  });
  if (!checkExisted) {
    return res.status(404).send({
      error: "This product is not existed in cart to update it's quantity",
    });
  }

  await Cart.findOneAndUpdate(
    {
      product: req.params.id,
      user: req.user._id,
    },
    {
      user: req.user._id,
      product: req.params.product,
      quantity: req.body.quantity,
    },
    { new: true }
  );
  res.status(200).send({
    success: true,
    message: "Quantity is updated",
  });
};
