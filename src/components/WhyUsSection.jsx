// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// export default function WhyUsSection() {
//   const cards = [
//     {
//       img: "/images/quality.jpg",
//       title: "Quality",
//       subtitle: "Premium Selection",
//       desc: "Carefully selected, premium brown mustard seeds ensure that we deliver the highest-quality products. Our rigorous quality control process guarantees that only the finest seeds make it to your kitchen, providing you with oil that meets the highest standards of excellence.",
//       icon: "🏆"
//     },
//     {
//       img: "/images/purity.jpg",
//       title: "Purity",
//       subtitle: "Double Filtered",
//       desc: "Double filtration allows us to deliver 100% pure mustard oil, free from any additives. Our state-of-the-art filtration technology removes all impurities while preserving the natural nutrients and authentic flavor, ensuring you get nothing but pure, unadulterated goodness in every drop.",
//       icon: "💧"
//     },
//     {
//       img: "/images/flavour.jpg",
//       title: "Authenticity",
//       subtitle: "Traditional Taste",
//       desc: "Millions recognise our brand for its exceptional taste and pungency. The traditional cold-pressed extraction method we use retains the natural aroma and distinctive sharp flavor that makes our mustard oil the preferred choice for authentic Indian cooking and health-conscious consumers.",
//       icon: "👑"
//     }
//   ];

//   return (
//     <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-amber-50 via-[#fef9c3] to-yellow-50 overflow-hidden">
//       {/* Enhanced Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-200/40 to-transparent rounded-full blur-3xl animate-pulse-slow" />
//         <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-200/40 to-transparent rounded-full blur-3xl animate-pulse-slow delay-1000" />
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
//           <div className="absolute top-20 left-10 w-2 h-2 bg-amber-400 rounded-full animate-bounce" />
//           <div className="absolute top-40 right-20 w-3 h-3 bg-yellow-500 rounded-full animate-bounce delay-300" />
//           <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-amber-500 rounded-full animate-bounce delay-700" />
//         </div>
//       </div>

//       <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Enhanced Header Section */}
//         <div className="text-center mb-12 md:mb-16 lg:mb-20">
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             viewport={{ once: true, margin: "-50px" }}
//             transition={{ duration: 0.6, type: "spring" }}
//             className="inline-block mb-4 md:mb-6"
//           >
//             <div className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-2.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full shadow-lg border border-amber-300">
//               <span className="text-lg md:text-xl">✨</span>
//               <span className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">Why Choose Us</span>
//               <span className="text-lg md:text-xl">✨</span>
//             </div>
//           </motion.div>

//           <motion.h2
//             initial={{ y: 20, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             viewport={{ once: true, margin: "-50px" }}
//             transition={{ delay: 0.1, duration: 0.6 }}
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 bg-gradient-to-r from-amber-900 via-amber-800 to-yellow-900 bg-clip-text text-transparent leading-tight px-4"
//           >
//             Why Veer Bharat
//           </motion.h2>

//           <motion.div
//             initial={{ scaleX: 0, opacity: 0 }}
//             whileInView={{ scaleX: 1, opacity: 1 }}
//             viewport={{ once: true, margin: "-50px" }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//             className="w-20 h-1.5 md:w-32 md:h-2 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 mx-auto mb-6 md:mb-8 rounded-full"
//           />

//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-50px" }}
//             transition={{ delay: 0.3, duration: 0.6 }}
//             className="max-w-5xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed px-4 md:px-6 text-justify md:text-center"
//           >
//             At Veer Bharat, we believe that great food begins with great ingredients, and our commitment to excellence drives every step of our production process. For generations, we have been dedicated to bringing you the finest mustard oil, crafted with traditional methods and modern precision.
//           </motion.p>
//         </div>

