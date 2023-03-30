import {
  loginUser,
  registerUser,
  updateProfile,
} from "../controllar/user.controllar";
import { Router } from "express";
import { checkAuth } from "../middleware/auth";
const router = Router();
router.route("/login").post(loginUser);
router.route("/register").post(registerUser);
router.route("/update").post(checkAuth, updateProfile);

export default router;
