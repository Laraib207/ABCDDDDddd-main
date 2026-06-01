"use client";

import Hero2 from "@/components/CategoryCarousel";
import CustomerFeedback from "@/app/CustomerFeedback";
import WhyUsSection from "@/components/WhyUsSection";
import { motion } from "framer-motion";
import { Playfair_Display, Inter } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import HealthBenefits from "../components/HealthBenefits";
import WhoWeAreSection from "@/app/sections/WhoWeAreSection";

/* ---------- Fonts ---------- */
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700", "800", "900"] });

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function Home() {
  return (
    <main className={`${inter.className}`} style={{ background: "var(--vb-ivory)", color: "var(--vb-ink)" }}>
      {/* Cinematic Video Hero */}
      <VideoHero videos={["/images/hero-video.mp4", "/images/hero2-video.mp4"]} />

      {/* Intro band */}
      <IntroBand />

      {/* Category carousel (existing component) */}
      <Hero2 />

      {/* Premium categories */}
      <CategoriesGrid />

      {/* Video showcase */}
      <VideoShowcase />

      {/* Who we are */}
      <WhoWeAreSection />

      {/* Health benefits */}
      <HealthBenefits />

      {/* Why us */}
      <WhyUsSection />

      {/* Testimonials */}
      <CustomerFeedback />

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/9266328444"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-5 bottom-5 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg text-white transition hover:scale-110"
        style={{ background: "#25D366", boxShadow: "0 10px 30px -8px rgba(37,211,102,0.6)" }}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
    </main>
  );
}

