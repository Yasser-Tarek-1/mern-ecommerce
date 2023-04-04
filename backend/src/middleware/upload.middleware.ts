import multer from "multer";
import path from "path";
const uploadsPath = path.join(__dirname, "../../uploads");
const storage = multer.diskStorage({
  destination: (req, file, callback) => callback(null, uploadsPath),
  filename: (req, file, callback) => callback(null, file.originalname),
});
export const uploadingMiddleware = multer({ storage }).single("image");
