import { File } from "buffer";
import { Response, Request } from "express";

export const getSingleUploadedImage = (req: Request, res: Response) => {
  if (!req.params.fileName) {
    return res.status(404).send("Image not found");
  }
  res.status(200).send("Image");
};