//         {/* Enhanced Feature Cards */}
//         <div className="grid gap-6 md:gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-12 md:mb-16">
//           {cards.map((card, index) => (
//             <motion.article
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ delay: index * 0.15, duration: 0.7, type: "spring" }}
//               whileHover={{ y: -8, transition: { duration: 0.3 } }}
//               className="group relative rounded-3xl overflow-hidden bg-white shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 border border-amber-100"
//             >
//               {/* Premium Badge */}
//               <div className="absolute left-4 md:left-6 top-4 md:top-6 z-30">
//                 <motion.div
//                   initial={{ scale: 0, rotate: -180 }}
//                   whileInView={{ scale: 1, rotate: 0 }}
//                   viewport={{ once: true, margin: "-50px" }}
//                   transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
//                   className="relative"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full blur-md opacity-70" />
//                   <div className="relative bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-500 px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-xl border-2 border-white/50">
//                     <div className="flex items-center gap-1.5 md:gap-2">
//                       <svg className="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="none">
//                         <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                       </svg>
//                       <span className="text-[10px] md:text-xs font-black text-white uppercase tracking-wide">Premium</span>
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>

//               {/* Enhanced Image Container */}
//               <div className="relative w-full h-56 sm:h-60 md:h-72 lg:h-80 overflow-hidden">
//                 <Image
//                   src={card.img}
//                   alt={card.title}
//                   fill
//                   className="object-cover transition-transform duration-700 group-hover:scale-110"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                   priority={index === 0}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />
                
//                 {/* Enhanced Floating Icon */}
//                 <motion.div
//                   initial={{ y: 20, opacity: 0, scale: 0.8 }}
//                   whileInView={{ y: 0, opacity: 1, scale: 1 }}
//                   viewport={{ once: true, margin: "-50px" }}
//                   transition={{ delay: index * 0.15 + 0.5, type: "spring" }}
//                   className="absolute bottom-4 right-4 md:bottom-6 md:right-6"
//                 >
//                   <div className="text-4xl md:text-5xl lg:text-6xl filter drop-shadow-2xl opacity-90 group-hover:scale-125 transition-transform duration-500">
//                     {card.icon}
//                   </div>
//                 </motion.div>
//               </div>

//               {/* Enhanced Wave Divider */}
//               <div className="absolute left-0 right-0 -mt-1 pointer-events-none z-10">
//                 <svg viewBox="0 0 1440 60" className="w-full h-8 md:h-12" preserveAspectRatio="none">
//                   <path d="M0,32 C240,80 480,0 720,32 C960,64 1200,16 1440,32 L1440,60 L0,60 Z" fill="white" />
//                 </svg>
//               </div>

//               {/* Enhanced Content Section */}
//               <div className="relative bg-white px-5 py-6 md:px-7 md:py-8 lg:px-8 lg:py-10">
//                 <div className="mb-4 md:mb-5">
//                   <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-1.5 md:mb-2 bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent">
//                     {card.title}
//                   </h3>
//                   <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-full border border-amber-200 shadow-sm">
//                     <span className="text-xs md:text-sm font-bold text-amber-800 uppercase tracking-wide">
//                       {card.subtitle}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="h-1 w-16 md:w-20 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mb-4 md:mb-5" />

//                 <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8 text-justify min-h-[120px] md:min-h-[140px]">
//                   {card.desc}
//                 </p>

//                 {/* Enhanced Action Buttons */}
//                 <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4">
//                   <motion.a
//                     href="/products"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="relative group/btn flex-1"
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl blur-md opacity-60 group-hover/btn:opacity-100 transition-opacity duration-300" />
//                     <div className="relative bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 px-5 py-3 md:px-6 md:py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-amber-400">
//                       <span className="text-sm md:text-base font-black text-white uppercase tracking-wide flex items-center justify-center gap-2">
//                         Explore Products 
//                         <motion.span
//                           animate={{ x: [0, 4, 0] }}
//                           transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
//                         >
//                           →
//                         </motion.span>
//                       </span>
//                     </div>
//                   </motion.a>

//                   <motion.a
//                     href="/contact"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="px-5 py-3 md:px-6 md:py-3.5 bg-white hover:bg-amber-50 border-2 border-amber-300 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center group/contact"
//                   >
//                     <span className="text-sm md:text-base font-bold text-amber-900 group-hover/contact:text-amber-800 transition-colors">
//                       Contact Us
//                     </span>
//                   </motion.a>
//                 </div>
//               </div>

//               {/* Enhanced Corner Accent */}
//               <div className="absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-bl from-amber-300/30 to-transparent rounded-bl-full" />
//             </motion.article>
//           ))}
//         </div>

