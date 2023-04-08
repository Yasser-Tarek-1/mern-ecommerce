import { NextFunction, Response } from "express";
import { AuthenticatedRequest } from "./auth";

export const adminMiddleware = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.user.role != "admin") {
    return res.status(401).send({
      error: "You cannot perform this request as a user",
    });
  }
  next();
};
