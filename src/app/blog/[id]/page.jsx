// // "use client"
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// // Blog data
// const blogs = [
//   {
//     id: "1",
//     title: "Goodness Of Cold-Pressed Mustard Oil",
//     category: "Mustard Oil",
//     image: "/images/mustard-blog.jpg",
//     date: "January 1, 2024",
//     author: "Veer Bharat Team",
//     views: 602,
//     readTime: "5 min read",
//     excerpt: "Discover the nutritional powerhouse and authentic flavor of traditional cold-pressed mustard oil for your kitchen.",
//     content: `<p>Ever explored the world of <strong>cold-pressed mustard oil</strong>? Curious about its uses and the awesome benefits it brings to the table?</p>

// <p>Let's dive into the cool and informative realm of this Cold-Pressed Mustard Oil. 🌿💡</p>

// <p>Cold-pressed mustard oil comes to life from mustard seeds, taking a chill pill in the extraction process—no heat, no chemicals. The result? A superstar oil with a unique flavor twist, a treasure of nutrients, and a fan club for its health perks.</p>

// <h2>Powerhouse Of Nutrients</h2>

// <p>It's got omega-3 fatty acids, the superheroes for your heart, and vitamin E, the skin's BFF fighting for your glow-up game. And guess what? The cool part is, thanks to the extraction process avoiding hot vibes, these nutritional rockstars stay locked and loaded, making it the wholesome boost your diet deserves. 💫</p>

// <h2>Flavor And Aroma</h2>

// <p>Cold-pressing keeps the bold and zesty vibes intact, giving mustard oil its unmistakable kick. It's like a flavor fiesta with its unique taste and a powerful aroma that throws a party in your dishes. 🎉🌿</p>

// <h2>Ayurvedic Wellness</h2>

// <p>Mustard oil has scored big in the wellness arena! Ayurveda gives it a high-five for improving the digestion, boosting circulation, and rocking natural antibacterial vibes. When it comes to massages, this oil is like a spa day for your skin and muscles. Ancient healing, meet modern bliss! 🌿🧘</p>

// <h2>Other Uses</h2>

// <p>It's also a beauty secret! Massage it on your scalp and hair for a dose of strength and shine. And guess what? Your skin is in for a treat too – the moisturizing magic makes it a go-to for a pampering skincare routine. Talk about a versatile oil! 💆‍♀️✨</p>`,
//     faqs: [
//       {
//         question: "What makes cold-pressed mustard oil different?",
//         answer: "Cold-pressed mustard oil is extracted without heat or chemicals, preserving all natural nutrients, flavor, and aroma."
//       },
//       {
//         question: "Can I use mustard oil for cooking?",
//         answer: "Yes! Mustard oil is excellent for high-heat cooking, tadkas, pickles, and traditional Indian recipes."
//       },
//       {
//         question: "Is mustard oil good for hair?",
//         answer: "Absolutely. Regular massage with mustard oil strengthens hair roots, promotes growth, and adds natural shine."
//       }
//     ]
//   },
//   {
//     id: "2",
//     title: "Soyabean Oil – The Heart-Healthy Choice",
//     category: "Soyabean Oil",
//     image: "/images/soyabean-blog.jpg",
//     date: "February 15, 2024",
//     author: "Veer Bharat Team",
//     views: 445,
//     readTime: "4 min read",
//     excerpt: "Learn why soyabean oil has become the preferred choice for health-conscious families across India.",
//     content: `<p>Soyabean oil has emerged as one of the most popular cooking oils in modern Indian kitchens, and for good reason. This light, versatile oil brings together health benefits, culinary flexibility, and affordability in one golden package.</p>

// <h2>Rich In Polyunsaturated Fats</h2>

// <p>Soyabean oil is packed with omega-3 and omega-6 fatty acids, essential nutrients that your body can't produce on its own. These healthy fats support heart health, reduce inflammation, and contribute to brain function. With low saturated fat content, it's an excellent choice for those watching their cholesterol levels.</p>

// <h2>Vitamin E Powerhouse</h2>

// <p>One of the standout features of soyabean oil is its high vitamin E content. This powerful antioxidant protects your cells from damage, supports immune function, and promotes healthy skin. Regular consumption can contribute to your daily vitamin E requirements.</p>

// <h2>Versatile Cooking Companion</h2>

// <p>From shallow frying samosas to making salad dressings, soyabean oil adapts to every cooking method. Its neutral flavor doesn't overpower dishes, making it perfect for both Indian and continental cuisines. The high smoke point ensures it remains stable even at elevated temperatures.</p>

// <h2>Cost-Effective Quality</h2>

// <p>Compared to other premium oils, soyabean oil offers excellent value for money without compromising on quality. This makes it accessible to families across all income brackets, democratizing access to healthy cooking oils.</p>`,
//     faqs: [
//       {
//         question: "Is soyabean oil suitable for deep frying?",
//         answer: "Yes, soyabean oil has a high smoke point (around 230°C), making it ideal for deep frying and high-temperature cooking."
//       },
//       {
//         question: "Does soyabean oil contain cholesterol?",
//         answer: "No, soyabean oil is plant-based and contains zero cholesterol, making it heart-friendly."
//       }
//     ]
//   },
//   {
//     id: "3",
//     title: "Sunflower Oil – Sunshine In A Bottle",
//     category: "Sunflower Oil",
//     image: "/images/sunflower-blog.jpg",
//     date: "March 10, 2024",
//     author: "Veer Bharat Team",
//     views: 521,
//     readTime: "4 min read",
//     excerpt: "Discover why sunflower oil is becoming a kitchen essential for families nationwide.",
//     content: `<p>Extracted from the seeds of the cheerful sunflower plant, sunflower oil has become a kitchen staple for millions. Its light texture, neutral taste, and impressive nutritional profile make it a favorite among home cooks and professional chefs alike.</p>

// <h2>Vitamin E Champion</h2>

// <p>Sunflower oil is one of the richest sources of vitamin E among all cooking oils. Just a tablespoon provides a significant portion of your daily vitamin E needs. This fat-soluble antioxidant protects your body's cells from oxidative stress.</p>

// <h2>Heart-Friendly Fats</h2>

// <p>With a balanced ratio of polyunsaturated and monounsaturated fats, sunflower oil supports cardiovascular health. It helps maintain healthy cholesterol levels when used as part of a balanced diet.</p>

// <h2>Light & Non-Greasy</h2>

// <p>Unlike heavier oils, sunflower oil has a light texture that doesn't leave food feeling greasy. This makes it perfect for sautéing vegetables, making crispy pakoras, or even baking cakes and cookies.</p>

// <h2>Stability & Shelf Life</h2>

// <p>Refined sunflower oil has excellent stability and a long shelf life when stored properly. The refining process removes impurities while retaining beneficial nutrients.</p>`,
//     faqs: [
//       {
//         question: "Can I use sunflower oil for baking?",
//         answer: "Absolutely! Sunflower oil's neutral flavor and light texture make it perfect for cakes, cookies, and muffins."
//       },
//       {
//         question: "How should I store sunflower oil?",
//         answer: "Store in a cool, dark place away from direct sunlight. Once opened, use within 6-8 months for best quality."
//       }
//     ]
//   },
//   {
//     id: "4",
//     title: "Rice Bran Oil – The Cholesterol Fighter",
//     category: "Rice Bran Oil",
//     image: "/images/ricebran-blog.jpg",
//     date: "April 5, 2024",
//     author: "Veer Bharat Team",
//     views: 389,
//     readTime: "5 min read",
//     excerpt: "Uncover the hidden health benefits of rice bran oil, Asia's best-kept wellness secret.",
//     content: `<p>Rice bran oil, extracted from the nutrient-rich outer layer of rice grains, is one of Asia's best-kept health secrets. Popular in Japan and other Asian countries for decades, this oil is now gaining recognition worldwide.</p>

// <h2>Oryzanol Magic</h2>

