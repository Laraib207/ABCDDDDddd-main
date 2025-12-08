// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";

// // Add to Cart function
// const addToCart = (product) => {
//   let cart = JSON.parse(localStorage.getItem("cart") || "[]");
//   const idx = cart.findIndex(i => i.productId === product.slug); // Use slug as productId since static
//   if (idx > -1) cart[idx].qty += 1;
//   else cart.push({ productId: product.slug, qty: 1, price: product.price || 0, title: product.name });
//   localStorage.setItem("cart", JSON.stringify(cart));
//   alert("Added to cart");
// };

// // PRODUCTS DATA
// const products = [
//   {
//     slug: "soyabean-oil",
//     name: "Soyabean Oil",
//     short:
//       "Light, versatile and nutrition-forward—lets ingredients shine without heaviness.",
//     image: "/images/soyabeennnn.jpg",
//     price: "",
//     video: "/product-demo.mp4",
//   },
//   {
//     slug: "mustard-oil",
//     name: "Kachi Ghani Mustard Oil",
//     short:
//       "Traditional cold-pressed purity with authentic aroma and robust flavor.",
//     image: "/images/musterddd.jpg",
//     price: "",
//     video: "/product-demo.mp4",
//   },
//   {
//     slug: "rice-bran-oil",
//     name: "Rice Bran Oil",
//     short:
//       "Heart-healthy choice with balanced nutrition, high smoke point ideal for deep frying.",
//     image: "/images/soyabeennnn.jpg",
//     price: "",
//     video: "/product-demo.mp4",
//   },
//   {
//     slug: "palm-oil",
//     name: "Palm Oil",
//     short: "Rich, versatile cooking oil perfect for traditional recipes.",
//     image: "/images/musterddd.jpg",
//     price: "",
//     video: "/product-demo.mp4",
//   },
//   {
//     slug: "sunflower-oil",
//     name: "Sunflower Oil",
//     short:
//       "Light golden oil with neutral taste, perfect for all-purpose cooking.",
//     image: "/images/soyabeennnn.jpg",
//     price: "",
//     video: "/product-demo.mp4",
//   },
//   {
//     slug: "brand-rice",
//     name: "Brand Rice",
//     short: "Premium quality rice with authentic aroma and perfect texture.",
//     image: "/images/musterddd.jpg",
//     price: "",
//     video: "/product-demo.mp4",
//   },
// ];

// // Cyclic Orbit Showcase - images stay fixed, active one moves to top
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
//       "Veer Bharat oils are crafted with careful attention to purity and traditional techniques. Our Kachi Ghani and refined ranges are made from selected seeds and processed using temperature and hygiene controls to preserve natural flavour and nutrients.",
//     benefits:
//       "Health-forward and versatile — our oils bring balanced fatty-acid profiles suitable for a variety of Indian recipes. We source responsibly and work with small farmers so you get consistent taste with improved transparency and fair pricing.",
//     rating:
//       "Market reception has been strong in regional pilots — customers praise the authentic aroma and consistent performance across cooking methods.",
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
//             className="mt-4 p-5 sm:p-8 bg-white rounded-3xl shadow-xl border-2 border-amber-100"
//           >
//             <h3 className="text-lg md:text-2xl font-bold mb-2 text-amber-600 flex items-center gap-2">
//               <span className="w-2 h-2 bg-amber-500 rounded-full"></span>{" "}
//               Goodness
//             </h3>
//             <p className="text-base text-slate-700">{longText.goodness}</p>
//             <h3 className="text-lg md:text-2xl font-bold mt-5 mb-2 text-amber-600 flex items-center gap-2">
//               <span className="w-2 h-2 bg-amber-500 rounded-full"></span>{" "}
//               Benefits
//             </h3>
//             <p className="text-base text-slate-700">{longText.benefits}</p>
//             <h3 className="text-lg md:text-2xl font-bold mt-5 mb-2 text-amber-600 flex items-center gap-2">
//               <span className="w-2 h-2 bg-amber-500 rounded-full"></span> Market
//               Rating
//             </h3>
//             <p className="text-base text-slate-700">{longText.rating}</p>
//           </motion.div>
//           <div className="mt-5">
//             <Link
//               href={`/${items[index].slug}`}
//               className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
//             >
//               View Product →
//             </Link>
//           </div>
//         </div>

//         {/* RIGHT: Cyclic Orbit */}
//         <div className="relative flex items-center justify-center w-full min-h-[360px] md:min-h-[520px] order-1 md:order-2">
//           <button
//             onClick={() => setIndex((i) => (i + 1) % n)}
//             aria-label="Previous"
//             className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border-2 border-amber-400 hover:bg-amber-50 flex items-center justify-center text-2xl font-bold text-amber-600 md:static md:left-0"
//           >
//             ‹
//           </button>
//           <div className="relative w-[280px] h-[280px] xs:w-[320px] xs:h-[320px] sm:w-[360px] sm:h-[360px] md:w-[440px] md:h-[440px] flex items-center justify-center">
//             {/* Animated background glow */}
//             <motion.div
//               className="absolute inset-0 rounded-full z-[1]"
//               style={{
//                 background:
//                   "radial-gradient(circle, rgba(251,191,36,0.2) 0%, rgba(251,191,36,0.1) 60%, transparent 100%)",
//               }}
//               animate={{ scale: [1, 1.08, 1] }}
//               transition={{
//                 duration: 3.5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />
//             {/* Orbit ring */}
//             <svg
//               viewBox="0 0 300 300"
//               className="absolute inset-0 w-full h-full pointer-events-none z-[2]"
//             >
//               <defs>
//                 <filter id="glow">
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
//                 stroke="#F59E0B"
//                 strokeWidth="4"
//                 fill="none"
//                 strokeDasharray="10 8"
//                 filter="url(#glow)"
//                 opacity="0.7"
//               />
//             </svg>

//             {/* Product images in circular orbital positions */}
//             {items.map((it, i) => {
//               // Calculate position offset based on active index
//               const positionIndex = (i - index + n) % n;
//               // Start from top (0 degrees = top center), then go clockwise
//               const baseAngle = (positionIndex * 360) / n;
//               const rad = (baseAngle * Math.PI) / 180;
//               const x = Math.sin(rad) * radius;
//               const y = -Math.cos(rad) * radius; // Negative because y increases downward

//               const isActive = positionIndex === 0; // Top position (north)
//               const size = isActive ? 150 : 85;

