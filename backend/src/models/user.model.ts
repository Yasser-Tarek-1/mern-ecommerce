import { Schema, model } from "mongoose";
import joi from "joi";
import jwt, { Secret } from "jsonwebtoken";
export interface UserI {
  email: string;
  password: string;
  username: string;
  // birthDate: Date;
  phone: string;
  image: string;
}
export const validateUserFields = (payload: UserI) => {
  let userSch = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
    username: joi.string().required(),
    // birthDate: joi.date().required(),
    phone: joi.string().required(),
    image: joi.string().required(),
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
    required: true,
  },

  // birthDate: {
  //   type: Date,
  //   required: true,
  // },
});
export const User = model("user", userSchema);

// userSchema.methods.genTokens = (): string =>
//   jwt.sign({ _id: this._id }, process.env.SECRET_KEY as Secret);