// <p>The star component of rice bran oil is gamma-oryzanol, a unique compound rarely found in other oils. Studies suggest that oryzanol can help lower bad cholesterol (LDL) while maintaining or even increasing good cholesterol (HDL).</p>

// <h2>Balanced Fatty Acid Profile</h2>

// <p>Rice bran oil boasts a near-perfect balance of saturated, monounsaturated, and polyunsaturated fats. This ideal ratio, recommended by the World Health Organization, makes it one of the healthiest cooking oils available.</p>

// <h2>High Smoke Point Excellence</h2>

// <p>With a smoke point of around 232°C (450°F), rice bran oil is perfect for high-temperature cooking methods like deep frying and stir-frying. It doesn't break down easily, ensuring that your food remains healthy.</p>

// <h2>Skin & Beauty Benefits</h2>

// <p>Beyond cooking, rice bran oil is prized in skincare for its moisturizing properties. Rich in vitamin E and antioxidants, it can be used topically to nourish skin and reduce signs of aging.</p>`,
//     faqs: [
//       {
//         question: "What is gamma-oryzanol?",
//         answer: "Gamma-oryzanol is a unique antioxidant compound found in rice bran oil that helps manage cholesterol levels and supports heart health."
//       },
//       {
//         question: "Can rice bran oil be used for Indian cooking?",
//         answer: "Yes! Its high smoke point and neutral flavor make it perfect for all types of Indian cooking, from tadkas to deep frying."
//       }
//     ]
//   },
//   {
//     id: "5",
//     title: "Palm Oil – The Versatile Kitchen Essential",
//     category: "Palm Oil",
//     image: "/images/palm-blog.jpg",
//     date: "May 20, 2024",
//     author: "Veer Bharat Team",
//     views: 467,
//     readTime: "4 min read",
//     excerpt: "Explore the unique properties that make palm oil indispensable in kitchens worldwide.",
//     content: `<p>Palm oil, derived from the fruit of the oil palm tree, is one of the most widely used cooking oils globally. Its unique properties make it indispensable in both home kitchens and commercial food production.</p>

// <h2>Natural Semi-Solid State</h2>

// <p>Unlike most other oils, palm oil is semi-solid at room temperature due to its balanced composition of saturated and unsaturated fats. This unique characteristic makes it ideal for creating textures in baked goods.</p>

// <h2>Rich In Carotenoids</h2>

// <p>Palm oil's distinctive red-orange color comes from its high beta-carotene content, the precursor to vitamin A. These carotenoids are powerful antioxidants that support eye health and boost immunity.</p>

// <h2>High Temperature Stability</h2>

// <p>With excellent heat stability, palm oil is perfect for deep frying and commercial food preparation. It doesn't oxidize easily, meaning it can be reused more times than many other oils.</p>

// <h2>Versatile Applications</h2>

// <p>Beyond cooking, palm oil is used in everything from making traditional ghee alternatives to preparing authentic sweets and savories. Professional bakers particularly value it for creating consistent, high-quality baked goods.</p>

// <h2>Sustainability Matters</h2>

// <p>At Veer Bharat, we source our palm oil from certified sustainable plantations that follow ethical farming practices.</p>`,
//     faqs: [
//       {
//         question: "Is palm oil healthy?",
//         answer: "Yes, when consumed in moderation. Palm oil contains beneficial nutrients like vitamin E and beta-carotene, though it's higher in saturated fats than some other oils."
//       },
//       {
//         question: "Why does palm oil solidify?",
//         answer: "Palm oil's balanced fat composition causes it to be semi-solid at room temperature, similar to coconut oil."
//       }
//     ]
//   },
//   {
//     id: "6",
//     title: "Kachi Ghani vs Refined Oil – The Truth",
//     category: "Mustard Oil",
//     image: "/images/mustard-blog.jpg",
//     date: "June 12, 2024",
//     author: "Veer Bharat Team",
//     views: 612,
//     readTime: "6 min read",
//     excerpt: "Understand the real differences between traditional Kachi Ghani and refined oils to make informed choices.",
//     content: `<p>The debate between Kachi Ghani (cold-pressed) and refined oils has been ongoing in Indian households for years. Understanding the differences can help you make informed choices for your family's health.</p>

// <h2>Kachi Ghani – The Traditional Method</h2>

// <p>Kachi Ghani, or cold-press extraction, is an ancient technique where oil seeds are crushed at low temperatures without applying heat. This gentle process preserves the natural aroma, flavor, and nutritional content of the oil.</p>

// <h2>The Kachi Ghani Advantage</h2>

// <p>Cold-pressed oils retain their natural pungency and strong aroma, which many consider essential for authentic taste in traditional recipes. The absence of chemical solvents means you get pure, unadulterated oil.</p>

// <h2>Refined Oil – The Modern Approach</h2>

// <p>Refining involves heating the oil and using chemical solvents to extract maximum oil from seeds. The oil then undergoes bleaching and deodorizing to remove impurities, color, and odor.</p>

// <h2>Benefits Of Refined Oil</h2>

// <p>Refined oils have a higher smoke point, making them suitable for high-temperature cooking without breaking down. Their neutral flavor doesn't overpower delicate dishes.</p>

// <h2>Making The Right Choice</h2>

// <p>Both types have their place in your kitchen. Use Kachi Ghani mustard oil for tadkas, pickles, and traditional recipes. Opt for refined oils for versatile everyday cooking and when you need a neutral flavor.</p>`,
//     faqs: [
//       {
//         question: "Which is healthier: Kachi Ghani or refined oil?",
//         answer: "Kachi Ghani retains more natural nutrients, but refined oils have higher smoke points for high-heat cooking. Both can be part of a healthy diet when used appropriately."
//       },
//       {
//         question: "Can I use Kachi Ghani oil for deep frying?",
//         answer: "While possible, Kachi Ghani oil has a lower smoke point than refined oils. It's best used for tadkas, pickles, and moderate-heat cooking."
//       }
//     ]
//   }
// ];

// // Required for static export
// export function generateStaticParams() {
//   return blogs.map((blog) => ({
//     id: blog.id,
//   }));
// }

// export default function SingleBlogPage({ params }) {
//   const blogId = params.id;
//   const blog = blogs.find(b => b.id === blogId) || blogs[0];
//   const relatedBlogs = blogs.filter(b => b.id !== blog.id).slice(0, 3);

//   return (
//     <>
//       <main className="min-h-screen bg-white">
//         {/* Breadcrumb Navigation */}
//         <div className="bg-[#fef9c3] border-b border-amber-200">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//             <nav className="flex items-center gap-2 text-sm md:text-base text-gray-700 font-medium">
//               <Link href="/" className="hover:text-amber-700 transition-colors">
//                 Home
//               </Link>
//               <span className="text-gray-400">›</span>
//               <Link href="/blog" className="hover:text-amber-700 transition-colors">
//                 Blog
//               </Link>
//               <span className="text-gray-400">›</span>
//               <span className="text-gray-900 font-semibold truncate">{blog.title}</span>
//             </nav>
//           </div>
//         </div>

//         {/* Hero Section */}
//         <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
//           {/* Category Badge */}
//           <div className="mb-6">
//             <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-sm md:text-base font-bold shadow-md">
//               {blog.category}
//             </span>
//           </div>

//           {/* Title */}
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 md:mb-8 leading-tight">
//             {blog.title}
//           </h1>

//           {/* Excerpt */}
//           {blog.excerpt && (
//             <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 leading-relaxed max-w-4xl">
//               {blog.excerpt}
//             </p>
//           )}

//           {/* Meta Information */}
//           <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base text-gray-600 pb-8 md:pb-10 mb-8 md:mb-10 border-b-2 border-gray-200">
//             <div className="flex items-center gap-2">
//               <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center text-white font-black text-lg md:text-xl shadow-md">
//                 V
//               </div>
//               <span className="font-semibold text-gray-900">{blog.author}</span>
//             </div>
//             <span className="hidden sm:inline text-gray-300">|</span>
//             <span>📅 {blog.date}</span>
//             <span className="hidden sm:inline text-gray-300">|</span>
//             <span>⏱️ {blog.readTime}</span>
//             <span className="hidden sm:inline text-gray-300">|</span>
//             <span>👁️ {blog.views} views</span>
//           </div>

