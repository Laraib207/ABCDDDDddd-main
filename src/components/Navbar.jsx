"use client";

import { useState, useEffect, useRef } from "react";

/**
 * Veer Bharat — Premium Navbar
 * Aesthetic: ivory + ink navy + mustard gold (refined Indian food-brand luxe)
 * Notes:
 *  - All external links are first-party only (no random preview URLs).
 *  - Lightweight animations, accessible focus states, mobile drawer.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);
  const [brochureOpen, setBrochureOpen] = useState(false);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const teamRef = useRef(null);
  const teamButtonRef = useRef(null);
  const brochureRef = useRef(null);
  const brochureButtonRef = useRef(null);
  const productsRef = useRef(null);
  const productsButtonRef = useRef(null);

  const pdfPath = "/docs/pdf/brochure.pdf";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onDoc = (e) => {
      if (
        teamRef.current && !teamRef.current.contains(e.target) &&
        teamButtonRef.current && !teamButtonRef.current.contains(e.target)
      ) setTeamOpen(false);
      if (
        brochureRef.current && !brochureRef.current.contains(e.target) &&
        brochureButtonRef.current && !brochureButtonRef.current.contains(e.target)
      ) setBrochureOpen(false);
      if (
        productsRef.current && !productsRef.current.contains(e.target) &&
        productsButtonRef.current && !productsButtonRef.current.contains(e.target)
      ) setProductsOpen(false);
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setTeamOpen(false);
        setBrochureOpen(false);
        setProductsOpen(false);
        setOpen(false);
        setViewerOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (typeof window !== "undefined") setActiveLink(window.location.pathname);
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@1,500&display=swap');

        :root {
          --vb-ivory: #FBF7EF;
          --vb-ivory-2: #F4EDDF;
          --vb-line: #E6DDC8;
          --vb-line-soft: #EFE7D5;
          --vb-ink: #0E2240;
          --vb-ink-2: #1B3358;
          --vb-muted: #5C6B82;
          --vb-gold: #B7892D;
          --vb-gold-2: #C9A33B;
          --vb-gold-soft: rgba(183,137,45,0.10);
          --vb-maroon: #8B2A3F;
          --vb-maroon-2: #6E1F31;
        }

        @keyframes vb-fade-in {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes vb-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* ── Top tagline strip ── */
        .vb-strip {
          background: linear-gradient(90deg, var(--vb-ink) 0%, var(--vb-ink-2) 100%);
          color: #F1E9D6;
          font-family: 'Inter', sans-serif;
          font-size: 11.5px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 7px 0;
          overflow: hidden;
          border-bottom: 1px solid rgba(183,137,45,0.25);
        }
        .vb-strip-track {
          display: inline-flex;
          white-space: nowrap;
          animation: vb-marquee 40s linear infinite;
          will-change: transform;
        }
        .vb-strip-item {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 0 28px;
          color: #E9DEC1;
          font-weight: 500;
        }
        .vb-strip-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--vb-gold-2);
          flex-shrink: 0;
        }
        .vb-strip-gold { color: var(--vb-gold-2); font-weight: 600; }

        /* ── Header ── */
        .vb-head {
          position: fixed;
          inset: 0 0 auto 0;
          z-index: 1000;
          background: var(--vb-ivory);
          transition: box-shadow .35s ease, background .35s ease, border-color .35s ease;
          border-bottom: 1px solid var(--vb-line);
        }
        .vb-head.is-scrolled {
          background: rgba(251,247,239,0.92);
          backdrop-filter: saturate(140%) blur(10px);
          -webkit-backdrop-filter: saturate(140%) blur(10px);
          box-shadow: 0 8px 24px -16px rgba(14,34,64,0.25);
          border-color: var(--vb-line-soft);
        }

        .vb-bar {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 clamp(16px, 3vw, 32px);
          height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .vb-head.is-scrolled .vb-bar { height: 66px; }

        /* ── Brand ── */
        .vb-brand {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: var(--vb-ink);
        }
        .vb-brand-mark {
          width: 48px; height: 48px;
          border-radius: 10px;
          background: #fff;
          border: 1px solid var(--vb-line);
          display: grid;
          place-items: center;
          overflow: hidden;
          transition: border-color .25s ease, box-shadow .25s ease;
        }
        .vb-brand:hover .vb-brand-mark {
          border-color: var(--vb-gold);
          box-shadow: 0 6px 18px -10px rgba(183,137,45,0.6);
        }
        .vb-brand-mark img { width: 100%; height: 100%; object-fit: contain; }
        .vb-brand-text { display: flex; flex-direction: column; line-height: 1; }
        .vb-brand-name {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          letter-spacing: 0.005em;
          font-size: clamp(18px, 2vw, 22px);
          color: var(--vb-ink);
        }
        .vb-brand-name em {
          font-style: normal;
          color: var(--vb-gold);
          margin-left: 2px;
        }
        .vb-brand-tag {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 13px;
          color: var(--vb-maroon);
          margin-top: 4px;
          letter-spacing: 0.02em;
        }

        /* ── Desktop nav ── */
        .vb-nav { display: none; }
        @media (min-width: 1000px) {
          .vb-nav { display: flex; align-items: center; gap: 4px; }
        }
        .vb-link {
          position: relative;
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: var(--vb-ink);
          padding: 10px 14px;
          text-decoration: none;
          border-radius: 6px;
          transition: color .2s ease;
        }
        .vb-link::after {
          content: "";
          position: absolute;
          left: 14px; right: 14px;
          bottom: 4px;
          height: 1.5px;
          background: var(--vb-gold);
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform .3s ease;
        }
        .vb-link:hover, .vb-link.is-active { color: var(--vb-maroon); }
        .vb-link:hover::after, .vb-link.is-active::after { transform: scaleX(1); }

        .vb-btn {
          all: unset;
          position: relative;
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: var(--vb-ink);
          padding: 10px 14px;
          border-radius: 6px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: color .2s ease;
        }
        .vb-btn::after {
          content: "";
          position: absolute;
          left: 14px; right: 14px;
          bottom: 4px;
          height: 1.5px;
          background: var(--vb-gold);
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform .3s ease;
        }
        .vb-btn:hover, .vb-btn.is-open { color: var(--vb-maroon); }
        .vb-btn:hover::after, .vb-btn.is-open::after { transform: scaleX(1); }
        .vb-chev {
          width: 11px; height: 11px;
          transition: transform .3s ease;
          opacity: 0.7;
        }
        .vb-chev.is-open { transform: rotate(180deg); }

        /* ── Dropdown ── */
        .vb-dd {
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%);
          min-width: 220px;
          background: #FFFFFF;
          border: 1px solid var(--vb-line);
          border-radius: 10px;
          box-shadow:
            0 24px 48px -20px rgba(14,34,64,0.25),
            0 0 0 1px rgba(255,255,255,0.5) inset;
          padding: 6px;
          animation: vb-fade-in .18s ease;
          z-index: 50;
          overflow: hidden;
        }
        .vb-dd::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--vb-gold), transparent);
        }
        .vb-dd-item {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 10px 12px;
          border-radius: 6px;
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          font-weight: 500;
          color: var(--vb-ink);
          background: transparent;
          border: 0;
          text-align: left;
          text-decoration: none;
          cursor: pointer;
          transition: background .18s ease, color .18s ease, padding-left .18s ease;
        }
        .vb-dd-item::before {
          content: "";
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--vb-line);
          transition: background .18s ease;
        }
        .vb-dd-item:hover {
          background: var(--vb-gold-soft);
          color: var(--vb-maroon);
          padding-left: 14px;
        }
        .vb-dd-item:hover::before { background: var(--vb-gold); }
        .vb-dd-sep { height: 1px; background: var(--vb-line-soft); margin: 4px 8px; }

        /* ── CTA ── */
        .vb-cta {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #FBF7EF;
          background: var(--vb-ink);
          padding: 11px 18px;
          border-radius: 999px;
          text-decoration: none;
          transition: background .25s ease, transform .25s ease, box-shadow .25s ease;
          box-shadow: 0 8px 18px -10px rgba(14,34,64,0.55);
          border: 1px solid var(--vb-ink);
        }
        .vb-cta:hover {
          background: var(--vb-maroon);
          border-color: var(--vb-maroon);
          transform: translateY(-1px);
          box-shadow: 0 12px 24px -10px rgba(139,42,63,0.5);
        }

        /* ── Hamburger ── */
        .vb-burger {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px; height: 42px;
          border-radius: 8px;
          background: transparent;
          border: 1px solid var(--vb-line);
          cursor: pointer;
          transition: border-color .2s ease, background .2s ease;
        }
        .vb-burger:hover { border-color: var(--vb-gold); background: var(--vb-gold-soft); }
        @media (min-width: 1000px) { .vb-burger { display: none; } }
        .vb-burger-icon {
          width: 22px;
          height: 14px;
          position: relative;
        }
        .vb-burger-icon span {
          position: absolute;
          left: 0; right: 0;
          height: 1.5px;
          background: var(--vb-ink);
          border-radius: 2px;
          transition: transform .3s ease, opacity .3s ease, top .3s ease;
        }
        .vb-burger-icon span:nth-child(1) { top: 0; }
        .vb-burger-icon span:nth-child(2) { top: 6px; }
        .vb-burger-icon span:nth-child(3) { top: 12px; }
        .vb-burger.is-open .vb-burger-icon span:nth-child(1) { top: 6px; transform: rotate(45deg); }
        .vb-burger.is-open .vb-burger-icon span:nth-child(2) { opacity: 0; }
        .vb-burger.is-open .vb-burger-icon span:nth-child(3) { top: 6px; transform: rotate(-45deg); }

        /* ── Mobile drawer ── */
        .vb-drawer-overlay {
          position: fixed; inset: 0;
          z-index: 999;
          background: rgba(14,34,64,0.55);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          opacity: 0;
          pointer-events: none;
          transition: opacity .35s ease;
        }
        .vb-drawer-overlay.is-open { opacity: 1; pointer-events: auto; }

        .vb-drawer {
          position: fixed;
          top: 0; right: 0;
          height: 100dvh;
          width: 320px;
          max-width: 88vw;
          background: var(--vb-ivory);
          z-index: 1001;
          transform: translateX(100%);
          transition: transform .42s cubic-bezier(.22,.61,.36,1);
          display: flex;
          flex-direction: column;
          border-left: 1px solid var(--vb-line);
          box-shadow: -24px 0 60px -20px rgba(14,34,64,0.35);
        }
        .vb-drawer.is-open { transform: translateX(0); }

        .vb-drawer-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          border-bottom: 1px solid var(--vb-line);
          background: linear-gradient(180deg, var(--vb-ivory-2) 0%, var(--vb-ivory) 100%);
        }
        .vb-drawer-title {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--vb-gold);
        }
        .vb-drawer-close {
          width: 36px; height: 36px;
          border-radius: 8px;
          border: 1px solid var(--vb-line);
          background: #fff;
          color: var(--vb-ink);
          cursor: pointer;
          display: grid;
          place-items: center;
          transition: border-color .2s ease, color .2s ease;
        }
        .vb-drawer-close:hover { border-color: var(--vb-maroon); color: var(--vb-maroon); }

        .vb-drawer-body {
          flex: 1;
          overflow-y: auto;
          padding: 14px 16px 28px;
        }

        .vb-m-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          border-radius: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: var(--vb-ink);
          text-decoration: none;
          margin-bottom: 2px;
          border: 1px solid transparent;
          transition: background .2s ease, color .2s ease, border-color .2s ease;
        }
        .vb-m-link:hover, .vb-m-link.is-active {
          background: var(--vb-gold-soft);
          color: var(--vb-maroon);
          border-color: rgba(183,137,45,0.25);
        }
        .vb-m-icon {
          width: 30px; height: 30px;
          display: grid;
          place-items: center;
          border-radius: 7px;
          background: #fff;
          border: 1px solid var(--vb-line);
          color: var(--vb-ink);
          flex-shrink: 0;
        }

        .vb-m-acc { margin-bottom: 2px; }
        .vb-m-acc summary {
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 8px;
          border: 1px solid transparent;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: var(--vb-ink);
          user-select: none;
          transition: background .2s ease, color .2s ease, border-color .2s ease;
        }
        .vb-m-acc summary::-webkit-details-marker { display: none; }
        .vb-m-acc summary:hover, .vb-m-acc[open] summary {
          background: var(--vb-gold-soft);
          color: var(--vb-maroon);
          border-color: rgba(183,137,45,0.25);
        }
        .vb-m-acc-l { display: flex; align-items: center; gap: 12px; }
        .vb-m-acc-arr {
          color: var(--vb-gold);
          transition: transform .3s ease;
        }
        .vb-m-acc[open] .vb-m-acc-arr { transform: rotate(180deg); }

        .vb-m-sub {
          padding: 4px 0 6px 14px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .vb-m-sub a, .vb-m-sub button {
          all: unset;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 12px;
          border-radius: 6px;
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          color: var(--vb-muted);
          cursor: pointer;
          transition: color .2s ease, background .2s ease, padding-left .2s ease;
        }
        .vb-m-sub a::before, .vb-m-sub button::before {
          content: "";
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--vb-line);
          transition: background .2s ease;
        }
        .vb-m-sub a:hover, .vb-m-sub button:hover {
          color: var(--vb-maroon);
          background: rgba(183,137,45,0.08);
          padding-left: 14px;
        }
        .vb-m-sub a:hover::before, .vb-m-sub button:hover::before { background: var(--vb-gold); }

        .vb-m-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--vb-line), transparent);
          margin: 12px 0;
        }
        .vb-m-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 13px 16px;
          margin-top: 10px;
          background: var(--vb-ink);
          color: var(--vb-ivory);
          border-radius: 999px;
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background .25s ease;
        }
        .vb-m-cta:hover { background: var(--vb-maroon); }
        .vb-m-foot {
          text-align: center;
          padding-top: 16px;
          margin-top: 16px;
          border-top: 1px solid var(--vb-line-soft);
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 14px;
          color: var(--vb-gold);
          letter-spacing: 0.05em;
        }

        /* ── Modal (brochure) ── */
        .vb-modal-bg {
          position: fixed; inset: 0;
          z-index: 1100;
          background: rgba(14,34,64,0.7);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          display: grid;
          place-items: center;
          padding: 16px;
        }
        .vb-modal {
          width: 100%;
          max-width: 960px;
          height: 84vh;
          background: var(--vb-ivory);
          border: 1px solid var(--vb-line);
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 40px 80px -20px rgba(14,34,64,0.5);
          display: flex;
          flex-direction: column;
        }
        .vb-modal-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          border-bottom: 1px solid var(--vb-line);
          background: var(--vb-ivory-2);
        }
        .vb-modal-title {
          font-family: 'Playfair Display', serif;
          font-size: 16px;
          font-weight: 700;
          color: var(--vb-ink);
        }
        .vb-modal-actions { display: flex; gap: 8px; }
        .vb-modal-btn {
          padding: 8px 16px;
          border-radius: 999px;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all .2s ease;
          border: 1px solid var(--vb-line);
          background: #fff;
          color: var(--vb-ink);
        }
        .vb-modal-btn:hover {
          border-color: var(--vb-gold);
          color: var(--vb-maroon);
        }
        .vb-modal-btn--solid {
          background: var(--vb-ink);
          color: var(--vb-ivory);
          border-color: var(--vb-ink);
        }
        .vb-modal-btn--solid:hover {
          background: var(--vb-maroon);
          border-color: var(--vb-maroon);
          color: var(--vb-ivory);
        }

        /* ── Spacer (under fixed header) ── */
        .vb-spacer { height: calc(76px + 32px); }
        @media (max-width: 600px) { .vb-spacer { height: calc(76px + 32px); } }
      `}</style>

      {/* ─── HEADER ─── */}
      <header className={`vb-head ${scrolled ? "is-scrolled" : ""}`}>
        {/* Tagline strip */}
        <div className="vb-strip" aria-hidden="true">
          <div className="vb-strip-track">
            {[...Array(8)].map((_, i) => (
              <span key={i} className="vb-strip-item">
                <span className="vb-strip-dot" />
                {i % 4 === 0 && <span className="vb-strip-gold">Veer Bharat</span>}
                {i % 4 === 1 && <span>Pure · Premium · Traditional</span>}
                {i % 4 === 2 && <span>FSSAI Certified</span>}
                {i % 4 === 3 && <span>वाह! मज़ा आ गया</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Main bar */}
        <div className="vb-bar">
          {/* Brand */}
          <a href="/" className="vb-brand" aria-label="Veer Bharat — Home">
            <div className="vb-brand-mark">
              <img src="/logo.png" alt="" width={48} height={48} />
            </div>
            <div className="vb-brand-text">
              <span className="vb-brand-name">Veer<em>Bharat</em></span>
              <span className="vb-brand-tag">वाह! मज़ा आ गया</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="vb-nav" aria-label="Main">
            <a href="/" className={`vb-link ${activeLink === "/" ? "is-active" : ""}`}>Home</a>
            <a href="/about" className={`vb-link ${activeLink === "/about" ? "is-active" : ""}`}>About</a>

            {/* Products */}
            <div style={{ position: "relative" }} ref={productsRef}>
              <button
                ref={productsButtonRef}
                onClick={() => setProductsOpen((s) => !s)}
                onMouseEnter={() => setProductsOpen(true)}
                className={`vb-btn ${productsOpen ? "is-open" : ""}`}
                aria-haspopup="true"
                aria-expanded={productsOpen}
              >
                Products
                <Chevron open={productsOpen} />
              </button>
              {productsOpen && (
                <div
                  className="vb-dd"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                  role="menu"
                >
                  <a href="/products" className="vb-dd-item" onClick={() => setProductsOpen(false)}>All Products</a>
                  <div className="vb-dd-sep" />
                  <a href="/mustard-oil" className="vb-dd-item" onClick={() => setProductsOpen(false)}>Mustard Oil</a>
                  <a href="/soyabean-oil" className="vb-dd-item" onClick={() => setProductsOpen(false)}>Soyabean Oil</a>
                  <a href="/palm-oil" className="vb-dd-item" onClick={() => setProductsOpen(false)}>Palm Oil</a>
                  <a href="/sunflower-Oil" className="vb-dd-item" onClick={() => setProductsOpen(false)}>Sunflower Oil</a>
                  <div className="vb-dd-sep" />
                  <a href="/brand-rice" className="vb-dd-item" onClick={() => setProductsOpen(false)}>Brand Rice</a>
                </div>
              )}
            </div>

            {/* Brochure */}
            <div style={{ position: "relative" }} ref={brochureRef}>
              <button
                ref={brochureButtonRef}
                onClick={() => setBrochureOpen((s) => !s)}
                onMouseEnter={() => setBrochureOpen(true)}
                className={`vb-btn ${brochureOpen ? "is-open" : ""}`}
                aria-haspopup="true"
                aria-expanded={brochureOpen}
              >
                Brochure
                <Chevron open={brochureOpen} />
              </button>
              {brochureOpen && (
                <div
                  className="vb-dd"
                  onMouseEnter={() => setBrochureOpen(true)}
                  onMouseLeave={() => setBrochureOpen(false)}
                  role="menu"
                >
                  <button
                    className="vb-dd-item"
                    onClick={() => { setViewerOpen(true); setBrochureOpen(false); }}
                  >
                    View Brochure
                  </button>
                  <a href={pdfPath} download className="vb-dd-item">Download PDF</a>
                </div>
              )}
            </div>

            {/* Team */}
            <div style={{ position: "relative" }} ref={teamRef}>
              <button
                ref={teamButtonRef}
                onClick={() => setTeamOpen((s) => !s)}
                onMouseEnter={() => setTeamOpen(true)}
                className={`vb-btn ${teamOpen ? "is-open" : ""}`}
                aria-haspopup="true"
                aria-expanded={teamOpen}
              >
                Team
                <Chevron open={teamOpen} />
              </button>
              {teamOpen && (
                <div
                  className="vb-dd"
                  onMouseEnter={() => setTeamOpen(true)}
                  onMouseLeave={() => setTeamOpen(false)}
                  role="menu"
                >
                  <a href="/team" className="vb-dd-item" onClick={() => setTeamOpen(false)}>Our Team</a>
                  <a href="/Managing-Director" className="vb-dd-item" onClick={() => setTeamOpen(false)}>Managing Director</a>
                  <a href="/gallery" className="vb-dd-item" onClick={() => setTeamOpen(false)}>Gallery</a>
                </div>
              )}
            </div>

            <a href="/blog" className={`vb-link ${activeLink === "/blog" ? "is-active" : ""}`}>Blog</a>

            <a href="/contact" className="vb-cta" style={{ marginLeft: 8 }}>
              Contact
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </nav>

          {/* Hamburger */}
          <button
            className={`vb-burger ${open ? "is-open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="vb-burger-icon">
              <span /><span /><span />
            </span>
          </button>
        </div>
      </header>

      <div className="vb-spacer" aria-hidden="true" />

      {/* ─── MOBILE DRAWER ─── */}
      <div
        className={`vb-drawer-overlay ${open ? "is-open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />
      <aside
        className={`vb-drawer ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="vb-drawer-top">
          <span className="vb-drawer-title">Menu</span>
          <button className="vb-drawer-close" onClick={() => setOpen(false)} aria-label="Close menu">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="vb-drawer-body">
          <a href="/" className={`vb-m-link ${activeLink === "/" ? "is-active" : ""}`} onClick={() => setOpen(false)}>
            <span className="vb-m-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 11l9-8 9 8M5 10v10h14V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            Home
          </a>
          <a href="/about" className={`vb-m-link ${activeLink === "/about" ? "is-active" : ""}`} onClick={() => setOpen(false)}>
            <span className="vb-m-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7"/><path d="M12 8v.01M11 12h1v5h1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
            </span>
            About
          </a>

          <div className="vb-m-divider" />

          <details className="vb-m-acc">
            <summary>
              <span className="vb-m-acc-l">
                <span className="vb-m-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 7h18l-2 13H5L3 7zM8 7V5a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                Products
              </span>
              <span className="vb-m-acc-arr">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </summary>
            <div className="vb-m-sub">
              <a href="/products" onClick={() => setOpen(false)}>All Products</a>
              <a href="/mustard-oil" onClick={() => setOpen(false)}>Mustard Oil</a>
              <a href="/soyabean-oil" onClick={() => setOpen(false)}>Soyabean Oil</a>
              <a href="/palm-oil" onClick={() => setOpen(false)}>Palm Oil</a>
              <a href="/sunflower-Oil" onClick={() => setOpen(false)}>Sunflower Oil</a>
              <a href="/brand-rice" onClick={() => setOpen(false)}>Brand Rice</a>
            </div>
          </details>

          <details className="vb-m-acc">
            <summary>
              <span className="vb-m-acc-l">
                <span className="vb-m-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9l-6-6zM14 3v6h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                Brochure
              </span>
              <span className="vb-m-acc-arr">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </summary>
            <div className="vb-m-sub">
              <button onClick={() => { setViewerOpen(true); setOpen(false); }}>View Brochure</button>
              <a href={pdfPath} download onClick={() => setOpen(false)}>Download PDF</a>
            </div>
          </details>

          <details className="vb-m-acc">
            <summary>
              <span className="vb-m-acc-l">
                <span className="vb-m-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.7"/><circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.7"/><path d="M3 19c0-3 3-5 6-5s6 2 6 5M15 19c0-2 2-3.5 4-3.5S22 17 22 19" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
                </span>
                Team
              </span>
              <span className="vb-m-acc-arr">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </summary>
            <div className="vb-m-sub">
              <a href="/team" onClick={() => setOpen(false)}>Our Team</a>
              <a href="/Managing-Director" onClick={() => setOpen(false)}>Managing Director</a>
              <a href="/gallery" onClick={() => setOpen(false)}>Gallery</a>
            </div>
          </details>

          <a href="/blog" className={`vb-m-link ${activeLink === "/blog" ? "is-active" : ""}`} onClick={() => setOpen(false)}>
            <span className="vb-m-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
            </span>
            Blog
          </a>

          <a href="/contact" className="vb-m-cta" onClick={() => setOpen(false)}>
            Contact Us
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <p className="vb-m-foot">— Veer Bharat —</p>
        </div>
      </aside>

      {/* ─── BROCHURE MODAL ─── */}
      {viewerOpen && (
        <div
          className="vb-modal-bg"
          onClick={(e) => { if (e.target === e.currentTarget) setViewerOpen(false); }}
          role="dialog"
          aria-modal="true"
        >
          <div className="vb-modal">
            <div className="vb-modal-head">
              <span className="vb-modal-title">Brochure</span>
              <div className="vb-modal-actions">
                <a href={pdfPath} download className="vb-modal-btn vb-modal-btn--solid">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Download
                </a>
                <button className="vb-modal-btn" onClick={() => setViewerOpen(false)}>Close</button>
              </div>
            </div>
            <iframe
              src={`${pdfPath}#view=FitH`}
              style={{ flex: 1, width: "100%", border: 0, background: "#fff" }}
              title="Veer Bharat Brochure"
            />
          </div>
        </div>
      )}
    </>
  );
}

/* ── tiny helpers ── */
function Chevron({ open }) {
  return (
    <svg className={`vb-chev ${open ? "is-open" : ""}`} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
