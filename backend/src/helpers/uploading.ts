import { Request, Response } from "express";
export const uploading = (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(200).send({
      error: "Image no no",
    });
  }
  res.status(200).send("image uploaded successfully")
}; 
