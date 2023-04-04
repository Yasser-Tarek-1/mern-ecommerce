import { Schema, model } from "mongoose";

export interface CartI {
  _id: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
  product: Schema.Types.ObjectId;
  quantity: number;
}
const cartSchema = new Schema<CartI>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "product",
  },
  quantity: Number,
});
export const Cart = model("cart", cartSchema);