//           {/* Featured Image */}
//           <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl mb-10 md:mb-14">
//             <Image
//               src={blog.image}
//               alt={blog.title}
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>

//           {/* Main Content */}
//           <div className="prose prose-base md:prose-lg lg:prose-xl max-w-none">
//             <div 
//               className="blog-content"
//               dangerouslySetInnerHTML={{ __html: blog.content }}
//             />
//           </div>

//           {/* FAQ Section */}
//           {blog.faqs && blog.faqs.length > 0 && (
//             <section className="mt-12 md:mt-16 pt-10 md:pt-12 border-t-2 border-gray-200">
//               <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 md:mb-8">
//                 FAQs
//               </h2>
//               <div className="space-y-6 md:space-y-8">
//                 {blog.faqs.map((faq, index) => (
//                   <div key={index} className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 md:p-8 shadow-md border border-amber-100">
//                     <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
//                       {index + 1}. {faq.question}
//                     </h3>
//                     <p className="text-base md:text-lg text-gray-700 leading-relaxed">
//                       {faq.answer}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           )}

//           {/* Share Section */}
//           <div className="mt-12 md:mt-16 pt-10 md:pt-12 border-t-2 border-gray-200">
//             <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
//               Share this article
//             </h3>
//             <div className="flex flex-wrap gap-3 md:gap-4">
//               <button className="px-5 py-3 md:px-6 md:py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
//                 📘 Facebook
//               </button>
//               <button className="px-5 py-3 md:px-6 md:py-3.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-sm md:text-base font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
//                 🐦 Twitter
//               </button>
//               <button className="px-5 py-3 md:px-6 md:py-3.5 rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm md:text-base font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
//                 💬 WhatsApp
//               </button>
//               <button className="px-5 py-3 md:px-6 md:py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm md:text-base font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
//                 🔗 LinkedIn
//               </button>
//             </div>
//           </div>
//         </article>

//         {/* Related Articles */}
//         <section className="bg-gradient-to-b from-[#fef9c3] to-amber-50 py-12 md:py-16 lg:py-20 mt-12 md:mt-16">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 md:mb-12">
//               Related Articles
//             </h2>
//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//               {relatedBlogs.map((related) => (
//                 <Link
//                   key={related.id}
//                   href={`/blog/${related.id}`}
//                   className="group bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-amber-400 transform hover:-translate-y-2"
//                 >
//                   <div className="relative h-48 sm:h-52 md:h-56">
//                     <Image
//                       src={related.image}
//                       alt={related.title}
//                       fill
//                       className="object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute top-4 left-4">
//                       <span className="inline-block px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-xs md:text-sm font-bold text-amber-700 shadow-md">
//                         {related.category}
//                       </span>
//                     </div>
//                   </div>
//                   <div className="p-5 md:p-6">
//                     <h3 className="font-bold text-lg md:text-xl text-gray-900 group-hover:text-amber-600 transition-colors leading-tight mb-3 line-clamp-2">
//                       {related.title}
//                     </h3>
//                     <p className="text-sm md:text-base text-gray-600 mb-4 line-clamp-2">
//                       {related.excerpt}
//                     </p>
//                     <div className="flex items-center justify-between text-xs md:text-sm text-gray-500">
//                       <span>⏱️ {related.readTime}</span>
//                       <span className="font-semibold text-amber-600 group-hover:text-amber-700">
//                         Read More →
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Back Button */}
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
//           <Link
//             href="/blog"
//             className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white text-base md:text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
//           >
//             ← Back to Blog
//           </Link>
//         </div>
//       </main>


//     </>
//   );
// }




// // "use client"
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// // Blog data
// const blogs = [
//   {
//     id: "1",
//     title: "Goodness Of Cold-Pressed Mustard Oil",
//     category: "Mustard Oil",
//     image: "/images/mustard-blog.jpg",
//     date: "January 1, 2024",
//     author: "Veer Bharat Team",
//     views: 602,
//     readTime: "5 min read",
//     excerpt:
//       "Discover the nutritional powerhouse and authentic flavor of traditional cold-pressed mustard oil for your kitchen.",
//     content: `<p>Ever explored the world of <strong>cold-pressed mustard oil</strong>? Curious about its uses and the awesome benefits it brings to the table?</p>
// <p>Let's dive into the cool and informative realm of this Cold-Pressed Mustard Oil. 🌿💡</p>
// <p>Cold-pressed mustard oil comes to life from mustard seeds, taking a chill pill in the extraction process—no heat, no chemicals. The result? A superstar oil with a unique flavor twist, a treasure of nutrients, and a fan club for its health perks.</p>
// <h2>Powerhouse Of Nutrients</h2>
// <p>It's got omega-3 fatty acids, the superheroes for your heart, and vitamin E, the skin's BFF fighting for your glow-up game. And guess what? The cool part is, thanks to the extraction process avoiding hot vibes, these nutritional rockstars stay locked and loaded, making it the wholesome boost your diet deserves. 💫</p>
// <h2>Flavor And Aroma</h2>
// <p>Cold-pressing keeps the bold and zesty vibes intact, giving mustard oil its unmistakable kick. It's like a flavor fiesta with its unique taste and a powerful aroma that throws a party in your dishes. 🎉🌿</p>
// <h2>Ayurvedic Wellness</h2>
// <p>Mustard oil has scored big in the wellness arena! Ayurveda gives it a high-five for improving the digestion, boosting circulation, and rocking natural antibacterial vibes. When it comes to massages, this oil is like a spa day for your skin and muscles. Ancient healing, meet modern bliss! 🌿🧘</p>
// <h2>Other Uses</h2>
// <p>It's also a beauty secret! Massage it on your scalp and hair for a dose of strength and shine. And guess what? Your skin is in for a treat too – the moisturizing magic makes it a go-to for a pampering skincare routine. Talk about a versatile oil! 💆‍♀️✨</p>`,
//     faqs: [
//       {
//         question: "What makes cold-pressed mustard oil different?",
//         answer:
//           "Cold-pressed mustard oil is extracted without heat or chemicals, preserving all natural nutrients, flavor, and aroma.",
//       },
//       {
//         question: "Can I use mustard oil for cooking?",
//         answer:
//           "Yes! Mustard oil is excellent for high-heat cooking, tadkas, pickles, and traditional Indian recipes.",
//       },
//       {
//         question: "Is mustard oil good for hair?",
//         answer:
//           "Absolutely. Regular massage with mustard oil strengthens hair roots, promotes growth, and adds natural shine.",
//       },
//     ],
//   },

//   // NEW SOYABEAN BLOG (Medium-style, official tone)
//   {
//     id: "2",
//     title: "Why Is Soybean Oil One of the Most Versatile and Healthy Cooking Oils?",
//     category: "Soybean Oil",
//     image: "/images/soyabean-blog.jpg",
//     date: "December 5, 2025",
//     author: "Veer Bharat – Official Blog",
//     views: 845,
//     readTime: "6 min read",
//     excerpt:
//       "Choosing the right cooking oil can change both the taste and the nutritional value of your meals. Soybean oil stands out for its balanced nutrition, neutral taste, and wide range of everyday uses.",
//     content: `
// <p>Choosing the right cooking oil can make a meaningful difference to both the taste and the nutritional quality of your food. Among the many options available today, <strong>soybean oil</strong> has earned a special place in modern kitchens for its heart-friendly profile, neutral taste, and versatility across cuisines.</p>

// <p>For health-conscious families, chefs, and food businesses, soybean oil offers a practical balance of <strong>nutrition, performance, and affordability</strong>. This raises an important question: why is soybean oil considered one of the most versatile and healthy cooking oils? The answer lies in its unique nutritional profile, high smoke point, and ability to work beautifully in almost any recipe.</p>