/* ================= Intro Band ================= */
function IntroBand() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--vb-ivory)" }}>
      {/* soft accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl" style={{ background: "rgba(183,137,45,0.10)" }} />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl" style={{ background: "rgba(139,42,63,0.08)" }} />

      <div className="vb-wrap py-16 md:py-24 text-center relative">
        <motion.span
          className="vb-eyebrow"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Welcome to Veer Bharat
        </motion.span>

        <motion.h1
          className={`${playfair.className} mt-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08]`}
          style={{ color: "var(--vb-ink)" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Tradition Meets Nutrition,
          <span className="block mt-2" style={{ color: "var(--vb-gold)" }}>
            In Every Golden Drop
          </span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-7 max-w-2xl text-base md:text-lg leading-relaxed"
          style={{ color: "var(--vb-muted)" }}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Purity you can taste, quality you can trust. From cold-pressed Kachi Ghani mustard oil
          to refined everyday cooking oils — crafted with care for every Indian kitchen.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a href="/products" className="vb-btn-solid">
            Explore Products
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="/about" className="vb-btn-ghost">Our Story</a>
        </motion.div>

        <motion.div
          className="vb-divider vb-divider--center mt-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
        />
      </div>
    </section>
  );
}

/* ================= CategoriesGrid ================= */
function CategoriesGrid() {
  const categories = [
    {
      id: "cat-1",
      name: "Mustard Oil",
      image: "/images/mustard-5l-jar.jpg",
      description:
        "Strong aroma & flavour, perfect for traditional cooking and pickling. High smoke point and rich in omega-3 fatty acids.",
    },
    {
      id: "cat-2",
      name: "Soyabean Oil",
      image: "/images/soyabeennnn.jpg",
      description:
        "Light & neutral, ideal for everyday cooking. High smoke point and rich in omega-3 — great for frying, baking and dressings.",
    },
    {
      id: "cat-3",
      name: "Palm Oil",
      image: "/images/veer-products.png",
      description:
        "High stability for deep frying with a neutral taste. Sourced responsibly and refined to ensure quality and safety.",
    },
    {
      id: "cat-4",
      name: "Rice Bran Oil",
      image: "/images/rice-bran-1.jpg",
      description:
        "Premium rice bran oil known for its health benefits and cooking versatility, sourced from the finest rice mills.",
    },
  ];

  return (
    <section className="vb-section overflow-hidden" style={{ background: "var(--vb-ivory-2)" }}>
      <div className="vb-wrap relative z-10">
        <div className="mb-16 text-center">
          <span className="vb-eyebrow">Our Range</span>
          <h2 className={`${playfair.className} vb-heading mt-5 text-4xl md:text-5xl`}>
            Explore Our <span className="vb-heading-accent">Categories</span>
          </h2>
          <div className="vb-divider vb-divider--center mt-6" />
          <p className="vb-lead mx-auto mt-6 max-w-2xl">
            A premium range of edible oils, each crafted with care for your health and taste.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className="vb-card group flex flex-col"
              style={{ minHeight: 440 }}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div
                  className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold"
                  style={{ background: "rgba(251,247,239,0.92)", color: "var(--vb-ink)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className={`${playfair.className} mb-3 text-xl font-bold`} style={{ color: "var(--vb-ink)" }}>
                  {category.name}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed" style={{ color: "var(--vb-muted)" }}>
                  {category.description}
                </p>
                <a
                  href="/products"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                  style={{ color: "var(--vb-gold)" }}
                >
                  Explore Category
                  <svg className="transition-transform duration-300 group-hover:translate-x-1" width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a href="/products" className="vb-btn-solid">
            View All Products
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ================= VideoShowcase ================= */
function VideoShowcase() {
  const videos = [
    {
      id: "v-1",
      video: "https://www.youtube.com/embed/7CzsdYLnAD4?si=xjDjX8W30kevuCYc",
      title: "Customer Review | Veer Bharat Mustard Oil — Kachi Ghani Mustard Oil & Soyabean Oil.",
    },
    {
      id: "v-2",
      video: "https://www.youtube.com/embed/_36qbMVzWLY?si=LyoH9t-M_wBzVEOQ",
      title: "Veer Bharat Kachi Ghani Mustard Oil: the heart of healthy Indian cooking — our manufacturing process.",
    },
    {
      id: "v-3",
      video: "https://www.youtube.com/embed/0oh__XTrd9g?si=z_xT4BZNj7h-GBby",
      title: "Building our sales team and distributor network. Prospective candidates can watch this video.",
    },
  ];

  const scrollContainerRef = useRef(null);
  const videoRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const scrollLeft = () => scrollContainerRef.current?.scrollBy({ left: -420, behavior: "smooth" });
  const scrollRight = () => scrollContainerRef.current?.scrollBy({ left: 420, behavior: "smooth" });

  const openVideoModal = (video) => {
    setCurrentVideo(video);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeVideoModal = () => {
    setIsModalOpen(false);
    setCurrentVideo(null);
    document.body.style.overflow = "auto";
    videoRef.current?.pause();
  };

  return (
    <>
      <section className="vb-section overflow-hidden" style={{ background: "var(--vb-ink)" }}>
        <div className="vb-wrap">
          <div className="mb-14 text-center">
            <span className="vb-eyebrow" style={{ color: "var(--vb-gold-2)" }}>Watch & Discover</span>
            <h2 className={`${playfair.className} mt-5 text-4xl md:text-5xl font-bold`} style={{ color: "var(--vb-ivory)" }}>
              The Veer Bharat <span style={{ color: "var(--vb-gold-2)" }}>Showcase</span>
            </h2>
            <div className="vb-divider vb-divider--center mt-6" />
          </div>

          <div className="relative px-0 md:px-12 lg:px-16">
            <button
              onClick={scrollLeft}
              className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full items-center justify-center transition-all hover:scale-110"
              style={{ marginLeft: "-12px", background: "rgba(251,247,239,0.1)", border: "1px solid rgba(201,163,59,0.4)" }}
              aria-label="Scroll left"
            >
              <svg className="w-6 h-6" style={{ color: "var(--vb-gold-2)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full items-center justify-center transition-all hover:scale-110"
              style={{ marginRight: "-12px", background: "rgba(251,247,239,0.1)", border: "1px solid rgba(201,163,59,0.4)" }}
              aria-label="Scroll right"
            >
              <svg className="w-6 h-6" style={{ color: "var(--vb-gold-2)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div
              ref={scrollContainerRef}
              className="flex gap-5 lg:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory vb-scrollbar-hide"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[calc(33.333%-16px)] rounded-2xl overflow-hidden snap-center transition-all duration-500 hover:-translate-y-1.5"
                  style={{ background: "rgba(251,247,239,0.04)", border: "1px solid rgba(201,163,59,0.18)" }}
                >
                  <div className="relative h-56 md:h-60 flex items-center justify-center group overflow-hidden" style={{ background: "#0a1830" }}>
                    <iframe
                      src={video.video}
                      title={video.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <button
                      onClick={() => openVideoModal(video)}
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ background: "rgba(10,24,48,0.25)" }}
                      aria-label="Play video"
                    >
                      <div className="w-16 h-16 md:w-18 md:h-18 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300"
                        style={{ background: "linear-gradient(135deg, var(--vb-gold), var(--vb-gold-2))" }}>
                        <svg className="w-7 h-7 ml-1" style={{ color: "#1c1505" }} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </button>
                  </div>

                  <div className="p-6">
                    <h3 className="text-base font-semibold mb-5 leading-snug min-h-[3rem] vb-line-clamp-2" style={{ color: "var(--vb-ivory)" }}>
                      {video.title}
                    </h3>
                    <button onClick={() => openVideoModal(video)} className="vb-btn-gold w-full justify-center">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      Watch Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex lg:hidden justify-center gap-2 mt-6">
              {videos.map((_, idx) => (
                <div key={idx} className="w-2 h-2 rounded-full" style={{ background: "var(--vb-gold-2)" }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && currentVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
          style={{ background: "rgba(14,34,64,0.85)", backdropFilter: "blur(10px)" }}
          onClick={closeVideoModal}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden"
            style={{ background: "var(--vb-ink)", maxHeight: "85vh", border: "1px solid rgba(201,163,59,0.3)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110 group"
              style={{ background: "rgba(251,247,239,0.12)" }}
              aria-label="Close"
            >
              <svg className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src={`${currentVideo.video}?autoplay=1&controls=1&modestbranding=1`}
                title={currentVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="p-6 md:p-8">
              <h2 className={`${playfair.className} text-lg md:text-xl font-bold leading-tight`} style={{ color: "var(--vb-ivory)" }}>
                {currentVideo.title}
              </h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ================= VideoHero ================= */
function VideoHero({ videos = [] }) {
  const vidRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const v = vidRef.current;
    if (!v) return;
    v.muted = true;
    v.playsInline = true;
    v.preload = "metadata";
    v.play().catch(() => setPlaying(false));
  }, [videos]);

  function toggle() {
    const v = vidRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => setPlaying(false));
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="relative h-[62vh] md:h-[78vh] lg:h-[86vh]">
        <video
          ref={vidRef}
          src={videos[0]}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />

        {/* cinematic gradient */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(14,34,64,0.45) 0%, rgba(14,34,64,0.12) 35%, rgba(14,34,64,0.55) 100%)" }} />

        {/* hero text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em]"
            style={{ background: "rgba(251,247,239,0.12)", color: "#FBF7EF", border: "1px solid rgba(201,163,59,0.5)", backdropFilter: "blur(6px)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            FSSAI Certified · Pure · Premium
          </motion.span>

          <motion.h1
            className={`${playfair.className} mt-6 text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08]`}
            style={{ textShadow: "0 8px 40px rgba(0,0,0,0.5)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
          >
            Veer Bharat
            <span className="block mt-2 text-2xl md:text-4xl lg:text-5xl font-medium" style={{ color: "#FCD34D" }}>
              वाह! मज़ा आ गया
            </span>
          </motion.h1>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="/products" className="vb-btn-gold">Shop Our Oils</a>
            <a href="/contact" className="vb-btn-ghost" style={{ color: "#fff", borderColor: "rgba(251,247,239,0.4)" }}>
              Get in Touch
            </a>
          </motion.div>
        </div>

        <button
          onClick={toggle}
          className="absolute right-5 bottom-5 z-30 flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition hover:scale-105"
          style={{ background: "rgba(251,247,239,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(6px)" }}
        >
          {playing ? "❚❚ Pause" : "▶ Play"}
        </button>
      </div>
    </section>
  );
}
