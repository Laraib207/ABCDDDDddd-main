// "use client";
// import Image from "next/image";

// export default function WhoWeAreSection() {
//   return (
//     <section className="relative w-full bg-white">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28">
//         <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
//           {/* LEFT - TEXT */}
//           <div className="w-full lg:w-6/12">
//             <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-amber-500 tracking-tight">
//               WHO WE ARE
//             </h3>

//             <h4 className="mt-4 text-base md:text-lg font-semibold text-gray-800">
//               THE BELIEF
//             </h4>

//             <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
//               We believe in the power of people. The power of being unified as a family.
//               When it comes to matters of home, we only want the best. Veer Bharat delivers
//               superior edible oils crafted with care — enhancing taste, health and trust in
//               every kitchen. From traditional Kachi Ghani to modern refined oils, we are committed
//               to purity and quality in every bottle.
//             </p>

//             <a
//               href="/about"
//               className="inline-block mt-5 text-amber-600 font-semibold hover:underline"
//             >
//               Read More
//             </a>
//           </div>

//           {/* RIGHT - CIRCULAR IMAGE + DECORATIVE */}
//           <div className="w-full lg:w-6/12 flex items-center justify-center relative">
//             <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden shadow-2xl bg-white">
//               <Image
//                 src="/images/prod-mustard.jpg"        /* change to your image name in public/images */
//                 alt="Veer Bharat products"
//                 fill
//                 className="object-cover"
//                 sizes="(max-width: 1024px) 70vw, 380px"
//                 priority
//               />
//             </div>

//             {/* Decorative dotted path (absolute) */}
//             <svg className="hidden md:block absolute -left-40 -bottom-24 w-96 h-96 pointer-events-none" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
//               <path d="M10 350 C 120 240, 240 120, 390 10" stroke="#f59e0b" strokeWidth="3" strokeDasharray="6 10" strokeLinecap="round" />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Playfair_Display, Poppins } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "800"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function WhoWeAreSection() {
  return (
    <section className={`${poppins.className} relative w-full bg-gradient-to-b from-white via-amber-50/20 to-white py-20 md:py-32`}>
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          
          {/* LEFT COLUMN - TEXT CONTENT */}
          <div className="w-full lg:w-[52%] flex flex-col">
            {/* Main Heading with hover animation */}
            <motion.h3 
              className={`${playfair.className} text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase leading-none`}
              style={{ 
                color: '#d97706',
                letterSpacing: '0.02em'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
              whileHover={{ 
                letterSpacing: '0.06em',
                transition: { duration: 0.3 }
              }}
              aria-label="Who we are section"
            >
              WHO WE ARE
            </motion.h3>

            {/* Classical Subheading */}
            <motion.h4 
              className={`${playfair.className} mt-5 text-sm md:text-base font-semibold tracking-[0.2em] uppercase`}
              style={{ color: '#78350f' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
            >
              The Belief
            </motion.h4>

            {/* Soulful Paragraph - Cool Styled Content */}
            <motion.div
              className="mt-6 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                At <span className="font-bold text-amber-700">Veer Bharat</span>, we believe every meal is a celebration of heritage, health, and happiness. For generations, families across India have trusted us to bring{" "}
                <span className="italic text-amber-600">pure, authentic flavors</span> to their kitchens.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                From the golden richness of our <span className="font-semibold text-amber-800">Kachi Ghani Mustard Oil</span> to the heart-healthy goodness of <span className="font-semibold text-amber-800">Soyabean</span> and <span className="font-semibold text-amber-800">Rice Bran Oil</span>, each drop is crafted with uncompromising quality and care.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed text-gray-700 pb-1">
                We don't just produce oils—we preserve traditions, nurture wellness, and honor the trust you place in us. Because when it comes to your family's health,{" "}
                <span className="font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">only the best will do</span>.
              </p>
            </motion.div>

            {/* CTA Link */}
            <motion.a
              href="/about"
              className="inline-block mt-7 px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
              aria-label="Read more about Veer Bharat"
            >
              Discover Our Story
            </motion.a>
          </div>

          {/* RIGHT COLUMN - CIRCULAR IMAGE */}
          <div className="w-full lg:w-[48%] flex items-center justify-center relative mt-8 lg:mt-0">
            
            {/* Animated Decorative Path */}
            {/* <motion.svg 
              className="hidden lg:block absolute -left-32 -top-16 w-80 h-80 pointer-events-none opacity-30" 
              viewBox="0 0 320 320" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              aria-hidden="true"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.path 
                d="M10 310 Q 80 240, 160 160 T 310 10" 
                stroke="#f59e0b" 
                strokeWidth="2.5" 
                strokeDasharray="8 12" 
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 2.5, 
                  delay: 0.8,
                  ease: "easeInOut"
                }}
              />
            </motion.svg> */}

            {/* Circular Image Container with animations */}
            <motion.div 
              className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden bg-white"
              style={{
                boxShadow: '0 20px 60px rgba(217, 119, 6, 0.15), 0 8px 24px rgba(0, 0, 0, 0.08)'
              }}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ 
                duration: 0.8, 
                delay: 0.3,
                ease: [0.22, 0.61, 0.36, 1]
              }}
              whileHover={{ 
                y: -6,
                boxShadow: '0 24px 72px rgba(217, 119, 6, 0.22), 0 12px 32px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.3 }
              }}
            >
              <Image
                src="/images/prod-mustard.jpg"
                alt="Veer Bharat premium edible oils showcasing our commitment to purity and quality"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 320px, (max-width: 1024px) 380px, 380px"
                priority
                quality={90}
              />
              
              {/* Inner vignette overlay */}
              <div 
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at center, transparent 40%, rgba(0, 0, 0, 0.08) 100%)'
                }}
                aria-hidden="true"
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}