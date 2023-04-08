import { File } from "buffer";
import { Response, Request } from "express";
import path from "path";
const uploadsPath = path.join(__dirname, "../../uploads");
export const getSingleUploadedImage = (req: Request, res: Response) => {
  if (!req.params.fileName) {
    return res.status(404).send("Image is not found");
  }
  res.status(200).sendFile(`${uploadsPath}/${req.params.fileName}`);
};
