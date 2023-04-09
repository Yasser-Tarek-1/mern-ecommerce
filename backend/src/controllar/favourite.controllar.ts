import { AuthenticatedRequest } from "./../middleware/auth";
import Product from "../models/Products.model";
import { Favourite } from "./../models/favourites.model";
import { Response } from "express";
export const getFavouritesProducts = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const favourites = await Favourite.find({ user: req.user }).populate(
    "user product"
  );
  res.status(200).send({
    success: true,
    res: {
      message: "fetched favourites proedcts",
      favourites,
    },
  });
};
export const addToFavouritesList = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const product = await Product.findById(req.params.productId);
  const favProduct = {
    user: req.user._id,
    product: req.params.productId,
  };
  if (!product) {
    return res.status(400).send({
      error: "Sorry!..Product is unkown",
    });
  }
  const checkExisted = await Favourite.findOne(favProduct);
  if (checkExisted) {
    return res.status(400).send({
      error: "Sorry this product already in favourites list",
    });
  }
  const newLike = new Favourite(favProduct);
  res.status(200).send({
    success: true,
    message: "Product is added to favourites list",
  });
  newLike.save();
};
export const removeFromFavouritesList = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const product = await Product.findById(req.params.productId);
  if (!product) {
    return res.status(400).send({
      error: "Sorry!..Product is unkown",
    });
  }
  let favProduct = {
    user: req.user._id,
    product: req.params.productId,
  };
  const checkExisted = await Favourite.findOne(favProduct);
  if (!checkExisted) {
    return res.status(400).send({
      error: "Product already is not in favourites list",
    });
  }
  await Favourite.findOneAndRemove(favProduct);
  res.status(200).send({
    success: true,
    message: "Product is removed from favourites list",
  });
};
export const clearFavouritesList = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  await Favourite.deleteMany({
    user: req.user,
  });
  res.status(200).send({
    success: true,
    message: "favourites list has been cleared successfully",
  });
};