// <h2>1. A Heart-Healthy Nutritional Profile</h2>
// <p>Soybean oil is naturally rich in polyunsaturated fatty acids, including essential omega‑3 and omega‑6 fats that the body cannot produce on its own. These fats support heart health by helping maintain healthy cholesterol levels when used as part of a balanced diet. The oil also contains monounsaturated fats, giving it a well-rounded fat profile suitable for everyday cooking.</p>

// <h2>2. High Smoke Point for Multiple Cooking Methods</h2>
// <p>One of the key reasons soybean oil performs so well in Indian and international kitchens is its <strong>high smoke point</strong>. It can handle high-temperature techniques such as frying, roasting, grilling, and sautéing without breaking down quickly. This stability at elevated temperatures helps food cook evenly while maintaining taste and nutritional value.</p>

// <h2>3. Neutral Taste That Lets Food Shine</h2>
// <p>Soybean oil has a naturally mild, neutral flavour. This makes it ideal for recipes where you want the ingredients—not the oil—to stand out. Whether you are preparing everyday sabzis, snacks, baked dishes, marinades, or salad dressings, soybean oil blends smoothly into almost any cuisine without overpowering spices or herbs.</p>

// <h2>4. Rich in Vitamin E and Antioxidants</h2>
// <p>Soybean oil is also recognised for its impressive antioxidant content. It is a good source of <strong>vitamin E</strong>, which supports skin health, helps protect cells from oxidative stress, and contributes to overall immunity. Including soybean oil as part of a balanced cooking routine can support long‑term wellness when combined with an active lifestyle and healthy diet.</p>

// <h2>5. Affordable, Accessible, and Widely Used</h2>
// <p>Beyond its health advantages, soybean oil is highly cost‑effective. It is easily available in most markets across urban and rural India, making it a practical choice for households, restaurants, and food manufacturers. Its affordability allows families to enjoy a high‑quality, nutritious cooking oil without putting extra pressure on the monthly budget.</p>

// <h2>6. Sustainable and Environmentally Responsible</h2>
// <p>Soybean crops are known for efficient cultivation and the ability to integrate into sustainable farming systems. When sourced responsibly, soybean oil supports eco‑friendly agriculture and can help reduce environmental impact compared to certain resource‑intensive alternatives. At Veer Bharat, we work with partners who prioritise quality and responsible production practices.</p>

// <h2>Conclusion</h2>
// <p>Soybean oil brings together nutrition, performance, and accessibility in one smart choice for your kitchen. Its heart‑friendly fat profile, vitamin E content, neutral taste, and high smoke point make it suitable for everything from deep frying to healthy everyday meals. Whether you are a home cook or a professional chef, <strong>soybean oil is a reliable, modern cooking companion</strong> for a wide variety of dishes.</p>

// <p>If you are looking to upgrade your daily cooking oil without compromising on health, flavour, or budget, soybean oil from <strong>Veer Bharat</strong> is a trusted option for your family.</p>

// <p><strong>For bulk orders, dealership enquiries, or business collaborations, contact us at:</strong> <a href="mailto:veerbharat2001@gmail.com">veerbharat2001@gmail.com</a></p>
// `,
//     faqs: [
//       {
//         question: "Why is soybean oil considered heart-friendly?",
//         answer:
//           "Soybean oil contains beneficial polyunsaturated and monounsaturated fats, including omega‑3 and omega‑6 fatty acids, and has naturally low saturated fat when used as part of a balanced diet.",
//       },
//       {
//         question: "Can I use soybean oil for deep frying and daily cooking?",
//         answer:
//           "Yes, soybean oil has a high smoke point and neutral taste, making it suitable for deep frying, tadkas, roasting, sautéing, and even baking.",
//       },
//       {
//         question: "Is soybean oil suitable for health-conscious families?",
//         answer:
//           "Soybean oil is a practical option for health-conscious households because it combines a balanced fat profile, vitamin E content, and everyday affordability.",
//       },
//     ],
//   },

