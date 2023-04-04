import multer from "multer";
import path from "path";
import { NextFunction, Request, Response } from "express";
const storage = multer.diskStorage({
  destination: (req, file, callback) =>
    callback(null, path.join(__dirname, "../../uploads")),
  filename: (req, file, callback) =>
    callback(null, `${file.originalname}-${Date.now()}`),
});
export const uploadingImageMiddleware = multer({ storage }).single("image");
export const uploadingImg = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send({
      error: "nooooooooooooooooooooooo",
    });
  }
  res.status(200).send({
    ok: "OOOOOOOKLKKK",
  });
  next();
};
