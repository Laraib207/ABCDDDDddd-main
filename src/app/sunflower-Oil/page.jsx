// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";

// // SUNFLOWER OIL VARIANTS DATA
// const sunflowerVariants = [
//   {
//     id: 1,
//     slug: "sunflower-15l",
//     name: "Golden 15 Liter Tin",
//     size: "15 Liter",
//     short: "Perfect for restaurants, caterers, and big families. Light and heart-friendly golden oil for every kitchen.",
//     image: "/images/sunflower-15l.jpg",
//     price: "",
//     originalPrice: "",
//     discount: 10,
//     video: "/videos/sunflower-demo.mp4",
//     popular: true,
//   },
//   {
//     id: 2,
//     slug: "sunflower-5l",
//     name: "Family 5 Liter Jar",
//     size: "5 Liter",
//     short: "Convenient 5L jar for homes that cook daily — refined for taste, purity, and health.",
//     image: "/images/sunflower-5l-jar.jpg",
//     price: "",
//     originalPrice: "",
//     discount: 12,
//     video: "/videos/sunflower-demo.mp4",
//     popular: true,
//   },
//   {
//     id: 3,
//     slug: "sunflower-1l",
//     name: "Everyday 1 Liter Bottle",
//     size: "1 Liter",
//     short: "Your go-to bottle for everyday cooking — light, aromatic, and nutrition-packed.",
//     image: "/images/sunflower-1l.jpg",
//     price: "",
//     video: "/videos/sunflower-demo.mp4",
//     popular: true,
//   },
//   {
//     id: 4,
//     slug: "sunflower-500ml",
//     name: "Compact 500ml Bottle",
//     size: "500ml",
//     short: "Portable, fresh, and handy for bachelors and small kitchens with sunny taste of purity.",
//     image: "/images/sunflower-500ml.jpg",
//     price: "",
//     video: "/videos/sunflower-demo.mp4",
//   },
//   {
//     id: 5,
//     slug: "sunflower-200ml",
//     name: "Sun Mini 200ml Bottle",
//     size: "200ml",
//     short: "Travel-friendly pure sunflower goodness. Perfect for short trips and office kitchens.",
//     image: "/images/sunflower-200ml.jpg",
//     price: "",
//     video: "/videos/sunflower-demo.mp4",
//   },
// ];

// // CYCLIC ORBIT SHOWCASE
// function RotatingShowcase({ items = [] }) {
//   const n = items.length || 1;
//   const [index, setIndex] = useState(0);
//   const [radius, setRadius] = useState(140);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     function setFromWidth() {
//       if (!containerRef.current) return;
//       const w = containerRef.current.clientWidth;
//       setRadius(Math.min(Math.max(w * 0.18, 90), 160));
//     }
//     setFromWidth();
//     window.addEventListener("resize", setFromWidth);
//     return () => window.removeEventListener("resize", setFromWidth);
//   }, []);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "ArrowRight") setIndex((i) => (i + 1) % n);
//       if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + n) % n);
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [n]);

//   const longText = {
//     goodness:
//       "Veer Bharat Sunflower Oil is carefully refined to retain natural nutrients and deliver clear golden brilliance. It's rich in vitamin E, omega-6 fatty acids, and antioxidants contributing to cell repair and healthy metabolism.",
//     benefits:
//       "Highly versatile for sautéing, frying, and baking with its neutral aroma and high smoke point. Cholesterol-free and low in saturated fats — making it ideal for heart-conscious cooking. Adds lightness to every meal.",
//     rating:
//       "Loved nationwide for its golden purity, balance, and clean flavor. Recommended by chefs and fitness enthusiasts. Trusted across India for quality, transparency, and taste brilliance.",
//   };

//   if (!items.length) return null;