//               return (
//                 <motion.div
//                   key={it.slug}
//                   className="absolute cursor-pointer z-[3]"
//                   onClick={() => {
//                     setIndex(i);
//                   }}
//                   initial={false}
//                   animate={{
//                     x: x,
//                     y: y,
//                   }}
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
//                         ? "0 20px 40px rgba(245, 158, 11, 0.35), 0 8px 20px rgba(0,0,0,0.15)"
//                         : "0 6px 18px rgba(0,0,0,0.12)",
//                     }}
//                     transition={{ duration: 0.35 }}
//                     style={{
//                       border: isActive
//                         ? "3px solid #F59E0B"
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
//                         className="absolute inset-0 border-4 border-amber-400 rounded-2xl pointer-events-none"
//                       />
//                     )}
//                   </motion.div>
//                 </motion.div>
//               );
//             })}
//           </div>
//           <button
//             onClick={() => setIndex((i) => (i - 1 + n) % n) }
//             aria-label="Next"
//             className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border-2 border-amber-400 hover:bg-amber-50 flex items-center justify-center text-2xl font-bold text-amber-600 md:static md:right-0"
//           >
//             ›
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function ProductsPage() {
//   const [modalVideo, setModalVideo] = useState(null);
//   const closeModal = () => setModalVideo(null);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") closeModal();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   // Top 4 for showcase
//   const showcaseItems = products.slice(0, 4);

//   // SIDEBAR/COLLAPSE-STYLE MENU (for mobile)
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const goHome = () => setSidebarOpen(false);
//   const goBlog = () => setSidebarOpen(false);
//   const [productsOpen, setProductsOpen] = useState(true);
//   const toggleProducts = () => setProductsOpen((p) => !p);
//   const goAllProducts = () => setSidebarOpen(false);
//   const goSoyabeanOil = () => setSidebarOpen(false);
//   const goMustardOil = () => setSidebarOpen(false);
//   const goPalmOil = () => setSidebarOpen(false);
//   const prevProduct = () => {};
//   const nextProduct = () => {};
//   const closeMenu = () => setSidebarOpen(false);

//   return (
//     <main
//       style={{ background: "#fef9c3" }}
//       className="min-h-screen py-6 sm:py-12"
//     >
//       {/* CONTAINER WITH PROPER Z-INDEX CONTROL */}
//       <div className="max-w-7xl mx-auto px-2 sm:px-6 relative w-full">
//         {/* Responsive Mobile/Tablet Sidebar/Drawer - Z-INDEX 200 */}
//         {sidebarOpen && (
//           <div
//             className="fixed inset-0 z-[200] bg-black/40 flex justify-end md:hidden"
//             onClick={(e) => {
//               if (e.target === e.currentTarget) closeMenu();
//             }}
//           >
//             <aside
//               className="relative w-full max-w-xs bg-gradient-to-b from-[#f1e0f5] to-[#f7f5fa] rounded-bl-3xl rounded-tl-3xl shadow-lg min-h-screen flex flex-col overflow-y-auto"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Header */}
//               <div className="flex items-center justify-between px-5 py-4 border-b border-white/30">
//                 <div className="flex items-center gap-2">
//                   <img src="/logo.svg" alt="Logo" className="h-8 w-8" loading="lazy" />
//                   <div>
//                     <div className="text-lg font-extrabold text-[#1b346d]">
//                       VEER BHARAT
//                     </div>
//                     <div className="text-xs font-semibold text-pink-700">
//                       वाह! मज़ा आ गया
//                     </div>
//                   </div>
//                 </div>
//                 <button
//                   onClick={closeMenu}
//                   className="bg-white hover:bg-pink-100 rounded-full p-2 shadow"
//                   aria-label="Close"
//                 >
//                   ✕
//                 </button>
//               </div>
//               {/* Product/Carousel col */}
//               <div className="flex flex-col items-center py-5 px-2 w-full">
//                 <div className="relative w-40 h-40">
//                   <img
//                     src="/images/mustard-card.jpg"
//                     alt="Mustard Oil Card"
//                     className="rounded-2xl shadow-lg w-full h-full object-cover"
//                     loading="lazy"
//                   />
//                   <button
//                     onClick={prevProduct}
//                     className="absolute left-[-18px] top-1/2 -translate-y-1/2 rounded-full bg-white border border-amber-400 shadow-lg w-7 h-7 flex items-center justify-center text-xl font-bold text-amber-600"
//                   >
//                     ‹
//                   </button>
//                   <button
//                     onClick={nextProduct}
//                     className="absolute right-[-18px] top-1/2 -translate-y-1/2 rounded-full bg-white border border-amber-400 shadow-lg w-7 h-7 flex items-center justify-center text-xl font-bold text-amber-600"
//                   >
//                     ›
//                   </button>
//                 </div>
//                 <div className="mt-2 text-center font-bold text-base text-amber-800">
//                   100% Nature Fresh
//                   <br />
//                   Kachi Ghani Mustard Oil
//                 </div>
//               </div>
//               {/* Menu nav */}
//               <nav className="flex flex-col gap-0.5 px-3 pb-6">
//                 <button
//                   className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl mb-1 shadow"
//                   onClick={goHome}
//                 >
//                   <span className="material-icons text-amber-500">home</span>
//                   <span className="font-semibold text-[#1b346d]">Home</span>
//                 </button>
//                 <button
//                   className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl mb-1 shadow"
//                   onClick={goBlog}
//                 >
//                   <span className="material-icons text-amber-500">article</span>
//                   <span className="font-semibold text-[#1b346d]">Blog</span>
//                 </button>
//                 {/* Products Dropdown */}
//                 <div className="bg-white rounded-xl shadow mb-2">
//                   <button
//                     onClick={toggleProducts}
//                     className="w-full flex items-center justify-between px-4 py-3 font-semibold text-[#1b346d]"
//                   >
//                     <span className="flex items-center gap-2">
//                       <span className="material-icons text-amber-500">
//                         shopping_bag
//                       </span>
//                       Products
//                     </span>
//                     <span className="material-icons text-amber-500">
//                       {productsOpen ? "expand_less" : "expand_more"}
//                     </span>
//                   </button>
//                   {productsOpen && (
//                     <div className="flex flex-col gap-0.5 pb-2">
//                       <button
//                         onClick={goAllProducts}
//                         className="w-full text-left px-8 py-2 text-sm text-[#1b346d] hover:bg-amber-50 rounded"
//                       >
//                         All Products
//                       </button>
//                       <button
//                         onClick={goSoyabeanOil}
//                         className="w-full text-left px-8 py-2 text-sm text-[#1b346d] hover:bg-amber-50 rounded"
//                       >
//                         Soyabean Oil
//                       </button>
//                       <button
//                         onClick={goMustardOil}
//                         className="w-full text-left px-8 py-2 text-sm text-[#1b346d] hover:bg-amber-50 rounded"
//                       >
//                         Mustard Oil
//                       </button>
//                       <button
//                         onClick={goPalmOil}
//                         className="w-full text-left px-8 py-2 text-sm text-[#1b346d] hover:bg-amber-50 rounded"
//                       >
//                         Palm Oil
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </nav>
//             </aside>
//           </div>
//         )}

//         {/* Orbit Showcase - STAYS BELOW NAVBAR (no high z-index) */}
//         <RotatingShowcase items={showcaseItems} />

//         {/* Page header */}
//         <header className="mb-8 sm:mb-12 text-center">
//           <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-3 tracking-tight">
//             Our Full Range of Premium Products
//           </h1>
//           <p className="mt-2 text-base sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
//             Handpicked edible oils & culinary essentials — crafted for taste,
//             health and everyday confidence.
//           </p>
//         </header>

//        {/* Products Grid */}
// <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 sm:gap-10">
//   {products.map((product) => (
//     <article
//       key={product.slug}
//       className="relative group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
//     >
      
//       {/* Product Image */}
//       <div className="relative h-56 xs:h-64 sm:h-72 md:h-80 w-full overflow-hidden">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//           loading="lazy"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//       </div>

//       {/* Product Content */}
//       <div className="p-4 sm:p-6 md:p-8">
        
//         {/* Product Name */}
//         <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
//           {product.name}
//         </h2>
        
//         {/* Product Description */}
//         <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
//           {product.short}
//         </p>

//         {/* Price */}
//         <div className="mt-3 flex items-center gap-2">
//           {product.price && (
//             <span className="text-base md:text-lg font-bold px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-50 to-amber-100 text-amber-700 border-2 border-amber-200">
//               ₹{product.price}
//             </span>
//           )}
//         </div>

//         {/* Action Buttons */}
//         <div className="mt-5 flex flex-col xs:flex-row gap-2 xs:gap-3">
          
//           {/* View Product Button */}
//           <Link
//             href={`/${product.slug}`}
//             className="flex-1 text-center rounded-full px-4 py-2.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-base md:text-lg"
//           >
//             View Product →
//           </Link>
          
//           {/* Demo Button */}
//           <button
//             onClick={() =>
//               setModalVideo({
//                 src: product.video || "/product-demo.mp4",
//                 name: product.name,
//               })
//             }
//             className="rounded-full px-4 py-2 xs:px-5 xs:py-3 border-2 border-amber-400 hover:bg-amber-50 transition-all duration-300 font-semibold text-base md:text-lg"
//           >
//             Demo
//           </button>
//         </div>
//       </div>
//     </article>
//   ))}
// </div>

//         {/* VIDEO MODAL - HIGHEST Z-INDEX */}
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
//                     Close
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
//                       Veer Bharat — product demo
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








// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";

// /* ------------------------------------------------------------------ */
// /* 1.  Cart                                                           */
// /* ------------------------------------------------------------------ */
// const addToCart = (p) => {
//   let cart = JSON.parse(localStorage.getItem("cart") || "[]");
//   const idx = cart.findIndex((i) => i.productId === p.slug);
//   if (idx > -1) cart[idx].qty += 1;
//   else cart.push({ productId: p.slug, qty: 1, price: p.price || 0, title: p.name });
//   localStorage.setItem("cart", JSON.stringify(cart));
//   const toast = document.createElement("div");
//   toast.className = "fixed bottom-8 left-1/2 -translate-x-1/2 z-[500] bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-6 py-3 rounded-full shadow-2xl font-bold";
//   toast.innerText = "✅  Added to cart";
//   document.body.appendChild(toast);
//   setTimeout(() => toast.remove(), 1800);
// };

// /* ------------------------------------------------------------------ */
// // price: 220,
// // price: 220,
// // price: 210,
// // price: 140,
// // price: 185,
// // price: 240,
// // price: 280,
// // price: 320,
// // price: 225,
// // price: 495,
// // price: 180,
// // price: 590,
// // price: 650,
// // price: 380,
// // price: 890,
// /* 2.  Mega Luxury Product Arsenal                                    */
// /* ------------------------------------------------------------------ */
// const products = [
//   { slug: "soyabean-oil",   name: "Soyabean Oil",        size: "500 ml – 15 L", price:200, short: "Light, neutral & nutrition-forward — lets ingredients shine.",         image: "/images/soyabean-1l.jpg",     video: "/videos/soya.mp4",   badge: "Chef’s Lite Choice", },
//   { slug: "mustard-oil",    name: "Kachi Ghani Mustard", size: "200 ml – 15 L",    short: "Royal pungency, cold-pressed in artisan wooden ghanis.",              image: "/images/mustard-5l-jar.jpg",      video: "/videos/mustard.mp4",badge: "Heritage Gold", },
//   { slug: "rice-bran-oil",  name: "Rice Bran ",       size: "500 ml – 5 L",        short: "Heart-healthy γ-oryzanol, velvet finish for gourmet frying.",         image: "/images/rice-bran-1.jpg",     video: "/videos/rb.mp4",     badge: "Gourmet Fry", },
//   { slug: "palm-oil",       name: "Palm Oil",            size: "1 L – 15 L",       short: "Buttery texture, natural β-carotene glow for traditional recipes.",   image: "/images/palm-blog.jpg",         video: "/videos/palm.mp4",   badge: "Tradition Glow", },
//   { slug: "sunflower-oil",  name: "Sunflower Oil",       size: "500 ml – 15 L",    short: "Crystal-light, high smoke-point — everyday brilliance.",               image: "/images/sunflower.jpg",    video: "/videos/sun.mp4",    badge: "Everyday Brilliant", },
//   { slug: "groundnut-oil",  name: "Groundnut Oil",       size: "500 ml – 5 L",     short: "Rich nutty aroma, perfect for tempering & salad dressings.",          image: "/images/groundnut.jpg",    video: "/videos/gn.mp4",     badge: "Nutty Luxe", },
//   { slug: "coconut-oil",    name: "Coconut Oil",         size: "200 ml – 5 L",     short: "Tropical velvet, cold-pressed within 48 hrs of harvest.",             image: "/images/coconut.jpg",      video: "/videos/coco.mp4",   badge: "Tropics in Bottle", },
//   { slug: "sesame-oil",     name: "Sesame Oil",          size: "200 ml – 2 L",     short: "Velvet amber goodness — elevates Asian & continental plates.",        image: "/images/sesame.jpg",       video: "/videos/sesame.mp4", badge: "Continental Velvet", },
//   { slug: "canola-oil",     name: "Canola Oil",          size: "500 ml – 5 L",     short: "Lowest saturated fat, neutral flavour — modern healthy living.",      image: "/images/canola.jpg",       video: "/videos/canola.mp4", badge: "Modern Lean", },
//   { slug: "olive-oil",      name: "Olive Oil",           size: "250 ml – 2 L",     short: "Mediterranean luxury, monocultivar harvest, grassy pepper finish.",   image: "/images/olive.jpg",        video: "/videos/olive.mp4",  badge: "Mediterranean Luxe", },
//   { slug: "brand-rice",     name: "Royal Basmati Rice",  size: "1 kg – 25 kg",     short: "Aged 24 months, extra-long pearl grains — crown of every table.",     image: "/images/rice.jpg",         video: "/videos/rice.mp4",   badge: "Aged Pearl", },
//   { slug: "avocado-oil",    name: "Avocado Oil",         size: "250 ml – 2 L",     short: "Emerald-green, highest smoke-point — chef’s secret weapon.",          image: "/images/avocado.jpg",      video: "/videos/avocado.mp4",badge: "Chef’s Secret", },
//   { slug: "walnut-oil",     name: "Walnut Oil",          size: "100 ml – 1 L",     short: "Liquid gold, delicate walnut essence — finishing drizzle royalty.",   image: "/images/walnut.jpg",       video: "/videos/walnut.mp4", badge: "Finishing Royalty", },
//   { slug: "flaxseed-oil",   name: "Flaxseed Oil",        size: "100 ml – 500 ml",  short: "Plant-based omega-3 powerhouse — vegan wellness icon.",               image: "/images/flax.jpg",         video: "/videos/flax.mp4",   badge: "Vegan Omega", },
//   { slug: "truffle-oil",    name: "Truffle Infused Oil", size: "50 ml – 250 ml",   short: "Black-truffle aroma, micro-dosed luxury — molecular-gastronomy star.",image: "/images/truffle.jpg",      video: "/videos/truffle.mp4",badge: "Molecular Star", },
// ];

// /* ------------------------------------------------------------------ */
// /* 3.  3-D Flip Card                                                 */
// /* ------------------------------------------------------------------ */
// function FlipCard({ product }) {
//   const [flipped, setFlipped] = useState(false);
//   return (
//     <div className="group [perspective:1000px]">
//       <motion.div
//         className="relative w-full h-full rounded-3xl shadow-xl transition-transform duration-700 [transform-style:preserve-3d]"
//         animate={{ rotateY: flipped ? 180 : 0 }}
//         onClick={() => setFlipped((s) => !s)}
//       >
//         {/* FRONT */}
//         <div className="absolute inset-0 [backface-visibility:hidden] rounded-3xl overflow-hidden bg-white">
//           <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold shadow-lg">
//             {product.badge}
//           </div>
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full h-64 object-cover"
//           />
//           <div className="p-6">
//             <div className="text-sm font-bold text-amber-600 mb-1">{product.size}</div>
//             <h3 className="text-2xl font-extrabold text-gray-900 mb-2">{product.name}</h3>
//             <p className="text-gray-600 text-sm">{product.short}</p>
//             <div className="mt-4 flex items-center gap-3">
//               <span className="text-3xl font-black text-amber-500">₹{product.price}</span>
//             </div>
//             <div className="mt-4 flex gap-2">
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   addToCart(product);
//                 }}
//                 className="flex-1 rounded-full px-4 py-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold shadow-lg hover:shadow-xl hover:scale-105 transition"
//               >
//                 🛒 Add
//               </button>
//               <button className="rounded-full px-4 py-2 border-2 border-amber-400 hover:bg-amber-50 transition">Demo</button>
//             </div>
//           </div>
//         </div>

//         {/* BACK */}
//         <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl overflow-hidden bg-gradient-to-br from-amber-400 to-yellow-600 text-white p-6 flex flex-col justify-between">
//           <div>
//             <h3 className="text-2xl font-extrabold mb-2">Why this?</h3>
//             <ul className="space-y-2 text-sm">
//               <li>✅ Cold-pressed nutrients locked-in</li>
//               <li>✅ Omega-3 & MUFA rich</li>
//               <li>✅ Zero preservatives</li>
//               <li>✅ Lab-certified purity</li>
//             </ul>
//           </div>
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               addToCart(product);
//             }}
//             className="w-full rounded-full px-4 py-2 bg-white text-black font-bold shadow-lg hover:scale-105 transition"
//           >
//             Grab it →
//           </button>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// /* ------------------------------------------------------------------ */
// /* 4.  Neon Orbit Showcase                                           */
// /* ------------------------------------------------------------------ */
// function NeonOrbit({ items }) {
//   const n = items.length;
//   const [index, setIndex] = useState(0);
//   const radius = 140;

//   useEffect(() => {
//     const handle = setInterval(() => setIndex((i) => (i + 1) % n), 4000);
//     return () => clearInterval(handle);
//   }, [n]);

//   return (
//     <section className="max-w-7xl mx-auto px-4 mb-20">
//       <div className="grid md:grid-cols-2 gap-10 items-center">
//         {/* LEFT */}
//         <div className="space-y-6">
//           <motion.h2
//             key={`title-${index}`}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300"
//           >
//             {items[index].name}
//           </motion.h2>
//           <motion.p
//             key={`desc-${index}`}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-lg text-gray-300"
//           >
//             {items[index].short}
//           </motion.p>
//           <motion.div
//             key={`price-${index}`}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="flex items-center gap-4"
//           >
//             <span className="text-4xl font-black text-yellow-400">₹{items[index].price}</span>
//             <span className="text-gray-400">({items[index].size})</span>
//           </motion.div>
//           <div className="flex gap-4">
//             <button
//               onClick={() => addToCart(items[index])}
//               className="rounded-full px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold shadow-lg hover:shadow-xl hover:scale-105 transition"
//             >
//               Add to Cart
//             </button>
//             <Link
//               href={`/${items[index].slug}`}
//               className="rounded-full px-6 py-3 border-2 border-yellow-400 text-yellow-400 font-bold hover:bg-yellow-400 hover:text-black transition"
//             >
//               View Details →
//             </Link>
//           </div>
//         </div>

//         {/* RIGHT - ORBIT */}
//         <div className="relative w-full h-[400px] flex items-center justify-center">
//           {/* glow */}
//           <motion.div
//             className="absolute inset-0 rounded-full z-0"
//             style={{
//               background:
//                 "radial-gradient(circle, rgba(234,179,8,0.25) 0%, transparent 70%)",
//             }}
//             animate={{ scale: [1, 1.15, 1] }}
//             transition={{ duration: 3, repeat: Infinity }}
//           />
//           {/* orbit line */}
//           <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
//             <circle
//               cx="50%"
//               cy="50%"
//               r={radius}
//               stroke="#EAB308"
//               strokeWidth="3"
//               fill="none"
//               strokeDasharray="8 8"
//               opacity="0.6"
//             />
//           </svg>

//           {/* items */}
//           {items.map((it, i) => {
//             const angle = ((i - index + n) % n) * (360 / n);
//             const rad = (angle * Math.PI) / 180;
//             const x = Math.sin(rad) * radius;
//             const y = -Math.cos(rad) * radius;
//             const isActive = i === index;
//             return (
//               <motion.div
//                 key={it.id}
//                 className="absolute z-20 cursor-pointer"
//                 animate={{ x, y }}
//                 transition={{ type: "spring", stiffness: 200, damping: 20 }}
//                 style={{
//                   left: "50%",
//                   top: "50%",
//                   width: isActive ? 140 : 80,
//                   height: isActive ? 140 : 80,
//                   marginLeft: isActive ? -70 : -40,
//                   marginTop: isActive ? -70 : -40,
//                 }}
//                 onClick={() => setIndex(i)}
//               >
//                 <div
//                   className={`w-full h-full rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
//                     isActive
//                       ? "border-yellow-400 shadow-2xl shadow-yellow-500/50"
//                       : "border-white/20"
//                   }`}
//                 >
//                   <img
//                     src={it.image}
//                     alt={it.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ------------------------------------------------------------------ */
// /* 5.  Cinematic Video Modal                                         */
// /* ------------------------------------------------------------------ */
// function VideoModal({ modal, close }) {
//   useEffect(() => {
//     const onKey = (e) => e.key === "Escape" && close();
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [close]);
//   return (
//     <AnimatePresence>
//       {modal && (
//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur" onClick={close}>
//           <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl bg-black" onClick={(e) => e.stopPropagation()}>
//             <button onClick={close} className="absolute top-6 right-6 z-20 rounded-full bg-white/90 px-4 py-2 text-black font-bold">✕</button>
//             <video src={modal.src} controls autoPlay className="w-full h-[70vh] object-cover" />
//             <div className="p-6 bg-gradient-to-t from-black to-transparent text-white">
//               <div className="font-bold text-2xl">{modal.name}</div>
//               <div className="text-sm opacity-80">Veer Bharat — Premium Oils & Grains</div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// /* ------------------------------------------------------------------ */
// /* 6.  Dark-mode toggle                                              */
// /* ------------------------------------------------------------------ */
// function ThemeToggle() {
//   const [dark, setDark] = useState(false);
//   useEffect(() => {
//     const saved = localStorage.getItem("theme") === "dark";
//     setDark(saved);
//     if (saved) document.documentElement.classList.add("dark");
//   }, []);
//   const toggle = () => {
//     document.documentElement.classList.toggle("dark");
//     const newMode = !dark;
//     setDark(newMode);
//     localStorage.setItem("theme", newMode ? "dark" : "light");
//   };
//   return (
//     <button onClick={toggle} className="fixed top-6 right-6 z-50 rounded-full w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-500 text-black flex items-center justify-center shadow-lg hover:scale-110 transition" aria-label="Toggle theme">{dark ? "🌞" : "🌙"}</button>
//   );
// }

