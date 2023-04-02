import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UserI, User } from "../models/user.model";
export interface AuthenticatedRequest extends Request {
  user?: UserI | any;
}
export const checkAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token: string | undefined = req.header("Authentication");
  if (!token) {
    return res.status(401).send({
      error: "Please login first!",
    });
  }
  try {
    const decodeToken: any = jwt.verify(
      token,
      process.env.SECRET_KEY as jwt.Secret
    );
    (req as AuthenticatedRequest).user = await User.findById(decodeToken._id);
    next();
  } catch (error) {
    return res.status(400).send({
      error: "Invalid token",
    });
  }
};
