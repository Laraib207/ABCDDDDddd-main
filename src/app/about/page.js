"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

/* Framed image with subtle gold corner accents */
function FramedImage({ src, alt, priority = false }) {
  return (
    <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: "var(--vb-shadow-lg)", border: "1px solid var(--vb-line)" }}>
      <Image
        src={src}
        alt={alt}
        width={1400}
        height={1000}
        className="w-full h-full object-cover"
        priority={priority}
        loading={priority ? undefined : "lazy"}
      />
      <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none" style={{ borderTop: "4px solid var(--vb-gold)", borderRight: "4px solid var(--vb-gold)", borderTopRightRadius: 16 }} />
      <div className="absolute bottom-0 left-0 w-20 h-20 pointer-events-none" style={{ borderBottom: "4px solid var(--vb-gold)", borderLeft: "4px solid var(--vb-gold)", borderBottomLeftRadius: 16 }} />
    </div>
  );
}

function SectionTitle({ eyebrow, line1, line2 }) {
  return (
    <>
      <span className="vb-eyebrow">{eyebrow}</span>
      <h2 className={`${playfair.className} vb-heading mt-5 text-4xl md:text-5xl`}>
        {line1} <span className="vb-heading-accent">{line2}</span>
      </h2>
      <div className="vb-divider mt-6" />
    </>
  );
}