//   return (
//     <section
//       ref={containerRef}
//       className="max-w-7xl mx-auto px-2 sm:px-4 mb-14 w-full relative"
//     >
//       <div className="grid gap-10 md:grid-cols-2 items-center">
//         {/* LEFT: Product Text */}
//         <div className="space-y-5 order-2 md:order-1">
//           <motion.h2
//             key={`title-${index}`}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//             className="text-3xl md:text-5xl font-extrabold text-[#1b2a3a] tracking-tight"
//           >
//             {items[index].name}
//           </motion.h2>
//           <motion.p
//             key={`desc-${index}`}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: 0.1 }}
//             className="text-base md:text-xl text-slate-700 font-medium"
//           >
//             {items[index].short}
//           </motion.p>
//           <motion.div
//             key={`details-${index}`}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: 0.2 }}
//             className="mt-4 p-5 sm:p-8 bg-white rounded-3xl shadow-xl border-2 border-yellow-100"
//           >
//             <h3 className="text-lg md:text-2xl font-bold mb-2 text-yellow-600 flex items-center gap-2">
//               <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>{" "}
//               Goodness
//             </h3>
//             <p className="text-base text-slate-700">{longText.goodness}</p>
//             <h3 className="text-lg md:text-2xl font-bold mt-5 mb-2 text-yellow-600 flex items-center gap-2">
//               <span className="w-2 h-2 bg-yellow-500 rounded-full"></span> Benefits
//             </h3>
//             <p className="text-base text-slate-700">{longText.benefits}</p>
//             <h3 className="text-lg md:text-2xl font-bold mt-5 mb-2 text-yellow-600 flex items-center gap-2">
//               <span className="w-2 h-2 bg-yellow-500 rounded-full"></span> Market
//               Rating
//             </h3>
//             <p className="text-base text-slate-700">{longText.rating}</p>
//           </motion.div>
//           <div className="mt-5 flex items-center gap-3">
//             <span className="text-2xl md:text-4xl font-black text-yellow-600">
//               ₹{items[index].price}
//             </span>
//             <span className="text-base md:text-lg text-gray-500">
//               ({items[index].size})
//             </span>
//           </div>
//           <div className="mt-5">
//             <Link
//               href="/products"
//               className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
//             >
//               View All Products →
//             </Link>
//           </div>
//         </div>

//         {/* RIGHT: CIRCULAR ORBIT DISPLAY */}
//         <div className="relative flex items-center justify-center w-full min-h-[360px] md:min-h-[520px] order-1 md:order-2">
//           <button
//             onClick={() => setIndex((i) => (i + 1) % n)}
//             aria-label="Prev"
//             className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border-2 border-yellow-400 hover:bg-yellow-50 flex items-center justify-center text-2xl font-bold text-yellow-600 md:static md:left-0"
//           >
//             ‹
//           </button>

//           <div className="relative w-[280px] h-[280px] xs:w-[320px] xs:h-[320px] sm:w-[360px] sm:h-[360px] md:w-[440px] md:h-[440px] flex items-center justify-center">
//             <motion.div
//               className="absolute inset-0 rounded-full z-[1]"
//               style={{
//                 background:
//                   "radial-gradient(circle, rgba(253,224,71,0.25) 0%, rgba(253,224,71,0.15) 60%, transparent 100%)",
//               }}
//               animate={{ scale: [1, 1.08, 1] }}
//               transition={{
//                 duration: 3.5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />
//             <svg
//               viewBox="0 0 300 300"
//               className="absolute inset-0 w-full h-full pointer-events-none z-[2]"
//             >
//               <defs>
//                 <filter id="glow-yellow">
//                   <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
//                   <feMerge>
//                     <feMergeNode in="coloredBlur" />
//                     <feMergeNode in="SourceGraphic" />
//                   </feMerge>
//                 </filter>
//               </defs>
//               <circle
//                 cx="150"
//                 cy="150"
//                 r="120"
//                 stroke="#FACC15"
//                 strokeWidth="4"
//                 fill="none"
//                 strokeDasharray="10 8"
//                 filter="url(#glow-yellow)"
//                 opacity="0.75"
//               />
//             </svg>

//             {items.map((it, i) => {
//               const positionIndex = (i - index + n) % n;
//               const baseAngle = (positionIndex * 360) / n;
//               const rad = (baseAngle * Math.PI) / 180;
//               const x = Math.sin(rad) * radius;
//               const y = -Math.cos(rad) * radius;
//               const isActive = positionIndex === 0;
//               const size = isActive ? 150 : 85;

