import { Router } from "express";
import {
  getCartItems,
  createOrder,
  removeOrder,
} from "../controllar/cart.controllar";
import { checkAuth } from "../middleware/auth";
const router = Router();
router.route("/").all().get(checkAuth, getCartItems);
router.route("/order").post(checkAuth, createOrder);
router.route("/order/remove").delete(checkAuth, removeOrder);

export default router;