//   {
//     id: "3",
//     title: "Sunflower Oil – Sunshine In A Bottle",
//     category: "Sunflower Oil",
//     image: "/images/sunflower-blog.jpg",
//     date: "March 10, 2024",
//     author: "Veer Bharat Team",
//     views: 521,
//     readTime: "4 min read",
//     excerpt:
//       "Discover why sunflower oil is becoming a kitchen essential for families nationwide.",
//     content: `<p>Extracted from the seeds of the cheerful sunflower plant, sunflower oil has become a kitchen staple for millions. Its light texture, neutral taste, and impressive nutritional profile make it a favorite among home cooks and professional chefs alike.</p>
// <h2>Vitamin E Champion</h2>
// <p>Sunflower oil is one of the richest sources of vitamin E among all cooking oils. Just a tablespoon provides a significant portion of your daily vitamin E needs. This fat-soluble antioxidant protects your body's cells from oxidative stress.</p>
// <h2>Heart-Friendly Fats</h2>
// <p>With a balanced ratio of polyunsaturated and monounsaturated fats, sunflower oil supports cardiovascular health. It helps maintain healthy cholesterol levels when used as part of a balanced diet.</p>
// <h2>Light & Non-Greasy</h2>
// <p>Unlike heavier oils, sunflower oil has a light texture that doesn't leave food feeling greasy. This makes it perfect for sautéing vegetables, making crispy pakoras, or even baking cakes and cookies.</p>
// <h2>Stability & Shelf Life</h2>
// <p>Refined sunflower oil has excellent stability and a long shelf life when stored properly. The refining process removes impurities while retaining beneficial nutrients.</p>`,
//     faqs: [
//       {
//         question: "Can I use sunflower oil for baking?",
//         answer:
//           "Absolutely! Sunflower oil's neutral flavor and light texture make it perfect for cakes, cookies, and muffins.",
//       },
//       {
//         question: "How should I store sunflower oil?",
//         answer:
//           "Store in a cool, dark place away from direct sunlight. Once opened, use within 6–8 months for best quality.",
//       },
//     ],
//   },
//   {
//     id: "4",
//     title: "Rice Bran Oil – The Cholesterol Fighter",
//     category: "Rice Bran Oil",
//     image: "/images/ricebran-blog.jpg",
//     date: "April 5, 2024",
//     author: "Veer Bharat Team",
//     views: 389,
//     readTime: "5 min read",
//     excerpt:
//       "Uncover the hidden health benefits of rice bran oil, Asia's best-kept wellness secret.",
//     content: `<p>Rice bran oil, extracted from the nutrient-rich outer layer of rice grains, is one of Asia's best-kept health secrets. Popular in Japan and other Asian countries for decades, this oil is now gaining recognition worldwide.</p>
// <h2>Oryzanol Magic</h2>
// <p>The star component of rice bran oil is gamma-oryzanol, a unique compound rarely found in other oils. Studies suggest that oryzanol can help lower bad cholesterol (LDL) while maintaining or even increasing good cholesterol (HDL).</p>
// <h2>Balanced Fatty Acid Profile</h2>
// <p>Rice bran oil boasts a near-perfect balance of saturated, monounsaturated, and polyunsaturated fats. This ideal ratio, recommended by the World Health Organization, makes it one of the healthiest cooking oils available.</p>
// <h2>High Smoke Point Excellence</h2>
// <p>With a smoke point of around 232°C (450°F), rice bran oil is perfect for high-temperature cooking methods like deep frying and stir-frying. It doesn't break down easily, ensuring that your food remains healthy.</p>
// <h2>Skin & Beauty Benefits</h2>
// <p>Beyond cooking, rice bran oil is prized in skincare for its moisturizing properties. Rich in vitamin E and antioxidants, it can be used topically to nourish skin and reduce signs of aging.</p>`,
//     faqs: [
//       {
//         question: "What is gamma-oryzanol?",
//         answer:
//           "Gamma-oryzanol is a unique antioxidant compound found in rice bran oil that helps manage cholesterol levels and supports heart health.",
//       },
//       {
//         question: "Can rice bran oil be used for Indian cooking?",
//         answer:
//           "Yes! Its high smoke point and neutral flavor make it perfect for all types of Indian cooking, from tadkas to deep frying.",
//       },
//     ],
//   },
//   {
//     id: "5",
//     title: "Palm Oil – The Versatile Kitchen Essential",
//     category: "Palm Oil",
//     image: "/images/palm-blog.jpg",
//     date: "May 20, 2024",
//     author: "Veer Bharat Team",
//     views: 467,
//     readTime: "4 min read",
//     excerpt:
//       "Explore the unique properties that make palm oil indispensable in kitchens worldwide.",
//     content: `<p>Palm oil, derived from the fruit of the oil palm tree, is one of the most widely used cooking oils globally. Its unique properties make it indispensable in both home kitchens and commercial food production.</p>
// <h2>Natural Semi-Solid State</h2>
// <p>Unlike most other oils, palm oil is semi-solid at room temperature due to its balanced composition of saturated and unsaturated fats. This unique characteristic makes it ideal for creating textures in baked goods.</p>
// <h2>Rich In Carotenoids</h2>
// <p>Palm oil's distinctive red-orange color comes from its high beta-carotene content, the precursor to vitamin A. These carotenoids are powerful antioxidants that support eye health and boost immunity.</p>
// <h2>High Temperature Stability</h2>
// <p>With excellent heat stability, palm oil is perfect for deep frying and commercial food preparation. It doesn't oxidize easily, meaning it can be reused more times than many other oils.</p>
// <h2>Versatile Applications</h2>
// <p>Beyond cooking, palm oil is used in everything from making traditional ghee alternatives to preparing authentic sweets and savories. Professional bakers particularly value it for creating consistent, high-quality baked goods.</p>
// <h2>Sustainability Matters</h2>
// <p>At Veer Bharat, we source our palm oil from certified sustainable plantations that follow ethical farming practices.</p>`,
//     faqs: [
//       {
//         question: "Is palm oil healthy?",
//         answer:
//           "Yes, when consumed in moderation. Palm oil contains beneficial nutrients like vitamin E and beta-carotene, though it's higher in saturated fats than some other oils.",
//       },
//       {
//         question: "Why does palm oil solidify?",
//         answer:
//           "Palm oil's balanced fat composition causes it to be semi-solid at room temperature, similar to coconut oil.",
//       },
//     ],
//   },
//   {
//     id: "6",
//     title: "Kachi Ghani vs Refined Oil – The Truth",
//     category: "Mustard Oil",
//     image: "/images/mustard-blog.jpg",
//     date: "June 12, 2024",
//     author: "Veer Bharat Team",
//     views: 612,
//     readTime: "6 min read",
//     excerpt:
//       "Understand the real differences between traditional Kachi Ghani and refined oils to make informed choices.",
//     content: `<p>The debate between Kachi Ghani (cold-pressed) and refined oils has been ongoing in Indian households for years. Understanding the differences can help you make informed choices for your family's health.</p>
// <h2>Kachi Ghani – The Traditional Method</h2>
// <p>Kachi Ghani, or cold-press extraction, is an ancient technique where oil seeds are crushed at low temperatures without applying heat. This gentle process preserves the natural aroma, flavor, and nutritional content of the oil.</p>
// <h2>The Kachi Ghani Advantage</h2>
// <p>Cold-pressed oils retain their natural pungency and strong aroma, which many consider essential for authentic taste in traditional recipes. The absence of chemical solvents means you get pure, unadulterated oil.</p>
// <h2>Refined Oil – The Modern Approach</h2>
// <p>Refining involves heating the oil and using chemical solvents to extract maximum oil from seeds. The oil then undergoes bleaching and deodorizing to remove impurities, color, and odor.</p>
// <h2>Benefits Of Refined Oil</h2>
// <p>Refined oils have a higher smoke point, making them suitable for high-temperature cooking without breaking down. Their neutral flavor doesn't overpower delicate dishes.</p>
// <h2>Making The Right Choice</h2>
// <p>Both types have their place in your kitchen. Use Kachi Ghani mustard oil for tadkas, pickles, and traditional recipes. Opt for refined oils for versatile everyday cooking and when you need a neutral flavor.</p>`,
//     faqs: [
//       {
//         question: "Which is healthier: Kachi Ghani or refined oil?",
//         answer:
//           "Kachi Ghani retains more natural nutrients, but refined oils have higher smoke points for high-heat cooking. Both can be part of a healthy diet when used appropriately.",
//       },
//       {
//         question: "Can I use Kachi Ghani oil for deep frying?",
//         answer:
//           "While possible, Kachi Ghani oil has a lower smoke point than refined oils. It's best used for tadkas, pickles, and moderate-heat cooking.",
//       },
//     ],
//   },
// ];

// // Required for static export
// export function generateStaticParams() {
//   return blogs.map((blog) => ({
//     id: blog.id,
//   }));
// }

// export default function SingleBlogPage({ params }) {
//   const blogId = params.id;
//   const blog = blogs.find((b) => b.id === blogId) || blogs[0];
//   const relatedBlogs = blogs.filter((b) => b.id !== blog.id).slice(0, 3);

//   return (
//     <>
//       <main className="min-h-screen bg-white">
//         {/* Breadcrumb Navigation */}
//         <div className="bg-[#fef9c3] border-b border-amber-200">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//             <nav className="flex items-center gap-2 text-sm md:text-base text-gray-700 font-medium">
//               <Link href="/" className="hover:text-amber-700 transition-colors">
//                 Home
//               </Link>
//               <span className="text-gray-400">›</span>
//               <Link
//                 href="/blog"
//                 className="hover:text-amber-700 transition-colors"
//               >
//                 Blog
//               </Link>
//               <span className="text-gray-400">›</span>
//               <span className="text-gray-900 font-semibold truncate">
//                 {blog.title}
//               </span>
//             </nav>
//           </div>
//         </div>

//         {/* Hero Section */}
//         <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
//           {/* Category Badge */}
//           <div className="mb-6">
//             <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-sm md:text-base font-bold shadow-md">
//               {blog.category}
//             </span>
//           </div>

//           {/* Title */}
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 md:mb-8 leading-tight">
//             {blog.title}
//           </h1>

//           {/* Excerpt */}
//           {blog.excerpt && (
//             <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 leading-relaxed max-w-4xl">
//               {blog.excerpt}
//             </p>
//           )}

//           {/* Meta Information */}
//           <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base text-gray-600 pb-8 md:pb-10 mb-8 md:mb-10 border-b-2 border-gray-200">
//             <div className="flex items-center gap-2">
//               <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center text-white font-black text-lg md:text-xl shadow-md">
//                 V
//               </div>
//               <span className="font-semibold text-gray-900">
//                 {blog.author}
//               </span>
//             </div>
//             <span className="hidden sm:inline text-gray-300">|</span>
//             <span>📅 {blog.date}</span>
//             <span className="hidden sm:inline text-gray-300">|</span>
//             <span>⏱️ {blog.readTime}</span>
//             <span className="hidden sm:inline text-gray-300">|</span>
//             <span>👁️ {blog.views} views</span>
//           </div>

//           {/* Featured Image */}
//           <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl mb-10 md:mb-14">
//             <Image
//               src={blog.image}
//               alt={blog.title}
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>

//           {/* Main Content */}
//           <div className="prose prose-base md:prose-lg lg:prose-xl max-w-none">
//             <div
//               className="blog-content"
//               dangerouslySetInnerHTML={{ __html: blog.content }}
//             />
//           </div>

