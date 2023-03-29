import { Request, Response } from "express";
import { User, validateUserFields } from "../models/user.model";
import { hashSync, compareSync } from "bcrypt";
export const registerUser = async (req: Request, res: Response) => {
  const { error } = validateUserFields(req.body);
  const checkExistedEmail = await User.findOne({ email: req.body.email });
  if (error) {
    return res.status(400).send({ error: error.details[0].message });
  }
  if (checkExistedEmail) {
    return res.status(400).send({ error: "Email is used before..." });
  }
  const newUser = await new User({
    ...req.body,
    password: hashSync(req.body.password, 10),
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
      error: "Invalid email",
    });
  }
  const checkPassword = user && compareSync(req.body.password, user.password);
  if (!checkPassword) {
    return res.status(400).send({
      error: "Invalid password",
    });
  }
  res.status(200).send({
    success: true,
    message: "You are logged in successfully",
  });
};
