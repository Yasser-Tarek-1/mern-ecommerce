import { Request, Response } from "express";
export const uploading = (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).send({
      error: "You should upload image",
    });
  }
  res.status(200).send({
    success: true,
    message: "Image is uploaded and saved successfully",
  });
};
