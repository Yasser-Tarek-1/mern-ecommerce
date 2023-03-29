import { Router } from "express";
import {
  addProduct,
  getAllProducts,
  getProductById,
} from "../controllar/product.controllar";
const router: Router = Router();
router.route("/").get(getAllProducts);
router.route("/:id").get(getProductById);
router.route("/add").post(addProduct);
export default router;