export default function AboutPage() {
  const management = [
    {
      role: "Chairman & Founder",
      name: "Mr. Nitesh Kumar",
      desc: "Managing Director with a passion for quality and customer satisfaction.",
      image: "/images/Unknown.jpeg",
    },
    {
      role: "E-commerce Head",
      name: "Mr. Laibu",
      desc: "Strategic thinker driving innovation and strong leadership across all operational areas.",
      image: "/images/team2.jpg",
    },
  ];

  return (
    <main className={inter.className} style={{ background: "var(--vb-ivory)", color: "var(--vb-ink)" }}>

      {/* ===== HERO ===== */}
      <section className="vb-section">
        <div className="vb-wrap">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div {...fadeIn}>
              <span className="vb-eyebrow">About Veer Bharat</span>
              <h1 className={`${playfair.className} mt-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]`} style={{ color: "var(--vb-ink)" }}>
                Many Have <span style={{ color: "var(--vb-gold)" }}>Trusted Us</span>
              </h1>
              <div className="vb-divider mt-6" />
              <div className="mt-7 space-y-5 text-base md:text-lg leading-relaxed" style={{ color: "var(--vb-muted)" }}>
                <p>
                  We stand tall in the market as one of the leading manufacturers and suppliers of a wide range of
                  refined edible oils. The entire product range is manufactured following prescribed industrial
                  guidelines, and hence our products have always proved to be of high quality.
                </p>
                <p>
                  We have empowered ourselves with the most modern infrastructure and a team of highly competent,
                  experienced professionals. Our vision for the future and acumen in adapting to changing times has
                  translated into consistent growth.
                </p>
                <p>
                  The most important attribute of our leadership is the unwavering commitment towards quality and
                  community. "No Compromise with Quality" is our guiding philosophy.
                </p>
              </div>
              <Link href="/contact" className="vb-btn-solid mt-9">
                Get in Touch
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>

            <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }}>
              <FramedImage src="/images/bg11.jpg" alt="Veer Bharat facility" priority />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== MISSION ===== */}
      <section className="vb-section" style={{ background: "var(--vb-ivory-2)" }}>
        <div className="vb-wrap">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div {...fadeIn}>
              <SectionTitle eyebrow="What Drives Us" line1="Our" line2="Mission" />
              <h3 className={`${playfair.className} mt-6 text-xl md:text-2xl font-semibold`} style={{ color: "var(--vb-gold)" }}>
                Perfect Quality & Purity India Desires
              </h3>
              <p className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: "var(--vb-muted)" }}>
                To be the benchmark in purity and perfection, achieve a leadership position in the Indian market,
                and become the preferred Indian edible oil name globally.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Establishing win-win relations with clients, contractors, communities and employees",
                  "Responsibility — for the company and the environment",
                  "Innovative character and open-mindedness",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base" style={{ color: "var(--vb-ink)" }}>
                    <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" style={{ color: "var(--vb-gold)" }}>
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }} className="order-first lg:order-last">
              <FramedImage src="/images/bg22.jpeg" alt="Veer Bharat mission" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== VISION ===== */}
      <section className="vb-section">
        <div className="vb-wrap">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div {...fadeIn}>
              <FramedImage src="/images/slide11.jpg" alt="Veer Bharat vision" />
            </motion.div>

            <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }}>
              <SectionTitle eyebrow="Where We Are Headed" line1="Our" line2="Vision" />
              <h3 className={`${playfair.className} mt-6 text-xl md:text-2xl font-semibold`} style={{ color: "var(--vb-gold)" }}>
                Many Have Trusted Us
              </h3>
              <div className="mt-5 space-y-5 text-base md:text-lg leading-relaxed" style={{ color: "var(--vb-muted)" }}>
                <p>
                  To provide the best grade food oils with a perfect balance of quality and taste for every Indian
                  household. Our commitment extends beyond products — we aim to build lasting relationships based on
                  trust and consistency.
                </p>
                <p>
                  We envision a healthier India through superior quality edible oils that combine traditional values
                  with modern technology. We strive to be the brand families trust for generations to come.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Leadership story */}
          <motion.div
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.3 }}
            className="mt-14 vb-card p-8 md:p-12"
          >
            <p className="text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto" style={{ color: "var(--vb-ink)" }}>
              Our father, <span className="font-semibold" style={{ color: "var(--vb-gold)" }}>NK Mishra</span>, started a groundnut oil mill in 1979 in Bihar.
              With his successful experience and inspiration, we entered the business and understood the marketing strategies.
              We started oil packing units in UP in 2000 and 2008, building a legacy of trust and quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== AIM ===== */}
      <section className="vb-section" style={{ background: "var(--vb-ivory-2)" }}>
        <div className="vb-wrap">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div {...fadeIn}>
              <SectionTitle eyebrow="Our Purpose" line1="Our" line2="Aim" />
              <h3 className={`${playfair.className} mt-6 text-xl md:text-2xl font-semibold uppercase`} style={{ color: "var(--vb-maroon)" }}>
                Most Preferred & Trusted Brand for Edible Oils
              </h3>
              <div className="mt-5 space-y-5 text-base md:text-lg leading-relaxed" style={{ color: "var(--vb-muted)" }}>
                <p>
                  Consistently enhance our understanding of market dynamics and changing customer needs to offer the
                  finest quality products that meet our customers' expectations and the ever-changing demands of the marketplace.
                </p>
                <p>
                  Provide a high level of service to our customers with minimum cause for complaint, and maintain a
                  healthy, constructive work environment that enables our people to produce optimal output.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <div className="vb-card p-6" style={{ borderLeft: "4px solid var(--vb-gold)" }}>
                  <div className={`${playfair.className} text-3xl font-bold`} style={{ color: "var(--vb-gold)" }}>100%</div>
                  <div className="text-sm font-semibold mt-1" style={{ color: "var(--vb-muted)" }}>Quality Assurance</div>
                </div>
                <div className="vb-card p-6" style={{ borderLeft: "4px solid var(--vb-maroon)" }}>
                  <div className={`${playfair.className} text-3xl font-bold`} style={{ color: "var(--vb-maroon)" }}>24/7</div>
                  <div className="text-sm font-semibold mt-1" style={{ color: "var(--vb-muted)" }}>Customer Support</div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }} className="order-first lg:order-last">
              <FramedImage src="/images/slide22.jpg" alt="Veer Bharat warehouse" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== STRENGTH ===== */}
      <section className="vb-section">
        <div className="vb-wrap">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div {...fadeIn}>
              <FramedImage src="/images/slide33.jpg" alt="Veer Bharat quality control" />
            </motion.div>

            <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }}>
              <SectionTitle eyebrow="Built on Trust" line1="Our" line2="Strength" />
              <h3 className={`${playfair.className} mt-6 text-xl md:text-2xl font-semibold uppercase`} style={{ color: "var(--vb-gold)" }}>
                We Believe in Quality
              </h3>
              <div className="mt-5 space-y-5 text-base md:text-lg leading-relaxed" style={{ color: "var(--vb-muted)" }}>
                <p>
                  The processes and facilities at our plant match the highest standards. Refining is undertaken
                  through a world-class process from which flows out the purest form of cooking oil.
                </p>
                <p>
                  Our oils beat the best-known brands on transparency tests. We are also among the select oil players
                  in the country to have been granted certification, and we are now positioned to develop new products
                  and cater to evolving consumer needs.
                </p>
              </div>
              <div className="vb-card mt-8 p-6" style={{ borderLeft: "4px solid var(--vb-maroon)", background: "var(--vb-cream)" }}>
                <p className="font-medium" style={{ color: "var(--vb-ink)" }}>
                  From the unloading of crude oil to the filling and packaging in various pack sizes, the product
                  remains untouched by human hand.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== QUALITY MANAGEMENT ===== */}
      <section className="vb-section" style={{ background: "var(--vb-ivory-2)" }}>
        <div className="vb-wrap">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div {...fadeIn}>
              <SectionTitle eyebrow="Certified Excellence" line1="Quality" line2="Management" />
              <h3 className={`${playfair.className} mt-6 text-xl md:text-2xl font-semibold uppercase`} style={{ color: "var(--vb-maroon)" }}>
                Quality of the Highest Level
              </h3>
              <div className="mt-5 space-y-5 text-base md:text-lg leading-relaxed" style={{ color: "var(--vb-muted)" }}>
                <p>
                  We are committed to total customer satisfaction and compliance with regulatory bodies at all times.
                  Our integrated quality and environmental management system follows international standards.
                </p>
                <p>
                  As a result, our established edible oil brands enjoy market leadership across a vast region. The
                  unique taste preference developed by our products ensures unflinching consumer loyalty.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { label: "ISO 9001", sub: "Certified", path: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { label: "FSSAI", sub: "Approved", path: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                  { label: "Lab Tested", sub: "Every Batch", path: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
                  { label: "Hygienic", sub: "Packaging", path: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
                ].map((c) => (
                  <div key={c.label} className="vb-card p-6 text-center">
                    <svg className="w-10 h-10 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--vb-gold)" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={c.path} />
                    </svg>
                    <div className="font-bold" style={{ color: "var(--vb-ink)" }}>{c.label}</div>
                    <div className="text-sm" style={{ color: "var(--vb-muted)" }}>{c.sub}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }} className="order-first lg:order-last">
              <FramedImage src="/images/purityy.jpg" alt="Veer Bharat quality testing" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== MANAGEMENT TEAM ===== */}
      <section className="vb-section">
        <div className="vb-wrap">
          <motion.div {...fadeIn} className="text-center mb-14">
            <span className="vb-eyebrow">The People Behind Us</span>
            <h2 className={`${playfair.className} vb-heading mt-5 text-4xl md:text-5xl`}>
              Our <span className="vb-heading-accent">Management</span>
            </h2>
            <div className="vb-divider vb-divider--center mt-6" />
            <p className="vb-lead mx-auto mt-6 max-w-2xl">
              Led by visionary leaders committed to excellence and innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto">
            {management.map((m, i) => (
              <motion.div
                key={m.name}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: i * 0.1 }}
                className="vb-card group"
              >
                <div className="relative h-80 overflow-hidden" style={{ background: "var(--vb-ivory-2)" }}>
                  <Image
                    src={m.image}
                    alt={m.name}
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 text-center">
                  <div className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--vb-gold)" }}>
                    {m.role}
                  </div>
                  <h3 className={`${playfair.className} text-2xl font-bold mb-3`} style={{ color: "var(--vb-ink)" }}>
                    {m.name}
                  </h3>
                  <p className="leading-relaxed" style={{ color: "var(--vb-muted)" }}>{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative overflow-hidden py-20 md:py-28" style={{ background: "var(--vb-ink)" }}>
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{ background: "#C9A33B" }} />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: "#C9A33B" }} />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.div {...fadeIn}>
            <h2 className={`${playfair.className} text-3xl md:text-5xl font-bold mb-6`} style={{ color: "var(--vb-ivory)" }}>
              Let's Build Something <span style={{ color: "#FCD34D" }}>Great Together</span>
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed" style={{ color: "#9FB0C6" }}>
              Whether you're looking to partner with us, distribute our products, or simply learn more about what we do,
              we'd love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="vb-btn-gold">Get in Touch</Link>
              <Link href="/products" className="vb-btn-ghost" style={{ color: "#fff", borderColor: "rgba(251,247,239,0.35)" }}>
                View Products
              </Link>
            </div>

            <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { title: "Call Us", value: "+91 9266328444", path: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
                { title: "Email Us", value: "info@veerbharat.com", path: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                { title: "Visit Us", value: "Pan India Presence", path: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl p-6" style={{ background: "rgba(251,247,239,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <svg className="w-8 h-8 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "#C9A33B" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={c.path} />
                  </svg>
                  <div className="font-bold mb-1" style={{ color: "var(--vb-ivory)" }}>{c.title}</div>
                  <div className="text-sm" style={{ color: "#9FB0C6" }}>{c.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
