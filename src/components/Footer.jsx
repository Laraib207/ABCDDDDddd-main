import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const products = [
    { name: "Kachi Ghani Pure Mustard Oil", href: "/mustard-oil" },
    { name: "Soyabean Oil", href: "/soyabean-oil" },
    { name: "Sunflower Oil", href: "/sunflower-Oil" },
    { name: "Palm Oil", href: "/palm-oil" },
    { name: "Brand Rice", href: "/brand-rice" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  const socials = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/veerbharatofficial",
      path: "M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.6l-.4 3h-2.2v7A10 10 0 0 0 22 12z",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/veerbharatofficial",
      path: "M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-.2a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@VeerBharatofficial1",
      path: "M21.6 7.2s-.2-1.5-.8-2.2c-.7-.8-1.5-.8-1.9-.9C15.6 4 12 4 12 4h-.1s-3.6 0-6.9.1c-.4 0-1.2 0-1.9.9C2.4 5.7 2.2 7.2 2.2 7.2S2 9 2 10.7v1.6C2 14 2.2 16 2.2 16s.2 1.5.8 2.2c.7.8 1.6.8 2 1C7.6 19.9 12 20 12 20s3.6 0 6.9-.1c.4 0 1.2 0 1.9-.9.6-.7.8-2.2.8-2.2s.2-2 .2-3.7v-1.6c0-1.7-.2-3.5-.2-3.5zM10 9.8l4.8 2.7L10 15.2V9.8z",
    },
    {
      label: "Twitter / X",
      href: "https://x.com/veerbharatoil",
      path: "M18.9 2H22l-7.8 8.9L24 22h-7.4l-5.8-7.3L4.2 22H0l8.6-9.8L0 2h7.5l5.3 6.7L18.9 2z",
    },
    {
      label: "WhatsApp",
      href: "https://whatsapp.com/channel/0029Vb6kfnIADTO6QKPDwM36",
      path: "M12.04 2c-5.5 0-10 4.48-10 10 0 1.77.46 3.5 1.34 5.04L2 22l5.1-1.32A9.93 9.93 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10zm0 18c-1.6 0-3.16-.43-4.52-1.24l-.32-.19-3.02.78.81-2.95-.21-.33a7.92 7.92 0 0 1-1.24-4.5A8.03 8.03 0 0 1 20.1 12c0 4.43-3.63 8-8.06 8zm4.47-5.54c-.25-.13-1.47-.72-1.7-.8-.23-.08-.4-.13-.57.13-.17.25-.66.8-.81.96-.15.17-.3.19-.55.06-.26-.13-1.11-.41-2.1-1.3-.78-.69-1.3-1.53-1.45-1.79-.15-.26-.02-.4.11-.53.12-.12.26-.32.39-.47.13-.15.17-.25.26-.41.08-.17.04-.31-.02-.44-.06-.13-.57-1.38-.78-1.89-.21-.51-.42-.44-.57-.45l-.49-.01c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.02 2.6.12.17 1.77 2.7 4.3 3.78.6.26 1.06.41 1.42.52.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.3z",
    },
  ];

  return (
    <footer className="relative overflow-hidden" style={{ background: "var(--vb-ink)", color: "#D7DEEA" }}>
      {/* top gold hairline */}
      <div style={{ height: 2, background: "linear-gradient(90deg, transparent, #C9A33B, transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden" style={{ background: "rgba(251,247,239,0.06)", border: "1px solid rgba(201,163,59,0.3)" }}>
                <Image src="/logo.png" alt="Veer Bharat" width={56} height={56} className="object-contain" />
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight" style={{ fontFamily: "var(--vb-font-head)", color: "#FBF7EF" }}>
                  Veer Bharat
                </h2>
                <p className="text-sm italic" style={{ color: "#C9A33B", fontFamily: "var(--vb-font-serif)" }}>
                  वाह! मज़ा आ गया
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#9FB0C6" }}>
              Premium quality edible oils crafted with traditional wisdom and modern technology
              for healthier living.
            </p>

            {/* FSSAI */}
            <div className="rounded-xl p-4 flex items-center gap-3" style={{ background: "rgba(251,247,239,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="w-12 h-12 relative flex-shrink-0">
                <Image src="/FSSAI_Logo.png" alt="FSSAI Certified" width={48} height={48} className="object-contain" />
              </div>
              <div>
                <p className="text-xs font-semibold" style={{ color: "#FBF7EF" }}>FSSAI Certified</p>
                <p className="text-sm font-bold" style={{ color: "#C9A33B" }}>10012022000234</p>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-base font-bold mb-5 pb-3" style={{ color: "#FBF7EF", borderBottom: "1px solid rgba(201,163,59,0.3)" }}>
              Our Products
            </h3>
            <ul className="space-y-3">
              {products.map((p) => (
                <li key={p.name}>
                  <Link href={p.href} className="group inline-flex items-center gap-2 text-sm transition-colors" style={{ color: "#9FB0C6" }}>
                    <span className="w-1.5 h-1.5 rounded-full transition-colors" style={{ background: "rgba(201,163,59,0.4)" }} />
                    <span className="footer-link">{p.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-5 pb-3" style={{ color: "#FBF7EF", borderBottom: "1px solid rgba(201,163,59,0.3)" }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-sm transition-colors footer-link" style={{ color: "#9FB0C6" }}>
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold mb-5 pb-3" style={{ color: "#FBF7EF", borderBottom: "1px solid rgba(201,163,59,0.3)" }}>
              Connect With Us
            </h3>
            <div className="space-y-3 mb-6 text-sm" style={{ color: "#9FB0C6" }}>
              <p className="leading-relaxed">
                Plot No. 40, Noida Sector 61,<br />Uttar Pradesh 201304 (India)
              </p>
              <a href="tel:9266328444" className="block transition-colors footer-link">+91 9266328444</a>
              <a href="mailto:info@veerbharat.com" className="block transition-colors footer-link break-all">info@veerbharat.com</a>
            </div>

            <p className="text-xs font-semibold mb-3" style={{ color: "#FBF7EF" }}>Follow Our Journey</p>
            <div className="flex flex-wrap gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="footer-social w-9 h-9 rounded-lg flex items-center justify-center transition-all"
                  style={{ background: "rgba(251,247,239,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#C9A33B" }}>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <p className="text-sm text-center md:text-left" style={{ color: "#9FB0C6" }}>
            © 2025 <span className="font-semibold" style={{ color: "#FBF7EF" }}>Veer Bharat</span>. All rights reserved.
          </p>
          <p className="text-sm" style={{ color: "#9FB0C6" }}>
            Developed by{" "}
            <a href="https://www.thelaraib.com" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ color: "#C9A33B" }}>
              thelaraib
            </a>
          </p>
        </div>
      </div>

      <style>{`
        .footer-link { transition: color .2s ease; }
        .footer-link:hover { color: #C9A33B !important; }
        .footer-social:hover { border-color: rgba(201,163,59,0.5) !important; background: rgba(201,163,59,0.12) !important; transform: translateY(-2px); }
      `}</style>
    </footer>
  );
};

export default Footer;