//               return (
//                 <motion.div
//                   key={it.id}
//                   className="absolute cursor-pointer z-[3]"
//                   onClick={() => setIndex(i)}
//                   initial={false}
//                   animate={{ x, y }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 180,
//                     damping: 22,
//                     mass: 0.6,
//                   }}
//                   style={{
//                     left: "50%",
//                     top: "50%",
//                     width: size,
//                     height: size,
//                     marginLeft: -size / 2,
//                     marginTop: -size / 2,
//                   }}
//                 >
//                   <motion.div
//                     className="relative rounded-2xl overflow-hidden bg-white w-full h-full"
//                     animate={{
//                       scale: isActive ? 1.1 : 1,
//                       boxShadow: isActive
//                         ? "0 20px 40px rgba(250,204,21,0.4), 0 8px 20px rgba(0,0,0,0.15)"
//                         : "0 6px 18px rgba(0,0,0,0.12)",
//                     }}
//                     transition={{ duration: 0.35 }}
//                     style={{
//                       border: isActive
//                         ? "3px solid #FACC15"
//                         : "2px solid rgba(0,0,0,0.08)",
//                     }}
//                   >
//                     <img
//                       src={it.image}
//                       alt={it.name}
//                       className={`w-full h-full object-cover transition-all duration-300 ${
//                         isActive ? "brightness-110" : "brightness-90"
//                       }`}
//                       loading="lazy"
//                     />
//                     {isActive && (
//                       <motion.div
//                         initial={{ opacity: 0, scale: 0.95 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.3 }}
//                         className="absolute inset-0 border-4 border-yellow-400 rounded-2xl pointer-events-none"
//                       />
//                     )}
//                   </motion.div>
//                 </motion.div>
//               );
//             })}
//           </div>

