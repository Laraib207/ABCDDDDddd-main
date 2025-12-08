"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const BlogHero = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmNTk1MGYiIGZpbGwtb3BhY2l0eT0iMC4wNiI+PHBhdGggZD0iTTM2IDE0YzQgMCA4LTQgOC04cy00LTgtOC04LTggNC04IDggNCA4IDggOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-60"></div>
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full blur-3xl opacity-20"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full blur-3xl opacity-20"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white text-base font-bold mb-6 shadow-xl"
          >
            🌾 VEER BHARAT INSIGHTS
          </motion.span>
          
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 mb-6 leading-tight">
            Our Blog
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto font-medium leading-relaxed"
          >
            Dive into the world of pure, authentic oils and premium rice. Discover health benefits, cooking tips, and the tradition behind every drop!
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
        >
          <div className="relative h-[450px]">
            <Image
              src="/images/blog-hero.jpg"
              alt="Veer Bharat Premium Oils"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-10 left-10 text-white max-w-xl"
            >
              <h3 className="text-4xl font-black mb-3 drop-shadow-lg">Pure. Natural. Authentic.</h3>
              <p className="text-xl font-medium drop-shadow-md">Experience the tradition of quality oils & premium rice from Veer Bharat</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const BlogGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const blogs = [
    {
      id: 1,
      title: "The Golden Goodness of Mustard Oil",
      category: "Mustard Oil",
      image: "/images/mustard-blog.jpg",
      date: "Jan 15, 2024",
      readTime: "3 min",
      excerpt: "Discover why cold-pressed mustard oil is a kitchen superhero!",
      content: `Veer Bharat's cold-pressed mustard oil brings centuries of tradition to your kitchen. Rich in omega-3 fatty acids and vitamin E, this golden elixir is more than just cooking oil—it's a health powerhouse! Our traditional extraction method preserves every nutrient, delivering that authentic pungent flavor loved across Indian households. From tadkas to pickles, mustard oil adds a distinctive taste while boosting immunity and promoting heart health. The natural antibacterial properties make it perfect for Ayurvedic wellness too. Whether you're frying crispy pakoras or preparing aromatic curries, our mustard oil ensures every dish is infused with nutrition and tradition. Experience the difference of genuine Kachi Ghani processing—where quality meets heritage!`
    },
    {
      id: 2,
      title: "Soyabean Oil: The Heart-Smart Choice",
      category: "Soyabean Oil",
      image: "/images/soyabean-blog.jpg",
      date: "Feb 20, 2024",
      readTime: "4 min",
      excerpt: "Light, versatile, and packed with goodness!",
      content: `Veer Bharat Soyabean Oil is the modern kitchen's best friend! Light in texture yet loaded with polyunsaturated fats, our soyabean oil supports heart health while keeping cholesterol in check. Packed with vitamin E, it acts as a natural antioxidant protecting your cells from damage. The neutral flavor profile makes it incredibly versatile—perfect for everything from crispy samosas to delicate baking. With a high smoke point, it remains stable even at elevated temperatures, ensuring your fried foods stay healthy. Whether you're preparing continental dishes or traditional Indian recipes, our premium soyabean oil adapts beautifully. It's cost-effective without compromising quality, making wholesome cooking accessible to every family. Choose Veer Bharat for oil that's pure, reliable, and health-conscious!`
    },
    {
      id: 3,
      title: "Sunflower Oil: Sunshine in Every Drop",
      category: "Sunflower Oil",
      image: "/images/sunflower-blog.jpg",
      date: "Mar 10, 2024",
      readTime: "3 min",
      excerpt: "Bright, light, and full of vitamin E!",
      content: `Bring the warmth of sunshine into your cooking with Veer Bharat Sunflower Oil! Extracted from premium sunflower seeds, our oil is one of the richest sources of vitamin E—nature's powerful antioxidant for glowing skin and strong immunity. The light, non-greasy texture ensures your dishes stay crisp without feeling heavy. Perfect for sautéing vegetables, deep frying snacks, or even baking cakes, sunflower oil's neutral taste lets your ingredients shine. Its balanced fatty acid profile supports cardiovascular wellness while adding zero cholesterol to your meals. The excellent stability means longer shelf life without losing nutritional value. From everyday cooking to special occasion feasts, Veer Bharat Sunflower Oil brings health and taste together. Make every meal a celebration of wellness with our premium quality oil!`
    },
    {
      id: 4,
      title: "Rice Bran Oil: The Japanese Secret",
      category: "Rice Bran Oil",
      image: "/images/ricebran-blog.jpg",
      date: "Apr 5, 2024",
      readTime: "4 min",
      excerpt: "Unlock the cholesterol-fighting power!",
      content: `Discover Veer Bharat Rice Bran Oil—Asia's best-kept health secret now in your kitchen! Extracted from nutrient-rich rice bran, our oil contains gamma-oryzanol, a unique compound that actively helps reduce bad cholesterol while boosting good cholesterol. This makes it a heart health champion! With a near-perfect balance of saturated, monounsaturated, and polyunsaturated fats as recommended by WHO, rice bran oil is scientifically proven to be one of the healthiest choices. Its impressive smoke point of 450°F makes it ideal for high-temperature cooking, deep frying, and stir-frying without breaking down. Food absorbs less oil, making fried items lighter and crispier. Beyond cooking, rice bran oil's vitamin E and antioxidants work wonders for skin health. Choose Veer Bharat Rice Bran Oil for wholesome cooking with Japanese wellness wisdom!`
    },
    {
      id: 5,
      title: "Palm Oil: The Versatile Kitchen Hero",
      category: "Palm Oil",
      image: "/images/palm-blog.jpg",
      date: "May 20, 2024",
      readTime: "3 min",
      excerpt: "From cooking to baking—palm oil does it all!",
      content: `Veer Bharat Palm Oil brings tropical goodness and incredible versatility to your kitchen! Naturally semi-solid at room temperature, palm oil is perfect for creating flaky pastries, tender cookies, and authentic traditional sweets. Rich in beta-carotene, our palm oil delivers vitamin A for healthy vision and strong immunity. The distinctive golden color comes from natural carotenoids—powerful antioxidants that protect your body. With excellent heat stability, palm oil handles high-temperature cooking without oxidizing, making it economical and safe for repeated use. Ideal for deep frying, preparing ghee alternatives, and commercial baking, it delivers consistent results every time. At Veer Bharat, we source from certified sustainable plantations that follow ethical practices. Choose palm oil that's not just good for your recipes but also good for the planet. Experience quality, tradition, and sustainability in every bottle!`
    },
    {
      id: 6,
      title: "Premium Basmati Rice from Veer Bharat",
      category: "Brand Rice",
      image: "/images/rice-blog.jpg",
      date: "Jun 12, 2024",
      readTime: "4 min",
      excerpt: "Long grain perfection in every bite!",
      content: `Veer Bharat brings you premium Basmati rice with unmatched aroma, length, and flavor! Sourced from the finest paddy fields, our rice grains elongate beautifully when cooked, creating that authentic restaurant-style presentation. Each grain stays separate, fluffy, and non-sticky—perfect for biryani, pulao, and everyday meals. Rich in essential vitamins and minerals, our basmati rice provides sustained energy while being naturally low in fat. The aromatic fragrance fills your kitchen with the essence of tradition. Aged to perfection, our rice delivers superior taste and texture that transforms simple meals into culinary experiences. Whether you're preparing festive biryanis or comforting khichdi, Veer Bharat rice ensures consistent excellence. Carefully processed and hygienically packed, every bag maintains purity and freshness. Elevate your dining experience with rice that represents quality, heritage, and taste. Choose Veer Bharat—where every grain tells a story!`
    },
    {
      id: 7,
      title: "Cooking with Mustard Oil: Tips & Tricks",
      category: "Mustard Oil",
      image: "/images/mustard-cooking.jpg",
      date: "Jul 8, 2024",
      readTime: "5 min",
      excerpt: "Master the art of cooking with this powerful oil!",
      content: `Master the authentic flavors of Indian cuisine with Veer Bharat Mustard Oil! The secret to perfect tadka lies in heating mustard oil until it smokes slightly—this removes the raw pungency while preserving nutrients. Use it for tempering dal with cumin, mustard seeds, and curry leaves for that irresistible aroma. Mustard oil's high smoking point makes it ideal for deep frying fish, creating that golden crispy coating. For pickles, its natural preservative qualities keep vegetables fresh for months. In winter, warm mustard oil massages provide relief from joint pain and boost circulation—a traditional Ayurvedic remedy. When making sarson ka saag, mustard oil amplifies the authentic Punjabi flavor. Mix it with lemon juice for a tangy salad dressing packed with health benefits. Store in a cool, dark place to maintain freshness. At Veer Bharat, our cold-pressed process ensures you get pure oil with maximum benefits!`
    },
    {
      id: 8,
      title: "The Perfect Rice: Cooking Guide",
      category: "Brand Rice",
      image: "/images/rice-cooking.jpg",
      date: "Aug 15, 2024",
      readTime: "4 min",
      excerpt: "Achieve restaurant-quality rice at home!",
      content: `Cook Veer Bharat Basmati rice like a pro with these expert tips! First, rinse the rice 2-3 times until water runs clear—this removes excess starch ensuring separate grains. Soak for 20-30 minutes to allow grains to absorb water evenly, resulting in perfect elongation. Use a 1:2 rice-to-water ratio for fluffy texture. Add a few drops of lemon juice or ghee to enhance aroma and prevent sticking. Bring water to a rolling boil, add rice, then reduce heat to low and cover tightly. Cook for 15-18 minutes without lifting the lid. Let it rest for 5 minutes before fluffing with a fork. For biryani, parboil rice to 70% doneness before layering with curry. The dum cooking technique infuses flavors beautifully. For pulao, sauté rice in ghee before adding water to enhance nutty flavor. Store Veer Bharat rice in airtight containers away from moisture. Follow these steps for consistently perfect results!`
    }
  ];

  const categories = ["All", "Mustard Oil", "Soyabean Oil", "Sunflower Oil", "Rice Bran Oil", "Palm Oil", "Brand Rice"];

  const filteredBlogs = activeCategory === "All" 
    ? blogs 
    : blogs.filter(blog => blog.category === activeCategory);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap justify-center gap-4 mb-16"
      >
        {categories.map((cat, idx) => (
          <motion.button
            key={cat}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => setActiveCategory(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-7 py-3.5 rounded-full font-bold text-lg transition-all duration-300 ${
              activeCategory === cat
                ? "bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white shadow-xl scale-110"
                : "bg-white text-gray-700 hover:bg-gradient-to-r hover:from-orange-100 hover:to-pink-100 shadow-md hover:shadow-lg"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredBlogs.map((blog, idx) => (
          <motion.article
            key={blog.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-transparent hover:border-gradient-to-r hover:from-orange-400 hover:to-pink-400 relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            
            <div className="relative z-10 bg-white rounded-3xl overflow-hidden">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                <motion.div
                  className="absolute top-5 right-5"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white text-base font-bold shadow-2xl backdrop-blur-sm">
                    {blog.category}
                  </span>
                </motion.div>

                <div className="absolute bottom-5 left-5 flex items-center gap-3 text-white text-base font-semibold">
                  <span className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
                    📅 {blog.date}
                  </span>
                  <span className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
                    ⏱️ {blog.readTime}
                  </span>
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-pink-600 transition-all duration-300 leading-tight">
                  {blog.title}
                </h3>

                <p className="text-lg text-gray-600 leading-relaxed mb-5 font-medium">
                  {blog.excerpt}
                </p>

                <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-5 mb-6 border border-orange-100">
                  <p className="text-base text-gray-700 leading-relaxed line-clamp-4">
                    {blog.content}
                  </p>
                </div>

                <Link
                  href={`/blog/${blog.id}`}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white text-lg font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group/btn"
                >
                  <span>Read Article</span>
                  <motion.span className="group-hover/btn:translate-x-1 transition-transform">
                    →
                  </motion.span>
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {filteredBlogs.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-2xl text-gray-500 font-medium">No articles found in this category.</p>
        </motion.div>
      )}
    </section>
  );
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-pink-50">
      <BlogHero />
      <BlogGrid />
    </main>
  );
}
