import { Router } from "express";
import {
  addToFavouritesList,
  clearFavouritesList,
  getFavouritesProducts,
  removeFromFavouritesList,
} from "../controllar/favourite.controllar";
import { checkAuth } from "../middleware/auth";
const router = Router();
router.route("/").get(checkAuth, getFavouritesProducts);
router.route("/add/:productId").post(checkAuth, addToFavouritesList);
router.route("/remove/:productId").delete(checkAuth, removeFromFavouritesList);
router.route("/clear").delete(checkAuth, clearFavouritesList);
export default router;
