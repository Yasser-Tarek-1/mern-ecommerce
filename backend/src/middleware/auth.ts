import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UserI, User } from "../models/user.model";
export interface AuthenticatedReq extends Request {
  user?: UserI | null;
}
export const checkAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token: string | undefined = req.header("Authentication");
  if (!token) {
    return res.status(401).send({
      error: "Un authenticated user",
    });
  }
  try {
    const decodeToken: any = jwt.verify(
      token,
      process.env.SECRET_KEY as jwt.Secret
    );
    (req as AuthenticatedReq).user = await User.findById(decodeToken.id);
    next();
  } catch (error) {
    return res.status(400).send({
      error: "Invalid token",
    });
  }
};
