import { Schema, model } from "mongoose";
export interface FavouritesI {
  product: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
}
 