//           {/* FAQ Section */}
//           {blog.faqs && blog.faqs.length > 0 && (
//             <section className="mt-12 md:mt-16 pt-10 md:pt-12 border-t-2 border-gray-200">
//               <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 md:mb-8">
//                 FAQs
//               </h2>
//               <div className="space-y-6 md:space-y-8">
//                 {blog.faqs.map((faq, index) => (
//                   <div
//                     key={index}
//                     className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 md:p-8 shadow-md border border-amber-100"
//                   >
//                     <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
//                       {index + 1}. {faq.question}
//                     </h3>
//                     <p className="text-base md:text-lg text-gray-700 leading-relaxed">
//                       {faq.answer}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           )}

//           {/* Share Section */}
//           <div className="mt-12 md:mt-16 pt-10 md:pt-12 border-t-2 border-gray-200">
//             <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
//               Share this article
//             </h3>
//             <div className="flex flex-wrap gap-3 md:gap-4">
//               <button className="px-5 py-3 md:px-6 md:py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
//                 📘 Facebook
//               </button>
//               <button className="px-5 py-3 md:px-6 md:py-3.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-sm md:text-base font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
//                 🐦 Twitter
//               </button>
//               <button className="px-5 py-3 md:px-6 md:py-3.5 rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm md:text-base font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
//                 💬 WhatsApp
//               </button>
//               <button className="px-5 py-3 md:px-6 md:py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm md:text-base font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
//                 🔗 LinkedIn
//               </button>
//             </div>
//           </div>
//         </article>

//         {/* Related Articles */}
//         <section className="bg-gradient-to-b from-[#fef9c3] to-amber-50 py-12 md:py-16 lg:py-20 mt-12 md:mt-16">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 md:mb-12">
//               Related Articles
//             </h2>
//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//               {relatedBlogs.map((related) => (
//                 <Link
//                   key={related.id}
//                   href={`/blog/${related.id}`}
//                   className="group bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-amber-400 transform hover:-translate-y-2"
//                 >
//                   <div className="relative h-48 sm:h-52 md:h-56">
//                     <Image
//                       src={related.image}
//                       alt={related.title}
//                       fill
//                       className="object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute top-4 left-4">
//                       <span className="inline-block px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-xs md:text-sm font-bold text-amber-700 shadow-md">
//                         {related.category}
//                       </span>
//                     </div>
//                   </div>
//                   <div className="p-5 md:p-6">
//                     <h3 className="font-bold text-lg md:text-xl text-gray-900 group-hover:text-amber-600 transition-colors leading-tight mb-3 line-clamp-2">
//                       {related.title}
//                     </h3>
//                     <p className="text-sm md:text-base text-gray-600 mb-4 line-clamp-2">
//                       {related.excerpt}
//                     </p>
//                     <div className="flex items-center justify-between text-xs md:text-sm text-gray-500">
//                       <span>⏱️ {related.readTime}</span>
//                       <span className="font-semibold text-amber-600 group-hover:text-amber-700">
//                         Read More →
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Back Button */}
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
//           <Link
//             href="/blog"
//             className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white text-base md:text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
//           >
//             ← Back to Blog
//           </Link>
//         </div>
//       </main>
//     </>
//   );
// }



import React from "react";
import Image from "next/image";
import Link from "next/link";

