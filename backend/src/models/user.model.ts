import { Schema, model } from "mongoose";
import joi from "joi";
export interface UserI {
  _id: Schema.Types.ObjectId;
  email: string;
  password: string;
  username: string;
  phone: string;
  image: string;
  createAt: Date;
}
export const validateUserFields = (payload: UserI) => {
  let userSch = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
    username: joi.string().required(),
    phone: joi.string().required(),
    image: joi.string(),
  });
  return userSch.validate(payload);
};
export const validateUpdateUser = (payload: UserI) => {
  let userSch = joi.object({
    email: joi.string().email().required(),
    username: joi.string().required(),
    phone: joi.string().required(),
    image: joi.string(),
    password: joi.string(),
  });
  return userSch.validate(payload);
};

const userSchema = new Schema<UserI>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});
export const User = model("user", userSchema);
