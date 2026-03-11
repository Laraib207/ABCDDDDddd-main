// "use client";

// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import LogoLink from "@/components/LogoLink";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [teamOpen, setTeamOpen] = useState(false);
//   const [brochureOpen, setBrochureOpen] = useState(false);
//   const [viewerOpen, setViewerOpen] = useState(false);
//   const [productsOpen, setProductsOpen] = useState(false);

//   const teamRef = useRef(null);
//   const teamButtonRef = useRef(null);
//   const brochureRef = useRef(null);
//   const brochureButtonRef = useRef(null);
//   const productsRef = useRef(null);
//   const productsButtonRef = useRef(null);

//   const pdfPath = "/docs/pdf/brochure.pdf";

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const onDoc = (e) => {
//       if (teamRef.current && !teamRef.current.contains(e.target) &&
//           teamButtonRef.current && !teamButtonRef.current.contains(e.target)) setTeamOpen(false);
//       if (brochureRef.current && !brochureRef.current.contains(e.target) &&
//           brochureButtonRef.current && !brochureButtonRef.current.contains(e.target)) setBrochureOpen(false);
//       if (productsRef.current && !productsRef.current.contains(e.target) &&
//           productsButtonRef.current && !productsButtonRef.current.contains(e.target)) setProductsOpen(false);
//     };
//     document.addEventListener("click", onDoc);
//     return () => document.removeEventListener("click", onDoc);
//   }, []);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") {
//         setTeamOpen(false);
//         setBrochureOpen(false);
//         setProductsOpen(false);
//         setOpen(false);
//         setViewerOpen(false);
//       }
//     };
//     document.addEventListener("keydown", onKey);
//     return () => document.removeEventListener("keydown", onKey);
//   }, []);

//   // Lock body scroll when mobile menu is open
//   useEffect(() => {
//     if (open) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [open]);

//   return (
//     <>
//       <header
//         className={`w-full transition-all duration-300 border-b border-[rgba(8,52,139,0.04)] ${
//           scrolled ? "fixed top-0 left-0 z-50 py-2 shadow-sm" : "relative py-4 shadow-sm"
//         }`}
//         style={{ backgroundColor: "#DFC6F6" }}
//       >
//         <div className="w-full flex items-center justify-between px-2 md:px-4">
//           {/* Logo and Brand Name */}
//           <div className="flex items-center flex-shrink-0">
//             <LogoLink href="/" aria-label="Veer Bharat Home" className="block">
//               <div style={{ width: 120, height: 100 }} className="overflow-hidden md:w-[150px] md:h-[120px]">
//                 <Image
//                   src="/logo.png"
//                   alt="Veer Bharat logo"
//                   width={200}
//                   height={124}
//                   style={{ objectFit: "contain" }}
//                   priority
//                 />
//               </div>
//             </LogoLink>
//             {/* Brand name - visible on all screens */}
//             <div className="flex flex-col leading-tight ml-2">
//               <span className="font-extrabold text-xl sm:text-2xl md:text-3xl tracking-tight text-[#08348b]">Veer Bharat</span>
//               {/* <span className="font-extrabold text-xl sm:text-2xl md:text-3xl tracking-tight text-[#08348b]"> Industries</span> */}
//               <span className="italic text-sm sm:text-sm md:text-base text-[#aa2266]">वाह! मज़ा आ गया</span>
//               {/* <span className="italic text-sm sm:text-sm md:text-base text-[#aa2266]">वाह! मज़ा आ गया</span> */}
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex flex-1 justify-center items-center">
//             <ul className="flex items-center gap-8 text-xl font-bold">
//               <li><NavLink href="/">Home</NavLink></li>
//               <li><NavLink href="/blog">Blog</NavLink></li>

//               {/* Products dropdown */}
//               <li className="relative" ref={productsRef}>
//                 <button
//                   ref={productsButtonRef}
//                   onClick={() => setProductsOpen((s) => !s)}
//                   onMouseEnter={() => setProductsOpen(true)}
//                   onFocus={() => setProductsOpen(true)}
//                   className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/40 focus:outline-none transition-all"
//                 >
//                   Products <ChevronIcon open={productsOpen} />
//                 </button>
//                 <div
//                   className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 min-w-[240px] rounded-xl bg-white text-[#082f63] shadow-2xl ring-1 ring-black/10 transition-all z-50 ${
//                     productsOpen ? "opacity-100 pointer-events-auto translate-y-0 scale-100" : "opacity-0 pointer-events-none -translate-y-1 scale-95"
//                   }`}
//                   onMouseEnter={() => setProductsOpen(true)}
//                   onMouseLeave={() => setProductsOpen(false)}
//                 >
//                   <ul className="py-2">
//                     <li>
//                       <LogoLink href="/products" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setProductsOpen(false)}>All Products</LogoLink>
//                     </li>
//                     <li>
//                       <LogoLink href="/soyabean-oil" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setProductsOpen(false)}>Soyabean Oil</LogoLink>
//                     </li>
//                     <li>
//                       <LogoLink href="/mustard-oil" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setProductsOpen(false)}>Mustard Oil</LogoLink>
//                     </li>
//                     <li>
//                       <LogoLink href="/palm-oil" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setProductsOpen(false)}>Palm Oil</LogoLink>
//                     </li>
//                     <li>
//                       <LogoLink href="/sunflower-Oil" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setProductsOpen(false)}>Sunflower Oil</LogoLink>
//                     </li>
//                      <li>
//                       <LogoLink href="/brand-rice" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setProductsOpen(false)}>Brand Rice</LogoLink>
//                     </li>
//                   </ul>
//                 </div>
//               </li>

//               <li className="relative" ref={brochureRef}>
//                 <button
//                   ref={brochureButtonRef}
//                   onClick={() => setBrochureOpen((s) => !s)}
//                   onMouseEnter={() => setBrochureOpen(true)}
//                   onFocus={() => setBrochureOpen(true)}
//                   className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/40 focus:outline-none transition-all"
//                 >
//                  Brochure <ChevronIcon open={brochureOpen} />
//                 </button>
//                 <div
//                   className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 min-w-[240px] rounded-xl bg-white text-[#082f63] shadow-2xl ring-1 ring-black/10 transition-all z-50 ${
//                     brochureOpen ? "opacity-100 pointer-events-auto translate-y-0 scale-100" : "opacity-0 pointer-events-none -translate-y-1 scale-95"
//                   }`}
//                   onMouseEnter={() => setBrochureOpen(true)}
//                   onMouseLeave={() => setBrochureOpen(false)}
//                 >
//                   <ul className="py-2">
//                     <li>
//                       <button
//                         onClick={() => { setViewerOpen(true); setBrochureOpen(false); setOpen(false); }}
//                         className="w-full text-left px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold"
//                       >
//                         View Brochure
//                       </button>
//                     </li>
//                     <li>
//                       <a href={pdfPath} download className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold">Download Brochure</a>
//                     </li>
//                   </ul>
//                 </div>
//               </li>

//               <li className="relative" ref={teamRef}>
//                 <button
//                   ref={teamButtonRef}
//                   onClick={() => setTeamOpen((s) => !s)}
//                   onMouseEnter={() => setTeamOpen(true)}
//                   onFocus={() => setTeamOpen(true)}
//                   className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/40 focus:outline-none transition-all"
//                 >
//                   Team <ChevronIcon open={teamOpen} />
//                 </button>
//                 <div
//                   className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 min-w-[200px] rounded-xl bg-white text-[#082f63] shadow-2xl ring-1 ring-black/10 transition-all z-50 ${
//                     teamOpen ? "opacity-100 pointer-events-auto translate-y-0 scale-100" : "opacity-0 pointer-events-none -translate-y-1 scale-95"
//                   }`}
//                   onMouseEnter={() => setTeamOpen(true)}
//                   onMouseLeave={() => setTeamOpen(false)}
//                 >
//                   <ul className="py-2">
//                     <li>
//                       <LogoLink href="/team" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setTeamOpen(false)}>Our Team</LogoLink>
//                     </li>
//                     <li>
//                       <LogoLink href="/gallery" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setTeamOpen(false)}>Gallery</LogoLink>
//                     </li>
//                     <li>
//                       <LogoLink href="/Managing-Director" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setTeamOpen(false)}>Managing Director</LogoLink>
//                     </li>
//                   </ul>
//                 </div>
//               </li>

//               <li><NavLink href="/about">About</NavLink></li>
//               <li><NavLink href="/contact">Contact</NavLink></li>
//             </ul>
//           </nav>

//           {/* Mobile Hamburger Button - Ultra Cool Design */}
//           <button
//             className="md:hidden relative z-50 w-12 h-12 flex flex-col items-center justify-center gap-1.5 focus:outline-none bg-white/30 rounded-xl backdrop-blur-sm hover:bg-white/50 transition-all shadow-lg"
//             onClick={() => setOpen(!open)}
//             aria-label="Toggle menu"
//           >
//             <span
//               className={`block w-7 h-0.5 bg-gradient-to-r from-[#08348b] to-[#aa2266] rounded-full transition-all duration-300 ease-in-out ${
//                 open ? "rotate-45 translate-y-2" : ""
//               }`}
//             />
//             <span
//               className={`block w-7 h-0.5 bg-gradient-to-r from-[#08348b] to-[#aa2266] rounded-full transition-all duration-300 ease-in-out ${
//                 open ? "opacity-0 scale-0" : "opacity-100 scale-100"
//               }`}
//             />
//             <span
//               className={`block w-7 h-0.5 bg-gradient-to-r from-[#08348b] to-[#aa2266] rounded-full transition-all duration-300 ease-in-out ${
//                 open ? "-rotate-45 -translate-y-2" : ""
//               }`}
//             />
//           </button>
//         </div>

//         {/* Mobile Slide Menu - Ultra Modern & Cool */}
//         <div
//           className={`md:hidden fixed inset-0 z-40 transition-opacity duration-500 ${
//             open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
//           }`}
//           style={{ top: scrolled ? "70px" : "120px" }}
//         >
//           {/* Backdrop with blur */}
//           <div
//             className="absolute inset-0 bg-gradient-to-br from-black/60 via-purple-900/40 to-black/60 backdrop-blur-md"
//             onClick={() => setOpen(false)}
//           />

//           {/* Slide Menu with stunning design */}
//           <div
//             className={`absolute right-0 top-0 bottom-0 w-[320px] max-w-[85vw] bg-gradient-to-br from-[#DFC6F6] via-white to-[#f0e4ff] shadow-2xl transform transition-all duration-500 ease-out overflow-y-auto ${
//               open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
//             }`}
//             style={{
//               backgroundImage: 'linear-gradient(135deg, #DFC6F6 0%, #ffffff 50%, #f0e4ff 100%)',
//               boxShadow: '-10px 0 50px rgba(8, 52, 139, 0.3)'
//             }}
//           >
//             {/* Decorative header bar */}
//             <div className="h-2 bg-gradient-to-r from-[#08348b] via-[#aa2266] to-[#08348b]" />
            
//             <div className="px-6 py-8 flex flex-col gap-3">
//               {/* Menu title with animation */}
//               <div className={`text-center mb-4 transition-all duration-700 ${open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
//                 <h3 className="text-2xl font-extrabold text-[#08348b] tracking-tight">Menu</h3>
//                 <div className="w-16 h-1 bg-gradient-to-r from-[#08348b] to-[#aa2266] rounded-full mx-auto mt-2" />
//               </div>

//               <MobileLink 
//                 href="/" 
//                 onClick={() => setOpen(false)}
//                 icon="🏠"
//                 delay="100"
//                 isOpen={open}
//               >
//                 Home
//               </MobileLink>
              
//               <MobileLink 
//                 href="/blog" 
//                 onClick={() => setOpen(false)}
//                 icon="📝"
//                 delay="150"
//                 isOpen={open}
//               >
//                 Blog
//               </MobileLink>

//               <details className={`group transition-all duration-700 delay-200 ${open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
//                 <summary className="px-5 py-4 cursor-pointer list-none flex items-center justify-between bg-gradient-to-r from-white/70 to-white/50 rounded-xl hover:from-white hover:to-white/80 transition-all shadow-md hover:shadow-lg backdrop-blur-sm border border-purple-100">
//                   <span className="flex items-center gap-3 text-[#08348b] font-bold text-lg">
//                     <span className="text-2xl">🛍️</span>
//                     Products
//                   </span>
//                   <span className="text-[#08348b] text-xl font-bold group-open:rotate-180 transition-transform duration-300">▾</span>
//                 </summary>
//                 <div className="pl-8 pr-4 pb-2 pt-3 flex flex-col gap-2 animate-fadeIn">
//                   <SubMenuLink href="/products" onClick={() => setOpen(false)}>All Products</SubMenuLink>
//                   <SubMenuLink href="/soyabean-oil" onClick={() => setOpen(false)}>Soyabean Oil</SubMenuLink>
//                   <SubMenuLink href="/mustard-oil" onClick={() => setOpen(false)}>Mustard Oil</SubMenuLink>
//                   <SubMenuLink href="/palm-oil" onClick={() => setOpen(false)}>Palm Oil</SubMenuLink>
//                   <SubMenuLink href="/brand-rice" onClick={() => setOpen(false)}>Brand Rice</SubMenuLink>
//                 </div>
//               </details>

//               <details className={`group transition-all duration-700 delay-250 ${open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
//                 <summary className="px-5 py-4 cursor-pointer list-none flex items-center justify-between bg-gradient-to-r from-white/70 to-white/50 rounded-xl hover:from-white hover:to-white/80 transition-all shadow-md hover:shadow-lg backdrop-blur-sm border border-purple-100">
//                   <span className="flex items-center gap-3 text-[#08348b] font-bold text-lg">
//                     <span className="text-2xl">📄</span>
//                     Brochure
//                   </span>
//                   <span className="text-[#08348b] text-xl font-bold group-open:rotate-180 transition-transform duration-300">▾</span>
//                 </summary>
//                 <div className="pl-8 pr-4 pb-2 pt-3 flex flex-col gap-2">
//                   <button
//                     onClick={() => { setViewerOpen(true); setOpen(false); }}
//                     className="text-left px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/80 bg-white/40 font-semibold transition-all text-base border border-purple-50"
//                   >
//                     View Brochure
//                   </button>
//                   <a
//                     href={pdfPath}
//                     download
//                     className="px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/80 bg-white/40 font-semibold transition-all text-base border border-purple-50"
//                     onClick={() => setOpen(false)}
//                   >
//                     Download Brochure
//                   </a>
//                 </div>
//               </details>

//               <details className={`group transition-all duration-700 delay-300 ${open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
//                 <summary className="px-5 py-4 cursor-pointer list-none flex items-center justify-between bg-gradient-to-r from-white/70 to-white/50 rounded-xl hover:from-white hover:to-white/80 transition-all shadow-md hover:shadow-lg backdrop-blur-sm border border-purple-100">
//                   <span className="flex items-center gap-3 text-[#08348b] font-bold text-lg">
//                     <span className="text-2xl">👥</span>
//                     Team
//                   </span>
//                   <span className="text-[#08348b] text-xl font-bold group-open:rotate-180 transition-transform duration-300">▾</span>
//                 </summary>
//                 <div className="pl-8 pr-4 pb-2 pt-3 flex flex-col gap-2">
//                   <SubMenuLink href="/team" onClick={() => setOpen(false)}>Our Team</SubMenuLink>
//                   <SubMenuLink href="/gallery" onClick={() => setOpen(false)}>Gallery</SubMenuLink>
//                   <SubMenuLink href="/Managing-Director" onClick={() => setOpen(false)}>Managing Director</SubMenuLink>
//                 </div>
//               </details>

//               <MobileLink 
//                 href="/about" 
//                 onClick={() => setOpen(false)}
//                 icon="ℹ️"
//                 delay="350"
//                 isOpen={open}
//               >
//                 About
//               </MobileLink>
              
//               <MobileLink 
//                 href="/contact" 
//                 onClick={() => setOpen(false)}
//                 icon="📞"
//                 delay="400"
//                 isOpen={open}
//               >
//                 Contact
//               </MobileLink>
//             </div>

//             {/* Decorative footer element */}
//             <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#08348b]/10 to-transparent pointer-events-none" />
//           </div>
//         </div>
//       </header>

//       {/* Brochure modal */}
//       {viewerOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//           <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setViewerOpen(false)} />
//           <div className="relative w-full max-w-6xl h-[80vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
//             <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-[#DFC6F6] to-white">
//               <h3 className="text-xl font-bold text-[#082f63]">Brochure Preview</h3>
//               <div className="flex items-center gap-3">
//                 <a href={pdfPath} download className="px-4 py-2 text-base font-semibold rounded-lg border-2 border-[#08348b] text-[#08348b] hover:bg-[#08348b] hover:text-white transition-all">Download</a>
//                 <button onClick={() => setViewerOpen(false)} className="px-4 py-2 text-base font-semibold rounded-lg border-2 border-gray-300 hover:bg-gray-100 transition-all">Close</button>
//               </div>
//             </div>
//             <iframe src={`${pdfPath}#view=FitH`} className="w-full h-full" />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// /* ---------- helpers ---------- */
// function NavLink({ href, children }) {
//   return (
//     <LogoLink href={href} className="px-3 py-2 text-gray-700 hover:text-[#08348b] transition-all hover:scale-105">
//       {children}
//     </LogoLink>
//   );
// }

// function MobileLink({ href, children, onClick, icon, delay, isOpen }) {
//   return (
//     <LogoLink
//       href={href}
//       className={`px-5 py-4 rounded-xl text-[#08348b] font-bold text-lg bg-gradient-to-r from-white/70 to-white/50 hover:from-white hover:to-white/80 transition-all transform hover:scale-105 hover:shadow-lg shadow-md backdrop-blur-sm border border-purple-100 flex items-center gap-3 duration-700 delay-${delay} ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
//       onClick={onClick}
//     >
//       <span className="text-2xl">{icon}</span>
//       {children}
//     </LogoLink>
//   );
// }

// function SubMenuLink({ href, children, onClick }) {
//   return (
//     <LogoLink
//       href={href}
//       className="px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/80 bg-white/40 font-semibold transition-all transform hover:translate-x-1 text-base border border-purple-50"
//       onClick={onClick}
//     >
//       {children}
//     </LogoLink>
//   );
// }

// function ChevronIcon({ open }) {
//   return (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
//       <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// }









// // src/app/components/Navbar.jsx


// "use client";

// import { useState, useEffect, useRef } from "react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [teamOpen, setTeamOpen] = useState(false);
//   const [brochureOpen, setBrochureOpen] = useState(false);
//   const [viewerOpen, setViewerOpen] = useState(false);
//   const [productsOpen, setProductsOpen] = useState(false);

//   const teamRef = useRef(null);
//   const teamButtonRef = useRef(null);
//   const brochureRef = useRef(null);
//   const brochureButtonRef = useRef(null);
//   const productsRef = useRef(null);
//   const productsButtonRef = useRef(null);

//   const pdfPath = "/docs/pdf/brochure.pdf";

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const onDoc = (e) => {
//       if (teamRef.current && !teamRef.current.contains(e.target) &&
//           teamButtonRef.current && !teamButtonRef.current.contains(e.target)) setTeamOpen(false);
//       if (brochureRef.current && !brochureRef.current.contains(e.target) &&
//           brochureButtonRef.current && !brochureButtonRef.current.contains(e.target)) setBrochureOpen(false);
//       if (productsRef.current && !productsRef.current.contains(e.target) &&
//           productsButtonRef.current && !productsButtonRef.current.contains(e.target)) setProductsOpen(false);
//     };
//     document.addEventListener("click", onDoc);
//     return () => document.removeEventListener("click", onDoc);
//   }, []);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") {
//         setTeamOpen(false);
//         setBrochureOpen(false);
//         setProductsOpen(false);
//         setOpen(false);
//         setViewerOpen(false);
//       }
//     };
//     document.addEventListener("keydown", onKey);
//     return () => document.removeEventListener("keydown", onKey);
//   }, []);

//   useEffect(() => {
//     if (open) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [open]);

//   return (
//     <>
//       <header
//         className={`w-full transition-all duration-300 border-b border-[rgba(8,52,139,0.04)] ${
//           scrolled ? "fixed top-0 left-0 z-50 py-2 shadow-sm" : "relative py-4 shadow-sm"
//         }`}
//         style={{ backgroundColor: "#DFC6F6" }}
//       >
// {/* Classical Marquee Section */}
// <div className="overflow-hidden bg-gradient-to-r from-[#FFF8E7] via-[#FDF3D8] to-[#FFF8E7] py-1.9 border-b border-[#C9A86A]/40">
//   <div className="animate-marquee whitespace-nowrap">
//     <span className="inline-block text-sm font-serif text-[#B8860B] mx-8">
//       ✨ Welcome to Veer Bharat Mustard Oil ✨
//     </span>
//     <span className="inline-block text-sm font-serif text-[#6A4A3C] mx-8">
//       ✨ Welcome to Veer Bharat Mustard Oil ✨
//     </span>
//     <span className="inline-block text-sm font-serif text-[#B8860B] mx-8">
//       ✨ Welcome to Veer Bharat Mustard Oil ✨
//     </span>
//     <span className="inline-block text-sm font-serif text-[#6A4A3C] mx-8">
//       ✨ Welcome to Veer Bharat Mustard Oil ✨
//     </span>
//   </div>
// </div>

//         <div className="w-full flex items-center justify-between px-2 md:px-4">
//           {/* Logo and Brand Name */}
//           <div className="flex items-center flex-shrink-0">
//             <a href="/" aria-label="Veer Bharat Home" className="block">
//               <div style={{ width: 120, height: 100 }} className="overflow-hidden md:w-[150px] md:h-[120px]">
//                 <img
//                   src="/logo.png"
//                   alt="Veer Bharat logo"
//                   width={200}
//                   height={124}
//                   style={{ objectFit: "contain" }}
//                 />
//               </div>
//             </a>
//             <div className="flex flex-col leading-tight ml-2">
//               <span className="font-extrabold text-xl sm:text-2xl md:text-3xl tracking-tight text-[#08348b]">Veer Bharat</span>
//               <span className="italic text-sm sm:text-sm md:text-base text-[#aa2266]">वाह! मज़ा आ गया</span>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex flex-1 justify-center items-center">
//             <ul className="flex items-center gap-8 text-xl font-bold">
//               <li><NavLink href="/">Home</NavLink></li>
//               <li><NavLink href="/blog">Blog</NavLink></li>

//               {/* Products dropdown */}
//               <li className="relative" ref={productsRef}>
//                 <button
//                   ref={productsButtonRef}
//                   onClick={() => setProductsOpen((s) => !s)}
//                   onMouseEnter={() => setProductsOpen(true)}
//                   onFocus={() => setProductsOpen(true)}
//                   className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/40 focus:outline-none transition-all"
//                 >
//                   Products <ChevronIcon open={productsOpen} />
//                 </button>
//                 <div
//                   className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 min-w-[240px] rounded-xl bg-white text-[#082f63] shadow-2xl ring-1 ring-black/10 transition-all z-50 ${
//                     productsOpen ? "opacity-100 pointer-events-auto translate-y-0 scale-100" : "opacity-0 pointer-events-none -translate-y-1 scale-95"
//                   }`}
//                   onMouseEnter={() => setProductsOpen(true)}
//                   onMouseLeave={() => setProductsOpen(false)}
//                 >
//                   <ul className="py-2">
//                     <li>
//                       <a href="/products" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setProductsOpen(false)}>All Products</a>
//                     </li>
//                     <li>
//                       <a href="/soyabean-oil" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setProductsOpen(false)}>Soyabean Oil</a>
//                     </li>
//                     <li>
//                       <a href="/mustard-oil" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setProductsOpen(false)}>Mustard Oil</a>
//                     </li>
//                     <li>
//                       <a href="/palm-oil" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setProductsOpen(false)}>Palm Oil</a>
//                     </li>
//                     <li>
//                       <a href="/sunflower-Oil" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setProductsOpen(false)}>Sunflower Oil</a>
//                     </li>
//                      <li>
//                       <a href="/brand-rice" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setProductsOpen(false)}>Brand Rice</a>
//                     </li>
//                   </ul>
//                 </div>
//               </li>

//               <li className="relative" ref={brochureRef}>
//                 <button
//                   ref={brochureButtonRef}
//                   onClick={() => setBrochureOpen((s) => !s)}
//                   onMouseEnter={() => setBrochureOpen(true)}
//                   onFocus={() => setBrochureOpen(true)}
//                   className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/40 focus:outline-none transition-all"
//                 >
//                  Brochure <ChevronIcon open={brochureOpen} />
//                 </button>
//                 <div
//                   className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 min-w-[240px] rounded-xl bg-white text-[#082f63] shadow-2xl ring-1 ring-black/10 transition-all z-50 ${
//                     brochureOpen ? "opacity-100 pointer-events-auto translate-y-0 scale-100" : "opacity-0 pointer-events-none -translate-y-1 scale-95"
//                   }`}
//                   onMouseEnter={() => setBrochureOpen(true)}
//                   onMouseLeave={() => setBrochureOpen(false)}
//                 >
//                   <ul className="py-2">
//                     <li>
//                       <button
//                         onClick={() => { setViewerOpen(true); setBrochureOpen(false); setOpen(false); }}
//                         className="w-full text-left px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold"
//                       >
//                         View Brochure
//                       </button>
//                     </li>
//                     <li>
//                       <a href={pdfPath} download className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold">Download Brochure</a>
//                     </li>
//                   </ul>
//                 </div>
//               </li>

//               <li className="relative" ref={teamRef}>
//                 <button
//                   ref={teamButtonRef}
//                   onClick={() => setTeamOpen((s) => !s)}
//                   onMouseEnter={() => setTeamOpen(true)}
//                   onFocus={() => setTeamOpen(true)}
//                   className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/40 focus:outline-none transition-all"
//                 >
//                   Team <ChevronIcon open={teamOpen} />
//                 </button>
//                 <div
//                   className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 min-w-[200px] rounded-xl bg-white text-[#082f63] shadow-2xl ring-1 ring-black/10 transition-all z-50 ${
//                     teamOpen ? "opacity-100 pointer-events-auto translate-y-0 scale-100" : "opacity-0 pointer-events-none -translate-y-1 scale-95"
//                   }`}
//                   onMouseEnter={() => setTeamOpen(true)}
//                   onMouseLeave={() => setTeamOpen(false)}
//                 >
//                   <ul className="py-2">
//                     <li>
//                       <a href="/team" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setTeamOpen(false)}>Our Team</a>
//                     </li>
//                     <li>
//                       <a href="/gallery" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setTeamOpen(false)}>Gallery</a>
//                     </li>
//                     <li>
//                       <a href="/Managing-Director" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setTeamOpen(false)}>Managing Director</a>
//                     </li>
//                   </ul>
//                 </div>
//               </li>

//               <li><NavLink href="/about">About</NavLink></li>
//               <li><NavLink href="/contact">Contact</NavLink></li>
//             </ul>
//           </nav>

//           {/* Mobile Hamburger Button */}
//           <button
//             className="md:hidden relative z-50 w-12 h-12 flex flex-col items-center justify-center gap-1.5 focus:outline-none bg-white/30 rounded-xl backdrop-blur-sm hover:bg-white/50 transition-all shadow-lg"
//             onClick={() => setOpen(!open)}
//             aria-label="Toggle menu"
//           >
//             <span
//               className={`block w-7 h-0.5 bg-gradient-to-r from-[#08348b] to-[#aa2266] rounded-full transition-all duration-300 ease-in-out ${
//                 open ? "rotate-45 translate-y-2" : ""
//               }`}
//             />
//             <span
//               className={`block w-7 h-0.5 bg-gradient-to-r from-[#08348b] to-[#aa2266] rounded-full transition-all duration-300 ease-in-out ${
//                 open ? "opacity-0 scale-0" : "opacity-100 scale-100"
//               }`}
//             />
//             <span
//               className={`block w-7 h-0.5 bg-gradient-to-r from-[#08348b] to-[#aa2266] rounded-full transition-all duration-300 ease-in-out ${
//                 open ? "-rotate-45 -translate-y-2" : ""
//               }`}
//             />
//           </button>
//         </div>

//         {/* Mobile Slide Menu */}
//         <div
//           className={`md:hidden fixed inset-0 z-40 transition-opacity duration-500 ${
//             open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
//           }`}
//           style={{ top: scrolled ? "95px" : "145px" }}
//         >
//           <div
//             className="absolute inset-0 bg-gradient-to-br from-black/60 via-purple-900/40 to-black/60 backdrop-blur-md"
//             onClick={() => setOpen(false)}
//           />

//           <div
//             className={`absolute right-0 top-0 bottom-0 w-[320px] max-w-[85vw] bg-gradient-to-br from-[#DFC6F6] via-white to-[#f0e4ff] shadow-2xl transform transition-all duration-500 ease-out overflow-y-auto ${
//               open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
//             }`}
//             style={{
//               backgroundImage: 'linear-gradient(135deg, #DFC6F6 0%, #ffffff 50%, #f0e4ff 100%)',
//               boxShadow: '-10px 0 50px rgba(8, 52, 139, 0.3)'
//             }}
//           >
//             <div className="h-2 bg-gradient-to-r from-[#08348b] via-[#aa2266] to-[#08348b]" />
            
//             <div className="px-6 py-8 flex flex-col gap-3">
//               <div className={`text-center mb-4 transition-all duration-700 ${open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
//                 <h3 className="text-2xl font-extrabold text-[#08348b] tracking-tight">Menu</h3>
//                 <div className="w-16 h-1 bg-gradient-to-r from-[#08348b] to-[#aa2266] rounded-full mx-auto mt-2" />
//               </div>

//               <a 
//                 href="/" 
//                 onClick={() => setOpen(false)}
//                 className={`px-5 py-4 rounded-xl text-[#08348b] font-bold text-lg bg-gradient-to-r from-white/70 to-white/50 hover:from-white hover:to-white/80 transition-all transform hover:scale-105 hover:shadow-lg shadow-md backdrop-blur-sm border border-purple-100 flex items-center gap-3 duration-700 delay-100 ${open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
//               >
//                 <span className="text-2xl">🏠</span>
//                 Home
//               </a>
              
//               <a 
//                 href="/blog" 
//                 onClick={() => setOpen(false)}
//                 className={`px-5 py-4 rounded-xl text-[#08348b] font-bold text-lg bg-gradient-to-r from-white/70 to-white/50 hover:from-white hover:to-white/80 transition-all transform hover:scale-105 hover:shadow-lg shadow-md backdrop-blur-sm border border-purple-100 flex items-center gap-3 duration-700 delay-150 ${open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
//               >
//                 <span className="text-2xl">📝</span>
//                 Blog
//               </a>

//               <details className={`group transition-all duration-700 delay-200 ${open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
//                 <summary className="px-5 py-4 cursor-pointer list-none flex items-center justify-between bg-gradient-to-r from-white/70 to-white/50 rounded-xl hover:from-white hover:to-white/80 transition-all shadow-md hover:shadow-lg backdrop-blur-sm border border-purple-100">
//                   <span className="flex items-center gap-3 text-[#08348b] font-bold text-lg">
//                     <span className="text-2xl">🛍️</span>
//                     Products
//                   </span>
//                   <span className="text-[#08348b] text-xl font-bold group-open:rotate-180 transition-transform duration-300">▾</span>
//                 </summary>
//                 <div className="pl-8 pr-4 pb-2 pt-3 flex flex-col gap-2 animate-fadeIn">
//                   <a href="/products" className="px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/80 bg-white/40 font-semibold transition-all transform hover:translate-x-1 text-base border border-purple-50" onClick={() => setOpen(false)}>All Products</a>
//                   <a href="/soyabean-oil" className="px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/80 bg-white/40 font-semibold transition-all transform hover:translate-x-1 text-base border border-purple-50" onClick={() => setOpen(false)}>Soyabean Oil</a>
//                   <a href="/mustard-oil" className="px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/80 bg-white/40 font-semibold transition-all transform hover:translate-x-1 text-base border border-purple-50" onClick={() => setOpen(false)}>Mustard Oil</a>
//                   <a href="/palm-oil" className="px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/80 bg-white/40 font-semibold transition-all transform hover:translate-x-1 text-base border border-purple-50" onClick={() => setOpen(false)}>Palm Oil</a>
//                   <a href="/brand-rice" className="px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/80 bg-white/40 font-semibold transition-all transform hover:translate-x-1 text-base border border-purple-50" onClick={() => setOpen(false)}>Brand Rice</a>
//                 </div>
//               </details>

//               <details className={`group transition-all duration-700 delay-250 ${open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
//                 <summary className="px-5 py-4 cursor-pointer list-none flex items-center justify-between bg-gradient-to-r from-white/70 to-white/50 rounded-xl hover:from-white hover:to-white/80 transition-all shadow-md hover:shadow-lg backdrop-blur-sm border border-purple-100">
//                   <span className="flex items-center gap-3 text-[#08348b] font-bold text-lg">
//                     <span className="text-2xl">📄</span>
//                     Brochure
//                   </span>
//                   <span className="text-[#08348b] text-xl font-bold group-open:rotate-180 transition-transform duration-300">▾</span>
//                 </summary>
//                 <div className="pl-8 pr-4 pb-2 pt-3 flex flex-col gap-2">
//                   <button
//                     onClick={() => { setViewerOpen(true); setOpen(false); }}
//                     className="text-left px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/80 bg-white/40 font-semibold transition-all text-base border border-purple-50"
//                   >
//                     View Brochure
//                   </button>
//                   <a
//                     href={pdfPath}
//                     download
//                     className="px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/80 bg-white/40 font-semibold transition-all text-base border border-purple-50"
//                     onClick={() => setOpen(false)}
//                   >
//                     Download Brochure
//                   </a>
//                 </div>
//               </details>

//               <details className={`group transition-all duration-700 delay-300 ${open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
//                 <summary className="px-5 py-4 cursor-pointer list-none flex items-center justify-between bg-gradient-to-r from-white/70 to-white/50 rounded-xl hover:from-white hover:to-white/80 transition-all shadow-md hover:shadow-lg backdrop-blur-sm border border-purple-100">
//                   <span className="flex items-center gap-3 text-[#08348b] font-bold text-lg">
//                     <span className="text-2xl">👥</span>
//                     Team
//                   </span>
//                   <span className="text-[#08348b] text-xl font-bold group-open:rotate-180 transition-transform duration-300">▾</span>
//                 </summary>
//                 <div className="pl-8 pr-4 pb-2 pt-3 flex flex-col gap-2">
//                   <a href="/team" className="px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/80 bg-white/40 font-semibold transition-all transform hover:translate-x-1 text-base border border-purple-50" onClick={() => setOpen(false)}>Our Team</a>
//                   <a href="/gallery" className="px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/80 bg-white/40 font-semibold transition-all transform hover:translate-x-1 text-base border border-purple-50" onClick={() => setOpen(false)}>Gallery</a>
//                   <a href="/Managing-Director" className="px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/80 bg-white/40 font-semibold transition-all transform hover:translate-x-1 text-base border border-purple-50" onClick={() => setOpen(false)}>Managing Director</a>
//                 </div>
//               </details>

//               <a 
//                 href="/about" 
//                 onClick={() => setOpen(false)}
//                 className={`px-5 py-4 rounded-xl text-[#08348b] font-bold text-lg bg-gradient-to-r from-white/70 to-white/50 hover:from-white hover:to-white/80 transition-all transform hover:scale-105 hover:shadow-lg shadow-md backdrop-blur-sm border border-purple-100 flex items-center gap-3 duration-700 delay-350 ${open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
//               >
//                 <span className="text-2xl">ℹ️</span>
//                 About
//               </a>
              
//               <a 
//                 href="/contact" 
//                 onClick={() => setOpen(false)}
//                 className={`px-5 py-4 rounded-xl text-[#08348b] font-bold text-lg bg-gradient-to-r from-white/70 to-white/50 hover:from-white hover:to-white/80 transition-all transform hover:scale-105 hover:shadow-lg shadow-md backdrop-blur-sm border border-purple-100 flex items-center gap-3 duration-700 delay-400 ${open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
//               >
//                 <span className="text-2xl">📞</span>
//                 Contact
//               </a>
//             </div>

//             <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#08348b]/10 to-transparent pointer-events-none" />
//           </div>
//         </div>
//       </header>

//       {/* Brochure modal */}
//       {viewerOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//           <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setViewerOpen(false)} />
//           <div className="relative w-full max-w-6xl h-[80vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
//             <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-[#DFC6F6] to-white">
//               <h3 className="text-xl font-bold text-[#082f63]">Brochure Preview</h3>
//               <div className="flex items-center gap-3">
//                 <a href={pdfPath} download className="px-4 py-2 text-base font-semibold rounded-lg border-2 border-[#08348b] text-[#08348b] hover:bg-[#08348b] hover:text-white transition-all">Download</a>
//                 <button onClick={() => setViewerOpen(false)} className="px-4 py-2 text-base font-semibold rounded-lg border-2 border-gray-300 hover:bg-gray-100 transition-all">Close</button>
//               </div>
//             </div>
//             <iframe src={`${pdfPath}#view=FitH`} className="w-full h-full" />
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-marquee {
//           animation: marquee 25s linear infinite;
//           display: inline-block;
//         }
//       `}</style>
//     </>
//   );
// }

// function NavLink({ href, children }) {
//   return (
//     <a href={href} className="px-3 py-2 text-gray-700 hover:text-[#08348b] transition-all hover:scale-105">
//       {children}
//     </a>
//   );
// }

// function ChevronIcon({ open }) {
//   return (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
//       <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// }



















"use client";

import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);
  const [brochureOpen, setBrochureOpen] = useState(false);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const teamRef = useRef(null);
  const teamButtonRef = useRef(null);
  const brochureRef = useRef(null);
  const brochureButtonRef = useRef(null);
  const productsRef = useRef(null);
  const productsButtonRef = useRef(null);

  const pdfPath = "/docs/pdf/brochure.pdf";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onDoc = (e) => {
      if (teamRef.current && !teamRef.current.contains(e.target) &&
          teamButtonRef.current && !teamButtonRef.current.contains(e.target)) setTeamOpen(false);
      if (brochureRef.current && !brochureRef.current.contains(e.target) &&
          brochureButtonRef.current && !brochureButtonRef.current.contains(e.target)) setBrochureOpen(false);
      if (productsRef.current && !productsRef.current.contains(e.target) &&
          productsButtonRef.current && !productsButtonRef.current.contains(e.target)) setProductsOpen(false);
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
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=IM+Fell+English:ital@0;1&family=Cinzel:wght@400;600;700;900&family=Cinzel+Decorative:wght@400;700&display=swap');

        :root {
          --gold-deep: #8B6914;
          --gold-mid: #C9A84C;
          --gold-light: #E8C97A;
          --gold-shine: #F5E0A0;
          --cream: #FDF8EE;
          --cream-dark: #F5EDD8;
          --navy: #0A1628;
          --navy-mid: #0D2144;
          --crimson: #8B1A1A;
          --crimson-light: #A52020;
          --parchment: #F2E8D0;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-8px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .marquee-track {
          animation: marqueeScroll 28s linear infinite;
          display: inline-block;
          white-space: nowrap;
        }

        .gold-shimmer {
          background: linear-gradient(90deg,
            var(--gold-deep) 0%,
            var(--gold-light) 30%,
            #FAEDB0 50%,
            var(--gold-light) 70%,
            var(--gold-deep) 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .nav-link-classical {
          font-family: 'Cinzel', serif;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--navy);
          position: relative;
          padding: 6px 14px;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

        .nav-link-classical::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 1.5px;
          background: linear-gradient(90deg, transparent, var(--gold-mid), transparent);
          transition: width 0.3s ease;
        }

        .nav-link-classical:hover::after { width: 80%; }
        .nav-link-classical:hover { color: var(--gold-deep); }

        .dropdown-classical {
          font-family: 'Cormorant Garamond', serif;
          background: linear-gradient(160deg, #FFFDF5 0%, #FDF8EE 60%, #F7EDCF 100%);
          border: 1px solid rgba(201,168,76,0.35);
          border-top: 2px solid var(--gold-mid);
          box-shadow:
            0 20px 60px rgba(10,22,40,0.18),
            0 4px 20px rgba(201,168,76,0.12),
            inset 0 1px 0 rgba(255,255,255,0.8);
        }

        .dropdown-item-classical {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--navy);
          border-bottom: 1px solid rgba(201,168,76,0.12);
          transition: all 0.25s ease;
          position: relative;
          overflow: hidden;
          display: block;
          text-decoration: none;
        }

        .dropdown-item-classical::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, var(--gold-mid), var(--gold-deep));
          transform: scaleY(0);
          transition: transform 0.25s ease;
        }

        .dropdown-item-classical:hover::before { transform: scaleY(1); }
        .dropdown-item-classical:hover {
          background: linear-gradient(90deg, rgba(201,168,76,0.08), transparent);
          color: var(--gold-deep);
          padding-left: 24px;
        }

        .dropdown-item-classical:last-child { border-bottom: none; }

        .header-border-ornament {
          height: 3px;
          background: linear-gradient(90deg,
            transparent 0%,
            var(--gold-deep) 15%,
            var(--gold-light) 35%,
            #FFF5CC 50%,
            var(--gold-light) 65%,
            var(--gold-deep) 85%,
            transparent 100%);
        }

        .dropdown-open {
          animation: fadeInDown 0.22s ease forwards;
        }

        .hamburger-line {
          display: block;
          width: 24px;
          height: 1.5px;
          background: linear-gradient(90deg, var(--navy), var(--gold-deep));
          border-radius: 2px;
          transition: all 0.35s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }

        .header-bg {
          background: linear-gradient(135deg,
            #FFFDF5 0%,
            #FDF8EE 30%,
            #FAF3E0 60%,
            #FDF8EE 80%,
            #FFFDF5 100%);
          position: relative;
        }

        .header-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 50%, rgba(201,168,76,0.06) 0%, transparent 50%);
          pointer-events: none;
        }

        .marquee-classical-bg {
          background: linear-gradient(90deg, var(--navy) 0%, #0D2144 50%, var(--navy) 100%);
          border-bottom: 1px solid rgba(201,168,76,0.4);
          border-top: 1px solid rgba(201,168,76,0.4);
        }

        .details-summary-classical {
          list-style: none;
          font-family: 'Cinzel', serif;
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 600;
          color: var(--navy);
          cursor: pointer;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-radius: 8px;
          transition: all 0.25s ease;
          border: 1px solid rgba(201,168,76,0.2);
          background: linear-gradient(135deg, rgba(201,168,76,0.06), rgba(201,168,76,0.02));
          margin-bottom: 4px;
        }

        .details-summary-classical::-webkit-details-marker { display: none; }

        .details-summary-classical:hover {
          background: linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.06));
          border-color: rgba(201,168,76,0.45);
          color: var(--gold-deep);
        }

        details[open] .details-summary-classical {
          background: linear-gradient(135deg, rgba(201,168,76,0.18), rgba(201,168,76,0.08));
          border-color: var(--gold-mid);
          color: var(--gold-deep);
        }

        .details-chevron {
          transition: transform 0.3s ease;
          color: var(--gold-mid);
        }

        details[open] .details-chevron {
          transform: rotate(180deg);
        }

        .mobile-sub-link {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem;
          font-weight: 600;
          color: var(--navy-mid);
          padding: 10px 16px;
          border-radius: 6px;
          display: block;
          transition: all 0.2s ease;
          border-left: 2px solid rgba(201,168,76,0.25);
          background: rgba(201,168,76,0.04);
          margin-bottom: 3px;
          letter-spacing: 0.03em;
          text-decoration: none;
        }

        .mobile-sub-link:hover {
          color: var(--gold-deep);
          border-left-color: var(--gold-mid);
          background: rgba(201,168,76,0.1);
          padding-left: 20px;
        }

        .mobile-top-link {
          font-family: 'Cinzel', serif;
          font-size: 0.78rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 600;
          color: var(--navy);
          padding: 14px 18px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.25s ease;
          border: 1px solid rgba(201,168,76,0.2);
          background: linear-gradient(135deg, rgba(201,168,76,0.06), rgba(201,168,76,0.02));
          margin-bottom: 4px;
          text-decoration: none;
        }

        .mobile-top-link:hover {
          color: var(--gold-deep);
          border-color: rgba(201,168,76,0.45);
          background: linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.06));
        }

        .mobile-icon {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          background: linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.08));
          font-size: 0.9rem;
          flex-shrink: 0;
        }

        /* ✅ FIX: Always sticky with shadow */
        .scrolled-shadow {
          box-shadow:
            0 4px 30px rgba(10,22,40,0.12),
            0 1px 0 rgba(201,168,76,0.3),
            inset 0 -1px 0 rgba(201,168,76,0.2);
        }

        .nav-btn-classical {
          font-family: 'Cinzel', serif;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--navy);
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 6px 14px;
          border-radius: 4px;
          transition: all 0.25s ease;
          border: 1px solid transparent;
          cursor: pointer;
          background: transparent;
        }

        .nav-btn-classical:hover {
          color: var(--gold-deep);
          border-color: rgba(201,168,76,0.3);
          background: rgba(201,168,76,0.06);
        }

        .mobile-panel-bg {
          background: linear-gradient(160deg, #FFFDF5 0%, #FDF8EE 50%, #FAF3E0 100%);
          box-shadow: -15px 0 60px rgba(10,22,40,0.25), -4px 0 20px rgba(201,168,76,0.1);
        }
      `}</style>

      {/* ✅ FIX: Always fixed/sticky at top — removed conditional relative/fixed logic */}
      <header
  className={`w-full transition-all duration-400 header-bg fixed top-0 left-0 right-0 z-50 ${
    scrolled ? "scrolled-shadow" : ""
  }`}
>
        {/* Top ornament */}
        <div className="header-border-ornament" />

        {/* Classical Marquee */}
        <div className="marquee-classical-bg overflow-hidden py-2">
          <div className="marquee-track">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="inline-flex items-center gap-3 mx-10">
                <span style={{ color: 'rgba(201,168,76,0.5)', fontSize: '0.6rem' }}>✦</span>
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: i % 2 === 0 ? '#E8C97A' : '#C9A84C'
                }}>
                  Welcome to Veer Bharat Mustard Oil
                </span>
                <span style={{ color: 'rgba(201,168,76,0.5)', fontSize: '0.6rem' }}>✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* Main Navbar */}
        <div
          className="w-full flex items-center justify-between px-3 md:px-8"
          style={{ paddingTop: '10px', paddingBottom: '10px' }}
        >
          {/* Logo and Brand */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <a href="/" aria-label="Veer Bharat Home" className="block" style={{ filter: 'drop-shadow(0 2px 8px rgba(201,168,76,0.25))' }}>
              <div style={{ width: 90, height: 80, overflow: 'hidden' }} className="md:w-[120px] md:h-[100px]">
                <img
                  src="/logo.png"
                  alt="Veer Bharat logo"
                  width={200}
                  height={124}
                  style={{ objectFit: "contain", width: '100%', height: '100%' }}
                />
              </div>
            </a>

            <div className="flex flex-col leading-tight">
              <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, var(--gold-mid), transparent)', marginBottom: '4px' }} />

              <span
                className="gold-shimmer"
                style={{
                  fontFamily: "'Cinzel Decorative', serif",
                  fontSize: 'clamp(1rem, 2.5vw, 1.6rem)',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  lineHeight: 1.1,
                }}
              >
                Veer Bharat
              </span>

              <span
                style={{
                  fontFamily: "'IM Fell English', serif",
                  fontStyle: 'italic',
                  fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)',
                  color: 'var(--crimson-light)',
                  letterSpacing: '0.06em',
                  marginTop: '3px',
                }}
              >
                वाह! मज़ा आ गया
              </span>

              <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, var(--gold-mid), transparent)', marginTop: '4px' }} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center items-center">
            <div style={{ width: '1px', height: '40px', background: 'linear-gradient(180deg, transparent, var(--gold-mid), transparent)', marginRight: '24px', opacity: 0.5 }} />

            <ul className="flex items-center gap-1" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              <li><a href="/" className="nav-link-classical">Home</a></li>
              <li><a href="/blog" className="nav-link-classical">Blog</a></li>

              {/* Products dropdown */}
              <li className="relative" ref={productsRef}>
                <button
                  ref={productsButtonRef}
                  onClick={() => setProductsOpen((s) => !s)}
                  onMouseEnter={() => setProductsOpen(true)}
                  onFocus={() => setProductsOpen(true)}
                  className="nav-btn-classical"
                >
                  Products <ChevronIcon open={productsOpen} />
                </button>
                {productsOpen && (
                  <div
                    className="dropdown-classical dropdown-open absolute rounded-lg z-50"
                    style={{ top: 'calc(100% + 12px)', left: '50%', transform: 'translateX(-50%)', minWidth: '240px' }}
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                  >
                    <div style={{ padding: '8px 0' }}>
                      {[
                        { href: '/products', label: 'All Products' },
                        { href: '/soyabean-oil', label: 'Soyabean Oil' },
                        { href: '/mustard-oil', label: 'Mustard Oil' },
                        { href: '/palm-oil', label: 'Palm Oil' },
                        { href: '/sunflower-Oil', label: 'Sunflower Oil' },
                        { href: '/brand-rice', label: 'Brand Rice' },
                      ].map((item) => (
                        <a key={item.href} href={item.href} className="dropdown-item-classical px-5 py-3" onClick={() => setProductsOpen(false)}>
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </li>

              {/* Brochure dropdown */}
              <li className="relative" ref={brochureRef}>
                <button
                  ref={brochureButtonRef}
                  onClick={() => setBrochureOpen((s) => !s)}
                  onMouseEnter={() => setBrochureOpen(true)}
                  onFocus={() => setBrochureOpen(true)}
                  className="nav-btn-classical"
                >
                  Brochure <ChevronIcon open={brochureOpen} />
                </button>
                {brochureOpen && (
                  <div
                    className="dropdown-classical dropdown-open absolute rounded-lg z-50"
                    style={{ top: 'calc(100% + 12px)', left: '50%', transform: 'translateX(-50%)', minWidth: '220px' }}
                    onMouseEnter={() => setBrochureOpen(true)}
                    onMouseLeave={() => setBrochureOpen(false)}
                  >
                    <div style={{ padding: '8px 0' }}>
                      <button
                        onClick={() => { setViewerOpen(true); setBrochureOpen(false); setOpen(false); }}
                        className="dropdown-item-classical w-full text-left px-5 py-3"
                        style={{ background: 'none', border: 'none', cursor: 'pointer', width: '100%' }}
                      >
                        View Brochure
                      </button>
                      <a href={pdfPath} download className="dropdown-item-classical px-5 py-3">
                        Download Brochure
                      </a>
                    </div>
                  </div>
                )}
              </li>

              {/* ✅ Team dropdown — with "Other Branch" added */}
              <li className="relative" ref={teamRef}>
                <button
                  ref={teamButtonRef}
                  onClick={() => setTeamOpen((s) => !s)}
                  onMouseEnter={() => setTeamOpen(true)}
                  onFocus={() => setTeamOpen(true)}
                  className="nav-btn-classical"
                >
                  Team <ChevronIcon open={teamOpen} />
                </button>
                {teamOpen && (
                  <div
                    className="dropdown-classical dropdown-open absolute rounded-lg z-50"
                    style={{ top: 'calc(100% + 12px)', left: '50%', transform: 'translateX(-50%)', minWidth: '210px' }}
                    onMouseEnter={() => setTeamOpen(true)}
                    onMouseLeave={() => setTeamOpen(false)}
                  >
                    <div style={{ padding: '8px 0' }}>
                      <a href="/team" className="dropdown-item-classical px-5 py-3" onClick={() => setTeamOpen(false)}>Our Team</a>
                      <a href="/gallery" className="dropdown-item-classical px-5 py-3" onClick={() => setTeamOpen(false)}>Gallery</a>
                      <a href="/Managing-Director" className="dropdown-item-classical px-5 py-3" onClick={() => setTeamOpen(false)}>Managing Director</a>
                      {/* ✅ NEW: Other Branch */}
                      <a href="https://69b13f17317825bd0bd9c901--candid-taffy-bfb081.netlify.app/verify" className="dropdown-item-classical px-5 py-3" onClick={() => setTeamOpen(false)}>Other Branch</a>
                    </div>
                  </div>
                )}
              </li>

              <li><a href="/about" className="nav-link-classical">About</a></li>
              <li><a href="/contact" className="nav-link-classical">Contact</a></li>
            </ul>

            <div style={{ width: '1px', height: '40px', background: 'linear-gradient(180deg, transparent, var(--gold-mid), transparent)', marginLeft: '24px', opacity: 0.5 }} />
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden relative z-50 flex flex-col items-center justify-center gap-[5px] focus:outline-none"
            style={{
              width: '44px', height: '44px',
              border: '1px solid rgba(201,168,76,0.35)',
              background: 'linear-gradient(135deg, rgba(201,168,76,0.1), rgba(201,168,76,0.04))',
              backdropFilter: 'blur(8px)',
              borderRadius: '6px',
            }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line" style={{ transform: open ? 'rotate(45deg) translate(4.5px, 4.5px)' : '' }} />
            <span className="hamburger-line" style={{ opacity: open ? 0 : 1, transform: open ? 'scaleX(0)' : 'scaleX(1)' }} />
            <span className="hamburger-line" style={{ transform: open ? 'rotate(-45deg) translate(4.5px, -4.5px)' : '' }} />
          </button>
        </div>

        {/* Bottom ornament */}
        <div className="header-border-ornament" />

        {/* ✅ FIX: Mobile Slide Menu — top offset simplified since header is always sticky */}
        <div
          className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          style={{ top: '0px' }}
        >
          <div
            style={{ position: 'absolute', inset: 0, background: 'rgba(10,22,40,0.65)', backdropFilter: 'blur(6px)' }}
            onClick={() => setOpen(false)}
          />

          <div
            className="mobile-panel-bg absolute right-0 top-0 bottom-0 overflow-y-auto"
            style={{
              width: '300px',
              maxWidth: '88vw',
              transform: open ? 'translateX(0)' : 'translateX(100%)',
              transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <div className="header-border-ornament" />

            <div style={{ padding: '24px 16px 32px' }}>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <div style={{
                  fontFamily: "'Cinzel Decorative', serif",
                  fontSize: '1rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: 'var(--navy)',
                  marginBottom: '8px',
                }}>
                  Navigation
                </div>
                <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, var(--gold-mid), transparent)' }} />
              </div>

              <a href="/" onClick={() => setOpen(false)} className="mobile-top-link">
                <span className="mobile-icon">🏠</span>
                Home
              </a>

              <a href="/blog" onClick={() => setOpen(false)} className="mobile-top-link">
                <span className="mobile-icon">📝</span>
                Blog
              </a>

              {/* Products */}
              <details style={{ marginBottom: '4px' }}>
                <summary className="details-summary-classical">
                  <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span className="mobile-icon">🛍️</span>
                    Products
                  </span>
                  <span className="details-chevron"><ChevronIcon open={false} /></span>
                </summary>
                <div style={{ paddingLeft: '16px', paddingTop: '6px', paddingBottom: '8px' }}>
                  {[
                    { href: '/products', label: 'All Products' },
                    { href: '/soyabean-oil', label: 'Soyabean Oil' },
                    { href: '/mustard-oil', label: 'Mustard Oil' },
                    { href: '/palm-oil', label: 'Palm Oil' },
                    { href: '/brand-rice', label: 'Brand Rice' },
                  ].map((item) => (
                    <a key={item.href} href={item.href} className="mobile-sub-link" onClick={() => setOpen(false)}>{item.label}</a>
                  ))}
                </div>
              </details>

              {/* Brochure */}
              <details style={{ marginBottom: '4px' }}>
                <summary className="details-summary-classical">
                  <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span className="mobile-icon">📄</span>
                    Brochure
                  </span>
                  <span className="details-chevron"><ChevronIcon open={false} /></span>
                </summary>
                <div style={{ paddingLeft: '16px', paddingTop: '6px', paddingBottom: '8px' }}>
                  <button
                    onClick={() => { setViewerOpen(true); setOpen(false); }}
                    className="mobile-sub-link"
                    style={{ background: 'rgba(201,168,76,0.04)', border: '1px solid transparent', borderLeft: '2px solid rgba(201,168,76,0.25)', width: '100%', textAlign: 'left', cursor: 'pointer' }}
                  >
                    View Brochure
                  </button>
                  <a href={pdfPath} download className="mobile-sub-link" onClick={() => setOpen(false)}>Download Brochure</a>
                </div>
              </details>

              {/* ✅ Team — with "Other Branch" added in mobile too */}
              <details style={{ marginBottom: '4px' }}>
                <summary className="details-summary-classical">
                  <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span className="mobile-icon">👥</span>
                    Team
                  </span>
                  <span className="details-chevron"><ChevronIcon open={false} /></span>
                </summary>
                <div style={{ paddingLeft: '16px', paddingTop: '6px', paddingBottom: '8px' }}>
                  <a href="/team" className="mobile-sub-link" onClick={() => setOpen(false)}>Our Team</a>
                  <a href="/gallery" className="mobile-sub-link" onClick={() => setOpen(false)}>Gallery</a>
                  <a href="/Managing-Director" className="mobile-sub-link" onClick={() => setOpen(false)}>Managing Director</a>
                  {/* ✅ NEW: Other Branch */}
                  <a href="/other-branch" className="mobile-sub-link" onClick={() => setOpen(false)}>Other Branch</a>
                </div>
              </details>

              <a href="/about" onClick={() => setOpen(false)} className="mobile-top-link">
                <span className="mobile-icon">ℹ️</span>
                About
              </a>

              <a href="/contact" onClick={() => setOpen(false)} className="mobile-top-link">
                <span className="mobile-icon">📞</span>
                Contact
              </a>

              <div style={{ marginTop: '24px' }}>
                <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, var(--gold-mid), transparent)', marginBottom: '12px' }} />
                <div style={{
                  textAlign: 'center',
                  fontFamily: "'IM Fell English', serif",
                  fontStyle: 'italic',
                  fontSize: '0.78rem',
                  color: 'var(--gold-deep)',
                  letterSpacing: '0.08em',
                  opacity: 0.8,
                }}>
                  ✦ Veer Bharat ✦
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      

      {/* Brochure Modal */}
      {viewerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            style={{ position: 'absolute', inset: 0, background: 'rgba(10,22,40,0.75)', backdropFilter: 'blur(8px)' }}
            onClick={() => setViewerOpen(false)}
          />
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '900px',
            height: '80vh',
            background: 'linear-gradient(160deg, #FFFDF5, #FDF8EE)',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid rgba(201,168,76,0.4)',
            boxShadow: '0 30px 80px rgba(10,22,40,0.4)',
          }}>
            <div className="header-border-ornament" />
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 24px',
              borderBottom: '1px solid rgba(201,168,76,0.25)',
              background: 'linear-gradient(90deg, rgba(201,168,76,0.08), transparent)',
            }}>
              <span style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--navy)',
              }}>
                Brochure Preview
              </span>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a
                  href={pdfPath}
                  download
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '0.7rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    padding: '8px 18px',
                    borderRadius: '4px',
                    border: '1px solid #C9A84C',
                    color: '#8B6914',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  Download
                </a>
                <button
                  onClick={() => setViewerOpen(false)}
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '0.7rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    padding: '8px 18px',
                    borderRadius: '4px',
                    border: '1px solid rgba(10,22,40,0.2)',
                    color: 'var(--navy)',
                    cursor: 'pointer',
                    background: 'transparent',
                  }}
                >
                  Close
                </button>
              </div>
            </div>
            <iframe src={`${pdfPath}#view=FitH`} style={{ width: '100%', height: 'calc(100% - 65px)', border: 'none' }} />
          </div>
        </div>
      )}
    </>
  );
}

