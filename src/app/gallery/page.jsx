// // app/gallery/page.jsx
// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";

// const GALLERY_IMAGES = [
//   "/images/1.jpg",
//   "/images/2.jpg",
//   "/images/3.jpg",
//   "/images/4.jpg",
//   "/gallery/5.jpg",
//   "/images/66.jpg",
//   "/gallery/7.jpg",
//   // placeholders (you can replace later)
//   "/images/1.jpg",
//   "/images/2.jpg",
//   "/images/3.jpg",
//   "/images/4.jpg",
//   "/images/5.jpg",
//   "/images/6.jpg",
//   "/images/7.jpg",
//   "/images/1.jpg",
//   "/images/2.jpg",
//   "/images/8.jpg",
//   "/images/9.jpg",
//   "/images/10.jpg",
//   "/images/11.jpg",
//   "/images/12.jpg",
//   "/images/13.jpg",
//   "/images/14.jpg",
//   "/images/15.jpg",
// ];

// export default function GalleryPage() {
//   const [openIndex, setOpenIndex] = useState(-1);

//   return (
//     <main className="min-h-screen bg-[#0f1115] text-white py-12">
//       <div className="max-w-7xl mx-auto px-6">
//         <header className="text-center mb-8">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">Gallery</h1>
//           <p className="mt-2 text-gray-300 max-w-2xl mx-auto">Our best moments and product displays — tap to open.</p>
//         </header>

//         {/* circular grid */}
//         <section>
//           <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
//             {GALLERY_IMAGES.map((src, i) => (
//               <button
//                 key={i}
//                 onClick={() => setOpenIndex(i)}
//                 className="group relative w-full aspect-square rounded-full overflow-hidden flex items-center justify-center border-4 border-white/6 hover:scale-105 transition transform"
//                 aria-label={`Open gallery image ${i + 1}`}
//               >
//                 <div className="w-full h-full relative">
//                   <Image src={src} alt={`gallery-${i + 1}`} fill className="object-cover" />
//                   <div className="absolute inset-0 bg-black/18 group-hover:bg-black/30 transition" />
//                 </div>
//               </button>
//             ))}
//           </div>
//         </section>

//         <footer className="mt-10 text-center text-gray-400">
//           <p>Tip: Replace placeholders by putting images into <code>public/gallery/</code> (1.jpg..7.jpg).</p>
//         </footer>
//       </div>

//       {/* Lightbox modal */}
//       <AnimatePresence>
//         {openIndex >= 0 && (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4">
//             <div className="relative max-w-4xl w-full">
//               <button onClick={() => setOpenIndex(-1)} className="absolute right-2 top-2 z-50 rounded-full bg-white/10 px-3 py-2 text-white hover:bg-white/20 transition">✕</button>

//               <div className="rounded-xl overflow-hidden bg-black shadow-2xl">
//                 <div className="relative w-full aspect-[16/9] bg-black">
//                   <Image src={GALLERY_IMAGES[openIndex]} alt={`full-${openIndex}`} fill className="object-contain" />
//                 </div>
//                 <div className="p-4 text-center">
//                   <p className="text-sm text-gray-300">Image {openIndex + 1} of {GALLERY_IMAGES.length}</p>
//                 </div>

//                 <div className="flex items-center justify-between gap-4 p-4">
//                   <button onClick={() => setOpenIndex((idx) => (idx - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)} className="px-4 py-2 rounded bg-white/6 hover:bg-white/10 transition">Prev</button>

//                   <a href={GALLERY_IMAGES[openIndex]} target="_blank" rel="noreferrer" className="px-4 py-2 rounded bg-amber-400 text-black font-semibold hover:brightness-95 transition">Open in new tab</a>

//                   <button onClick={() => setOpenIndex((idx) => (idx + 1) % GALLERY_IMAGES.length)} className="px-4 py-2 rounded bg-white/6 hover:bg-white/10 transition">Next</button>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </main>
//   );
// }




"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const GALLERY_IMAGES = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/66.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
  "/images/9.jpg",
  "/images/10.jpg",
  "/images/11.jpg",
  "/images/12.jpg",
  "/images/13.jpg",
  "/images/14.jpg",
  "/images/15.jpg",
];

