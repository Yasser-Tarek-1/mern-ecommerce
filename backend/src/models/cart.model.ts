import { Schema, model } from "mongoose";

export interface CartI {
  _id: Schema.Types.ObjectId;
  user: {
    email: string;
    username: string;
    phone: string;
  };
  product: {
    title: string;
    image: string;
    description: string;
    price: number;
    quantity: number;
  };
}
const cartSchema = new Schema<CartI>({
  user: {
    type: Object({
      email: String,
      phone: String,
      username: String,
    }),
    required: true,
  },
  product: {
    type: Object({
      title: String,
      price: Number,
      description: String,
      image: String,
      quantity: Number,
    }),
    required: true,
  },
});
export const Cart = model("cart", cartSchema);