//         {/* Enhanced CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-50px" }}
//           transition={{ delay: 0.4, duration: 0.7 }}
//           className="relative bg-gradient-to-br from-white via-amber-50 to-yellow-50 rounded-3xl md:rounded-[2.5rem] shadow-2xl border-2 border-amber-200/80 p-6 md:p-10 lg:p-12 overflow-hidden"
//         >
//           {/* Enhanced Decorative Elements */}
//           <div className="absolute top-0 right-0 w-40 h-40 md:w-64 md:h-64 bg-gradient-to-bl from-amber-200/40 to-transparent rounded-full blur-2xl animate-pulse-slow" />
//           <div className="absolute bottom-0 left-0 w-40 h-40 md:w-64 md:h-64 bg-gradient-to-tr from-yellow-200/40 to-transparent rounded-full blur-2xl animate-pulse-slow delay-500" />

//           <div className="relative text-center">
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0, rotate: -180 }}
//               whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
//               className="inline-block mb-4 md:mb-6"
//             >
//               <div className="text-4xl md:text-5xl lg:text-6xl animate-bounce-slow">🌟</div>
//             </motion.div>

//             <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-5 bg-gradient-to-r from-amber-900 via-amber-700 to-yellow-800 bg-clip-text text-transparent px-4">
//               Discover Our Premium Collection
//             </h4>

//             <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed px-4">
//               From cold-pressed mustard to high-stability frying oils — find the perfect oil for your kitchen. Each product is crafted with care, quality, and tradition.
//             </p>

//             {/* Enhanced Category Pills */}
//             <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
//               {[
//                 { name: "Kachi Ghani", url: "/products/kachi-ghani", gradient: "from-amber-400 to-yellow-400" },
//                 { name: "Soybean Oil", url: "/products/soybean", gradient: "from-amber-500 to-orange-400" },
//                 { name: "Palm Oil", url: "/products/palm", gradient: "from-yellow-400 to-amber-500" },
//                 { name: "Rice Bran", url: "/products/rice-bran", gradient: "from-amber-600 to-yellow-500" }
//               ].map((product, i) => (
//                 <motion.a
//                   key={i}
//                   // href={product.url}
//                   initial={{ scale: 0, opacity: 0 }}
//                   whileInView={{ scale: 1, opacity: 1 }}
//                   viewport={{ once: true, margin: "-50px" }}
//                   transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 200 }}
//                   whileHover={{ scale: 1.1, y: -3 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="group/pill relative"
//                 >
//                   <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} rounded-full blur-md opacity-50 group-hover/pill:opacity-100 transition-opacity duration-300`} />
//                   <div className={`relative bg-gradient-to-r ${product.gradient} px-4 py-2.5 md:px-6 md:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white/50 backdrop-blur-sm`}>
//                     <span className="text-xs md:text-sm lg:text-base font-black text-white uppercase tracking-wide whitespace-nowrap">
//                       {product.name}
//                     </span>
//                   </div>
//                 </motion.a>
//               ))}
//             </div>

//             {/* Enhanced Statistics */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ delay: 1, duration: 0.6 }}
//               className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
//             >
//               {[
//                 { number: "100%", label: "Pure & Natural" },
//                 { number: "5+", label: "Years Legacy" },
//                 { number: "1M+", label: "Happy Families" },
//                 { number: "99.9%", label: "Quality Rate" }
//               ].map((stat, i) => (
//                 <motion.div 
//                   key={i}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true, margin: "-50px" }}
//                   transition={{ delay: 1.2 + i * 0.1 }}
//                   className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg border border-amber-200/50 hover:border-amber-300 transition-colors duration-300"
//                 >
//                   <div className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-1 md:mb-2">
//                     {stat.number}
//                   </div>
//                   <div className="text-xs md:text-sm font-bold text-gray-600 uppercase tracking-wide">
//                     {stat.label}
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Bottom Decorative Wave */}
//       <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
//         <svg viewBox="0 0 1440 80" className="w-full h-12 md:h-16" preserveAspectRatio="none">
//           <path d="M0,48 C240,80 480,16 720,48 C960,80 1200,16 1440,48 L1440,80 L0,80 Z" fill="#fef3c7" opacity="0.4" />
//         </svg>
//       </div>

