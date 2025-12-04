import mongoose from "mongoose";
const CartSchema = new mongoose.Schema({
  items: [{ productId: String, qty: Number, price: Number }],
  sessionId: String, // or userId if auth exists
  updatedAt: { type: Date, default: Date.now }
});
export default mongoose.models.Cart || mongoose.model("Cart", CartSchema);
