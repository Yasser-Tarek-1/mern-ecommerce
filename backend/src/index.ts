import express, { Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import morgan from "morgan";
import { CONNECTION_DB } from "./db/Connection_DB";
import productsRoutes from "./router/product.router";
import cartRoutes from "./router/cart.router";
import userRoutes from "./router/user.router";
import favouritesRoute from "./router/favourite.router";
import showImagesRoute from "./router/img.router";
import cors from "cors";
import { uploadingMiddleware } from "./middleware/upload.middleware";
import { uploading } from "./helpers/uploading";
const app = express();
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 4000;
dotenv.config({ path: path.join(__dirname, "./config/.env") });
app.use(`${process.env.PREFIX_ROUTE}/products`, productsRoutes);
app.use(`${process.env.PREFIX_ROUTE}/cart`, cartRoutes);
app.use(`${process.env.PREFIX_ROUTE}/user`, userRoutes);
app.use(`${process.env.PREFIX_ROUTE}/favourites`, favouritesRoute);
app.use(`${process.env.PREFIX_ROUTE}/uploads`, showImagesRoute);
app.use(`${process.env.PREFIX_ROUTE}/upload`, uploadingMiddleware, uploading);
app.use("*", (_, res: Response) =>
  res.status(404).send({
    error: "Un handled Route",
  })
);
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
  CONNECTION_DB();
});
