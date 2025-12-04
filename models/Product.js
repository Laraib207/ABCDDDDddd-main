import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
  title: String,
  slug: { type: String, unique: true },
  description: String,
  price: Number,
  stock: Number,
  images: [String],
  category: String,
  createdAt: { type: Date, default: Date.now },
});
export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