//       {/* Add custom animations to tailwind config */}
//       <style jsx>{`
//         @keyframes pulse-slow {
//           0%, 100% { opacity: 0.4; }
//           50% { opacity: 0.8; }
//         }
//         @keyframes bounce-slow {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }
//         .animate-pulse-slow {
//           animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
//         }
//         .animate-bounce-slow {
//           animation: bounce-slow 3s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// }





// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// export default function WhyUsMinimal() {
//   const reasons = [
//     {
//       number: "01",
//       title: "Quality",
//       desc: "Premium brown mustard seeds processed with traditional cold-press methods for rich flavour and unmatched quality.",
//       icon: (
//         <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       ),
//     },
//     {
//       number: "02",
//       title: "Purity",
//       desc: "Double filtration process ensures pure, additive-free oil that preserves essential nutrients and authentic taste.",
//       icon: (
//         <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
//         </svg>
//       ),
//     },
//     {
//       number: "03",
//       title: "Authenticity",
//       desc: "Cold-pressed tradition with modern quality checks delivers the pungency and aroma Indian kitchens trust.",
//       icon: (
//         <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//         </svg>
//       ),
//     },
//   ];

//   return (
//     <section className="relative py-20 md:py-32 bg-gray-50">
//       <div className="container mx-auto max-w-5xl px-6 md:px-8">
//         {/* Header */}
//         <div className="mb-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <p className="text-sm font-medium text-amber-600 tracking-wider uppercase mb-3">
//               Subheading
//             </p>
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Why Choose Us?
//             </h2>
//             <p className="text-gray-600 max-w-2xl leading-relaxed">
//               Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
//             </p>
//           </motion.div>
//         </div>

//         {/* Reasons Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
//           {reasons.map((reason, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.15 }}
//               className="group"
//             >
//               {/* Icon */}
//               <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
//                 {reason.icon}
//               </div>

//               {/* Number */}
//               <div className="text-sm font-medium text-gray-400 mb-2">
//                 {reason.number}
//               </div>

//               {/* Title */}
//               <h3 className="text-xl font-bold text-gray-900 mb-3">
//                 {reason.title}
//               </h3>

//               {/* Description */}
//               <p className="text-gray-600 leading-relaxed mb-6">
//                 {reason.desc}
//               </p>

//               {/* Arrow Link */}
//               <button className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300 text-gray-600 group-hover:border-amber-600 group-hover:text-amber-600 transition-all duration-300">
//                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyUsMinimal() {
  const reasons = [
    {
      number: "01",
      title: "Quality",
      desc: "Premium brown mustard seeds processed with traditional cold-press methods for rich flavour and unmatched quality.",
      image: "/images/quality.jpg", // Mustard oil label [generated_image:41]
    },
    {
      number: "02",
      title: "Purity", 
      desc: "Double filtration process ensures pure, additive-free soybean oil that preserves essential nutrients and authentic taste.",
      image: "/images/purity.png", // Soybean oil label [generated_image:44]
    },
    {
      number: "03",
      title: "Authenticity",
      desc: "Cold-pressed palm oil tradition with modern quality checks delivers the stability and aroma Indian kitchens trust.",
      image: "/images/authenticity.jpg", // Palm oil label [generated_image:45]
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#DFC6F6] via-[#fef9c3] to-[#DFC6F6]">
      <div className="container mx-auto max-w-5xl px-6 md:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-amber-600 tracking-wider uppercase mb-3">
              Veer Bharat Promise
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${playfair.className}">
              Authenticity, Purity & Quality
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Experience the Veer Bharat difference - where traditional cold-pressed methods meet modern quality standards for pure, authentic cooking oils.
            </p>
          </motion.div>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50"
            >
              {/* Image */}
              <div className="relative w-full h-56 md:h-64 rounded-2xl overflow-hidden mb-6 shadow-2xl">
                <Image 
                  src={reason.image} 
                  alt={`${reason.title} - Veer Bharat ${reason.title.toLowerCase()} oil`}
                  fill
                  className="object-contain sm:object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Number */}
              <div className="text-sm font-bold text-amber-600 mb-4 tracking-wider">
                {reason.number}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                {reason.desc}
              </p>

              {/* Veer Bharat Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full text-sm shadow-lg">
                <span>Veer Bharat</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
