// "use client";

// import { notFound } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { products } from "../../../data/products";

// export default function ProductDetail({ params }) {
//   const product = products.find((p) => p.slug === params.slug);
//   if (!product) return notFound();

//   return (
//     <main>
//       {/* Hero */}
//       <section
//         className="relative w-full"
//         style={{ height: "clamp(60vh,85vh,92vh)" }}
//       >
//         <Image
//           src={product.image}
//           alt={product.name}
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0.4))]" />
//         <div className="relative z-10 container h-full flex flex-col justify-end pb-10">
//           <div className="badge">
//             {product.highlights.slice(0, 3).join(" • ")}
//           </div>
//           <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold">
//             {product.name}
//           </h1>
//           <p className="mt-2 text-lg text-ink-700">{product.tagline}</p>
//           <div className="mt-5 flex gap-3">
//             <Link href="/contact" className="btn-primary">
//               Enquire
//             </Link>
//             <Link href="/products" className="btn-ghost">
//               Back to Products
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Content */}
//       <section className="container py-10 grid gap-8 md:grid-cols-[1.2fr_1fr]">
//         <article className="card p-6">
//           <h2 className="text-2xl font-extrabold">About {product.name}</h2>
//           <p className="mt-3 text-ink-700 leading-relaxed">{product.long}</p>
//           <div className="mt-6 flex flex-wrap gap-2">
//             {product.highlights.map((h) => (
//               <span key={h} className="badge">
//                 {h}
//               </span>
//             ))}
//           </div>
//         </article>

//         <aside className="space-y-4">
//           {product.gallery.map((src, i) => (
//             <div
//               key={i}
//               className="relative h-48 rounded-2xl overflow-hidden border border-cream-300 bg-white/70"
//             >
//               <Image
//                 src={src}
//                 alt={`${product.name} ${i + 1}`}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           ))}
//           <div className="card p-4">
//             <h3 className="font-extrabold">Pack Sizes</h3>
//             <p className="text-sm text-ink-500 mt-1">
//               500 ml • 1 L • 2 L • 5 L (varies by product)
//             </p>
//           </div>
//         </aside>
//       </section>
//     </main>
//   );
// }




"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products } from "../../../data/products";