function NavLink({ href, children }) {
  return (
    <a href={href} className="nav-link-classical">
      {children}
    </a>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      style={{
        transition: 'transform 0.3s ease',
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        flexShrink: 0,
      }}
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}








// "use client";

// import { useState, useEffect, useRef } from "react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [teamOpen, setTeamOpen] = useState(false);
//   const [brochureOpen, setBrochureOpen] = useState(false);
//   const [viewerOpen, setViewerOpen] = useState(false);
//   const [productsOpen, setProductsOpen] = useState(false);

//   const teamRef = useRef(null);
//   const teamButtonRef = useRef(null);
//   const brochureRef = useRef(null);
//   const brochureButtonRef = useRef(null);
//   const productsRef = useRef(null);
//   const productsButtonRef = useRef(null);

//   const pdfPath = "/docs/pdf/brochure.pdf";

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const onDoc = (e) => {
//       if (teamRef.current && !teamRef.current.contains(e.target) &&
//           teamButtonRef.current && !teamButtonRef.current.contains(e.target)) setTeamOpen(false);
//       if (brochureRef.current && !brochureRef.current.contains(e.target) &&
//           brochureButtonRef.current && !brochureButtonRef.current.contains(e.target)) setBrochureOpen(false);
//       if (productsRef.current && !productsRef.current.contains(e.target) &&
//           productsButtonRef.current && !productsButtonRef.current.contains(e.target)) setProductsOpen(false);
//     };
//     document.addEventListener("click", onDoc);
//     return () => document.removeEventListener("click", onDoc);
//   }, []);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") {
//         setTeamOpen(false);
//         setBrochureOpen(false);
//         setProductsOpen(false);
//         setOpen(false);
//         setViewerOpen(false);
//       }
//     };
//     document.addEventListener("keydown", onKey);
//     return () => document.removeEventListener("keydown", onKey);
//   }, []);

//   useEffect(() => {
//     if (open) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [open]);

//   return (
//     <>
//       <header
//         className={`w-full transition-all duration-300 border-b border-[rgba(8,52,139,0.04)] ${
//           scrolled ? "fixed top-0 left-0 z-50 py-2 shadow-sm" : "relative py-4 shadow-sm"
//         }`}
//         style={{ backgroundColor: "#DFC6F6" }}
//       >
//         {/* Christmas Marquee Section */}
//         <div className="overflow-hidden bg-gradient-to-r from-red-600 via-green-600 to-red-600 py-2 border-b border-yellow-400/40 relative">
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjIpIi8+PC9zdmc+')] opacity-30"></div>
//           <div className="animate-marquee whitespace-nowrap relative z-10">
//             <span className="inline-block text-sm font-bold text-white mx-6 drop-shadow-lg">
//               🎄 Merry Christmas from Veer Bharat! 🎅
//             </span>
//             <span className="inline-block text-sm font-bold text-yellow-200 mx-6 drop-shadow-lg">
//               ⛄ Wishing you joy and prosperity! ❄️
//             </span>
//             {/* <span className="inline-block text-sm font-bold text-white mx-6 drop-shadow-lg">
//               🎁 Happy Holidays & Season's Greetings! ✨
//             </span> */}
//             <span className="inline-block text-sm font-bold text-yellow-200 mx-6 drop-shadow-lg">
//               🔔 Merry Christmas from Veer Bharat! 🎄
//             </span>
//             <span className="inline-block text-sm font-bold text-white mx-6 drop-shadow-lg">
//               🎄 Merry Christmas from Veer Bharat! 🎅
//             </span>
//             <span className="inline-block text-sm font-bold text-yellow-200 mx-6 drop-shadow-lg">
//               ⛄ Wishing you joy and prosperity! ❄️
//             </span>
//           </div>
//         </div>

//         <div className="w-full flex items-center justify-between px-2 md:px-4">
//           {/* Logo and Brand Name with Christmas Hat */}
//           <div className="flex items-center flex-shrink-0">
//             <a href="/" aria-label="Veer Bharat Home" className="block relative">
//               <div style={{ width: 120, height: 100 }} className="overflow-visible md:w-[150px] md:h-[120px] relative">
//                 <img
//                   src="/logo.png"
//                   alt="Veer Bharat logo"
//                   width={200}
//                   height={124}
//                   style={{ objectFit: "contain" }}
//                 />
//                 {/* Santa Hat on Logo */}
//                 <div className="absolute -top-2 -right-2 w-12 h-12 md:w-14 md:h-14">
//                   <div className="relative w-full h-full animate-swing">
//                     <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[28px] border-b-red-600"></div>
//                     <div className="absolute top-[26px] left-1/2 transform -translate-x-1/2 w-8 h-3 bg-white rounded-full"></div>
//                     <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full"></div>
//                   </div>
//                 </div>
//               </div>
//             </a>
//             <div className="flex flex-col leading-tight ml-2 relative">
//               <span className="font-extrabold text-xl sm:text-2xl md:text-3xl tracking-tight text-[#08348b] relative">
//                 Veer Bharat
//                 {/* Sparkle Effects */}
//                 <span className="absolute -top-1 -right-3 text-yellow-400 animate-twinkle" style={{animationDelay: '0s'}}>✨</span>
//                 <span className="absolute -bottom-1 -left-2 text-yellow-400 animate-twinkle" style={{animationDelay: '0.5s'}}>✨</span>
//               </span>
//               <span className="italic text-sm sm:text-sm md:text-base text-[#aa2266] relative">
//                 वाह! मज़ा आ गया
//                 <span className="absolute -top-2 right-0 text-red-500 animate-twinkle text-xs" style={{animationDelay: '0.3s'}}>🎄</span>
//               </span>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex flex-1 justify-center items-center">
//             <ul className="flex items-center gap-8 text-xl font-bold">
//               <li><NavLink href="/">Home</NavLink></li>
//               <li><NavLink href="/blog">Blog</NavLink></li>

//               {/* Products dropdown */}
//               <li className="relative" ref={productsRef}>
//                 <button
//                   ref={productsButtonRef}
//                   onClick={() => setProductsOpen((s) => !s)}
//                   onMouseEnter={() => setProductsOpen(true)}
//                   onFocus={() => setProductsOpen(true)}
//                   className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/40 focus:outline-none transition-all"
//                 >
//                   Products <ChevronIcon open={productsOpen} />
//                 </button>
//                 <div
//                   className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 min-w-[240px] rounded-xl bg-white text-[#082f63] shadow-2xl ring-1 ring-black/10 transition-all z-50 ${
//                     productsOpen ? "opacity-100 pointer-events-auto translate-y-0 scale-100" : "opacity-0 pointer-events-none -translate-y-1 scale-95"
//                   }`}
//                   onMouseEnter={() => setProductsOpen(true)}
//                   onMouseLeave={() => setProductsOpen(false)}
//                 >
//                   <ul className="py-2">
//                     <li>
//                       <a href="/products" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setProductsOpen(false)}>All Products</a>
//                     </li>
//                     <li>
//                       <a href="/soyabean-oil" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setProductsOpen(false)}>Soyabean Oil</a>
//                     </li>
//                     <li>
//                       <a href="/mustard-oil" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setProductsOpen(false)}>Mustard Oil</a>
//                     </li>
//                     <li>
//                       <a href="/palm-oil" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setProductsOpen(false)}>Palm Oil</a>
//                     </li>
//                     <li>
//                       <a href="/sunflower-Oil" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setProductsOpen(false)}>Sunflower Oil</a>
//                     </li>
//                      <li>
//                       <a href="/brand-rice" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setProductsOpen(false)}>Brand Rice</a>
//                     </li>
//                   </ul>
//                 </div>
//               </li>

//               <li className="relative" ref={brochureRef}>
//                 <button
//                   ref={brochureButtonRef}
//                   onClick={() => setBrochureOpen((s) => !s)}
//                   onMouseEnter={() => setBrochureOpen(true)}
//                   onFocus={() => setBrochureOpen(true)}
//                   className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/40 focus:outline-none transition-all"
//                 >
//                  Brochure <ChevronIcon open={brochureOpen} />
//                 </button>
//                 <div
//                   className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 min-w-[240px] rounded-xl bg-white text-[#082f63] shadow-2xl ring-1 ring-black/10 transition-all z-50 ${
//                     brochureOpen ? "opacity-100 pointer-events-auto translate-y-0 scale-100" : "opacity-0 pointer-events-none -translate-y-1 scale-95"
//                   }`}
//                   onMouseEnter={() => setBrochureOpen(true)}
//                   onMouseLeave={() => setBrochureOpen(false)}
//                 >
//                   <ul className="py-2">
//                     <li>
//                       <button
//                         onClick={() => { setViewerOpen(true); setBrochureOpen(false); setOpen(false); }}
//                         className="w-full text-left px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold"
//                       >
//                         View Brochure
//                       </button>
//                     </li>
//                     <li>
//                       <a href={pdfPath} download className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold">Download Brochure</a>
//                     </li>
//                   </ul>
//                 </div>
//               </li>

//               <li className="relative" ref={teamRef}>
//                 <button
//                   ref={teamButtonRef}
//                   onClick={() => setTeamOpen((s) => !s)}
//                   onMouseEnter={() => setTeamOpen(true)}
//                   onFocus={() => setTeamOpen(true)}
//                   className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/40 focus:outline-none transition-all"
//                 >
//                   Team <ChevronIcon open={teamOpen} />
//                 </button>
//                 <div
//                   className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 min-w-[200px] rounded-xl bg-white text-[#082f63] shadow-2xl ring-1 ring-black/10 transition-all z-50 ${
//                     teamOpen ? "opacity-100 pointer-events-auto translate-y-0 scale-100" : "opacity-0 pointer-events-none -translate-y-1 scale-95"
//                   }`}
//                   onMouseEnter={() => setTeamOpen(true)}
//                   onMouseLeave={() => setTeamOpen(false)}
//                 >
//                   <ul className="py-2">
//                     <li>
//                       <a href="/team" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setTeamOpen(false)}>Our Team</a>
//                     </li>
//                     <li>
//                       <a href="/gallery" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setTeamOpen(false)}>Gallery</a>
//                     </li>
//                     <li>
//                       <a href="/Managing-Director" className="block px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-base font-semibold" onClick={() => setTeamOpen(false)}>Managing Director</a>
//                     </li>
//                   </ul>
//                 </div>
//               </li>

//               <li><NavLink href="/about">About</NavLink></li>
//               <li><NavLink href="/contact">Contact</NavLink></li>
//             </ul>
//           </nav>

//           {/* Mobile Hamburger Button */}
//           <button
//             className="md:hidden relative z-50 w-12 h-12 flex flex-col items-center justify-center gap-1.5 focus:outline-none bg-white/30 rounded-xl backdrop-blur-sm hover:bg-white/50 transition-all shadow-lg"
//             onClick={() => setOpen(!open)}
//             aria-label="Toggle menu"
//           >
//             <span
//               className={`block w-7 h-0.5 bg-gradient-to-r from-[#08348b] to-[#aa2266] rounded-full transition-all duration-300 ease-in-out ${
//                 open ? "rotate-45 translate-y-2" : ""
//               }`}
//             />
//             <span
//               className={`block w-7 h-0.5 bg-gradient-to-r from-[#08348b] to-[#aa2266] rounded-full transition-all duration-300 ease-in-out ${
//                 open ? "opacity-0 scale-0" : "opacity-100 scale-100"
//               }`}
//             />
//             <span
//               className={`block w-7 h-0.5 bg-gradient-to-r from-[#08348b] to-[#aa2266] rounded-full transition-all duration-300 ease-in-out ${
//                 open ? "-rotate-45 -translate-y-2" : ""
//               }`}
//             />
//           </button>
//         </div>

//         {/* Mobile Slide Menu */}
//         <div
//           className={`md:hidden fixed inset-0 z-40 transition-opacity duration-500 ${
//             open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
//           }`}
//           style={{ top: scrolled ? "95px" : "145px" }}
//         >
//           <div
//             className="absolute inset-0 bg-gradient-to-br from-black/60 via-purple-900/40 to-black/60 backdrop-blur-md"
//             onClick={() => setOpen(false)}
//           />

//           <div
//             className={`absolute right-0 top-0 bottom-0 w-[320px] max-w-[85vw] bg-gradient-to-br from-[#DFC6F6] via-white to-[#f0e4ff] shadow-2xl transform transition-all duration-500 ease-out overflow-y-auto ${
//               open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
//             }`}
//             style={{
//               backgroundImage: 'linear-gradient(135deg, #DFC6F6 0%, #ffffff 50%, #f0e4ff 100%)',
//               boxShadow: '-10px 0 50px rgba(8, 52, 139, 0.3)'
//             }}
//           >
//             <div className="h-2 bg-gradient-to-r from-[#08348b] via-[#aa2266] to-[#08348b]" />
            
//             <div className="px-6 py-8 flex flex-col gap-3">
//               <div className={`text-center mb-4 transition-all duration-700 ${open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
//                 <h3 className="text-2xl font-extrabold text-[#08348b] tracking-tight">Menu</h3>
//                 <div className="w-16 h-1 bg-gradient-to-r from-[#08348b] to-[#aa2266] rounded-full mx-auto mt-2" />
//               </div>

//               <a 
//                 href="/" 
//                 onClick={() => setOpen(false)}
//                 className={`px-5 py-4 rounded-xl text-[#08348b] font-bold text-lg bg-gradient-to-r from-white/70 to-white/50 hover:from-white hover:to-white/80 transition-all transform hover:scale-105 hover:shadow-lg shadow-md backdrop-blur-sm border border-purple-100 flex items-center gap-3 duration-700 delay-100 ${open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
//               >
//                 <span className="text-2xl">🏠</span>
//                 Home
//               </a>
              
//               <a 
//                 href="/blog" 
//                 onClick={() => setOpen(false)}
//                 className={`px-5 py-4 rounded-xl text-[#08348b] font-bold text-lg bg-gradient-to-r from-white/70 to-white/50 hover:from-white hover:to-white/80 transition-all transform hover:scale-105 hover:shadow-lg shadow-md backdrop-blur-sm border border-purple-100 flex items-center gap-3 duration-700 delay-150 ${open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
//               >
//                 <span className="text-2xl">📝</span>
//                 Blog
//               </a>

//               <details className={`group transition-all duration-700 delay-200 ${open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
//                 <summary className="px-5 py-4 cursor-pointer list-none flex items-center justify-between bg-gradient-to-r from-white/70 to-white/50 rounded-xl hover:from-white hover:to-white/80 transition-all shadow-md hover:shadow-lg backdrop-blur-sm border border-purple-100">
//                   <span className="flex items-center gap-3 text-[#08348b] font-bold text-lg">
//                     <span className="text-2xl">🛍️</span>
//                     Products
//                   </span>
//                   <span className="text-[#08348b] text-xl font-bold group-open:rotate-180 transition-transform duration-300">▾</span>
//                 </summary>
//                 <div className="pl-8 pr-4 pb-2 pt-3 flex flex-col gap-2 animate-fadeIn">
//                   <a href="/products" className="px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/80 bg-white/40 font-semibold transition-all transform hover:translate-x-1 text-base border border-purple-50" onClick={() => setOpen(false)}>All Products</a>
//                   <a href="/soyabean-oil" className="px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/80 bg-white/40 font-semibold transition-all transform hover:translate-x-1 text-base border border-purple-50" onClick={() => setOpen(false)}>Soyabean Oil</a>
//                   <a href="/mustard-oil" className="px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/80 bg-white/40 font-semibold transition-all transform hover:translate-x-1 text-base border border-purple-50" onClick={() => setOpen(false)}>Mustard Oil</a>
//                   <a href="/palm-oil" className="px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/80 bg-white/40 font-semibold transition-all transform hover:translate-x-1 text-base border border-purple-50" onClick={() => setOpen(false)}>Palm Oil</a>
//                   <a href="/brand-rice" className="px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/80 bg-white/40 font-semibold transition-all transform hover:translate-x-1 text-base border border-purple-50" onClick={() => setOpen(false)}>Brand Rice</a>
//                 </div>
//               </details>

//               <details className={`group transition-all duration-700 delay-250 ${open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
//                 <summary className="px-5 py-4 cursor-pointer list-none flex items-center justify-between bg-gradient-to-r from-white/70 to-white/50 rounded-xl hover:from-white hover:to-white/80 transition-all shadow-md hover:shadow-lg backdrop-blur-sm border border-purple-100">
//                   <span className="flex items-center gap-3 text-[#08348b] font-bold text-lg">
//                     <span className="text-2xl">📄</span>
//                     Brochure
//                   </span>
//                   <span className="text-[#08348b] text-xl font-bold group-open:rotate-180 transition-transform duration-300">▾</span>
//                 </summary>
//                 <div className="pl-8 pr-4 pb-2 pt-3 flex flex-col gap-2">
//                   <button
//                     onClick={() => { setViewerOpen(true); setOpen(false); }}
//                     className="text-left px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/80 bg-white/40 font-semibold transition-all text-base border border-purple-50"
//                   >
//                     View Brochure
//                   </button>
//                   <a
//                     href={pdfPath}
//                     download
//                     className="px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/80 bg-white/40 font-semibold transition-all text-base border border-purple-50"
//                     onClick={() => setOpen(false)}
//                   >
//                     Download Brochure
//                   </a>
//                 </div>
//               </details>

//               <details className={`group transition-all duration-700 delay-300 ${open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
//                 <summary className="px-5 py-4 cursor-pointer list-none flex items-center justify-between bg-gradient-to-r from-white/70 to-white/50 rounded-xl hover:from-white hover:to-white/80 transition-all shadow-md hover:shadow-lg backdrop-blur-sm border border-purple-100">
//                   <span className="flex items-center gap-3 text-[#08348b] font-bold text-lg">
//                     <span className="text-2xl">👥</span>
//                     Team
//                   </span>
//                   <span className="text-[#08348b] text-xl font-bold group-open:rotate-180 transition-transform duration-300">▾</span>
//                 </summary>
//                 <div className="pl-8 pr-4 pb-2 pt-3 flex flex-col gap-2">
//                   <a href="/team" className="px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/80 bg-white/40 font-semibold transition-all transform hover:translate-x-1 text-base border border-purple-50" onClick={() => setOpen(false)}>Our Team</a>
//                   <a href="/gallery" className="px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/80 bg-white/40 font-semibold transition-all transform hover:translate-x-1 text-base border border-purple-50" onClick={() => setOpen(false)}>Gallery</a>
//                   <a href="/Managing-Director" className="px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/80 bg-white/40 font-semibold transition-all transform hover:translate-x-1 text-base border border-purple-50" onClick={() => setOpen(false)}>Managing Director</a>
//                 </div>
//               </details>

//               <a 
//                 href="/about" 
//                 onClick={() => setOpen(false)}
//                 className={`px-5 py-4 rounded-xl text-[#08348b] font-bold text-lg bg-gradient-to-r from-white/70 to-white/50 hover:from-white hover:to-white/80 transition-all transform hover:scale-105 hover:shadow-lg shadow-md backdrop-blur-sm border border-purple-100 flex items-center gap-3 duration-700 delay-350 ${open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
//               >
//                 <span className="text-2xl">ℹ️</span>
//                 About
//               </a>
              
//               <a 
//                 href="/contact" 
//                 onClick={() => setOpen(false)}
//                 className={`px-5 py-4 rounded-xl text-[#08348b] font-bold text-lg bg-gradient-to-r from-white/70 to-white/50 hover:from-white hover:to-white/80 transition-all transform hover:scale-105 hover:shadow-lg shadow-md backdrop-blur-sm border border-purple-100 flex items-center gap-3 duration-700 delay-400 ${open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
//               >
//                 <span className="text-2xl">📞</span>
//                 Contact
//               </a>
//             </div>

//             <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#08348b]/10 to-transparent pointer-events-none" />
//           </div>
//         </div>
//       </header>

//       {/* Brochure modal */}
//       {viewerOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//           <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setViewerOpen(false)} />
//           <div className="relative w-full max-w-6xl h-[80vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
//             <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-[#DFC6F6] to-white">
//               <h3 className="text-xl font-bold text-[#082f63]">Brochure Preview</h3>
//               <div className="flex items-center gap-3">
//                 <a href={pdfPath} download className="px-4 py-2 text-base font-semibold rounded-lg border-2 border-[#08348b] text-[#08348b] hover:bg-[#08348b] hover:text-white transition-all">Download</a>
//                 <button onClick={() => setViewerOpen(false)} className="px-4 py-2 text-base font-semibold rounded-lg border-2 border-gray-300 hover:bg-gray-100 transition-all">Close</button>
//               </div>
//             </div>
//             <iframe src={`${pdfPath}#view=FitH`} className="w-full h-full" />
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-marquee {
//           animation: marquee 25s linear infinite;
//           display: inline-block;
//         }
        
//         @keyframes twinkle {
//           0%, 100% {
//             opacity: 1;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.3;
//             transform: scale(0.8);
//           }
//         }
//         .animate-twinkle {
//           animation: twinkle 1.5s ease-in-out infinite;
//         }
        
//         @keyframes swing {
//           0%, 100% {
//             transform: rotate(-5deg);
//           }
//           50% {
//             transform: rotate(5deg);
//           }
//         }
//         .animate-swing {
//           animation: swing 2s ease-in-out infinite;
//           transform-origin: top center;
//         }
//       `}</style>
//     </>
//   );
// }

// function NavLink({ href, children }) {
//   return (
//     <a href={href} className="px-3 py-2 text-gray-700 hover:text-[#08348b] transition-all hover:scale-105">
//       {children}
//     </a>
//   );
// }

// function ChevronIcon({ open }) {
//   return (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
//       <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// }