export default function GalleryPage() {
  const [openIndex, setOpenIndex] = useState(-1);
  const [direction, setDirection] = useState(0);

  const swipeLeft = () => {
    setDirection(-1);
    setOpenIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  const swipeRight = () => {
    setDirection(1);
    setOpenIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  };

  return (
    <main className="min-h-screen overflow-hidden" style={{ background: "linear-gradient(135deg, #0E2240 0%, #1B3358 50%, #0E2240 100%)", color: "#fff" }}>
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(183,137,45,0.20),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(201,163,59,0.16),transparent_50%)]"></div>
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full animate-float"
            style={{
              background: "rgba(201,163,59,0.3)",
              left: `${i * 13.3}%`,
              top: `${(i * 17.2) % 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${6 + i % 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 py-20">
        {/* Header */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center mb-8">
            <div className="w-28 h-px rounded-full mr-5" style={{ background: "linear-gradient(to right, transparent, #C9A33B)" }}></div>
            <div className="w-3 h-3 rounded-full" style={{ background: "#C9A33B" }}></div>
            <div className="w-28 h-px rounded-full ml-5" style={{ background: "linear-gradient(to left, transparent, #C9A33B)" }}></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6" style={{ fontFamily: "var(--vb-font-head)", color: "#FBF7EF" }}>
            Visual <span style={{ color: "#C9A33B" }}>Gallery</span>
          </h1>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "#9FB0C6" }}>
            Captured moments of excellence — dive into our visual journey.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <section className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-20">
            {GALLERY_IMAGES.map((src, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setOpenIndex(i)}
                className="group relative w-full aspect-square rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer"
                style={{ background: "rgba(251,247,239,0.05)", border: "1px solid rgba(201,163,59,0.2)" }}
              >
                <div className="absolute inset-0">
                  <Image 
                    src={src} 
                    alt={`Gallery ${i + 1}`}
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-3 right-3 w-9 h-9 text-white font-bold text-sm rounded-xl flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500" style={{ background: "linear-gradient(135deg, #B7892D, #C9A33B)" }}>
                  {i + 1}
                </div>
              </motion.button>
            ))}
          </div>
        </section>
      </div>

      {/* ULTIMATE 3D Lightbox */}
      <AnimatePresence mode="wait">
        {openIndex >= 0 && (
          <motion.div
            key={openIndex}
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-black/95 backdrop-blur-2xl"
          >
            <div className="relative w-full max-w-6xl max-h-screen">
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpenIndex(-1)}
                className="absolute -top-16 right-0 z-50 w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 text-white rounded-3xl shadow-2xl border-4 border-white/20 backdrop-blur-xl flex items-center justify-center text-2xl font-bold hover:shadow-emerald/50 hover:scale-110 transition-all duration-300"
              >
                ✕
              </motion.button>

              {/* Main Image with 3D Effect */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-600 blur-3xl opacity-40 rounded-3xl animate-pulse"></div>
                <motion.div
                  animate={{ x: direction * 100 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-white/5 backdrop-blur-3xl rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 hover:border-emerald-400/50 w-full aspect-[4/3] max-h-[80vh]"
                >
                  <Image
                    src={GALLERY_IMAGES[openIndex]}
                    alt={`Full ${openIndex + 1}`}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.div>

                {/* Navigation Arrows */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={swipeLeft}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-emerald-500/80 to-blue-600/80 text-white rounded-3xl shadow-2xl border-4 border-white/20 backdrop-blur-xl flex items-center justify-center text-2xl font-bold hover:shadow-emerald/50 hover:scale-125 transition-all duration-300"
                >
                  ‹
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={swipeRight}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-blue-500/80 to-purple-600/80 text-white rounded-3xl shadow-2xl border-4 border-white/20 backdrop-blur-xl flex items-center justify-center text-2xl font-bold hover:shadow-purple/50 hover:scale-125 transition-all duration-300"
                >
                  ›
                </motion.button>
              </div>

              {/* Bottom Controls */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10">
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-black text-emerald-400 mb-1">Image {openIndex + 1}</div>
                  <div className="text-white/60 text-lg">of {GALLERY_IMAGES.length}</div>
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={GALLERY_IMAGES[openIndex]}
                    target="_blank"
                    rel="noreferrer"
                    className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-bold text-lg rounded-3xl shadow-2xl hover:shadow-emerald/50 hover:brightness-105 transition-all duration-300 border border-white/20 backdrop-blur-sm"
                  >
                    💾 Download
                  </a>
                  <a
                    href={GALLERY_IMAGES[openIndex]}
                    target="_blank"
                    rel="noreferrer"
                    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold text-lg rounded-3xl shadow-2xl hover:shadow-purple/50 hover:brightness-105 transition-all duration-300 border border-white/20 backdrop-blur-sm"
                  >
                    🌐 New Tab
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
