// src/app/mustardcategory/[slug]/page.jsx
import React from "react";
import ProductDetailClient from "./ProductDetailClient";
import ClientImage from "./ClientImage"; // <-- import the client image component

const mustardVariants = [
  { id: 1, slug: "mustard-15l", name: "Imperial 15 L", size: "15 Litre Tin", short: "Bulk for professional kitchens.", image: "/images/mustard-15l.jpg", price: "3300", originalPrice: "3600", discount: 8, video: "/videos/mustard-demo.mp4", popular: true, badge: "Limited Royal Edition" },
  { id: 2, slug: "mustard-5l", name: "Grandeur 5 L", size: "5 Litre Jar", short: "For premium home kitchens.", image: "/images/mustard-5l-jar.jpg", price: "1100", originalPrice: "1250", discount: 12, video: "/videos/mustard-demo.mp4", popular: true, badge: "Chef’s Choice" },
  { id: 3, slug: "mustard-1l", name: "Signature 1 L", size: "1 Litre", short: "Daily favourite for families.", image: "/images/mustard-1l.jpg", price: "220", video: "/videos/mustard-demo.mp4", popular: true, badge: "World’s Favourite" },
  { id: 4, slug: "mustard-500ml", name: "Elite 500 ml", size: "500 ml", short: "Perfect gift jar.", image: "/images/mustard-500ml.jpg", price: "115", badge: "Gift Ready" },
  { id: 5, slug: "mustard-200ml", name: "Jet-Set 200 ml", size: "200 ml", short: "Travel friendly bottle.", image: "/images/mustard-200ml.jpg", price: "50", badge: "Travel Luxe" },
];

export async function generateStaticParams() {
  return mustardVariants.map((p) => ({ slug: p.slug }));
}

export default function ProductDetailPage({ params }) {
  const { slug } = params;
  const product = mustardVariants.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
        <h1 className="text-4xl font-extrabold text-red-600 mb-4">404 - Product Not Found</h1>
        <p className="text-gray-600 mb-8">The requested product variant could not be located.</p>
        <a href="/mustard-oil" className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-full shadow-lg hover:bg-yellow-600 transition">← Go back to Mustard Oil Variants</a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 p-4 sm:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden grid lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="relative h-96 lg:h-auto bg-gray-200">
          {/* Use the client-side image component to handle onError in browser */}
          <ClientImage src={product.image} alt={product.name} className="w-full h-full object-cover" />

          {product.video && (
            <div className="absolute bottom-4 left-4 inline-block px-3 py-1 bg-black/70 text-white rounded-full text-sm font-medium">
              Cinematic View
            </div>
          )}
        </div>

        <ProductDetailClient product={product} />
      </div>
    </div>
  );
}