// /* ------------------------------------------------------------------ */
// /* 7.  Page Shell                                                    */
// /* ------------------------------------------------------------------ */
// export default function ProductsPage() {
//   const [modal, setModal] = useState(null);
//   const showcase = products.slice(0, 4);
//   return (
//     <>
//       <ThemeToggle />
//       <main className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 dark:from-gray-900 dark:via-black dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
//         <div className="max-w-7xl mx-auto px-4 py-12">
//           <header className="mb-16 text-center">
//             <h1 className="text-4xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400">Global Luxury Oils</h1>
//             <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">Cold-pressed, nutrient-rich, authentically crafted for the modern gourmet.</p>
//           </header>

//           {/* Neon Orbit Showcase */}
//           <NeonOrbit items={showcase} />

//           {/* 3-D Flip Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {products.map((p) => (
//               <FlipCard key={p.slug} product={p} />
//             ))}
//           </div>
//         </div>
//       </main>
//       <VideoModal modal={modal} close={() => setModal(null)} />
//     </>
//   );
// }










// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import { ShoppingCart, Info, ChevronLeft, ChevronRight } from "lucide-react";

// /* ------------------------------------------------------------------ */
// /* 1. Configuration: Colors and Filtered Data                          */
// /* ------------------------------------------------------------------ */

