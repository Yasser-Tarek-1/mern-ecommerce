import { loginUser, registerUser } from "../controllar/user.controllar";
import { Router } from "express";
const router = Router();
router.route("/login").post(loginUser);
router.route("/register").post(registerUser);

export default router;
