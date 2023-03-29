import { Router } from "express";
import { getCartProducts } from "../controllar/cart.controllar";
const router = Router();
router.route("/").get(getCartProducts);

export default router;