//           <button
//             onClick={() => setIndex((i) => (i - 1 + n) % n)}
//             aria-label="Next"
//             className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border-2 border-yellow-400 hover:bg-yellow-50 flex items-center justify-center text-2xl font-bold text-yellow-600 md:static md:right-0"
//           >
//             ›
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function SunflowerOilPage() {
//   const [modalVideo, setModalVideo] = useState(null);
//   const closeModal = () => setModalVideo(null);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") closeModal();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   const showcaseItems = sunflowerVariants.slice(0, 4);

//   return (
//     <main
//       style={{ background: "#fffbea" }}
//       className="min-h-screen py-6 sm:py-12"
//     >
//       <div className="max-w-7xl mx-auto px-2 sm:px-6 relative w-full">
//         <RotatingShowcase items={showcaseItems} />

//         <header className="mb-8 sm:mb-12 text-center">
//           <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-700 mb-3 tracking-tight">
//             Veer Bharat Premium Sunflower Oil
//           </h1>
//           <p className="mt-2 text-base sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
//             Golden, pure, and light as sunshine — the perfect start to every healthy meal.
//           </p>
//         </header>

//         {/* Product Grid Section */}
//         <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 sm:gap-10">
//           {sunflowerVariants.map((product) => (
//             <article
//               key={product.id}
//               className="relative group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
//             >
//               {product.popular && (
//                 <div className="absolute top-4 right-4 z-10 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-sm font-bold shadow-lg">
//                   ☀️ Popular Choice
//                 </div>
//               )}

//               <div className="relative h-56 xs:h-64 sm:h-72 md:h-80 w-full overflow-hidden">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </div>

//               <div className="p-4 sm:p-6 md:p-8">
//                 <div className="text-sm font-bold text-yellow-600 mb-2">
//                   {product.size}
//                 </div>
//                 <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
//                   {product.name}
//                 </h2>
//                 <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
//                   {product.short}
//                 </p>

//                 <div className="mt-4 flex items-center gap-3">
//                   <span className="text-2xl md:text-3xl font-black text-yellow-600">
//                     ₹{product.price}
//                   </span>
//                   {product.originalPrice && (
//                     <span className="text-lg text-gray-400 line-through">
//                       ₹{product.originalPrice}
//                     </span>
//                   )}
//                   {product.discount && (
//                     <span className="text-sm font-bold text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">
//                       {product.discount}% OFF
//                     </span>
//                   )}
//                 </div>

//                 <div className="mt-5 flex flex-col xs:flex-row gap-2 xs:gap-3">
//                   <button onClick={() => addToCart(product)} className="flex-1 text-center rounded-full px-4 py-2.5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-base md:text-lg">
//                     🛒 Add to Cart
//                   </button>
//                   <button
//                     onClick={() =>
//                       setModalVideo({
//                         src: product.video || "/videos/sunflower-demo.mp4",
//                         name: product.name,
//                       })
//                     }
//                     className="rounded-full px-4 py-2 xs:px-5 xs:py-3 border-2 border-yellow-400 hover:bg-yellow-50 transition-all duration-300 font-semibold text-base md:text-lg"
//                   >
//                     🎥 Demo
//                   </button>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* MODAL FOR VIDEO */}
//         <AnimatePresence>
//           {modalVideo && (
//             <motion.div
//               key="video-modal"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.18 }}
//               className="fixed inset-0 z-[300] flex items-center justify-center p-2 xs:p-4 sm:p-6"
//             >
//               <div
//                 className="absolute inset-0 bg-black/70"
//                 onClick={closeModal}
//               />
//               <motion.div
//                 initial={{ scale: 0.96, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.96, opacity: 0 }}
//                 transition={{ duration: 0.18 }}
//                 className="relative w-full max-w-lg xs:max-w-2xl md:max-w-3xl rounded-2xl overflow-hidden shadow-2xl bg-black"
//               >
//                 <div className="absolute right-3 top-3 z-20">
//                   <button
//                     onClick={closeModal}
//                     className="rounded-full bg-white/90 px-3 py-2 hover:bg-white transition"
//                   >
//                     ✕ Close
//                   </button>
//                 </div>
//                 <video
//                   src={modalVideo.src}
//                   controls
//                   autoPlay
//                   className="w-full h-[220px] xs:h-[330px] md:h-[60vh] object-cover bg-black"
//                 />
//                 <div className="p-3 xs:p-4 bg-gradient-to-t from-black/40 to-transparent text-white flex items-center justify-between">
//                   <div>
//                     <div className="text-base xs:text-lg font-bold">
//                       {modalVideo.name}
//                     </div>
//                     <div className="text-xs xs:text-sm text-white/80">
//                       Veer Bharat — Premium Sunflower Oil
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </main>
//   );
// }





"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

/* ------------------------------------------------------------- */
/* 1.  Cart (Reused from previous examples)                      */
/* ------------------------------------------------------------- */
const addToCart = (p) => {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const idx = cart.findIndex((i) => i.productId === p.slug);
  // NOTE: Prices were empty in the original data. Assuming default price of 100 if empty.
  const itemPrice = p.price ? parseFloat(p.price.replace(/,/g, "")) : 100;
  
  if (idx > -1) cart[idx].qty += 1;
  else cart.push({ productId: p.slug, qty: 1, price: itemPrice, title: p.name });
  
  localStorage.setItem("cart", JSON.stringify(cart));
  const toast = document.createElement("div");
  // Updated Toast style for Sunflower color scheme
  toast.className = "fixed bottom-8 left-1/2 -translate-x-1/2 z-[500] bg-gradient-to-r from-orange-400 to-amber-500 text-black px-6 py-3 rounded-full shadow-2xl font-bold";
  toast.innerText = "✅  Added to cart";
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 1800);
};

/* ------------------------------------------------------------- */
/* 2.  Data (Sunflower Variants with new 'badge' property)       */
/* ------------------------------------------------------------- */
const sunflowerVariants = [
  {
    id: 1,
    slug: "sunflower-15l",
    name: "Radiant 15 L Tin",
    size: "15 Liter Tin",
    short: "The professional bulk standard. Light and heart-friendly golden oil for commercial excellence.",
    image: "/images/sunflower-15l.jpg",
    price: "2,000", // Filled in mock price
    originalPrice: "2,200", // Filled in mock price
    discount: 10,
    video: "/videos/sunflower-demo.mp4",
    popular: true,
    badge: "Food Service Pro", // Added badge
  },
  {
    id: 2,
    slug: "sunflower-5l",
    name: "Sunshine 5 L Jar",
    size: "5 Liter Jar",
    short: "Ideal for daily home use. Convenient 5L jar, refined for taste, purity, and health.",
    image: "/images/sunflower-5l-jar.jpg",
    price: "720", // Filled in mock price
    originalPrice: "820", // Filled in mock price
    discount: 12,
    video: "/videos/sunflower-demo.mp4",
    popular: true,
    badge: "Home Chef's Delight", // Added badge
  },
  {
    id: 3,
    slug: "sunflower-1l",
    name: "Essence 1 L Bottle",
    size: "1 Liter Bottle",
    short: "Your essential daily oil. Light, aromatic, and nutrition-packed for all your go-to recipes.",
    image: "/images/sunflower-1l.jpg",
    price: "165", // Filled in mock price
    video: "/videos/sunflower-demo.mp4",
    popular: true,
    badge: "Daily Go-To", // Added badge
  },
  {
    id: 4,
    slug: "sunflower-500ml",
    name: "Clarity 500 ml",
    size: "500 ml Decanter",
    short: "Small and mighty. Handy for bachelors and small kitchens with the pure golden taste.",
    image: "/images/sunflower-500ml.jpg",
    price: "90", // Filled in mock price
    video: "/videos/sunflower-demo.mp4",
    badge: "Kitchen Starter", // Added badge
  },
  {
    id: 5,
    slug: "sunflower-200ml",
    name: "Lumen 200 ml",
    size: "200 ml Miniature",
    short: "Pocket-sized perfection. Travel-friendly pure sunflower goodness for short trips and office.",
    image: "/images/sunflower-200ml.jpg",
    price: "45", // Filled in mock price
    video: "/videos/sunflower-demo.mp4",
    badge: "Travel Luxe", // Added badge
  },
];