// Blog data
const blogs = [
  {
    id: "1",
    title: "Goodness Of Cold-Pressed Mustard Oil",
    category: "Mustard Oil",
    image: "/images/mustard-blog.jpg",
    date: "January 1, 2024",
    author: "Veer Bharat Team",
    views: 602,
    readTime: "5 min read",
    excerpt:
      "Discover the nutritional powerhouse and authentic flavor of traditional cold-pressed mustard oil for your kitchen.",
    content: `<p>Ever explored the world of <strong>cold-pressed mustard oil</strong>? Curious about its uses and the awesome benefits it brings to the table?</p>
<p>Let's dive into the cool and informative realm of this Cold-Pressed Mustard Oil. 🌿💡</p>
<p>Cold-pressed mustard oil comes to life from mustard seeds, taking a chill pill in the extraction process—no heat, no chemicals. The result? A superstar oil with a unique flavor twist, a treasure of nutrients, and a fan club for its health perks.</p>
<h2>Powerhouse Of Nutrients</h2>
<p>It's got omega-3 fatty acids, the superheroes for your heart, and vitamin E, the skin's BFF fighting for your glow-up game. And guess what? The cool part is, thanks to the extraction process avoiding hot vibes, these nutritional rockstars stay locked and loaded, making it the wholesome boost your diet deserves. 💫</p>
<h2>Flavor And Aroma</h2>
<p>Cold-pressing keeps the bold and zesty vibes intact, giving mustard oil its unmistakable kick. It's like a flavor fiesta with its unique taste and a powerful aroma that throws a party in your dishes. 🎉🌿</p>
<h2>Ayurvedic Wellness</h2>
<p>Mustard oil has scored big in the wellness arena! Ayurveda gives it a high-five for improving the digestion, boosting circulation, and rocking natural antibacterial vibes. When it comes to massages, this oil is like a spa day for your skin and muscles. Ancient healing, meet modern bliss! 🌿🧘</p>
<h2>Other Uses</h2>
<p>It's also a beauty secret! Massage it on your scalp and hair for a dose of strength and shine. And guess what? Your skin is in for a treat too – the moisturizing magic makes it a go-to for a pampering skincare routine. Talk about a versatile oil! 💆‍♀️✨</p>`,
    faqs: [
      {
        question: "What makes cold-pressed mustard oil different?",
        answer:
          "Cold-pressed mustard oil is extracted without heat or chemicals, preserving all natural nutrients, flavor, and aroma.",
      },
      {
        question: "Can I use mustard oil for cooking?",
        answer:
          "Yes! Mustard oil is excellent for high-heat cooking, tadkas, pickles, and traditional Indian recipes.",
      },
      {
        question: "Is mustard oil good for hair?",
        answer:
          "Absolutely. Regular massage with mustard oil strengthens hair roots, promotes growth, and adds natural shine.",
      },
    ],
  },

  // UPDATED SOYABEAN BLOG - MEDIUM STYLE WITH OFFICIAL TONE
  {
    id: "2",
    title:
      "Why Is Soybean Oil One of the Most Versatile and Healthy Cooking Oils?",
    category: "Soybean Oil",
    image: "/images/soyabean-blog.jpg",
    date: "December 5, 2024",
    author: "Veer Bharat – Official",
    email: "veerbharat2001@gmail.com",
    views: 1245,
    readTime: "6 min read",
    excerpt:
      "Choosing the right cooking oil can make a significant difference in both the taste and nutritional value of your meals. Among the many options available, soybean oil has gained popularity for its excellent balance of flavour, health benefits, and kitchen versatility.",
    content: `
<p>Choosing the right cooking oil can make a significant difference in both the taste and nutritional value of your meals. Among the many options available, <strong>soybean oil</strong> has gained popularity for its excellent balance of flavour, <strong>health benefits</strong>, and kitchen versatility. This raises an important question: <em>Why is soybean oil one of the most versatile and healthy cooking oils?</em> The answer lies in its unique nutritional profile, neutral flavour, and wide range of culinary uses.</p>

<h2>1. A Heart-Healthy Nutritional Profile</h2>

<p>Soybean oil is rich in <strong>polyunsaturated fatty acids</strong>, including <strong>omega-3</strong> and <strong>omega-6 fatty acids</strong>, which are essential for supporting heart health. These fats help lower bad cholesterol levels while promoting overall cardiovascular wellness. The oil also contains <strong>monounsaturated fats</strong>, making it a balanced choice for everyday cooking.</p>

<blockquote>
<p>"Soybean oil's balanced fat profile makes it one of the healthiest cooking oil options for modern households looking to maintain heart health without compromising on taste."</p>
</blockquote>

<h2>2. High Smoke Point for Multiple Cooking Methods</h2>

<p>One of the main reasons soybean oil is so versatile is its <strong>high smoke point</strong>. This makes it suitable for high-heat cooking techniques such as <em>frying, grilling, roasting, and sautéing</em>. It maintains its stability at elevated temperatures, ensuring your food cooks evenly without compromising flavour or nutritional value.</p>

<p>Whether you're preparing crispy pakoras, golden french fries, or perfectly roasted vegetables, soybean oil delivers consistent results every time.</p>

<h2>3. Neutral Taste That Enhances Every Dish</h2>

<p>Soybean oil has a naturally <strong>mild, neutral flavour</strong>. This makes it ideal for recipes where you want the ingredients — not the oil — to stand out. Whether you're preparing baked goods, stir-fried meals, salad dressings, or marinades, soybean oil blends seamlessly into almost any dish without overpowering the spices or herbs.</p>

<p>For chefs and home cooks alike, this versatility is a game-changer. It allows you to experiment with different cuisines while maintaining the authentic taste of your ingredients.</p>

<h2>4. Rich in Vitamin E and Antioxidants</h2>

<p>Another reason soybean oil is considered a healthy option is its impressive <strong>antioxidant content</strong>. It is a good source of <strong>Vitamin E</strong>, which supports skin health, boosts immunity, and protects the body from oxidative stress. Including soybean oil in your cooking routine can contribute to your overall well-being.</p>

<h2>5. Affordable, Accessible, and Widely Used</h2>

<p>In addition to its health benefits, soybean oil is extremely <strong>cost-effective</strong>. It is readily available in most markets, making it a practical choice for households and food businesses. Its affordability allows consumers to enjoy a high-quality, nutritious cooking oil without spending more than necessary.</p>

<h2>6. Sustainable and Environmentally Friendly</h2>

<p>Soybean crops are known for their efficient cultivation and sustainable production practices. Choosing soybean oil supports <strong>eco-friendly agriculture</strong> and reduces environmental impact compared to other resource-intensive alternatives. At <strong>Veer Bharat</strong>, we work with partners who prioritise quality and responsible production practices.</p>

<hr/>

<h2>Conclusion</h2>

<p>So, <strong>why is soybean oil one of the most versatile and healthy cooking oils?</strong> The answer is clear: it combines heart-friendly nutrients, a neutral flavour profile, a high smoke point, and exceptional versatility in the kitchen. Whether you're a home cook or a professional chef, soybean oil offers a reliable and healthy option for all kinds of culinary creations.</p>

<p>If you're looking to upgrade your daily cooking oil without compromising on health, flavour, or budget, soybean oil from <strong>Veer Bharat</strong> is a trusted option for your family.</p>

<p style="background: #f9f6f1; padding: 20px; border-left: 4px solid #d97706; margin: 30px 0;">
<strong>📧 For bulk orders, dealership enquiries, or business collaborations:</strong><br/>
Contact us at: <a href="mailto:veerbharat2001@gmail.com" style="color: #d97706; font-weight: bold;">veerbharat2001@gmail.com</a>
</p>
`,
    faqs: [
      {
        question: "Why is soybean oil considered heart-friendly?",
        answer:
          "Soybean oil contains beneficial polyunsaturated and monounsaturated fats, including omega-3 and omega-6 fatty acids. It has naturally low saturated fat content, making it a heart-healthy choice when used as part of a balanced diet.",
      },
      {
        question: "Can I use soybean oil for deep frying and daily cooking?",
        answer:
          "Yes! Soybean oil has a high smoke point and neutral taste, making it suitable for deep frying, tadkas, roasting, sautéing, and even baking. It's an all-purpose cooking oil for everyday use.",
      },
      {
        question: "Is soybean oil suitable for health-conscious families?",
        answer:
          "Absolutely. Soybean oil is a practical option for health-conscious households because it combines a balanced fat profile, vitamin E content, and everyday affordability without compromising on nutrition.",
      },
      {
        question: "How should I store soybean oil for maximum freshness?",
        answer:
          "Store soybean oil in a cool, dark place away from direct sunlight and heat. Once opened, use within 6-8 months for optimal quality and freshness.",
      },
    ],
  },

  {
    id: "3",
    title: "Sunflower Oil – Sunshine In A Bottle",
    category: "Sunflower Oil",
    image: "/images/sunflower-blog.jpg",
    date: "March 10, 2024",
    author: "Veer Bharat Team",
    views: 521,
    readTime: "4 min read",
    excerpt:
      "Discover why sunflower oil is becoming a kitchen essential for families nationwide.",
    content: `<p>Extracted from the seeds of the cheerful sunflower plant, sunflower oil has become a kitchen staple for millions. Its light texture, neutral taste, and impressive nutritional profile make it a favorite among home cooks and professional chefs alike.</p>
<h2>Vitamin E Champion</h2>
<p>Sunflower oil is one of the richest sources of vitamin E among all cooking oils. Just a tablespoon provides a significant portion of your daily vitamin E needs. This fat-soluble antioxidant protects your body's cells from oxidative stress.</p>
<h2>Heart-Friendly Fats</h2>
<p>With a balanced ratio of polyunsaturated and monounsaturated fats, sunflower oil supports cardiovascular health. It helps maintain healthy cholesterol levels when used as part of a balanced diet.</p>
<h2>Light & Non-Greasy</h2>
<p>Unlike heavier oils, sunflower oil has a light texture that doesn't leave food feeling greasy. This makes it perfect for sautéing vegetables, making crispy pakoras, or even baking cakes and cookies.</p>
<h2>Stability & Shelf Life</h2>
<p>Refined sunflower oil has excellent stability and a long shelf life when stored properly. The refining process removes impurities while retaining beneficial nutrients.</p>`,
    faqs: [
      {
        question: "Can I use sunflower oil for baking?",
        answer:
          "Absolutely! Sunflower oil's neutral flavor and light texture make it perfect for cakes, cookies, and muffins.",
      },
      {
        question: "How should I store sunflower oil?",
        answer:
          "Store in a cool, dark place away from direct sunlight. Once opened, use within 6–8 months for best quality.",
      },
    ],
  },
  {
    id: "4",
    title: "Rice Bran Oil – The Cholesterol Fighter",
    category: "Rice Bran Oil",
    image: "/images/ricebran-blog.jpg",
    date: "April 5, 2024",
    author: "Veer Bharat Team",
    views: 389,
    readTime: "5 min read",
    excerpt:
      "Uncover the hidden health benefits of rice bran oil, Asia's best-kept wellness secret.",
    content: `<p>Rice bran oil, extracted from the nutrient-rich outer layer of rice grains, is one of Asia's best-kept health secrets. Popular in Japan and other Asian countries for decades, this oil is now gaining recognition worldwide.</p>
<h2>Oryzanol Magic</h2>
<p>The star component of rice bran oil is gamma-oryzanol, a unique compound rarely found in other oils. Studies suggest that oryzanol can help lower bad cholesterol (LDL) while maintaining or even increasing good cholesterol (HDL).</p>
<h2>Balanced Fatty Acid Profile</h2>
<p>Rice bran oil boasts a near-perfect balance of saturated, monounsaturated, and polyunsaturated fats. This ideal ratio, recommended by the World Health Organization, makes it one of the healthiest cooking oils available.</p>
<h2>High Smoke Point Excellence</h2>
<p>With a smoke point of around 232°C (450°F), rice bran oil is perfect for high-temperature cooking methods like deep frying and stir-frying. It doesn't break down easily, ensuring that your food remains healthy.</p>
<h2>Skin & Beauty Benefits</h2>
<p>Beyond cooking, rice bran oil is prized in skincare for its moisturizing properties. Rich in vitamin E and antioxidants, it can be used topically to nourish skin and reduce signs of aging.</p>`,
    faqs: [
      {
        question: "What is gamma-oryzanol?",
        answer:
          "Gamma-oryzanol is a unique antioxidant compound found in rice bran oil that helps manage cholesterol levels and supports heart health.",
      },
      {
        question: "Can rice bran oil be used for Indian cooking?",
        answer:
          "Yes! Its high smoke point and neutral flavor make it perfect for all types of Indian cooking, from tadkas to deep frying.",
      },
    ],
  },
  {
    id: "5",
    title: "Palm Oil – The Versatile Kitchen Essential",
    category: "Palm Oil",
    image: "/images/palm-blog.jpg",
    date: "May 20, 2024",
    author: "Veer Bharat Team",
    views: 467,
    readTime: "4 min read",
    excerpt:
      "Explore the unique properties that make palm oil indispensable in kitchens worldwide.",
    content: `<p>Palm oil, derived from the fruit of the oil palm tree, is one of the most widely used cooking oils globally. Its unique properties make it indispensable in both home kitchens and commercial food production.</p>
<h2>Natural Semi-Solid State</h2>
<p>Unlike most other oils, palm oil is semi-solid at room temperature due to its balanced composition of saturated and unsaturated fats. This unique characteristic makes it ideal for creating textures in baked goods.</p>
<h2>Rich In Carotenoids</h2>
<p>Palm oil's distinctive red-orange color comes from its high beta-carotene content, the precursor to vitamin A. These carotenoids are powerful antioxidants that support eye health and boost immunity.</p>
<h2>High Temperature Stability</h2>
<p>With excellent heat stability, palm oil is perfect for deep frying and commercial food preparation. It doesn't oxidize easily, meaning it can be reused more times than many other oils.</p>
<h2>Versatile Applications</h2>
<p>Beyond cooking, palm oil is used in everything from making traditional ghee alternatives to preparing authentic sweets and savories. Professional bakers particularly value it for creating consistent, high-quality baked goods.</p>
<h2>Sustainability Matters</h2>
<p>At Veer Bharat, we source our palm oil from certified sustainable plantations that follow ethical farming practices.</p>`,
    faqs: [
      {
        question: "Is palm oil healthy?",
        answer:
          "Yes, when consumed in moderation. Palm oil contains beneficial nutrients like vitamin E and beta-carotene, though it's higher in saturated fats than some other oils.",
      },
      {
        question: "Why does palm oil solidify?",
        answer:
          "Palm oil's balanced fat composition causes it to be semi-solid at room temperature, similar to coconut oil.",
      },
    ],
  },
  {
    id: "6",
    title: "Kachi Ghani vs Refined Oil – The Truth",
    category: "Mustard Oil",
    image: "/images/mustard-blog.jpg",
    date: "June 12, 2024",
    author: "Veer Bharat Team",
    views: 612,
    readTime: "6 min read",
    excerpt:
      "Understand the real differences between traditional Kachi Ghani and refined oils to make informed choices.",
    content: `<p>The debate between Kachi Ghani (cold-pressed) and refined oils has been ongoing in Indian households for years. Understanding the differences can help you make informed choices for your family's health.</p>
<h2>Kachi Ghani – The Traditional Method</h2>
<p>Kachi Ghani, or cold-press extraction, is an ancient technique where oil seeds are crushed at low temperatures without applying heat. This gentle process preserves the natural aroma, flavor, and nutritional content of the oil.</p>
<h2>The Kachi Ghani Advantage</h2>
<p>Cold-pressed oils retain their natural pungency and strong aroma, which many consider essential for authentic taste in traditional recipes. The absence of chemical solvents means you get pure, unadulterated oil.</p>
<h2>Refined Oil – The Modern Approach</h2>
<p>Refining involves heating the oil and using chemical solvents to extract maximum oil from seeds. The oil then undergoes bleaching and deodorizing to remove impurities, color, and odor.</p>
<h2>Benefits Of Refined Oil</h2>
<p>Refined oils have a higher smoke point, making them suitable for high-temperature cooking without breaking down. Their neutral flavor doesn't overpower delicate dishes.</p>
<h2>Making The Right Choice</h2>
<p>Both types have their place in your kitchen. Use Kachi Ghani mustard oil for tadkas, pickles, and traditional recipes. Opt for refined oils for versatile everyday cooking and when you need a neutral flavor.</p>`,
    faqs: [
      {
        question: "Which is healthier: Kachi Ghani or refined oil?",
        answer:
          "Kachi Ghani retains more natural nutrients, but refined oils have higher smoke points for high-heat cooking. Both can be part of a healthy diet when used appropriately.",
      },
      {
        question: "Can I use Kachi Ghani oil for deep frying?",
        answer:
          "While possible, Kachi Ghani oil has a lower smoke point than refined oils. It's best used for tadkas, pickles, and moderate-heat cooking.",
      },
    ],
  },
];