export default function ProductDetail({ params }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  const highlights = product.highlights || ["Pure", "Lab-tested", "Cold-pressed"];
  const gallery = product.gallery || [product.image];
  const long = product.long || product.short || "";
  const tagline = product.tagline || "The best of tradition meets taste and nutrition.";

  return (
    <main style={{ background: "#fef9c3" }} className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative w-full"
        style={{ height: "clamp(60vh,80vh,92vh)" }}
      >
        <div className="absolute inset-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.83),rgba(255,255,255,0.38))]" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-end pb-10 px-4 md:px-6">
          <div className="flex flex-wrap gap-2 items-center mb-3">
            {highlights.slice(0, 3).map((hl) => (
              <span
                key={hl}
                className="inline-block bg-amber-100 text-amber-800 rounded-full px-3 py-1 text-xs font-semibold shadow-sm"
              >
                {hl}
              </span>
            ))}
          </div>
          <h1 className="mt-2 text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1b2a3a] leading-tight">
            {product.name}
          </h1>
          <p className="mt-3 text-base md:text-lg text-gray-700 max-w-xl leading-relaxed">
            {tagline}
          </p>
          <div className="mt-6 flex flex-col xs:flex-row gap-3 md:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-base md:text-lg"
            >
              Enquire Now →
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 border-2 border-amber-500 text-amber-700 font-bold hover:bg-amber-50 transition-all duration-300 text-base md:text-lg"
            >
              ← Back to Products
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section - Fixed Grid Layout */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-8 sm:py-12">
        <div className="grid gap-6 md:gap-10 grid-cols-1 md:grid-cols-2">
          {/* Left Column - About Product */}
          <article className="bg-white/90 rounded-3xl shadow-xl p-5 xs:p-6 md:p-8 border-2 border-amber-100">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              About {product.name}
            </h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              {long}
            </p>
            <div className="mt-6 pt-6 border-t-2 border-amber-100">
              <h3 className="text-lg font-bold text-amber-700 mb-3">Key Features</h3>
              <div className="flex flex-wrap gap-2">
                {highlights.map((h) => (
                  <span
                    key={h}
                    className="inline-block bg-amber-50 text-amber-800 rounded-full px-4 py-2 text-sm font-semibold border border-amber-200"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Right Column - Gallery & Info */}
          <aside className="space-y-5">
            {/* Gallery Images */}
            {gallery.slice(0, 3).map((src, i) => (
              <div
                key={i}
                className="relative h-40 xs:h-48 sm:h-56 rounded-3xl overflow-hidden border-2 border-amber-200 bg-white shadow-lg"
              >
                <Image
                  src={src}
                  alt={`${product.name} ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}

            {/* Pack Sizes Card */}
            <div className="bg-white/90 shadow-xl rounded-3xl p-5 border-2 border-amber-100">
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">Available Pack Sizes</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="inline-block bg-gradient-to-r from-amber-50 to-amber-100 text-amber-800 rounded-full px-4 py-2 text-sm font-bold border border-amber-200">
                  500 ml
                </span>
                <span className="inline-block bg-gradient-to-r from-amber-50 to-amber-100 text-amber-800 rounde
                d-full px-4 py-2 text-sm font-bold border border-amber-200">
                  1 Litre
                </span>
                <span className="inline-block bg-gradient-to-r from-amber-50 to-amber-100 text-amber-800 rounded-full px-4 py-2 text-sm font-bold border border-amber-200">
                  2 Litres
                </span>
                <span className="inline-block bg-gradient-to-r from-amber-50 to-amber-100 text-amber-800 rounded-full px-4 py-2 text-sm font-bold border border-amber-200">
                  5 Litres
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-3 italic">
                * Pack sizes may vary by product and location
              </p>
            </div>
          </aside>
        </div>

        {/* Additional Information Section */}
        <div className="mt-10 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-3xl p-6 md:p-8 border-2 border-amber-200 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
            Why Choose Veer Bharat?
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div className="bg-white rounded-2xl p-4 shadow-md border border-amber-100">
              <div className="text-3xl mb-2">✓</div>
              <h4 className="font-bold text-gray-900 mb-1">Quality Assured</h4>
              <p className="text-sm text-gray-600">
                Every batch is lab-tested for purity and quality standards
              </p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-md border border-amber-100">
              <div className="text-3xl mb-2">🌾</div>
              <h4 className="font-bold text-gray-900 mb-1">Farm Fresh</h4>
              <p className="text-sm text-gray-600">
                Sourced directly from trusted farmers across India
              </p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-md border border-amber-100">
              <div className="text-3xl mb-2">💚</div>
              <h4 className="font-bold text-gray-900 mb-1">Chemical Free</h4>
              <p className="text-sm text-gray-600">
                No artificial additives, preservatives or chemicals
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}




// "use client";
// import { notFound } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// /* ------------------------------------------------------------------ */
// /* 1.  Same Product Arsenal (copy from page.js)                       */
// /* ------------------------------------------------------------------ */
// const products = [
//   { slug: "soyabean-oil",   name: "Soyabean Oil",        size: "500 ml - 15 L",  price: 195,  short: "Light, neutral & nutrition-forward — lets ingredients shine.",         image: "/images/soyabean.jpg",     video: "/videos/soya.mp4",   badge: "Chef’s Lite Choice", },
//   { slug: "mustard-oil",    name: "Kachi Ghani Mustard", size: "200 ml - 15 L",  price: 220,  short: "Royal pungency, cold-pressed in artisan wooden ghanis.",              image: "/images/mustard.jpg",      video: "/videos/mustard.mp4",badge: "Heritage Gold", },
//   { slug: "rice-bran-oil",  name: "Rice Bran Oil",       size: "500 ml - 5 L",   price: 210,  short: "Heart-healthy γ-oryzanol, velvet finish for gourmet frying.",         image: "/images/ricebran.jpg",     video: "/videos/rb.mp4",     badge: "Gourmet Fry", },
//   { slug: "palm-oil",       name: "Palm Oil",            size: "1 L - 15 L",     price: 140,  short: "Buttery texture, natural β-carotene glow for traditional recipes.",   image: "/images/palm.jpg",         video: "/videos/palm.mp4",   badge: "Tradition Glow", },
//   { slug: "sunflower-oil",  name: "Sunflower Oil",       size: "500 ml - 15 L",  price: 185,  short: "Crystal-light, high smoke-point — everyday brilliance.",               image: "/images/sunflower.jpg",    video: "/videos/sun.mp4",    badge: "Everyday Brilliant", },
//   { slug: "groundnut-oil",  name: "Groundnut Oil",       size: "500 ml - 5 L",   price: 240,  short: "Rich nutty aroma, perfect for tempering & salad dressings.",          image: "/images/groundnut.jpg",    video: "/videos/gn.mp4",     badge: "Nutty Luxe", },
//   { slug: "coconut-oil",    name: "Coconut Oil",         size: "200 ml - 5 L",   price: 280,  short: "Tropical velvet, cold-pressed within 48 hrs of harvest.",             image: "/images/coconut.jpg",      video: "/videos/coco.mp4",   badge: "Tropics in Bottle", },
//   { slug: "sesame-oil",     name: "Sesame Oil",          size: "200 ml - 2 L",   price: 320,  short: "Velvet amber goodness — elevates Asian & continental plates.",        image: "/images/sesame.jpg",       video: "/videos/sesame.mp4", badge: "Continental Velvet", },
//   { slug: "canola-oil",     name: "Canola Oil",          size: "500 ml - 5 L",   price: 225,  short: "Lowest saturated fat, neutral flavour — modern healthy living.",      image: "/images/canola.jpg",       video: "/videos/canola.mp4", badge: "Modern Lean", },
//   { slug: "olive-oil",      name: "Olive Oil",           size: "250 ml - 2 L",   price: 495,  short: "Mediterranean luxury, monocultivar harvest, grassy pepper finish.",   image: "/images/olive.jpg",        video: "/videos/olive.mp4",  badge: "Mediterranean Luxe", },
//   { slug: "brand-rice",     name: "Royal Basmati Rice",  size: "1 kg - 25 kg",   price: 180,  short: "Aged 24 months, extra-long pearl grains — crown of every table.",     image: "/images/rice.jpg",         video: "/videos/rice.mp4",   badge: "Aged Pearl", },
// ];

// /* ------------------------------------------------------------------ */
// /* 2.  Cinematic Video Modal                                         */
// /* ------------------------------------------------------------------ */
// function VideoModal({ src, name, close }) {
//   useEffect(() => {
//     const onKey = (e) => e.key === "Escape" && close();
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [close]);
//   return (
//     <AnimatePresence>
//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur" onClick={close}>
//         <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl bg-black" onClick={(e) => e.stopPropagation()}>
//           <button onClick={close} className="absolute top-6 right-6 z-20 rounded-full bg-white/90 px-4 py-2 text-black font-bold">✕</button>
//           <video src={src} controls autoPlay className="w-full h-[70vh] object-cover" />
//           <div className="p-6 bg-gradient-to-t from-black to-transparent text-white">
//             <div className="font-bold text-2xl">{name}</div>
//             <div className="text-sm opacity-80">Veer Bharat — Premium Oils & Grains</div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }

// /* ------------------------------------------------------------------ */
// /* 3.  Dynamic Page                                                  */
// /* ------------------------------------------------------------------ */
// export default function ProductDetail({ params }) {
//   const product = products.find((p) => p.slug === params.slug);
//   if (!product) return notFound();

//   const [videoOpen, setVideoOpen] = useState(false);
//   const highlights = ["Cold-pressed", "Lab-certified", "Zero preservatives", "Fair-trade sourced"];
//   const gallery = [product.image, product.image, product.image]; // mock gallery

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 dark:from-gray-900 dark:via-black dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
//       {/* HERO Billboard */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden text-white">
//         <div className="absolute inset-0 z-0">
//           <img src={product.image} alt={product.name} className="w-full h-full object-cover scale-110 blur-sm brightness-50" />
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
//         </div>
//         <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 text-center max-w-4xl px-4">
//           <div className="mb-4 inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm font-semibold tracking-widest">{product.badge}</div>
//           <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200">{product.name}</h1>
//           <p className="mt-4 text-lg md:text-2xl text-gray-200">{product.short}</p>
//           <div className="mt-8 flex items-center justify-center gap-6">
//             <span className="text-4xl md:text-6xl font-black text-yellow-400">₹{product.price}</span>
//             <span className="text-xl text-gray-400">({product.size})</span>
//           </div>
//           <div className="mt-8 flex gap-4 justify-center">
//             <button onClick={() => addToCart(product)} className="rounded-full px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold shadow-2xl hover:scale-105 transition">Add to Cart</button>
//             <button onClick={() => setVideoOpen(true)} className="rounded-full px-8 py-4 border-2 border-white text-white font-bold hover:bg-white hover:text-black transition">▶ Watch Story</button>
//           </div>
//         </motion.div>
//       </section>

//       {/* INFO BLOCKS */}
//       <section className="max-w-6xl mx-auto px-4 py-16 grid gap-10 md:grid-cols-2 items-start">
//         <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="bg-white/90 dark:bg-gray-800/50 backdrop-blur rounded-3xl shadow-xl p-6 md:p-8 border border-amber-200 dark:border-amber-400/20">
//           <h2 className="text-3xl md:text-4xl font-extrabold mb-4">About {product.name}</h2>
//           <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{product.short}</p>
//           <div className="mt-6 flex flex-wrap gap-2">
//             {highlights.map((h) => (
//               <span key={h} className="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-sm font-semibold border border-amber-300 dark:border-amber-500/30">{h}</span>
//             ))}
//           </div>
//         </motion.div>

//         <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="bg-white/90 dark:bg-gray-800/50 backdrop-blur rounded-3xl shadow-xl p-6 md:p-8 border border-amber-200 dark:border-amber-400/20">
//           <h3 className="text-2xl font-extrabold mb-4">Available Sizes</h3>
//           <div className="flex flex-wrap gap-3">
//             {product.size.split(" - ").map((s) => (
//               <span key={s} className="px-4 py-2 rounded-full bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/30 dark:to-yellow-900/30 text-amber-800 dark:text-amber-300 font-bold border border-amber-300 dark:border-amber-500/30">{s}</span>
//             ))}
//           </div>
//           <div className="mt-6 flex gap-3">
//             <button onClick={() => addToCart(product)} className="rounded-full px-6 py-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold shadow-lg hover:scale-105 transition">Add to Cart</button>
//             <Link href="/products" className="rounded-full px-6 py-3 border-2 border-amber-500 text-amber-700 dark:text-amber-300 font-bold hover:bg-amber-50 dark:hover:bg-amber-900/30 transition">← All Products</Link>
//           </div>
//         </motion.div>
//       </section>

//       {/* GALLERY */}
//       <section className="max-w-6xl mx-auto px-4 py-12">
//         <h3 className="text-3xl font-extrabold mb-6 text-center">Gallery</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//           {gallery.map((src, i) => (
//             <div key={i} className="relative h-64 rounded-3xl overflow-hidden shadow-xl group">
//               <img src={src} alt={`${product.name} ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* VIDEO MODAL */}
//       <AnimatePresence>{videoOpen && <VideoModal src={product.video} name={product.name} close={() => setVideoOpen(false)} />}</AnimatePresence>
//     </main>
//   );
// }