// // --- NEW MIXED COLOR PALETTE ---
// const COLOR_PRIMARY = "#7E30E1"; // Vibrant Deep Purple (Accent)
// const COLOR_SECONDARY = "#FFF8E7"; // Pale Creamy Yellow (Main Background)
// const COLOR_ACCENT_HOVER = "#5D24AA"; // Darker Purple for button hover

// // Filtered Product Data (Only those with slugs present in the original data)
// const products = [
//     { slug: "soyabean-oil", name: "Soyabean Oil", size: "500 ml – 15 L", price: 200, short: "Light, neutral & nutrition-forward — lets ingredients shine.", image: "/images/soyabean-1l.jpg", video: "/videos/soya.mp4", badge: "Chef’s Lite Choice", },
//     { slug: "mustard-oil", name: "Kachi Ghani Mustard", size: "200 ml – 15 L", price: 250, short: "Royal pungency, cold-pressed in artisan wooden ghanis.", image: "/images/mustard-5l-jar.jpg", video: "/videos/mustard.mp4", badge: "Heritage Gold", },
//     { slug: "rice-bran-oil", name: "Rice Bran", size: "500 ml – 5 L", price: 280, short: "Heart-healthy γ-oryzanol, velvet finish for gourmet frying.", image: "/images/rice-bran-1.jpg", video: "/videos/rb.mp4", badge: "Gourmet Fry", },
//     { slug: "palm-oil", name: "Palm Oil", size: "1 L – 15 L", price: 150, short: "Buttery texture, natural β-carotene glow for traditional recipes.", image: "/images/palm-blog.jpg", video: "/videos/palm.mp4", badge: "Tradition Glow", },
//     { slug: "sunflower-oil", name: "Sunflower Oil", size: "500 ml – 15 L", price: 220, short: "Crystal-light, high smoke-point — everyday brilliance.", image: "/images/sunflower.jpg", video: "/videos/sun.mp4", badge: "Everyday Brilliant", },
//     { slug: "groundnut-oil", name: "Groundnut Oil", size: "500 ml – 5 L", price: 300, short: "Rich nutty aroma, perfect for tempering & salad dressings.", image: "/images/groundnut.jpg", video: "/videos/gn.mp4", badge: "Nutty Luxe", },
//     { slug: "coconut-oil", name: "Coconut Oil", size: "200 ml – 5 L", price: 350, short: "Tropical velvet, cold-pressed within 48 hrs of harvest.", image: "/images/coconut.jpg", video: "/videos/coco.mp4", badge: "Tropics in Bottle", },
//     { slug: "sesame-oil", name: "Sesame Oil", size: "200 ml – 2 L", price: 400, short: "Velvet amber goodness — elevates Asian & continental plates.", image: "/images/sesame.jpg", video: "/videos/sesame.mp4", badge: "Continental Velvet", },
//     { slug: "canola-oil", name: "Canola Oil", size: "500 ml – 5 L", price: 210, short: "Lowest saturated fat, neutral flavour — modern healthy living.", image: "/images/canola.jpg", video: "/videos/canola.mp4", badge: "Modern Lean", },
//     { slug: "olive-oil", name: "Olive Oil", size: "250 ml – 2 L", price: 500, short: "Mediterranean luxury, monocultivar harvest, grassy pepper finish.", image: "/images/olive.jpg", video: "/videos/olive.mp4", badge: "Mediterranean Luxe", },
//     { slug: "brand-rice", name: "Royal Basmati Rice", size: "1 kg – 25 kg", price: 1500, short: "Aged 24 months, extra-long pearl grains — crown of every table.", image: "/images/rice.jpg", video: "/videos/rice.mp4", badge: "Aged Pearl", },
//     { slug: "avocado-oil", name: "Avocado Oil", size: "250 ml – 2 L", price: 600, short: "Emerald-green, highest smoke-point — chef’s secret weapon.", image: "/images/avocado.jpg", video: "/videos/avocado.mp4", badge: "Chef’s Secret", },
//     { slug: "walnut-oil", name: "Walnut Oil", size: "100 ml – 1 L", price: 700, short: "Liquid gold, delicate walnut essence — finishing drizzle royalty.", image: "/images/walnut.jpg", video: "/videos/walnut.mp4", badge: "Finishing Royalty", },
//     { slug: "flaxseed-oil", name: "Flaxseed Oil", size: "100 ml – 500 ml", price: 380, short: "Plant-based omega-3 powerhouse — vegan wellness icon.", image: "/images/flax.jpg", video: "/videos/flax.mp4", badge: "Vegan Omega", },
//     { slug: "truffle-oil", name: "Truffle Infused Oil", size: "50 ml – 250 ml", price: 850, short: "Black-truffle aroma, micro-dosed luxury — molecular-gastronomy star.", image: "/images/truffle.jpg", video: "/videos/truffle.mp4", badge: "Molecular Star", },
// ];


