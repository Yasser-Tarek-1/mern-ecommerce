import { Router } from "express";
import {
  addToFavouritesList,
  getFavouritesProducts,
  removeFromFavouritesList,
} from "../controllar/favourite.controllar";
import { checkAuth } from "../middleware/auth";
const router = Router();
router.route("/").get(checkAuth, getFavouritesProducts);
router.route("/add/:productId").post(checkAuth, addToFavouritesList);
router.route("/remove/:productId").delete(checkAuth, removeFromFavouritesList);
export default router;
