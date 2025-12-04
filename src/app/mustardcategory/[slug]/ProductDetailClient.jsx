// src/app/mustardcategory/[slug]/ProductDetailClient.jsx
"use client";

import React from "react";

const addToCart = (p) => {
  try {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const idx = cart.findIndex((i) => i.productId === p.slug);
    if (idx > -1) cart[idx].qty += 1;
    else cart.push({ productId: p.slug, qty: 1, price: parseFloat((p.price || "0").toString().replace(/,/g, "")), title: p.name });
    localStorage.setItem("cart", JSON.stringify(cart));

    const toast = document.createElement("div");
    toast.className = "fixed bottom-8 left-1/2 -translate-x-1/2 z-[500] bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-6 py-3 rounded-full shadow-2xl font-bold";
    toast.innerText = `✅ Added ${p.name} to Cart`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 1800);
  } catch (err) {
    console.error("Cart error", err);
  }
};

export default function ProductDetailClient({ product }) {
  return (
    <div className="p-6 lg:p-10 space-y-6">
      <a href="/mustard-oil" className="text-sm text-yellow-600 font-medium hover:underline">
        ← Back to All Variants
      </a>

      <div className="inline-block px-4 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-semibold">{product.badge}</div>

      <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">{product.name}</h1>
      <p className="text-xl text-gray-700 font-semibold">{product.size}</p>
      <p className="text-gray-600 border-b border-gray-100 pb-6">{product.short}</p>

      <div className="flex items-center gap-6 pt-4">
        <span className="text-5xl font-black text-yellow-600">₹{product.price}</span>
        {product.originalPrice && <span className="text-xl text-gray-400 line-through">₹{product.originalPrice}</span>}
        {product.discount && <span className="px-3 py-1 rounded-full bg-red-500 text-white text-base font-bold shadow-md">{product.discount}% OFF</span>}
      </div>

      <button
        onClick={() => addToCart(product)}
        className="mt-6 w-full rounded-full px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold shadow-xl hover:scale-[1.01] transition duration-300"
      >
        Add to Cart Now
      </button>

      <ul className="grid grid-cols-2 gap-4 text-sm text-gray-700 pt-4 border-t border-gray-100">
        <li className="flex items-center gap-2 font-medium"><span className="text-yellow-500 text-xl">•</span> 100% Kachi Ghani</li>
        <li className="flex items-center gap-2 font-medium"><span className="text-yellow-500 text-xl">•</span> Certified Organic</li>
        <li className="flex items-center gap-2 font-medium"><span className="text-yellow-500 text-xl">•</span> High Smoke Point</li>
        <li className="flex items-center gap-2 font-medium"><span className="text-yellow-500 text-xl">•</span> Farm to Table Purity</li>
      </ul>
    </div>
  );
}