// /* ------------------------------------------------------------------ */
// /* 2. Cart & Toast Notification (Color Updated)                              */
// /* ------------------------------------------------------------------ */
// const addToCart = (p) => {
//     let cart = JSON.parse(localStorage.getItem("cart") || "[]");
//     const idx = cart.findIndex((i) => i.productId === p.slug);

//     if (idx > -1) {
//         cart[idx].qty += 1;
//     } else {
//         cart.push({ productId: p.slug, qty: 1, price: p.price || 0, title: p.name });
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));

//     const toast = document.createElement("div");
//     // Applying primary color to toast border
//     toast.className = `fixed bottom-8 left-1/2 -translate-x-1/2 z-[500] bg-white text-gray-900 border-2 px-6 py-3 rounded-lg shadow-2xl font-semibold animate-pulse`;
//     toast.style.borderColor = COLOR_PRIMARY;
//     toast.innerText = `✅ Added ${p.name} to Cart!`;
//     document.body.appendChild(toast);

//     setTimeout(() => {
//         toast.remove();
//     }, 1800);
// };


// /* ------------------------------------------------------------------ */
// /* 3. Product Card Component (Color and Link Updated)                                  */
// /* ------------------------------------------------------------------ */
// function ElegantCard({ product }) {
//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true, amount: 0.2 }}
//             className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 ease-in-out border border-gray-100 dark:border-gray-700"
//         >
//             <div className="relative overflow-hidden">
//                 <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-90"
//                     loading="lazy"
//                 />
//                 <div className="absolute top-0 right-0 text-white text-xs font-bold px-3 py-1 rounded-bl-lg shadow-md" style={{ backgroundColor: COLOR_PRIMARY }}>
//                     {product.badge}
//                 </div>
//             </div>
            
