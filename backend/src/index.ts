import express, { Response } from "express";
import dotenv from "dotenv";
import path from "path";
import morgan from "morgan";
import { CONNECTION_DB } from "./db/Connection_DB";
import productsRoutes from "./router/product.router";
import cartRoutes from "./router/cart.router";
import userRoutes from "./router/user.router";
import cors from "cors";
import multer from "multer";
const app = express();
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./uploads"),
  filename: (req, file, cb) => {
    const fileName = `${Date.now()} - ${file.originalname}`;
    cb(null, fileName);
  },
});
const upload = multer({ storage });

const port = process.env.PORT || 4000;
dotenv.config({ path: path.join(__dirname, ".env") });
app.use(`${process.env.PREFIX_ROUTE}/products`, productsRoutes);
app.use(`${process.env.PREFIX_ROUTE}/cart`, cartRoutes);
app.use(`${process.env.PREFIX_ROUTE}/user`, userRoutes);
app.post(
  `${process.env.PREFIX_ROUTE}/upload`,
  upload.single("image"),
  (req: express.Request, res: express.Response) =>
    res.status(200).send({
      file: req.file?.originalname,
      path: req.file?.path,
    })
);

app.use("*", (_, res: Response) =>
  res.status(404).send({
    error: "Un handled Route",
  })
);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
  CONNECTION_DB();
});
