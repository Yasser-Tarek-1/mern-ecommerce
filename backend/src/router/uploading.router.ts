import { Router } from "express";
import { uploadingImageMiddleware } from "../middleware/uploadImg";
const router = Router();
router.route("/").post(uploadingImageMiddleware);

export default router;
