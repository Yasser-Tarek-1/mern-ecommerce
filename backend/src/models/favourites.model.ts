import { Schema, model } from "mongoose";
export interface FavouritesI {
  product: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
}
const favouritesSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "product",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});
export const Favourite = model("favourite", favouritesSchema);
