import { Router } from "express";
import { getSingleUploadedImage } from "../helpers/resSignleImg";
const router = Router();
router.route("/:fileName").get(getSingleUploadedImage);
export default router;