// Required for static export
export function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id,
  }));
}

export default function SingleBlogPage({ params }) {
  const blogId = params.id;
  const blog = blogs.find((b) => b.id === blogId) || blogs[0];
  const relatedBlogs = blogs.filter((b) => b.id !== blog.id).slice(0, 3);

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Medium-style Header */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 transition-colors">
                Home
              </Link>
              <span className="text-gray-300">›</span>
              <Link
                href="/blog"
                className="hover:text-gray-900 transition-colors"
              >
                Blog
              </Link>
              <span className="text-gray-300">›</span>
              <span className="text-gray-900 font-medium truncate">
                {blog.category}
              </span>
            </nav>
          </div>
        </div>

        {/* Article Container - Medium Style */}
        <article className="max-w-3xl mx-auto px-6 py-12">
          {/* Title - Large & Bold */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            {blog.title}
          </h1>

          {/* Meta Info - Medium Style */}
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center text-white font-bold text-xl">
                V
              </div>
              <div>
                <div className="font-semibold text-gray-900">
                  {blog.author}
                </div>
                {blog.email && (
                  <a
                    href={`mailto:${blog.email}`}
                    className="text-sm text-green-600 hover:underline"
                  >
                    {blog.email}
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-600 mb-8">
            <span>{blog.readTime}</span>
            <span>·</span>
            <span>{blog.date}</span>
          </div>

          {/* Featured Image - Full Width */}
          <div className="relative w-full h-96 mb-10 -mx-6 sm:mx-0 sm:rounded-lg overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content - styled via utility class instead of styled-jsx */}
          <div className="prose prose-lg max-w-none blog-prose">
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>

          {/* Tags - Medium Style */}
          <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-200">
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              Food Oil
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              Soya Bean
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              Healthy Cooking
            </span>
          </div>

          {/* Claps & Actions */}
          <div className="flex items-center gap-6 mt-8">
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
              <span className="font-semibold">{blog.views}</span>
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </button>
          </div>

          {/* FAQ Section */}
          {blog.faqs && blog.faqs.length > 0 && (
            <section className="mt-16 pt-12 border-t-2 border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {blog.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </article>

        {/* Author Card - Below Article */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center text-white font-bold text-3xl flex-shrink-0">
                  V
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Written by {blog.author}
                  </h3>
                  {blog.email && (
                    <p className="text-gray-600 mb-3">
                      📧{" "}
                      <a
                        href={`mailto:${blog.email}`}
                        className="text-green-600 hover:underline font-medium"
                      >
                        {blog.email}
                      </a>
                    </p>
                  )}
                  <p className="text-gray-700 leading-relaxed">
                    Official content from Veer Bharat — your trusted source for
                    premium quality edible oils and authentic food products. For
                    bulk orders, dealership enquiries, or collaborations, reach
                    out to us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">
              More from Veer Bharat
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedBlogs.map((related) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.id}`}
                  className="group bg-gray-50 rounded-2xl border border-gray-200 hover:border-amber-400 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <div className="relative h-44">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <p className="text-xs font-semibold text-amber-600 mb-2 uppercase tracking-wide">
                      {related.category}
                    </p>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-amber-600">
                      {related.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {related.excerpt}
                    </p>
                    <div className="mt-auto flex items-center justify-between text-xs text-gray-500">
                      <span>⏱ {related.readTime}</span>
                      <span className="font-semibold text-amber-600 group-hover:text-amber-700">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Back to Blog */}
        <div className="bg-white pb-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold shadow-md hover:shadow-lg hover:from-amber-600 hover:to-yellow-600 transition-all duration-300"
            >
              ← Back to all articles
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