//             <div className="p-6 text-center">
//                 <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-2">{product.name}</h3>
//                 <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{product.size}</p>
//                 <p className="text-gray-600 dark:text-gray-300 text-sm italic line-clamp-2 min-h-[40px]">{product.short}</p>

//                 <div className="flex items-center justify-center mt-4 mb-4">
//                     <span className="text-4xl font-serif font-extrabold" style={{ color: COLOR_PRIMARY }}>
//                         ₹{product.price}
//                     </span>
//                 </div>

//                 <div className="flex flex-col gap-3">
//                     <button
//                         onClick={() => addToCart(product)}
//                         className="flex-1 flex items-center justify-center gap-2 rounded-full px-4 py-2 text-white font-bold shadow-md transition-all duration-300 text-sm"
//                         style={{ backgroundColor: COLOR_PRIMARY }}
//                     >
//                         <ShoppingCart size={18} /> Add to Cart
//                     </button>
                    
//                     {/* Replaced 'Watch Demo' with 'View Product' Link */}
//                     <Link
//                         href={`/${product.slug}`}
//                         className="flex items-center justify-center gap-2 rounded-full px-4 py-2 border font-semibold text-sm transition-all duration-300 hover:opacity-80"
//                         style={{ borderColor: COLOR_PRIMARY, color: COLOR_PRIMARY }}
//                         aria-label={`View details for ${product.name}`}
//                     >
//                         <Info size={18} /> View Product
//                     </Link>
//                 </div>
//             </div>
//         </motion.div>
//     );
// }


// /* ------------------------------------------------------------------ */
// /* 4. Elegant Slider Component (Color and Link Updated)                */
// /* ------------------------------------------------------------------ */
// function ElegantSlider() {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const nextProduct = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
//     };

//     const prevProduct = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
//     };
    
//     // Auto-advance the slider every 5 seconds
//     useEffect(() => {
//       const interval = setInterval(nextProduct, 5000);
//       return () => clearInterval(interval);
//     }, []);

//     const product = products[currentIndex];

//     if (!product) return null;

//     return (
//         <section className={`py-20 md:py-32 border-b`} style={{ backgroundColor: COLOR_SECONDARY }}>
//             <div className="max-w-7xl mx-auto px-4 relative">
                
//                 <AnimatePresence mode="wait">
//                     <motion.div
//                         key={product.slug} 
//                         initial={{ opacity: 0, x: 50 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         exit={{ opacity: 0, x: -50 }}
//                         transition={{ duration: 0.6 }}
//                         className="grid md:grid-cols-2 gap-12 items-center"
//                     >
//                         {/* Text Content */}
//                         <div className="order-2 md:order-1">
//                             <p className="text-sm font-semibold uppercase text-gray-500 mb-2 tracking-widest">
//                                 {product.badge}
//                             </p>
//                             <h1 className="text-6xl md:text-8xl font-serif font-extrabold text-gray-900 dark:text-white mb-6 leading-tight" style={{ color: COLOR_PRIMARY }}>
//                                 {product.name}
//                             </h1>
//                             <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-md">
//                                 {product.short}
//                             </p>
//                             <div className="text-5xl font-serif font-bold mb-8" style={{ color: COLOR_PRIMARY }}>
//                                 ₹{product.price}
//                                 <span className="text-lg font-sans text-gray-500 ml-2">({product.size})</span>
//                             </div>

//                             <div className="flex gap-4">
//                                 <button
//                                     onClick={() => addToCart(product)}
//                                     className="flex items-center gap-2 rounded-full px-8 py-3 text-white font-bold text-lg shadow-xl transition-all duration-300"
//                                     style={{ backgroundColor: COLOR_PRIMARY }}
//                                 >
//                                     <ShoppingCart size={20} /> Purchase Now
//                                 </button>
                                
//                                 {/* Link to Product Page */}
//                                 <Link
//                                     href={`/${product.slug}`}
//                                     className="flex items-center gap-2 rounded-full px-6 py-3 border-2 font-semibold transition-all duration-300 hover:bg-white"
//                                     style={{ borderColor: COLOR_PRIMARY, color: COLOR_PRIMARY }}
//                                 >
//                                     <Info size={20} /> View Product
//                                 </Link>
//                             </div>
//                         </div>

