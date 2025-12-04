import dotenv from "dotenv";
dotenv.config({ path: "../.env.local" });
import mongoose from "mongoose";
import Product from "../models/Product.js";
import { dbConnect } from "../lib/mongoose.js";

async function seed() {
  await dbConnect();
  await Product.deleteMany({});
  const products = await Product.create([
    { title: "Veer Bharat Mustard Oil 1L", slug: "mustard-1l", price: 320, stock: 50, images: ["/images/mustard-1l.jpg"], category: "Mustard" },
    { title: "Veer Bharat Soybean Oil 1L", slug: "soy-1l", price: 280, stock: 80, images: ["/images/soyabean-1l.jpg"], category: "Soybean" },
  ]);
  console.log("Seeded products:");
  products.forEach(p => console.log(`ID: ${p._id}, Slug: ${p.slug}`));
  process.exit();
}
seed();
