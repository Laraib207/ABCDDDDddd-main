"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function WhoWeAreSection() {
  return (
    <section className={`${inter.className} vb-section`} style={{ background: "var(--vb-cream)" }}>
      <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
        <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">

          {/* LEFT — TEXT */}
          <div className="w-full lg:w-[52%] flex flex-col">
            <motion.span
              className="vb-eyebrow"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              The Belief
            </motion.span>

            <motion.h3
              className={`${playfair.className} vb-heading mt-5 text-4xl md:text-5xl lg:text-6xl`}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              Who We <span className="vb-heading-accent">Are</span>
            </motion.h3>

            <div className="vb-divider mt-6" />

            <motion.div
              className="mt-7 space-y-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--vb-muted)" }}>
                At <span className="font-semibold" style={{ color: "var(--vb-ink)" }}>Veer Bharat</span>, we believe every
                meal is a celebration of heritage, health and happiness. For generations, families across India have
                trusted us to bring <span className="italic" style={{ color: "var(--vb-gold)" }}>pure, authentic flavours</span> to their kitchens.
              </p>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--vb-muted)" }}>
                From the golden richness of our <span className="font-semibold" style={{ color: "var(--vb-ink)" }}>Kachi Ghani Mustard Oil</span> to the
                heart-healthy goodness of <span className="font-semibold" style={{ color: "var(--vb-ink)" }}>Soyabean</span> and{" "}
                <span className="font-semibold" style={{ color: "var(--vb-ink)" }}>Rice Bran Oil</span>, each drop is crafted with uncompromising quality and care.
              </p>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--vb-muted)" }}>
                We don't just produce oils — we preserve traditions, nurture wellness and honour the trust you place in us.
                Because when it comes to your family's health, <span className="font-semibold" style={{ color: "var(--vb-maroon)" }}>only the best will do</span>.
              </p>
            </motion.div>

            <motion.a
              href="/about"
              className="vb-btn-solid mt-9 self-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Discover Our Story
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          </div>

          {/* RIGHT — CIRCULAR IMAGE */}
          <div className="w-full lg:w-[48%] flex items-center justify-center relative mt-4 lg:mt-0">
            <motion.div
              className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden"
              style={{ boxShadow: "var(--vb-shadow-lg)", border: "6px solid #fff" }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <Image
                src="/images/prod-mustard.jpg"
                alt="Veer Bharat premium edible oils"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 320px, 400px"
                priority
                quality={90}
              />
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle at center, transparent 45%, rgba(14,34,64,0.10) 100%)" }}
                aria-hidden="true"
              />
            </motion.div>

            {/* gold ring accent */}
            <div
              className="hidden md:block absolute rounded-full pointer-events-none"
              style={{ width: 440, height: 440, border: "1px dashed rgba(183,137,45,0.4)" }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
