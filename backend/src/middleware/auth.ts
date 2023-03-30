import jwt from "jsonwebtoken";
import { Request, Response, Next } from "express";
// export const auth = async (req: Request, res: Response, next: Next) => {
//   const token = req.header("Authentication");
//   if (!token) {
//     return res.status(401).send({
//       error: "Login first",
//     });
//   }
//   try {
//     const decodeToken = jwt.verify(token, process.env.SECRET_KEY as string);
//     req.user = decodeToken;
//     next();
//   } catch (error) {
//     res.status(400).send({
//       error: "Inavlid token",
//     });
//   }
// };
export const auth = async (req: Request, res: Response, next: Next) => {
  const token = req.header("Authentication");
  if (!token) {
    return res.status(401).send({
      error: "Login first",
    });
  }
  try {
    const decodeToken = jwt.verify(token, process.env.SECRET_KEY as string);
    req.user = decodeToken;
    next();
  } catch (error) {
    return res.status(400).send({
      error: "Inavlid token",
    });
  }
};