//                         {/* Image */}
//                         <div className="order-1 md:order-2 flex justify-center">
//                             <img
//                                 src={product.image}
//                                 alt={product.name}
//                                 className="w-full max-w-sm h-auto object-contain rounded-xl shadow-2xl ring-4"
//                                 style={{ borderColor: COLOR_PRIMARY }}
//                                 loading="eager"
//                             />
//                         </div>
//                     </motion.div>
//                 </AnimatePresence>

//                 {/* Slider Controls */}
//                 <button 
//                     onClick={prevProduct} 
//                     className="absolute top-1/2 left-0 md:left-4 -translate-y-1/2 p-3 rounded-full bg-white/70 shadow-lg z-10 hover:bg-white transition"
//                     aria-label="Previous Product"
//                 >
//                     <ChevronLeft size={30} style={{ color: COLOR_PRIMARY }} />
//                 </button>
//                 <button 
//                     onClick={nextProduct} 
//                     className="absolute top-1/2 right-0 md:right-4 -translate-y-1/2 p-3 rounded-full bg-white/70 shadow-lg z-10 hover:bg-white transition"
//                     aria-label="Next Product"
//                 >
//                     <ChevronRight size={30} style={{ color: COLOR_PRIMARY }} />
//                 </button>
//             </div>
//         </section>
//     );
// }

// /* ------------------------------------------------------------------ */
// /* 5. Main Showcase Component                                        */
// /* ------------------------------------------------------------------ */
// export default function ProductShowcase() {
//     return (
//         <div className={`min-h-screen bg-gray-50 dark:bg-gray-900`}>
            
//             {/* 1. Slider Section */}
//             <ElegantSlider />
            
//             {/* 2. Main Grid Title */}
//             <section className="max-w-7xl mx-auto px-4 pt-16 pb-10 text-center">
//                 <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-3" style={{ color: COLOR_PRIMARY }}>
//                     The Full Catalogue
//                 </h2>
//                 <p className="text-lg text-gray-600 dark:text-gray-400">
//                     A curated selection of the finest ingredients for the discerning chef.
//                 </p>
//             </section>

//             {/* 3. Product Grid */}
//             <section className="max-w-7xl mx-auto px-4 pb-20">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//                     {products.map((product) => (
//                         <ElegantCard 
//                             key={product.slug} 
//                             product={product} 
//                         />
//                     ))}
//                 </div>
//             </section>
//         </div>
//     );
// }






"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ShoppingCart, Info, ChevronLeft, ChevronRight, Package, Droplet } from "lucide-react";

/* ------------------------------------------------------------------ */
/* 1. Configuration: Colors and Filtered Data                          */
/* ------------------------------------------------------------------ */

// --- MIXED COLOR PALETTE: #7E30E1 (Purple) & #FFF8E7 (Creamy Yellow) ---
const COLOR_PRIMARY = "#7E30E1"; // Vibrant Deep Purple (Accent)
const COLOR_SECONDARY = "#FFF8E7"; // Pale Creamy Yellow (Main Background)

// Filtered Product Data (Only products with dedicated pages in the project root)
const products = [
    { 
        slug: "mustard-oil", 
        name: "Kachi Ghani Mustard", 
        price: 250, 
        short: "Royal pungency, cold-pressed in artisan wooden ghanis.", 
        image: "/images/mustard-5l-jar.jpg", 
        badge: "Heritage Gold",
        variants: [
            { size: "200 ml", slug: "/mustardcategory/mustard-200ml" },
            { size: "500 ml", slug: "/mustardcategory/mustard-500ml" },
            { size: "1 L", slug: "/mustardcategory/mustard-1l" },
            { size: "5 L", slug: "/mustardcategory/mustard-5l" }, // Assuming this links to the specific category
            { size: "15 L", slug: "/mustardcategory/mustard-15l" }
        ] 
    },
    { 
        slug: "soyabean-oil", 
        name: "Soyabean Oil", 
        price: 200, 
        short: "Light, neutral & nutrition-forward — lets ingredients shine.", 
        image: "/images/soyabean-5l-jar.jpg", 
        badge: "Chef’s Lite Choice",
        variants: [
            { size: "500 ml", slug: "/soyabean-oil" },
            { size: "1 L", slug: "/soyabean-oil" },
            { size: "5 L", slug: "/soyabean-oil" },
            { size: "15 L", slug: "/soyabean-oil" }
        ] 
    },
    { 
        slug: "palm-oil", 
        name: "Palm Oil", 
        price: 150, 
        short: "Buttery texture, natural β-carotene glow for traditional recipes.", 
        image: "/images/palm-blog.jpg", 
        badge: "Tradition Glow",
        variants: [
            { size: "1 L", slug: "/palm-oil" },
            { size: "5 L", slug: "/palm-oil" },
            { size: "15 L", slug: "/palm-oil" }
        ] 
    },
    { 
        slug: "sunflower-Oil", 
        name: "Sunflower Oil", 
        price: 220, 
        short: "Crystal-light, high smoke-point — everyday brilliance.", 
        image: "/images/sunflower.jpg", 
        badge: "Everyday Brilliant",
        variants: [
            { size: "500 ml", slug: "/sunflower-Oil" },
            { size: "1 L", slug: "/sunflower-Oil" },
            { size: "5 L", slug: "/sunflower-Oil" },
            { size: "15 L", slug: "/sunflower-Oil" }
        ] 
    },
    { 
        slug: "brand-rice", 
        name: "Royal Basmati Rice", 
        price: 1500, 
        short: "Aged 24 months, extra-long pearl grains — crown of every table.", 
        image: "/images/rice.jpg", 
        badge: "Aged Pearl",
        variants: [
            { size: "1 kg", slug: "/brand-rice" },
            { size: "5 kg", slug: "/brand-rice" },
            { size: "10 kg", slug: "/brand-rice" },
            { size: "25 kg", slug: "/brand-rice" }
        ] 
    },
];


/* ------------------------------------------------------------------ */
/* 2. Cart & Toast Notification (Unchanged)                              */
/* ------------------------------------------------------------------ */
const addToCart = (p) => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const idx = cart.findIndex((i) => i.productId === p.slug);

    if (idx > -1) {
        cart[idx].qty += 1;
    } else {
        cart.push({ productId: p.slug, qty: 1, price: p.price || 0, title: p.name });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    const toast = document.createElement("div");
    toast.className = `fixed bottom-8 left-1/2 -translate-x-1/2 z-[500] bg-white text-gray-900 border-2 px-6 py-3 rounded-lg shadow-2xl font-semibold animate-pulse`;
    toast.style.borderColor = COLOR_PRIMARY;
    toast.innerText = `✅ Added ${p.name} to Cart!`;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 1800);
};


