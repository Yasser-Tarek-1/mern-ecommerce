import { Schema, model } from "mongoose";

interface CartI {
  user: Schema.Types.ObjectId;
  product: Schema.Types.ObjectId;
  quantity: number;
}
const cartSchema = new Schema<CartI>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "product",
  },
  quantity: Number,
});
export const Cart = model("cart",cartSchema);