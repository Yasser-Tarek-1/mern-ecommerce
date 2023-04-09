import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(__dirname, "../../config/.env") });
export const CONNECTION_DB = (): void => {
  mongoose
    .connect(process.env.MONGO_URL!)
    .then(() => console.log("Datebase is Connected successfully"))
    .catch((e) => console.log(`DATEBASE ERROR : ${e}`));
};