/* ------------------------------------------------------------- */
/* 3.  Hero Billboard (Adapted for Sunflower)                    */
/* ------------------------------------------------------------- */
function HeroBillboardSunflower() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % sunflowerVariants.length), 5000);
    return () => clearInterval(t);
  }, []);
  const v = sunflowerVariants[idx];
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden text-white">
      <div className="absolute inset-0 z-0">
        <img src={v.image} alt={v.name} className="w-full h-full object-cover scale-110 blur-sm brightness-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>
      <motion.div key={idx} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 text-center max-w-4xl px-4">
        <div className="mb-4 inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm font-semibold tracking-widest">{v.badge}</div>
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-200">Veer Bharat {v.name}</h1> {/* Name/Color change */}
        <p className="mt-4 text-lg md:text-2xl text-gray-200">{v.short}</p>
        <div className="mt-8 flex items-center justify-center gap-6">
          <span className="text-4xl md:text-6xl font-black text-amber-400">₹{v.price}</span> {/* Color change */}
          {v.originalPrice && <span className="text-xl text-gray-400 line-through">₹{v.originalPrice}</span>}
        </div>
        <div className="mt-8 flex gap-4 justify-center">
          <button onClick={() => addToCart(v)} className="rounded-full px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold shadow-2xl hover:scale-105 transition">Add to Cart</button> {/* Color change */}
          <Link href="#all" className="rounded-full px-8 py-4 border-2 border-white text-white font-bold hover:bg-white hover:text-black transition">Explore All</Link>
        </div>
      </motion.div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {sunflowerVariants.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)} className={`w-2 h-2 rounded-full ${i === idx ? "bg-amber-400" : "bg-white/30"}`} /> // Color change
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- */
/* 4.  Cinematic Video Modal (Adapted for Sunflower)             */
/* ------------------------------------------------------------- */
function SunflowerVideoModal({ modal, close }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);
  return (
    <AnimatePresence>
      {modal && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur" onClick={close}>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl bg-black" onClick={(e) => e.stopPropagation()}>
            <button onClick={close} className="absolute top-6 right-6 z-20 rounded-full bg-white/90 px-4 py-2 text-black font-bold">✕</button>
            <video src={modal.src} controls autoPlay className="w-full h-[70vh] object-cover" />
            <div className="p-6 bg-gradient-to-t from-black to-transparent text-white">
              <div className="font-bold text-2xl">{modal.name}</div>
              <div className="text-sm opacity-80">Veer Bharat — Premium Sunflower Oil</div> {/* Name change */}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------- */
/* 5.  Per-Variant Luxe Section (Adapted for Sunflower)          */
/* ------------------------------------------------------------- */
function VariantSectionSunflower({ product, index, setModal }) {
  const isEven = index % 2 === 0;
  const [reveal, setReveal] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setReveal(e.isIntersecting), { threshold: 0.3 });
    io.observe(document.getElementById(product.slug));
    return () => io.disconnect();
  }, [product.slug]);

  const openVideoModal = () => {
    setModal({
      src: product.video || "/videos/sunflower-demo.mp4",
      name: product.name,
    });
  };

  return (
    <section id={product.slug} className={`py-24 px-4 ${isEven ? "bg-gradient-to-br from-neutral-50 via-yellow-50 to-amber-100" : "bg-gradient-to-br from-neutral-900 via-gray-900 to-black text-white"}`}> {/* Color change */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={reveal ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
      >
        {/* Text Block */}
        <div className={`space-y-6 ${!isEven && "lg:order-2"}`}>
          <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-black text-sm font-semibold tracking-widest">{product.badge}</div> {/* Color change */}
          <h2 className={`text-4xl lg:text-6xl font-extrabold ${isEven ? "text-gray-900" : "text-white"}`}>{product.name}</h2>
          <p className={`text-lg ${isEven ? "text-gray-700" : "text-gray-300"}`}>{product.short}</p>
          <div className="flex items-center gap-6">
            <span className="text-4xl font-black text-amber-500">₹{product.price}</span> {/* Color change */}
            {product.originalPrice && <span className="text-xl line-through opacity-60">₹{product.originalPrice}</span>}
            {product.discount && <span className="px-3 py-1 rounded-full bg-red-500 text-white text-sm font-bold">{product.discount}% OFF</span>}
          </div>
          <div className="flex gap-4">
            <button onClick={() => addToCart(product)} className="rounded-full px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold shadow-2xl hover:scale-105 transition">Add to Cart</button> {/* Color change */}
            <button onClick={openVideoModal} className={`rounded-full px-8 py-4 border-2 ${isEven ? "border-gray-900 text-gray-900" : "border-white text-white"} font-bold hover:scale-105 transition`}>🎥 Watch Story</button>
          </div>
          {/* micro specs - Adapted for Sunflower Oil */}
          <ul className={`grid grid-cols-2 gap-4 text-sm ${isEven ? "text-gray-600" : "text-gray-400"}`}>
            <li className="flex items-center gap-2"><span className="text-amber-500">✓</span> High Vitamin E</li> {/* Color change */}
            <li className="flex items-center gap-2"><span className="text-amber-500">✓</span> Light & Versatile</li> {/* Color change */}
            <li className="flex items-center gap-2"><span className="text-amber-500">✓</span> Neutral Aroma</li> {/* Color change */}
            <li className="flex items-center gap-2"><span className="text-amber-500">✓</span> High Smoke Point</li> {/* Color change */}
          </ul>
        </div>

        {/* Image Block */}
        <div className={`relative ${!isEven && "lg:order-1"}`}>
          <div className="relative w-full h-96 lg:h-[32rem] rounded-3xl overflow-hidden group">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
            {product.popular && (
              <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold shadow-lg">🔥 Best Seller</div>
            )}
          </div>
          {/* floating card */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={reveal ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-8 -right-8 bg-white/80 backdrop-blur rounded-2xl p-4 shadow-2xl"
          >
            <div className="text-xs text-gray-500">Size</div>
            <div className="text-xl font-extrabold text-gray-900">{product.size}</div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------- */
/* 6.  Grand Finale CTA (Adapted for Sunflower)                  */
/* ------------------------------------------------------------- */
function FinalCTASunflower() {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 text-black"> {/* Color change */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-4xl md:text-6xl font-extrabold">Golden Purity, Sunny Taste</h2>
        <p className="text-xl">Light, neutral, and rich in Vitamin E—perfect for frying, baking, and everyday meals.</p>
        <div className="flex gap-4 justify-center">
          <Link href="/checkout" className="rounded-full px-8 py-4 bg-black text-white font-bold shadow-2xl hover:scale-105 transition">Checkout →</Link>
          <Link href="/" className="rounded-full px-8 py-4 border-2 border-black font-bold hover:bg-black hover:text-white transition">Back Home</Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- */
/* 7.  Page Shell (Sunflower)                                    */
/* ------------------------------------------------------------- */
export default function SunflowerOilPage() {
  const [modal, setModal] = useState(null);
  return (
    <>
      <HeroBillboardSunflower />
      <div id="all">
        {sunflowerVariants.map((p, i) => (
          <VariantSectionSunflower key={p.id} product={p} index={i} setModal={setModal} />
        ))}
      </div>
      <FinalCTASunflower />
      <SunflowerVideoModal modal={modal} close={() => setModal(null)} />
    </>
  );
}