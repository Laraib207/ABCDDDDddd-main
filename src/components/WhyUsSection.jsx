"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700", "800"] });

export default function WhyUsSection() {
  const reasons = [
    {
      number: "01",
      title: "Quality",
      desc: "Premium brown mustard seeds processed with traditional cold-press methods for rich flavour and unmatched quality.",
      image: "/images/bgim.png",
    },
    {
      number: "02",
      title: "Purity",
      desc: "Double filtration ensures pure, additive-free oil that preserves essential nutrients and authentic taste.",
      image: "/images/slide11.jpg",
    },
    {
      number: "03",
      title: "Authenticity",
      desc: "Cold-pressed tradition with modern quality checks delivers the stability and aroma Indian kitchens trust.",
      image: "/images/slidee3.jpg",
    },
  ];

  return (
    <section className="vb-section" style={{ background: "var(--vb-ivory)" }}>
      <div className="vb-wrap">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.span
            className="vb-eyebrow"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The Veer Bharat Promise
          </motion.span>

          <motion.h2
            className={`${playfair.className} vb-heading mt-5 text-4xl md:text-5xl`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Authenticity, Purity & <span className="vb-heading-accent">Quality</span>
          </motion.h2>

          <div className="vb-divider vb-divider--center mt-6" />

          <motion.p
            className="vb-lead mx-auto mt-6 max-w-2xl"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Where traditional cold-pressed methods meet modern quality standards for pure,
            authentic cooking oils.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-9">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="vb-card group flex flex-col p-7"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <div className="relative w-full h-52 md:h-56 rounded-xl overflow-hidden mb-6" style={{ background: "var(--vb-ivory-2)" }}>
                <Image
                  src={reason.image}
                  alt={`${reason.title} — Veer Bharat`}
                  fill
                  className="object-contain sm:object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="text-sm font-bold tracking-wider mb-3" style={{ color: "var(--vb-gold)" }}>
                {reason.number}
              </div>

              <h3 className={`${playfair.className} text-2xl font-bold mb-3`} style={{ color: "var(--vb-ink)" }}>
                {reason.title}
              </h3>

              <p className="leading-relaxed mb-7 flex-1" style={{ color: "var(--vb-muted)" }}>
                {reason.desc}
              </p>

              <div className="vb-badge self-start" style={{ borderColor: "rgba(183,137,45,0.4)", color: "var(--vb-gold)" }}>
                <span>Veer Bharat</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats strip */}
        <motion.div
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { number: "100%", label: "Pure & Natural" },
            { number: "5+", label: "Years Legacy" },
            { number: "1M+", label: "Happy Families" },
            { number: "99.9%", label: "Quality Rate" },
          ].map((stat, i) => (
            <div key={i} className="vb-card p-6 text-center">
              <div className={`${playfair.className} text-3xl md:text-4xl font-bold mb-1`} style={{ color: "var(--vb-gold)" }}>
                {stat.number}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--vb-muted)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
