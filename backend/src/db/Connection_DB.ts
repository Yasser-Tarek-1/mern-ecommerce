import mongoose from "mongoose";
export const CONNECTION_DB = (): void => {
  mongoose
    .connect(process.env.MONGO_URL as string)
    .then(() => console.log("Datebase is Connected successfully"))
    .catch((e) => console.log(`DATEBASE ERROR : ${e}`));
};