/* ------------------------------------------------------------------ */
/* 3. Product Card Component (With new Variant/Category Section)                      */
/* ------------------------------------------------------------------ */
function ElegantCard({ product }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 ease-in-out border border-gray-100 dark:border-gray-700"
        >
            <div className="relative overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-90"
                    loading="lazy"
                />
                <div className="absolute top-0 right-0 text-white text-xs font-bold px-3 py-1 rounded-bl-lg shadow-md" style={{ backgroundColor: COLOR_PRIMARY }}>
                    {product.badge}
                </div>
            </div>
            
            <div className="p-6 text-center">
                <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-2">{product.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm italic line-clamp-2 min-h-[40px] mb-4">{product.short}</p>

                <div className="flex items-center justify-center mt-4 mb-4">
                    <span className="text-4xl font-serif font-extrabold" style={{ color: COLOR_PRIMARY }}>
                        ₹{product.price}
                    </span>
                </div>

                {/* --- NEW VARIANT/CATEGORY SECTION --- */}
                <div className="mt-4 mb-4 border-t border-b border-gray-100 dark:border-gray-700 py-3">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 flex items-center justify-center">
                        <Package size={16} className="mr-1 text-yellow-600" /> Available Packs
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {product.variants.map((variant, index) => (
                            <Link 
                                key={index} 
                                href={variant.slug}
                                className="text-xs font-medium px-3 py-1 rounded-full border transition-colors duration-200"
                                style={{ 
                                    borderColor: COLOR_PRIMARY, 
                                    color: COLOR_PRIMARY,
                                    backgroundColor: COLOR_SECONDARY,
                                }}
                            >
                                {variant.size}
                            </Link>
                        ))}
                    </div>
                </div>
                {/* ------------------------------------ */}

                <div className="flex flex-col gap-3">
                    {/* Primary action (Purchase) */}
                    <button
                        onClick={() => addToCart(product)}
                        className="flex-1 flex items-center justify-center gap-2 rounded-full px-4 py-2 text-white font-bold shadow-md transition-all duration-300 text-sm"
                        style={{ backgroundColor: COLOR_PRIMARY }}
                    >
                        <ShoppingCart size={18} /> Quick Add
                    </button>
                    
                    {/* Secondary action (View Details) - Links to the general product page */}
                    <Link
                        href={`/${product.slug}`}
                        className="flex items-center justify-center gap-2 rounded-full px-4 py-2 border font-semibold text-sm transition-all duration-300 hover:opacity-80"
                        style={{ borderColor: COLOR_PRIMARY, color: COLOR_PRIMARY }}
                        aria-label={`View details for ${product.name}`}
                    >
                        <Info size={18} /> View Details
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}


/* ------------------------------------------------------------------ */
/* 4. Elegant Slider Component (Automatic motion removed)                */
/* ------------------------------------------------------------------ */
function ElegantSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProduct = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const prevProduct = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };
    
    // Auto-advance removed as per user request

    const product = products[currentIndex];

    if (!product) return null;

    return (
        <section className={`py-20 md:py-32 border-b border-gray-200`} style={{ backgroundColor: COLOR_SECONDARY }}>
            <div className="max-w-7xl mx-auto px-4 relative">
                
                <AnimatePresence mode="wait">
                    <motion.div
                        key={product.slug} 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.6 }}
                        className="grid md:grid-cols-2 gap-12 items-center"
                    >
                        {/* Text Content */}
                        <div className="order-2 md:order-1">
                            <p className="text-sm font-semibold uppercase text-gray-500 mb-2 tracking-widest">
                                {product.badge}
                            </p>
                            <h1 className="text-6xl md:text-8xl font-serif font-extrabold text-gray-900 dark:text-white mb-6 leading-tight" style={{ color: COLOR_PRIMARY }}>
                                {product.name}
                            </h1>
                            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-md">
                                {product.short}
                            </p>
                            <div className="text-5xl font-serif font-bold mb-8" style={{ color: COLOR_PRIMARY }}>
                                ₹{product.price}
                                <span className="text-lg font-sans text-gray-500 ml-2">onwards</span>
                            </div>

                            {/* Variant Links in Slider */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                <p className="text-base font-semibold text-gray-700 dark:text-gray-200 w-full flex items-center mb-1">
                                    <Droplet size={18} className="mr-1 text-blue-500" /> Choose Size:
                                </p>
                                {product.variants.map((variant, index) => (
                                    <Link 
                                        key={index} 
                                        href={variant.slug}
                                        className="text-sm font-medium px-4 py-2 rounded-full border-2 transition-colors duration-200 hover:bg-white"
                                        style={{ 
                                            borderColor: COLOR_PRIMARY, 
                                            color: COLOR_PRIMARY
                                        }}
                                    >
                                        {variant.size}
                                    </Link>
                                ))}
                            </div>


                            <div className="flex gap-4">
                                <button
                                    onClick={() => addToCart(product)}
                                    className="flex items-center gap-2 rounded-full px-8 py-3 text-white font-bold text-lg shadow-xl transition-all duration-300"
                                    style={{ backgroundColor: COLOR_PRIMARY }}
                                >
                                    <ShoppingCart size={20} /> Quick Order
                                </button>
                                
                                {/* Link to Product Page */}
                                <Link
                                    href={`/${product.slug}`}
                                    className="flex items-center gap-2 rounded-full px-6 py-3 border-2 font-semibold transition-all duration-300 hover:bg-white"
                                    style={{ borderColor: COLOR_PRIMARY, color: COLOR_PRIMARY }}
                                >
                                    <Info size={20} /> View All Details
                                </Link>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="order-1 md:order-2 flex justify-center">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full max-w-sm h-auto object-contain rounded-xl shadow-2xl ring-4"
                                style={{ borderColor: COLOR_PRIMARY }}
                                loading="eager"
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Slider Controls */}
                <button 
                    onClick={prevProduct} 
                    className="absolute top-1/2 left-0 md:left-4 -translate-y-1/2 p-3 rounded-full bg-white/70 shadow-lg z-10 hover:bg-white transition"
                    aria-label="Previous Product"
                >
                    <ChevronLeft size={30} style={{ color: COLOR_PRIMARY }} />
                </button>
                <button 
                    onClick={nextProduct} 
                    className="absolute top-1/2 right-0 md:right-4 -translate-y-1/2 p-3 rounded-full bg-white/70 shadow-lg z-10 hover:bg-white transition"
                    aria-label="Next Product"
                >
                    <ChevronRight size={30} style={{ color: COLOR_PRIMARY }} />
                </button>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/* 5. Main Showcase Component                                        */
/* ------------------------------------------------------------------ */
export default function ProductShowcase() {
    return (
        <div className={`min-h-screen bg-gray-50 dark:bg-gray-900`}>
            
            {/* 1. Slider Section */}
            <ElegantSlider />
            
            {/* 2. Main Grid Title */}
            <section className="max-w-7xl mx-auto px-4 pt-16 pb-10 text-center">
                <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-3" style={{ color: COLOR_PRIMARY }}>
                    The Full Catalogue
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    A curated selection of the finest ingredients for the discerning chef.
                </p>
            </section>

            {/* 3. Product Grid */}
            <section className="max-w-7xl mx-auto px-4 pb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ElegantCard 
                            key={product.slug} 
                            product={product} 
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}