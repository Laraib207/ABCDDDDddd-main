"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  // Animation variants for smooth fade-in
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <main className="bg-gradient-to-b from-white via-amber-50/30 to-white overflow-hidden">
      
      {/* ===== HERO SECTION ===== */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={fadeIn.initial}
              whileInView={fadeIn.whileInView}
              viewport={fadeIn.viewport}
              transition={fadeIn.transition}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight">
                <span className="text-slate-900 block">MANY HAVE</span>
                <span className="font-light text-slate-600 block">TRUSTED US</span>
              </h1>
              
              <div className="space-y-6 text-lg md:text-xl text-slate-700 leading-relaxed">
                <p>
                  We stand tall in the market as one of the leading manufacturers and suppliers of a wide range of
                  Refined Edible Oils. The entire product range is manufactured following the prescribed industrial
                  guidelines and hence our products have always proved to be of high quality.
                </p>
                
                <p>
                  To manufacture these products, we have empowered ourselves with most modern infrastructure and a
                  team of highly competent and experienced professionals. Our vision for the future and acumen in
                  adapting to changing times has translated into consistent growth.
                </p>
                
                <p>
                  However, the most important attribute of our leadership is the unwavering commitment towards
                  quality and community. "No Compromise with Quality" is our guiding philosophy, ensuring success
                  and growth through trust and respect.
                </p>
              </div>
              
              <div className="mt-10">
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <span>GET IN TOUCH</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
            
            {/* Right Image with Decorative Corners */}
            <motion.div
              initial={fadeIn.initial}
              whileInView={fadeIn.whileInView}
              viewport={fadeIn.viewport}
              transition={{ ...fadeIn.transition, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {/* REPLACE WITH YOUR FACTORY/COMPANY IMAGE */}
                <Image
                  src="/images/bg11.jpg"
                  alt="Factory and company image"
                  width={1400}
                  height={1000}
                  className="w-full h-full object-cover"
                  priority
                />
                
                {/* Decorative Red Corners */}
                <div className="absolute top-0 right-0 w-24 h-24 border-t-8 border-r-8 border-red-600 rounded-tr-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-8 border-l-8 border-red-600 rounded-bl-3xl pointer-events-none"></div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* ===== MISSION SECTION ===== */}
      <section className="relative py-20 md:py-28 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={fadeIn.initial}
              whileInView={fadeIn.whileInView}
              viewport={fadeIn.viewport}
              transition={fadeIn.transition}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
                <span className="text-slate-900">OUR</span>{" "}
                <span className="font-light text-slate-600">MISSION</span>
              </h2>
              
              <h3 className="text-2xl md:text-3xl font-bold text-amber-800 mb-6 tracking-wide">
                PERFECT QUALITY & PURITY INDIA DESIRES
              </h3>
              
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-8">
                To be benchmark in purity and perfection, achieve leadership position in the Indian market
                and to become the preferred Indian edible oil name globally.
              </p>
              
              <ul className="space-y-4 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Establishing "win-win relations" with clients, contractors, local communities and employees</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Responsibility – for the company and the environment</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Innovative character and open-mindedness</span>
                </li>
              </ul>
            </motion.div>
            
            {/* Right Image with Decorative Corners */}
            <motion.div
              initial={fadeIn.initial}
              whileInView={fadeIn.whileInView}
              viewport={fadeIn.viewport}
              transition={{ ...fadeIn.transition, delay: 0.2 }}
              className="relative order-first lg:order-last"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {/* REPLACE WITH YOUR MISSION/FACILITY IMAGE */}
                <Image
                  src="/images/bg22.jpeg"
                  alt="Facility and mission image"
                  width={1400}
                  height={1000}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Decorative Red Corners */}
                <div className="absolute top-0 right-0 w-24 h-24 border-t-8 border-r-8 border-red-600 rounded-tr-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-8 border-l-8 border-red-600 rounded-bl-3xl pointer-events-none"></div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* ===== VISION SECTION ===== */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Image with Decorative Corners */}
            <motion.div
              initial={fadeIn.initial}
              whileInView={fadeIn.whileInView}
              viewport={fadeIn.viewport}
              transition={fadeIn.transition}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {/* REPLACE WITH YOUR VISION/PRODUCTION IMAGE */}
                <Image
                  src="/images/slide11.jpg"
                  alt="Production and vision image"
                  width={1400}
                  height={1000}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Decorative Red Corners */}
                <div className="absolute top-0 right-0 w-24 h-24 border-t-8 border-r-8 border-red-600 rounded-tr-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-8 border-l-8 border-red-600 rounded-bl-3xl pointer-events-none"></div>
              </div>
            </motion.div>
            
            {/* Right Content */}
            <motion.div
              initial={fadeIn.initial}
              whileInView={fadeIn.whileInView}
              viewport={fadeIn.viewport}
              transition={{ ...fadeIn.transition, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
                <span className="text-slate-900">OUR</span>{" "}
                <span className="font-light text-slate-600">VISION</span>
              </h2>
              
              <h3 className="text-2xl md:text-3xl font-bold text-amber-800 mb-6 tracking-wide">
                MANY HAVE TRUSTED US
              </h3>
              
              <div className="space-y-6 text-lg md:text-xl text-slate-700 leading-relaxed">
                <p>
                  To provide best grade Food Oils with perfect balance of quality and taste for every Indian
                  household. Our commitment extends beyond just products – we aim to build lasting relationships
                  based on trust and consistency.
                </p>
                
                <p>
                  Our vision encompasses creating a healthier India through superior quality edible oils that
                  combine traditional values with modern technology. We strive to be the brand that families
                  trust for generations to come.
                </p>
                
                <p className="text-slate-600 leading-relaxed">
                  Strategic thinker driving innovation and market expansion
                </p>
              </div>
            </motion.div>

          </div>

          {/* Leadership Story */}
          <motion.div 
            initial={fadeIn.initial}
            whileInView={fadeIn.whileInView}
            viewport={fadeIn.viewport}
            transition={{ ...fadeIn.transition, delay: 0.3 }}
            className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl"
          >
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed text-center max-w-5xl mx-auto">
              Our Father, <span className="font-bold text-amber-800">NK Mishra</span> started groundnut oil mill in 1979 at Bihar.
              With his successful experience and inspiration, we (Nk mishra ) entered into
              business and understood the marketing strategies. We started oil packing units at UP in 2000 and at
              Up in 2008, building a legacy of trust and quality.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ===== AIM SECTION ===== */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-amber-50 to-orange-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={fadeIn.initial}
              whileInView={fadeIn.whileInView}
              viewport={fadeIn.viewport}
              transition={fadeIn.transition}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
                <span className="text-slate-900">OUR</span>{" "}
                <span className="font-light text-slate-600">AIM</span>
              </h2>
              
              <h3 className="text-2xl md:text-3xl font-bold text-red-700 mb-6 tracking-wide uppercase">
                Most Preferred & Trusted Brand for Edible Oils
              </h3>
              
              <div className="space-y-6 text-lg md:text-xl text-slate-700 leading-relaxed">
                <p>
                  Consistently enhance our understanding of market dynamics and changing customer needs so as to
                  offer finest quality products that at all times meet our customers' expectations and the ever
                  changing demands of the market place.
                </p>
                
                <p>
                  Provide a high level of service to our customers with minimum cause for complaint. Maintain a
                  healthy & constructive work environment that enables personnel to produce optimal output.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-red-600">
                    <div className="text-3xl font-black text-red-600 mb-2">100%</div>
                    <div className="text-sm font-semibold text-slate-600">Quality Assurance</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-amber-600">
                    <div className="text-3xl font-black text-amber-600 mb-2">24/7</div>
                    <div className="text-sm font-semibold text-slate-600">Customer Support</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Right Image with Decorative Corners */}
            <motion.div
              initial={fadeIn.initial}
              whileInView={fadeIn.whileInView}
              viewport={fadeIn.viewport}
              transition={{ ...fadeIn.transition, delay: 0.2 }}
              className="relative order-first lg:order-last"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {/* REPLACE WITH YOUR WAREHOUSE/STORAGE IMAGE */}
                <Image
                  src="/images/slide22.jpg"
                  alt="Warehouse and storage image"
                  width={1400}
                  height={1000}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Decorative Red Corners */}
                <div className="absolute top-0 right-0 w-24 h-24 border-t-8 border-r-8 border-red-600 rounded-tr-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-8 border-l-8 border-red-600 rounded-bl-3xl pointer-events-none"></div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* ===== STRENGTH SECTION ===== */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Image with Decorative Corners */}
            <motion.div
              initial={fadeIn.initial}
              whileInView={fadeIn.whileInView}
              viewport={fadeIn.viewport}
              transition={fadeIn.transition}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {/* REPLACE WITH YOUR QUALITY CONTROL/LAB IMAGE */}
                <Image
                  src="/images/slide33.jpg"
                  alt="Quality control and lab image"
                  width={1400}
                  height={1000}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Decorative Red Corners */}
                <div className="absolute top-0 right-0 w-24 h-24 border-t-8 border-r-8 border-red-600 rounded-tr-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-8 border-l-8 border-red-600 rounded-bl-3xl pointer-events-none"></div>
              </div>
            </motion.div>
            
            {/* Right Content */}
            <motion.div
              initial={fadeIn.initial}
              whileInView={fadeIn.whileInView}
              viewport={fadeIn.viewport}
              transition={{ ...fadeIn.transition, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
                <span className="text-slate-900">OUR</span>{" "}
                <span className="font-light text-slate-600">STRENGTH</span>
              </h2>
              
              <h3 className="text-2xl md:text-3xl font-bold text-amber-800 mb-6 tracking-wide uppercase">
                We Believe in Quality
              </h3>
              
              <div className="space-y-6 text-lg md:text-xl text-slate-700 leading-relaxed">
                <p>
                  The processes and facilities at our plant match the highest standards. The Crude Edible oils
                  ensures that only the purest product is dispatched from our facility. The Refining is undertaken
                  by world class process through which flows out the purest form of cooking oil And supricess. this is the wonderful and best quality all of these
                  .
                </p>
                
                <p>
                  Our oils beat the best known brands on transparency tests. We are also one of the selected oil
                  players in the country that have been granted certification. The company is now in a position to
                  develop many new products and cater to the evolving consumer needs.
                </p>
                
                <p>
                  Whatever the product and whatever be the process, at our company the Purity & Hygiene factor is
                  always the topmost priority. At our technologically advanced refinery plant, all processes are
                  designed to be automated.
                </p>
                
                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border-l-4 border-red-600 mt-8">
                  <p className="text-slate-800 font-semibold">
                    Right from the un-loading of the crude oil from the ship to the filling and packaging of oil
                    in various pack-sizes, the product remains untouched by human hand.
                  </p>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* ===== QUALITY MANAGEMENT SECTION ===== */}
      <section className="relative py-20 md:py-28 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={fadeIn.initial}
              whileInView={fadeIn.whileInView}
              viewport={fadeIn.viewport}
              transition={fadeIn.transition}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
                <span className="text-slate-900">QUALITY</span>{" "}
                <span className="font-light text-slate-600">MANAGEMENT</span>
              </h2>
              
              <h3 className="text-2xl md:text-3xl font-bold text-red-700 mb-6 tracking-wide uppercase">
                Quality of the Highest Level!
              </h3>
              
              <div className="space-y-6 text-lg md:text-xl text-slate-700 leading-relaxed">
                <p>
                  We are committed to total customer satisfaction, and compliance with regulatory bodies at all
                  times and at maximum effectiveness. Our integrated quality and environmental management system
                  follows international standards.
                </p>
                
                <p>
                  As a result, the established Edible Oil Brands are today enjoying Market Leadership in a vast
                  market and region. The unique taste preference developed by the company's products ensures an
                  unflinching consumer loyalty.
                </p>
                
                {/* Quality Certifications */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg text-center border-2 border-amber-100 hover:border-amber-300 transition-colors">
                    <svg className="w-12 h-12 mx-auto mb-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="font-bold text-slate-800">ISO 9001</div>
                    <div className="text-sm text-slate-600">Certified</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg text-center border-2 border-red-100 hover:border-red-300 transition-colors">
                    <svg className="w-12 h-12 mx-auto mb-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div className="font-bold text-slate-800">FSSAI</div>
                    <div className="text-sm text-slate-600">Approved</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg text-center border-2 border-green-100 hover:border-green-300 transition-colors">
                    <svg className="w-12 h-12 mx-auto mb-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    <div className="font-bold text-slate-800">Lab Tested</div>
                    <div className="text-sm text-slate-600">Every Batch</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg text-center border-2 border-blue-100 hover:border-blue-300 transition-colors">
                    <svg className="w-12 h-12 mx-auto mb-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    <div className="font-bold text-slate-800">Hygienic</div>
                    <div className="text-sm text-slate-600">Packaging</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Right Image with Decorative Corners */}
            <motion.div
              initial={fadeIn.initial}
              whileInView={fadeIn.whileInView}
              viewport={fadeIn.viewport}
              transition={{ ...fadeIn.transition, delay: 0.2 }}
              className="relative order-first lg:order-last"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {/* REPLACE WITH YOUR QUALITY/TESTING IMAGE */}
                <Image
                  src="/images/purityy.jpg"
                  alt="Quality testing image"
                  width={1400}
                  height={1000}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Decorative Red Corners */}
                <div className="absolute top-0 right-0 w-24 h-24 border-t-8 border-r-8 border-red-600 rounded-tr-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-8 border-l-8 border-red-600 rounded-bl-3xl pointer-events-none"></div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* ===== MANAGEMENT TEAM SECTION ===== */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-slate-50 to-amber-50/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <motion.div
            initial={fadeIn.initial}
            whileInView={fadeIn.whileInView}
            viewport={fadeIn.viewport}
            transition={fadeIn.transition}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              <span className="text-slate-900">OUR</span>{" "}
              <span className="font-light text-slate-600">MANAGEMENT</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Led by visionary leaders committed to excellence and innovation
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Team Member 1 */}
            <motion.div
              initial={fadeIn.initial}
              whileInView={fadeIn.whileInView}
              viewport={fadeIn.viewport}
              transition={fadeIn.transition}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                {/* REPLACE WITH CHAIRMAN IMAGE */}
                <Image
                  src="/images/Unknown.jpeg"
                  alt="Chairman & Founder photo"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-8 text-center">
                <div className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">
                  Chairman & Founder
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">
                  Mr.Nitesh Kumar 
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Managing Director with a passion for quality and customer satisfaction.
                </p>
              </div>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              initial={fadeIn.initial}
              whileInView={fadeIn.whileInView}
              viewport={fadeIn.viewport}
              transition={{ ...fadeIn.transition, delay: 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                {/* REPLACE WITH MANAGING DIRECTOR IMAGE */}
                <Image
                  src="/images/team2.jpg"
                  alt="Managing Director photo"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-8 text-center">
                <div className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">
                  E-commerce Head
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">
                  Mr. Laibu 
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Strategic thinker driving innovation and strong leadership across all operational areas
                </p>
              </div>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div
              initial={fadeIn.initial}
              whileInView={fadeIn.whileInView}
              viewport={fadeIn.viewport}
              transition={{ ...fadeIn.transition, delay: 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                {/* REPLACE WITH EXECUTIVE DIRECTOR IMAGE */}
                <Image
                  src="/images/TahirBhai.jpeg"
                  alt="Executive Director photo"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-8 text-center">
                <div className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">
                   SEO Expert
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">
                  Mr.Tahir
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Visionary leader with decades of experience in the edible oil industry
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ===== CALL TO ACTION SECTION ===== */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-red-600 to-orange-600 text-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={fadeIn.initial}
            whileInView={fadeIn.whileInView}
            viewport={fadeIn.viewport}
            transition={fadeIn.transition}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              Let's Build Something Great Together
            </h2>
            
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed opacity-90">
              Whether you're looking to partner with us, distribute our products, or simply learn more about
              what we do – we'd love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-red-600 font-bold text-lg rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>GET IN TOUCH</span>
              </Link>

              <Link 
                href="/products"
                className="inline-flex items-center gap-3 px-10 py-5 bg-transparent border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                <span>VIEW PRODUCTS</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <svg className="w-8 h-8 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="font-bold mb-1">Call Us</div>
                <div className="text-sm opacity-80">+91 9560413551</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <svg className="w-8 h-8 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="font-bold mb-1">Email Us</div>
                <div className="text-sm opacity-80">info@veerbharat.com</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <svg className="w-8 h-8 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="font-bold mb-1">Visit Us</div>
                <div className="text-sm opacity-80">Pan India Presence</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}

/*
===========================================
IMAGE ASSETS REQUIRED
===========================================

Place the following images in your /public/images/about/ directory:

1. hero-factory.jpg
   - Wide shot of your factory/manufacturing facility
   - Recommended size: 1400x1000px
   - Use: Hero section - company overview

2. mission-facility.jpg
   - Modern facility/production line image
   - Recommended size: 1400x1000px
   - Use: Mission section

3. vision-production.jpg
   - Production/manufacturing process image
   - Recommended size: 1400x1000px
   - Use: Vision section

4. aim-warehouse.jpg
   - Warehouse/storage/distribution center
   - Recommended size: 1400x1000px
   - Use: Aim section

5. strength-quality.jpg
   - Quality control lab or testing facility
   - Recommended size: 1400x1000px
   - Use: Strength section

6. quality-testing.jpg
   - Laboratory testing or quality inspection
   - Recommended size: 1400x1000px
   - Use: Quality Management section

7. team-chairman.jpg
   - Professional portrait of Chairman
   - Recommended size: 800x1000px (portrait)
   - Use: Management team section

8. team-md.jpg
   - Professional portrait of Managing Director
   - Recommended size: 800x1000px (portrait)
   - Use: Management team section

9. team-ed.jpg
   - Professional portrait of Executive Director
   - Recommended size: 800x1000px (portrait)
   - Use: Management team section

NOTES:
- Optimize images (WebP/AVIF recommended). If you use `next export`, set `images.unoptimized = true` in next.config.js.
- If you want automatic optimization and responsive sizes, convert these <Image> uses to Next.js Image component props with `sizes` and provide remote domains in next.config.js.
- Install framer-motion if not present: `npm i framer-motion`
===========================================
*/
