import { Request, Response } from "express";
import {
  User,
  validateUpdateUser,
  validateUserFields,
} from "../models/user.model";
import { hashSync, compareSync } from "bcrypt";
import { AuthenticatedRequest } from "../middleware/auth";
import jwt from "jsonwebtoken";
export const registerUser = async (req: Request, res: Response) => {
  const { error } = validateUserFields(req.body);
  const checkExistedEmail = await User.findOne({ email: req.body.email });
  if (error) {
    return res.status(400).send({ error: error.details[0].message });
  }
  if (checkExistedEmail) {
    return res.status(400).send({ error: "Email is used before..." });
  }
  const newUser = new User({
    ...req.body,
    password: hashSync(req.body.password, 10),
    role: "user",
  });
  newUser.save();
  res.status(200).send({
    success: true,
    resala: "Registeration is successed",
  });
};
export const loginUser = async (req: Request, res: Response) => {
  const user: any = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send({
      error: "Invalid email or password",
    });
  }
  const checkPassword = user && compareSync(req.body.password, user.password);
  if (!checkPassword) {
    return res.status(400).send({
      error: "Invalid email or password",
    });
  }
  const token = jwt.sign(
    { _id: user._id },
    process.env.SECRET_KEY as jwt.Secret
  );
  res
    .header("Authentication", token)
    .status(200)
    .send({
      success: true,
      res: {
        message: "You are logged in successfully",
        token,
      },
    });
};
export const getUserInfo = async (req: AuthenticatedRequest, res: Response) =>
  res.status(200).send({
    success: true,
    res: {
      message: "user data is available now",
      user: req.user,
    },
  });
export const updateProfile = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const { error } = validateUpdateUser(req.body);
  if (error) {
    return res.status(400).send({ error: error.details[0].message });
  }
  if (req.user.email !== req.body.email) {
    const checkExistedEmail = await User.findOne({
      email: { $ne: req.user.email },
    });
    if (checkExistedEmail) {
      return res.status(400).send({
        error: "email is used before",
      });
    }
  }
  let user = await User.findByIdAndUpdate(
    req.user._id,
    {
      ...req.body,
      password: req.body.password && hashSync(req.body.password, 10),
    },
    {
      new: true,
    }
  );
  res.status(200).send({
    success: true,
    message: "Your information has been updated",
  });
};
