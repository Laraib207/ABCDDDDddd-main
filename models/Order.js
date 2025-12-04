import mongoose from "mongoose";
const OrderSchema = new mongoose.Schema({
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      title: String,
      price: Number,
      qty: Number,
    }
  ],
  total: Number,
  name: String,
  email: String,
  phone: String,
  address: String,
  paymentMethod: { type: String, default: "COD" },
  status: { type: String, default: "pending" },
  createdAt: { type: Date, default: Date.now },
});
export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
