import { Router } from "express";
import {
  getCartItems,
  createOrder,
  removeOrder,
} from "../controllar/cart.controllar";
import { checkAuth } from "../middleware/auth";
const router = Router();
router.route("/").all().get(checkAuth, getCartItems);
router.route("/order/add").post(checkAuth, createOrder);
router.route("/order/remove/:id").delete(checkAuth, removeOrder);

export default router;
