// "use client";

// import { createContext, useContext, useCallback, useRef, useState, useEffect } from "react";
// import { usePathname } from "next/navigation";

// const SplashContext = createContext();

// export function useSplash() {
//   return useContext(SplashContext);
// }

// export default function SplashProvider({ children }) {
//   const [visible, setVisible] = useState(false);
//   const [mounted, setMounted] = useState(false);
//   const resolveRef = useRef(null);
//   const timeoutRef = useRef(null);
//   const pathname = usePathname();

//   const DURATION = 3000; // 3 seconds

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     if (!mounted) return;

//     const isHomePage = pathname === "/";
    
//     if (typeof window !== "undefined" && isHomePage) {
//       const splashShown = sessionStorage.getItem('splashShown');
      
//       if (!splashShown) {
//         setVisible(true);
//         sessionStorage.setItem('splashShown', 'true');
        
//         timeoutRef.current = setTimeout(() => {
//           setVisible(false);
//         }, DURATION);
//       }
//     }
//   }, [mounted, pathname]);

//   const show = useCallback((ms = DURATION) => {
//     setVisible(true);
//     return new Promise((resolve) => {
//       resolveRef.current = resolve;
//       clearTimeout(timeoutRef.current);
//       timeoutRef.current = setTimeout(() => {
//         if (resolveRef.current) {
//           resolveRef.current();
//           resolveRef.current = null;
//           setVisible(false);
//         }
//       }, ms);
//     });
//   }, []);

//   const hideNow = useCallback(() => {
//     if (resolveRef.current) {
//       resolveRef.current();
//       resolveRef.current = null;
//     }
//     clearTimeout(timeoutRef.current);
//     setVisible(false);
//   }, []);

//   useEffect(() => {
//     return () => clearTimeout(timeoutRef.current);
//   }, []);

//   if (!mounted) return null;

//   return (
//     <SplashContext.Provider value={{ show, hideNow }}>
//       {visible && <LogoSplash onDone={hideNow} duration={DURATION} />}
//       <div style={{ display: visible ? "none" : "block" }}>{children}</div>
//     </SplashContext.Provider>
//   );
// }

// function LogoSplash({ onDone, duration = 3000 }) {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           return 100;
//         }
//         return prev + 3.33;
//       });
//     }, duration / 30);

//     return () => clearInterval(interval);
//   }, [duration]);

//   return (
//     <div
//       style={{
//         position: "fixed",
//         inset: 0,
//         zIndex: 9999,
//         background: "linear-gradient(135deg, #1a0b2e 0%, #2d1b4e 25%, #4a2c6d 50%, #2d1b4e 75%, #1a0b2e 100%)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         overflow: "hidden",
//       }}
//     >
//       {/* Diwali Diya Background Pattern */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           backgroundImage: `
//             url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 25 L28 30 L32 30 Z' fill='%23fbbf24' opacity='0.15'/%3E%3Ccircle cx='30' cy='32' r='2' fill='%23f59e0b' opacity='0.2'/%3E%3C/svg%3E")
//           `,
//           animation: "twinkle 2s ease-in-out infinite",
//         }}
//       />

//       {/* Floating Diyas */}
//       {[...Array(12)].map((_, i) => (
//         <div
//           key={i}
//           style={{
//             position: "absolute",
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
//             animationDelay: `${Math.random() * 2}s`,
//           }}
//         >
//           <svg width="30" height="30" viewBox="0 0 40 40">
//             <ellipse cx="20" cy="25" rx="12" ry="4" fill="#d97706" opacity="0.6"/>
//             <path d="M20 15 Q15 20, 12 25 L28 25 Q25 20, 20 15 Z" fill="#f59e0b" opacity="0.7"/>
//             <ellipse cx="20" cy="12" rx="3" ry="5" fill="#fbbf24" opacity="0.9">
//               <animate attributeName="ry" values="5;7;5" dur="1.5s" repeatCount="indefinite"/>
//             </ellipse>
//           </svg>
//         </div>
//       ))}

//       {/* Sparkles */}
//       {[...Array(20)].map((_, i) => (
//         <div
//           key={`spark-${i}`}
//           style={{
//             position: "absolute",
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             width: "4px",
//             height: "4px",
//             background: "#fbbf24",
//             borderRadius: "50%",
//             boxShadow: "0 0 10px #fbbf24",
//             animation: `sparkle ${1 + Math.random()}s ease-in-out infinite`,
//             animationDelay: `${Math.random() * 2}s`,
//           }}
//         />
//       ))}

//       {/* Decorative Rangoli Corners */}
//       <svg
//         style={{
//           position: "absolute",
//           top: "20px",
//           left: "20px",
//           width: "clamp(80px, 15vw, 150px)",
//           height: "clamp(80px, 15vw, 150px)",
//           opacity: 0.4,
//           animation: "rotate 40s linear infinite",
//         }}
//         viewBox="0 0 100 100"
//       >
//         <circle cx="50" cy="50" r="45" fill="none" stroke="#fbbf24" strokeWidth="1"/>
//         <circle cx="50" cy="50" r="35" fill="none" stroke="#f59e0b" strokeWidth="1"/>
//         <circle cx="50" cy="50" r="25" fill="none" stroke="#fbbf24" strokeWidth="1"/>
//         <circle cx="50" cy="50" r="15" fill="none" stroke="#f59e0b" strokeWidth="1"/>
//       </svg>

//       <svg
//         style={{
//           position: "absolute",
//           top: "20px",
//           right: "20px",
//           width: "clamp(80px, 15vw, 150px)",
//           height: "clamp(80px, 15vw, 150px)",
//           opacity: 0.4,
//           animation: "rotate 35s linear infinite reverse",
//         }}
//         viewBox="0 0 100 100"
//       >
//         <circle cx="50" cy="50" r="45" fill="none" stroke="#f59e0b" strokeWidth="1"/>
//         <circle cx="50" cy="50" r="35" fill="none" stroke="#fbbf24" strokeWidth="1"/>
//         <circle cx="50" cy="50" r="25" fill="none" stroke="#f59e0b" strokeWidth="1"/>
//         <circle cx="50" cy="50" r="15" fill="none" stroke="#fbbf24" strokeWidth="1"/>
//       </svg>

//       <svg
//         style={{
//           position: "absolute",
//           bottom: "20px",
//           left: "20px",
//           width: "clamp(80px, 15vw, 150px)",
//           height: "clamp(80px, 15vw, 150px)",
//           opacity: 0.4,
//           animation: "rotate 45s linear infinite",
//         }}
//         viewBox="0 0 100 100"
//       >
//         <circle cx="50" cy="50" r="45" fill="none" stroke="#fbbf24" strokeWidth="1"/>
//         <circle cx="50" cy="50" r="35" fill="none" stroke="#f59e0b" strokeWidth="1"/>
//         <circle cx="50" cy="50" r="25" fill="none" stroke="#fbbf24" strokeWidth="1"/>
//         <circle cx="50" cy="50" r="15" fill="none" stroke="#f59e0b" strokeWidth="1"/>
//       </svg>

//       <svg
//         style={{
//           position: "absolute",
//           bottom: "20px",
//           right: "20px",
//           width: "clamp(80px, 15vw, 150px)",
//           height: "clamp(80px, 15vw, 150px)",
//           opacity: 0.4,
//           animation: "rotate 38s linear infinite reverse",
//         }}
//         viewBox="0 0 100 100"
//       >
//         <circle cx="50" cy="50" r="45" fill="none" stroke="#f59e0b" strokeWidth="1"/>
//         <circle cx="50" cy="50" r="35" fill="none" stroke="#fbbf24" strokeWidth="1"/>
//         <circle cx="50" cy="50" r="25" fill="none" stroke="#f59e0b" strokeWidth="1"/>
//         <circle cx="50" cy="50" r="15" fill="none" stroke="#fbbf24" strokeWidth="1"/>
//       </svg>

//       {/* Main Content */}
//       <div
//         style={{
//           position: "relative",
//           zIndex: 10,
//           textAlign: "center",
//           animation: "zoomIn 1s ease-out forwards",
//           padding: "0 1rem",
//           maxWidth: "95vw",
//         }}
//       >
//         {/* Logo Container with Diwali Glow */}
//         <div
//           style={{
//             position: "relative",
//             width: "clamp(200px, 40vw, 320px)",
//             height: "clamp(200px, 40vw, 320px)",
//             margin: "0 auto 1.5rem",
//             animation: "glowPulse 2s ease-in-out infinite",
//           }}
//         >
//           {/* Outer Glow Ring */}
//           <div
//             style={{
//               position: "absolute",
//               inset: "-30px",
//               border: "4px solid",
//               borderImage: "linear-gradient(135deg, #fbbf24, #f59e0b, #fbbf24) 1",
//               borderRadius: "50%",
//               animation: "rotate 15s linear infinite",
//               boxShadow: "0 0 40px rgba(251, 191, 36, 0.6), inset 0 0 40px rgba(245, 158, 11, 0.3)",
//             }}
//           />

//           {/* Middle Ring */}
//           <div
//             style={{
//               position: "absolute",
//               inset: "-15px",
//               border: "3px solid #f59e0b",
//               borderRadius: "50%",
//               opacity: 0.6,
//               animation: "rotate 12s linear infinite reverse",
//               boxShadow: "0 0 20px rgba(245, 158, 11, 0.5)",
//             }}
//           />

//           {/* Logo Background with Diwali Glow */}
//           <div
//             style={{
//               position: "absolute",
//               inset: 0,
//               background: "radial-gradient(circle, rgba(251, 191, 36, 0.3), rgba(245, 158, 11, 0.2))",
//               borderRadius: "50%",
//               boxShadow: "0 15px 60px rgba(251, 191, 36, 0.6), inset 0 0 40px rgba(245, 158, 11, 0.4)",
//             }}
//           />

//           {/* Logo Image */}
//           <div
//             style={{
//               position: "absolute",
//               inset: "15px",
//               borderRadius: "50%",
//               overflow: "hidden",
//               background: "linear-gradient(135deg, #ffffff, #fff7ed)",
//               boxShadow: "0 0 30px rgba(251, 191, 36, 0.7)",
//             }}
//           >
//             <img
//               src="/logo.png"
//               alt="Veer Bharat Logo"
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "contain",
//                 padding: "clamp(15px, 5vw, 25px)",
//               }}
//             / loading="lazy">
//           </div>

//           {/* Shimmer Effect */}
//           <div
//             style={{
//               position: "absolute",
//               inset: 0,
//               background: "linear-gradient(120deg, transparent 30%, rgba(255, 255, 255, 0.8) 50%, transparent 70%)",
//               animation: "shimmer 2s ease-in-out infinite",
//               borderRadius: "50%",
//               pointerEvents: "none",
//             }}
//           />
//         </div>

//         {/* Diwali Greeting */}
//         <h1
//           style={{
//             fontSize: "clamp(2rem, 6vw, 4rem)",
//             fontWeight: 900,
//             background: "linear-gradient(135deg, #fbbf24, #f59e0b, #fbbf24, #f59e0b)",
//             backgroundSize: "200% 200%",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             backgroundClip: "text",
//             marginBottom: "0.5rem",
//             fontFamily: "'Georgia', serif",
//             letterSpacing: "clamp(1px, 0.5vw, 3px)",
//             textShadow: "0 0 30px rgba(251, 191, 36, 0.5)",
//             animation: "gradientShift 3s ease infinite, slideDown 1s ease-out",
//           }}
//         >
//           Happy Diwali!
//         </h1>

//         {/* From Veer Bharat */}
//         <p
//           style={{
//             fontSize: "clamp(1.2rem, 4vw, 2rem)",
//             color: "#fbbf24",
//             fontWeight: 700,
//             marginBottom: "1rem",
//             fontFamily: "'Georgia', serif",
//             textShadow: "0 0 20px rgba(251, 191, 36, 0.8), 0 0 40px rgba(245, 158, 11, 0.5)",
//             animation: "slideUp 1s ease-out 0.3s both",
//           }}
//         >
//           From Veer Bharat
//         </p>

//         {/* Decorative Diya Line */}
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             gap: "clamp(10px, 3vw, 20px)",
//             margin: "1rem auto 1.5rem",
//             animation: "fadeIn 1.5s ease-out 0.5s both",
//           }}
//         >
//           <svg width="clamp(25px, 8vw, 40px)" height="clamp(25px, 8vw, 40px)" viewBox="0 0 40 40">
//             <ellipse cx="20" cy="28" rx="12" ry="4" fill="#d97706"/>
//             <path d="M20 18 Q15 23, 12 28 L28 28 Q25 23, 20 18 Z" fill="#f59e0b"/>
//             <ellipse cx="20" cy="15" rx="3" ry="5" fill="#fbbf24">
//               <animate attributeName="ry" values="5;7;5" dur="1.5s" repeatCount="indefinite"/>
//             </ellipse>
//           </svg>
          
//           <div
//             style={{
//               width: "clamp(100px, 30vw, 200px)",
//               height: "3px",
//               background: "linear-gradient(90deg, transparent, #fbbf24, #f59e0b, #fbbf24, transparent)",
//               borderRadius: "2px",
//             }}
//           />
          
//           <svg width="clamp(25px, 8vw, 40px)" height="clamp(25px, 8vw, 40px)" viewBox="0 0 40 40">
//             <ellipse cx="20" cy="28" rx="12" ry="4" fill="#d97706"/>
//             <path d="M20 18 Q15 23, 12 28 L28 28 Q25 23, 20 18 Z" fill="#f59e0b"/>
//             <ellipse cx="20" cy="15" rx="3" ry="5" fill="#fbbf24">
//               <animate attributeName="ry" values="5;7;5" dur="1.5s" repeatCount="indefinite"/>
//             </ellipse>
//           </svg>
//         </div>

//         {/* Wish Message */}
//         <p
//           style={{
//             fontSize: "clamp(0.9rem, 3vw, 1.3rem)",
//             color: "#fde68a",
//             fontWeight: 600,
//             maxWidth: "min(600px, 90vw)",
//             margin: "0 auto 1.5rem",
//             lineHeight: 1.6,
//             textShadow: "0 0 15px rgba(251, 191, 36, 0.4)",
//             animation: "fadeIn 1.5s ease-out 0.7s both",
//           }}
//         >
//           May this Festival of Lights bring joy, prosperity & happiness to you and your family!
//         </p>

//         {/* Signature */}
//         <p
//           style={{
//             fontSize: "clamp(1rem, 3vw, 1.4rem)",
//             color: "#fbbf24",
//             fontWeight: 700,
//             marginBottom: "1.5rem",
//             fontFamily: "'Georgia', serif",
//             fontStyle: "italic",
//             textShadow: "0 0 15px rgba(251, 191, 36, 0.6)",
//             animation: "fadeIn 1.5s ease-out 0.9s both",
//           }}
//         >
//           Team Veer Bharat 🪔
//         </p>

//         {/* Loading Progress Bar */}
//         <div
//           style={{
//             width: "clamp(250px, 80vw, 350px)",
//             height: "10px",
//             background: "rgba(251, 191, 36, 0.2)",
//             borderRadius: "999px",
//             margin: "0 auto",
//             overflow: "hidden",
//             boxShadow: "inset 0 2px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(251, 191, 36, 0.3)",
//             border: "1px solid rgba(251, 191, 36, 0.3)",
//           }}
//         >
//           <div
//             style={{
//               width: `${progress}%`,
//               height: "100%",
//               background: "linear-gradient(90deg, #fbbf24, #f59e0b, #fbbf24)",
//               borderRadius: "999px",
//               transition: "width 0.1s ease-out",
//               boxShadow: "0 0 20px rgba(251, 191, 36, 0.9)",
//             }}
//           />
//         </div>
//       </div>

//       {/* CSS Animations */}
//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }

//         @keyframes rotate {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }

//         @keyframes glowPulse {
//           0%, 100% { 
//             transform: scale(1); 
//             filter: brightness(1);
//           }
//           50% { 
//             transform: scale(1.05); 
//             filter: brightness(1.2);
//           }
//         }

//         @keyframes shimmer {
//           0% { transform: translateX(-100%) rotate(20deg); }
//           100% { transform: translateX(200%) rotate(20deg); }
//         }

//         @keyframes zoomIn {
//           from {
//             opacity: 0;
//             transform: scale(0.5);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes slideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }

//         @keyframes sparkle {
//           0%, 100% { 
//             opacity: 0; 
//             transform: scale(0);
//           }
//           50% { 
//             opacity: 1; 
//             transform: scale(1);
//           }
//         }

//         @keyframes twinkle {
//           0%, 100% { opacity: 0.15; }
//           50% { opacity: 0.3; }
//         }

//         @keyframes gradientShift {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//       `}</style>
//     </div>
//   );
// }










// "use client";

// import { createContext, useContext, useCallback, useRef, useState, useEffect } from "react";
// import { usePathname } from "next/navigation";
// import Image from "next/image";

// const SplashContext = createContext();

// export function useSplash() {
//   return useContext(SplashContext);
// }

// export default function SplashProvider({ children }) {
//   const [visible, setVisible] = useState(false);
//   const [mounted, setMounted] = useState(false);
//   const resolveRef = useRef(null);
//   const timeoutRef = useRef(null);
//   const pathname = usePathname();

//   const DURATION = 4000;

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     if (!mounted) return;

//     const isHomePage = pathname === "/";
    
//     if (typeof window !== "undefined" && isHomePage) {
//       const splashShown = sessionStorage.getItem('splashShown');
      
//       if (!splashShown) {
//         setVisible(true);
//         sessionStorage.setItem('splashShown', 'true');
        
//         timeoutRef.current = setTimeout(() => {
//           setVisible(false);
//         }, DURATION);
//       }
//     }
//   }, [mounted, pathname]);

//   const show = useCallback((ms = DURATION) => {
//     setVisible(true);
//     return new Promise((resolve) => {
//       resolveRef.current = resolve;
//       clearTimeout(timeoutRef.current);
//       timeoutRef.current = setTimeout(() => {
//         if (resolveRef.current) {
//           resolveRef.current();
//           resolveRef.current = null;
//           setVisible(false);
//         }
//       }, ms);
//     });
//   }, []);

//   const hideNow = useCallback(() => {
//     if (resolveRef.current) {
//       resolveRef.current();
//       resolveRef.current = null;
//     }
//     clearTimeout(timeoutRef.current);
//     setVisible(false);
//   }, []);

//   useEffect(() => {
//     return () => clearTimeout(timeoutRef.current);
//   }, []);

//   if (!mounted) return null;

//   return (
//     <SplashContext.Provider value={{ show, hideNow }}>
//       {visible && <LogoSplash onDone={hideNow} duration={DURATION} />}
//       <div style={{ display: visible ? "none" : "block" }}>{children}</div>
//     </SplashContext.Provider>
//   );
// }

// function LogoSplash({ onDone, duration = 4000 }) {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           return 100;
//         }
//         return prev + 2.5;
//       });
//     }, duration / 40);

//     return () => clearInterval(interval);
//   }, [duration]);

//   return (
//     <div
//       style={{
//         position: "fixed",
//         inset: 0,
//         zIndex: 9999,
//         background: "linear-gradient(135deg, #0f0520 0%, #1a0b2e 25%, #2d1447 50%, #1a0b2e 75%, #0f0520 100%)",
//         backgroundSize: "400% 400%",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         overflow: "hidden",
//         animation: "backgroundPulse 6s ease-in-out infinite",
//       }}
//     >
//       {/* Animated Background */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           backgroundImage: `
//             radial-gradient(circle at 20% 30%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
//             radial-gradient(circle at 80% 70%, rgba(251, 191, 36, 0.15) 0%, transparent 50%),
//             radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.1) 0%, transparent 60%)
//           `,
//           animation: "backgroundShift 8s ease-in-out infinite",
//         }}
//       />

//       {/* Firework Bursts */}
//       {[...Array(12)].map((_, i) => (
//         <div
//           key={`burst-${i}`}
//           style={{
//             position: "absolute",
//             left: `${10 + (i % 4) * 25}%`,
//             top: `${10 + Math.floor(i / 4) * 30}%`,
//             animation: `megaBurst ${2.5 + Math.random() * 1.5}s ease-out infinite`,
//             animationDelay: `${Math.random() * 3}s`,
//           }}
//         >
//           {[...Array(16)].map((_, j) => (
//             <div
//               key={j}
//               style={{
//                 position: "absolute",
//                 width: "4px",
//                 height: "40px",
//                 background: `linear-gradient(to top, ${
//                   j % 3 === 0 ? "#a855f7" : j % 3 === 1 ? "#fbbf24" : "#f59e0b"
//                 }, transparent)`,
//                 transformOrigin: "bottom center",
//                 transform: `rotate(${j * 22.5}deg) translateY(-30px)`,
//                 opacity: 0,
//                 animation: `burstExplosion 2s ease-out infinite`,
//                 animationDelay: `${(Math.random() * 3) + (i * 0.2)}s`,
//                 boxShadow: `0 0 15px ${j % 3 === 0 ? "#a855f7" : j % 3 === 1 ? "#fbbf24" : "#f59e0b"}`,
//               }}
//             />
//           ))}
//         </div>
//       ))}

//       {/* Floating Sparkles */}
//       {[...Array(40)].map((_, i) => (
//         <div
//           key={`sparkle-${i}`}
//           style={{
//             position: "absolute",
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             width: `${6 + Math.random() * 4}px`,
//             height: `${6 + Math.random() * 4}px`,
//             background: i % 4 === 0 ? "#fbbf24" : i % 4 === 1 ? "#a855f7" : i % 4 === 2 ? "#f59e0b" : "#fde047",
//             borderRadius: "50%",
//             boxShadow: `0 0 ${15 + Math.random() * 15}px currentColor`,
//             animation: `sparkleFloat ${2 + Math.random() * 2}s ease-in-out infinite`,
//             animationDelay: `${Math.random() * 4}s`,
//           }}
//         />
//       ))}

//       {/* Main Content */}
//       <div
//         style={{
//           position: "relative",
//           zIndex: 10,
//           textAlign: "center",
//           padding: "0 1rem",
//           maxWidth: "100vw",
//           animation: "mainContentZoom 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
//         }}
//       >
//         {/* MEGA VEER BHARAT LOGO */}
//         <div
//           style={{
//             position: "relative",
//             width: "min(350px, 40vw)",
//             height: "min(350px, 40vw)",
//             minWidth: "200px",
//             minHeight: "200px",
//             margin: "0 auto 2rem",
//             animation: "logoEntrance 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards",
//           }}
//         >
//           {/* Glowing Ring */}
//           <div
//             style={{
//               position: "absolute",
//               inset: "-20px",
//               borderRadius: "50%",
//               background: "radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent 70%)",
//               animation: "ringPulse 2s ease-in-out infinite",
//               filter: "blur(20px)",
//             }}
//           />

//           {/* Logo Container */}
//           <div
//             style={{
//               position: "relative",
//               width: "100%",
//               height: "100%",
//               borderRadius: "50%",
//               background: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85))",
//               padding: "20px",
//               boxShadow: `
//                 0 0 60px rgba(168, 85, 247, 0.8),
//                 0 0 100px rgba(251, 191, 36, 0.6),
//                 inset 0 5px 20px rgba(255,255,255,0.5)
//               `,
//               animation: "logoFloat 3s ease-in-out infinite",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <Image
//               src="/logo.png"
//               alt="Veer Bharat"
//               width={300}
//               height={300}
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "contain",
//                 filter: "drop-shadow(0 5px 15px rgba(0,0,0,0.2))",
//               }}
//               priority
//             />
//           </div>

//           {/* Rotating Sparkle Ring */}
//           {[...Array(8)].map((_, i) => (
//             <div
//               key={`ring-${i}`}
//               style={{
//                 position: "absolute",
//                 left: "50%",
//                 top: "50%",
//                 width: "12px",
//                 height: "12px",
//                 background: i % 2 === 0 ? "#fbbf24" : "#a855f7",
//                 borderRadius: "50%",
//                 boxShadow: `0 0 20px currentColor`,
//                 animation: `ringRotate 4s linear infinite`,
//                 animationDelay: `${i * 0.125}s`,
//               }}
//             />
//           ))}
//         </div>

//         {/* Happy Diwali Text */}
//         <h1
//           style={{
//             fontSize: "min(6rem, 8vw)",
//             fontWeight: 900,
//             background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 20%, #a855f7 40%, #ec4899 60%, #fbbf24 80%, #f59e0b 100%)",
//             backgroundSize: "300% 300%",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             backgroundClip: "text",
//             marginBottom: "1.5rem",
//             fontFamily: "'Georgia', 'Times New Roman', serif",
//             letterSpacing: "0.1em",
//             textShadow: "0 0 60px rgba(251, 191, 36, 0.6)",
//             animation: "textGlow 3s ease-in-out infinite, textSlide 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
//             lineHeight: 1.2,
//           }}
//         >
//           🎆 Happy Diwali! 🎇
//         </h1>

//         {/* Decorative Divider */}
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             gap: "min(40px, 5vw)",
//             margin: "2rem auto",
//             animation: "dividerFade 1.5s ease-out 0.5s both",
//           }}
//         >
//           <span
//             style={{
//               fontSize: "min(3.5rem, 5vw)",
//               animation: "rocketBounce 2s ease-in-out infinite",
//             }}
//           >
//             🚀
//           </span>
//           <div
//             style={{
//               width: "min(300px, 40vw)",
//               height: "6px",
//               background: "linear-gradient(90deg, transparent, #a855f7, #fbbf24, #f59e0b, #a855f7, transparent)",
//               borderRadius: "3px",
//               boxShadow: "0 0 25px rgba(168, 85, 247, 0.7)",
//               animation: "lineGlow 2s ease-in-out infinite",
//             }}
//           />
//           <span
//             style={{
//               fontSize: "min(3.5rem, 5vw)",
//               animation: "crackerSpin 3s linear infinite",
//             }}
//           >
//             🎇
//           </span>
//         </div>

//         {/* From Veer Bharat */}
//         <p
//           style={{
//             fontSize: "min(3.5rem, 6vw)",
//             fontWeight: 900,
//             background: "linear-gradient(135deg, #fbbf24, #f59e0b, #fbbf24)",
//             backgroundSize: "200% 200%",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             backgroundClip: "text",
//             marginBottom: "1.5rem",
//             fontFamily: "'Georgia', serif",
//             textShadow: "0 0 40px rgba(251, 191, 36, 0.8)",
//             animation: "fromVeerBharat 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.7s both, goldShimmer 3s ease-in-out infinite",
//             letterSpacing: "0.05em",
//           }}
//         >
//           ~ From Veer Bharat ~
//         </p>

//         {/* Tagline */}
//         <p
//           style={{
//             fontSize: "min(2rem, 4vw)",
//             fontWeight: 700,
//             color: "#fde68a",
//             marginBottom: "2rem",
//             textShadow: "0 0 30px rgba(251, 191, 36, 0.5), 0 0 60px rgba(168, 85, 247, 0.3)",
//             animation: "fadeInUp 1.8s ease-out 1s both",
//           }}
//         >
//           वाह! मज़ा आ गया 🪔
//         </p>

//         {/* Wish Message */}
//         <p
//           style={{
//             fontSize: "min(1.8rem, 3.5vw)",
//             color: "#fef3c7",
//             fontWeight: 600,
//             maxWidth: "min(700px, 92vw)",
//             margin: "0 auto 2.5rem",
//             lineHeight: 1.8,
//             textShadow: "0 0 25px rgba(251, 191, 36, 0.4), 0 2px 4px rgba(0,0,0,0.3)",
//             animation: "fadeInUp 2s ease-out 1.3s both",
//           }}
//         >
//           ✨ May this Festival of Lights illuminate your life with endless joy, prosperity & happiness! ✨
//         </p>

//         {/* Progress Bar */}
//         <div
//           style={{
//             width: "min(500px, 90vw)",
//             height: "16px",
//             background: "linear-gradient(90deg, rgba(168, 85, 247, 0.25), rgba(251, 191, 36, 0.25))",
//             borderRadius: "999px",
//             margin: "0 auto",
//             overflow: "hidden",
//             boxShadow: `
//               inset 0 2px 12px rgba(0, 0, 0, 0.5),
//               0 0 30px rgba(168, 85, 247, 0.5),
//               0 0 60px rgba(251, 191, 36, 0.3)
//             `,
//             border: "3px solid rgba(168, 85, 247, 0.6)",
//             position: "relative",
//             animation: "fadeInUp 2.2s ease-out 1.6s both",
//           }}
//         >
//           <div
//             style={{
//               width: `${progress}%`,
//               height: "100%",
//               background: "linear-gradient(90deg, #a855f7, #ec4899, #fbbf24, #f59e0b, #a855f7)",
//               backgroundSize: "300% 100%",
//               borderRadius: "999px",
//               transition: "width 0.1s ease-out",
//               boxShadow: `
//                 0 0 30px rgba(251, 191, 36, 1),
//                 0 0 60px rgba(168, 85, 247, 0.8),
//                 inset 0 2px 8px rgba(255,255,255,0.4)
//               `,
//               animation: "progressShine 2.5s ease-in-out infinite",
//               position: "relative",
//             }}
//           >
//             <div
//               style={{
//                 position: "absolute",
//                 inset: 0,
//                 background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
//                 animation: "progressSweep 1.5s ease-in-out infinite",
//               }}
//             />
//           </div>
//         </div>

//         {/* Loading Text */}
//         <p
//           style={{
//             fontSize: "min(1.5rem, 3vw)",
//             color: "#a855f7",
//             fontWeight: 800,
//             marginTop: "1.5rem",
//             textShadow: "0 0 20px rgba(168, 85, 247, 0.8)",
//             animation: "fadeInUp 2.5s ease-out 2s both, loadingPulse 1.5s ease-in-out infinite",
//           }}
//         >
//           🎊 Launching celebrations... {Math.round(progress)}% 🎉
//         </p>
//       </div>

//       {/* CSS Animations */}
//       <style>{`
//         @keyframes backgroundPulse {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }

//         @keyframes backgroundShift {
//           0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
//           50% { transform: scale(1.1) rotate(5deg); opacity: 0.8; }
//         }

//         @keyframes megaBurst {
//           0%, 100% { opacity: 0; transform: scale(0.3) rotate(0deg); }
//           50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
//         }

//         @keyframes burstExplosion {
//           0% { opacity: 0; height: 0; }
//           30% { opacity: 1; height: 60px; }
//           100% { opacity: 0; height: 40px; }
//         }

//         @keyframes sparkleFloat {
//           0%, 100% { opacity: 0.4; transform: translateY(0) scale(0.8); }
//           50% { opacity: 1; transform: translateY(-30px) scale(1.4); }
//         }

//         @keyframes mainContentZoom {
//           0% { opacity: 0; transform: scale(0.3) translateY(100px); }
//           100% { opacity: 1; transform: scale(1) translateY(0); }
//         }

//         @keyframes logoEntrance {
//           0% { opacity: 0; transform: scale(0) rotate(-180deg); }
//           60% { transform: scale(1.15) rotate(10deg); }
//           100% { opacity: 1; transform: scale(1) rotate(0deg); }
//         }

//         @keyframes ringPulse {
//           0%, 100% { transform: scale(1); opacity: 0.6; }
//           50% { transform: scale(1.3); opacity: 1; }
//         }

//         @keyframes logoFloat {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-15px); }
//         }

//         @keyframes ringRotate {
//           0% { 
//             transform: translate(-50%, -50%) rotate(0deg) translateY(-140px); 
//             opacity: 0; 
//           }
//           10%, 90% { opacity: 1; }
//           100% { 
//             transform: translate(-50%, -50%) rotate(360deg) translateY(-140px); 
//             opacity: 0; 
//           }
//         }

//         @keyframes textGlow {
//           0%, 100% { 
//             background-position: 0% 50%; 
//             text-shadow: 0 0 40px rgba(251, 191, 36, 0.6); 
//           }
//           50% { 
//             background-position: 100% 50%; 
//             text-shadow: 0 0 80px rgba(168, 85, 247, 0.8); 
//           }
//         }

//         @keyframes textSlide {
//           0% { opacity: 0; transform: translateY(-80px) scale(0.8); }
//           100% { opacity: 1; transform: translateY(0) scale(1); }
//         }

//         @keyframes dividerFade {
//           0% { opacity: 0; transform: scaleX(0); }
//           100% { opacity: 1; transform: scaleX(1); }
//         }

//         @keyframes rocketBounce {
//           0%, 100% { transform: translateY(0) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(10deg); }
//         }

//         @keyframes crackerSpin {
//           0% { transform: rotate(0deg) scale(1); }
//           50% { transform: rotate(180deg) scale(1.2); }
//           100% { transform: rotate(360deg) scale(1); }
//         }

//         @keyframes lineGlow {
//           0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.5); }
//           50% { box-shadow: 0 0 40px rgba(251, 191, 36, 0.9); }
//         }

//         @keyframes fromVeerBharat {
//           0% { opacity: 0; transform: translateY(50px) scale(0.5); }
//           100% { opacity: 1; transform: translateY(0) scale(1); }
//         }

//         @keyframes goldShimmer {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }

//         @keyframes fadeInUp {
//           0% { opacity: 0; transform: translateY(40px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }

//         @keyframes progressShine {
//           0%, 100% { background-position: 0% 50%; filter: brightness(1); }
//           50% { background-position: 100% 50%; filter: brightness(1.4); }
//         }

//         @keyframes progressSweep {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(200%); }
//         }

//         @keyframes loadingPulse {
//           0%, 100% { opacity: 1; transform: scale(1); }
//           50% { opacity: 0.7; transform: scale(1.05); }
//         }

//         @media (max-width: 640px) {
//           @keyframes ringRotate {
//             0%, 100% { 
//               transform: translate(-50%, -50%) rotate(0deg) translateY(-110px); 
//             }
//           }
//         }
//       `}</style>
//     </div>
//   );
// }





// "use client";

// import { createContext, useContext, useCallback, useRef, useState, useEffect } from "react";
// import { usePathname } from "next/navigation";
// import Image from "next/image";

// const SplashContext = createContext();

// export function useSplash() {
//   return useContext(SplashContext);
// }

// export default function SplashProvider({ children }) {
//   const [visible, setVisible] = useState(false);
//   const [mounted, setMounted] = useState(false);
//   const resolveRef = useRef(null);
//   const timeoutRef = useRef(null);
//   const pathname = usePathname();

//   const DURATION = 2000; // Half the original 4000ms duration

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     if (!mounted) return;

//     const isHomePage = pathname === "/";

//     if (typeof window !== "undefined" && isHomePage) {
//       const splashShown = sessionStorage.getItem('splashShown');

//       if (!splashShown) {
//         setVisible(true);
//         sessionStorage.setItem('splashShown', 'true');

//         timeoutRef.current = setTimeout(() => {
//           setVisible(false);
//         }, DURATION);
//       }
//     }
//   }, [mounted, pathname]);

//   const show = useCallback((ms = DURATION) => {
//     setVisible(true);
//     return new Promise((resolve) => {
//       resolveRef.current = resolve;
//       clearTimeout(timeoutRef.current);
//       timeoutRef.current = setTimeout(() => {
//         if (resolveRef.current) {
//           resolveRef.current();
//           resolveRef.current = null;
//           setVisible(false);
//         }
//       }, ms);
//     });
//   }, []);

//   const hideNow = useCallback(() => {
//     if (resolveRef.current) {
//       resolveRef.current();
//       resolveRef.current = null;
//     }
//     clearTimeout(timeoutRef.current);
//     setVisible(false);
//   }, []);

//   useEffect(() => {
//     return () => clearTimeout(timeoutRef.current);
//   }, []);

//   if (!mounted) return null;

//   return (
//     <SplashContext.Provider value={{ show, hideNow }}>
//       {visible && <DiwaliSplash onDone={hideNow} duration={DURATION} />}
//       <div style={{ display: visible ? "none" : "block" }}>{children}</div>
//     </SplashContext.Provider>
//   );
// }

// function DiwaliSplash({ onDone, duration = 2000 }) {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           return 100;
//         }
//         return prev + 5; // Faster progress for shorter duration (increments of 5 for 40 steps)
//       });
//     }, duration / 20);

//     return () => clearInterval(interval);
//   }, [duration]);

//   return (
//     <div
//       style={{
//         position: "fixed",
//         inset: 0,
//         zIndex: 9999,
//         background: "radial-gradient(circle at center, #FF8C00 0%, #4B0082 100%)",
//         backgroundSize: "400% 400%",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         color: "#fff",
//         fontFamily: "'Merriweather', serif",
//         overflow: "hidden",
//         animation: "backgroundPulse 6s ease-in-out infinite",
//         flexDirection: "column",
//         textAlign: "center",
//         padding: "2rem",
//       }}
//     >
//       {/* Glowing Logo */}
//       <div
//         style={{
//           position: "relative",
//           width: "min(300px, 40vw)",
//           height: "min(300px, 40vw)",
//           marginBottom: "2rem",
//           borderRadius: "50%",
//           boxShadow: `
//             0 0 40px #FF8C00,
//             0 0 80px #FFA500,
//             inset 0 0 50px #FFD700
//           `,
//           animation: "logoGlow 3s ease-in-out infinite alternate",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           background: "radial-gradient(circle, #FFA500, #FF4500)",
//         }}
//       >
//         <Image
//           src="/logo.png"
//           alt="Veer Bharat"
//           width={260}
//           height={260}
//           style={{ borderRadius: "50%", objectFit: "contain", filter: "drop-shadow(0 0 15px #FFD700)" }}
//           priority
//         />
//       </div>

//       {/* Greeting Text */}
//       <h1
//         style={{
//           fontSize: "min(5rem, 10vw)",
//           fontWeight: 900,
//           marginBottom: "0.5rem",
//           background: "linear-gradient(45deg, #FFD700, #FF8C00, #FF4500, #DA70D6, #FFD700)",
//           backgroundSize: "200% 200%",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//           animation: "textColorShift 4s ease-in-out infinite",
//           textShadow: "0 0 10px #FFA500, 0 0 30px #FFD700",
//           fontFamily: "'Georgia', serif",
//           letterSpacing: "0.1em",
//         }}
//       >
//         🎆 [translate:शुभ दीवाली!] 🎆
//       </h1>

//       <p
//         style={{
//           fontSize: "min(1.8rem, 4vw)",
//           fontWeight: "bold",
//           color: "#FFF8DC",
//           maxWidth: "600px",
//           lineHeight: 1.4,
//           marginBottom: "1.5rem",
//           textShadow: "0 0 10px #FF8C00",
//           fontFamily: "'Merriweather', serif",
//         }}
//       >
//         ✨ [translate:इस प्रकाश के त्योहार पर आपकी जिंदगी खुशियों, समृद्धि और सुख से जगमगाए!] ✨
//       </p>

//       {/* Progress Bar */}
//       <div
//         style={{
//           width: "90vw",
//           maxWidth: "400px",
//           height: "14px",
//           background: "rgba(255, 215, 0, 0.2)",
//           borderRadius: "9999px",
//           overflow: "hidden",
//           boxShadow: "0 0 10px #FFD700 inset",
//         }}
//       >
//         <div
//           style={{
//             width: `${progress}%`,
//             height: "100%",
//             background: "linear-gradient(90deg, #FF4500, #FFA500, #FFD700)",
//             borderRadius: "9999px",
//             transition: "width 0.1s ease-out",
//             boxShadow: "0 0 20px #FFA500",
//             position: "relative",
//             animation: "progressGlow 2.5s ease-in-out infinite",
//           }}
//         />
//       </div>

//       {/* Loading Text */}
//       <p
//         style={{
//           marginTop: "1rem",
//           fontSize: "min(1.2rem, 3vw)",
//           fontWeight: 700,
//           color: "#FFD700",
//           textShadow: "0 0 12px #FFA500",
//           animation: "loadingPulse 1.5s ease-in-out infinite",
//           fontFamily: "'Georgia', serif",
//         }}
//       >
//         🎉 [translate:तैयार हो रहे हैं...] {Math.round(progress)}% 🎉
//       </p>

//       {/* CSS Animations */}
//       <style>{`
//         @keyframes backgroundPulse {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//         @keyframes textColorShift {
//           0%, 100% {
//             background-position: 0% 50%;
//             text-shadow: 0 0 10px #FFA500, 0 0 30px #FFD700;
//           }
//           50% {
//             background-position: 100% 50%;
//             text-shadow: 0 0 15px #FF4500, 0 0 40px #FFA500;
//           }
//         }
//         @keyframes logoGlow {
//           0% {
//             box-shadow:
//               0 0 20px #FF4500,
//               0 0 60px #FFA500,
//               inset 0 0 40px #FFD700;
//           }
//           100% {
//             box-shadow:
//               0 0 40px #FFD700,
//               0 0 80px #FFA500,
//               inset 0 0 50px #FF4500;
//           }
//         }
//         @keyframes progressGlow {
//           0%, 100% { filter: brightness(1); }
//           50% { filter: brightness(1.5); }
//         }
//         @keyframes loadingPulse {
//           0%, 100% { opacity: 1; transform: scale(1); }
//           50% { opacity: 0.7; transform: scale(1.05); }
//         }
//       `}</style>
//     </div>
//   );
// }




"use client";

import { createContext, useContext, useCallback, useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const SplashContext = createContext();

export function useSplash() {
  return useContext(SplashContext);
}

export default function SplashProvider({ children }) {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const resolveRef = useRef(null);
  const timeoutRef = useRef(null);
  const pathname = usePathname();

  const DURATION = 4000;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const isHomePage = pathname === "/";
    
    if (typeof window !== "undefined" && isHomePage) {
      const splashData = JSON.parse(window.sessionStorage.getItem('splashShown') || '{}');
      const today = new Date().toDateString();
      
      if (splashData.date !== today) {
        setVisible(true);
        window.sessionStorage.setItem('splashShown', JSON.stringify({ date: today }));
        
        timeoutRef.current = setTimeout(() => {
          setVisible(false);
        }, DURATION);
      }
    }
  }, [mounted, pathname]);

  const show = useCallback((ms = DURATION) => {
    setVisible(true);
    return new Promise((resolve) => {
      resolveRef.current = resolve;
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        if (resolveRef.current) {
          resolveRef.current();
          resolveRef.current = null;
          setVisible(false);
        }
      }, ms);
    });
  }, []);

  const hideNow = useCallback(() => {
    if (resolveRef.current) {
      resolveRef.current();
      resolveRef.current = null;
    }
    clearTimeout(timeoutRef.current);
    setVisible(false);
  }, []);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  if (!mounted) return null;

  return (
    <SplashContext.Provider value={{ show, hideNow, visible }}>
      {visible && <ChristmasSplash duration={DURATION} />}
      <div style={{ visibility: visible ? 'hidden' : 'visible' }}>
        {children}
      </div>
    </SplashContext.Provider>
  );
}

function ChristmasSplash({ duration = 4000 }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, duration / 50);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #0c1445 0%, #1a237e 30%, #283593 60%, #1a237e 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Northern Lights Effect */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '60%',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(0, 255, 136, 0.15) 0%, rgba(0, 200, 255, 0.1) 30%, transparent 70%)',
          animation: 'auroraWave 8s ease-in-out infinite',
        }}
      />

      {/* Snowfall */}
      {[...Array(60)].map((_, i) => (
        <div
          key={`snow-${i}`}
          style={{
            position: 'absolute',
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`,
            background: 'radial-gradient(circle, #ffffff 0%, rgba(255,255,255,0.8) 50%, transparent 100%)',
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 20}%`,
            animation: `snowFall ${Math.random() * 4 + 4}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.5 + 0.5,
            boxShadow: '0 0 10px rgba(255,255,255,0.8)',
          }}
        />
      ))}

      {/* Twinkling Stars */}
      {[...Array(40)].map((_, i) => (
        <div
          key={`star-${i}`}
          style={{
            position: 'absolute',
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            background: '#fff',
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 50}%`,
            animation: `twinkle ${Math.random() * 2 + 1}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
            boxShadow: '0 0 6px #fff, 0 0 12px #fff',
          }}
        />
      ))}

      {/* Christmas Tree */}
      <div
        style={{
          position: 'absolute',
          left: '8%',
          bottom: '5%',
          animation: 'treeGlow 2s ease-in-out infinite',
        }}
      >
        {/* Tree Star */}
        <div
          style={{
            position: 'absolute',
            top: '-40px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '40px',
            animation: 'starGlow 1s ease-in-out infinite',
            filter: 'drop-shadow(0 0 20px #ffd700)',
          }}
        >
          ⭐
        </div>
        
        {/* Tree Layers */}
        {[0, 1, 2, 3].map((layer) => (
          <div
            key={layer}
            style={{
              width: 0,
              height: 0,
              borderLeft: `${60 + layer * 25}px solid transparent`,
              borderRight: `${60 + layer * 25}px solid transparent`,
              borderBottom: `${80 + layer * 15}px solid #0d5c0d`,
              marginTop: layer === 0 ? 0 : '-30px',
              position: 'relative',
              filter: 'drop-shadow(0 5px 15px rgba(0,100,0,0.5))',
            }}
          >
            {/* Tree Decorations */}
            {[...Array(layer + 2)].map((_, j) => (
              <div
                key={j}
                style={{
                  position: 'absolute',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: ['#ff0000', '#ffd700', '#00bcd4', '#ff69b4'][j % 4],
                  left: `${-40 - layer * 20 + j * 30}px`,
                  top: `${30 + j * 15}px`,
                  boxShadow: `0 0 10px ${['#ff0000', '#ffd700', '#00bcd4', '#ff69b4'][j % 4]}`,
                  animation: `ornamentGlow 1.5s ease-in-out infinite`,
                  animationDelay: `${j * 0.3}s`,
                }}
              />
            ))}
          </div>
        ))}
        
        {/* Tree Trunk */}
        <div
          style={{
            width: '40px',
            height: '50px',
            background: 'linear-gradient(90deg, #5d4037, #8d6e63, #5d4037)',
            margin: '0 auto',
            marginTop: '-10px',
            borderRadius: '0 0 8px 8px',
          }}
        />
        
        {/* Presents under tree */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px', justifyContent: 'center' }}>
          {[
            { bg: '#e53935', ribbon: '#ffd700' },
            { bg: '#43a047', ribbon: '#ff5722' },
            { bg: '#1e88e5', ribbon: '#ffeb3b' },
          ].map((present, i) => (
            <div
              key={i}
              style={{
                width: '35px',
                height: '30px',
                background: present.bg,
                borderRadius: '4px',
                position: 'relative',
                animation: 'presentBounce 2s ease-in-out infinite',
                animationDelay: `${i * 0.4}s`,
                boxShadow: `0 4px 15px ${present.bg}80`,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '8px',
                  height: '100%',
                  background: present.ribbon,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '-8px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: '16px',
                }}
              >
                🎀
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Santa Claus */}
      <div
        style={{
          position: 'absolute',
          right: '5%',
          bottom: '10%',
          animation: 'santaFloat 3s ease-in-out infinite',
        }}
      >
        <div style={{ fontSize: '100px', filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))' }}>
          🎅
        </div>
        {/* Santa's Speech Bubble */}
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            left: '-120px',
            background: 'rgba(255,255,255,0.95)',
            padding: '12px 18px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#c62828',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            animation: 'bubblePop 0.5s ease-out',
            whiteSpace: 'nowrap',
          }}
        >
          Ho Ho Ho! 🎁✨
          <div
            style={{
              position: 'absolute',
              bottom: '-10px',
              right: '20px',
              width: 0,
              height: 0,
              borderLeft: '10px solid transparent',
              borderRight: '10px solid transparent',
              borderTop: '12px solid rgba(255,255,255,0.95)',
            }}
          />
        </div>
        {/* Mustard Oil Gift */}
        <div
          style={{
            position: 'absolute',
            bottom: '-20px',
            left: '20px',
            fontSize: '40px',
            animation: 'giftFloat 2s ease-in-out infinite',
          }}
        >
          🫒
        </div>
      </div>

      {/* Reindeer */}
      <div
        style={{
          position: 'absolute',
          right: '20%',
          top: '15%',
          fontSize: '50px',
          animation: 'reindeerFly 6s linear infinite',
        }}
      >
        🦌
      </div>

      {/* Sleigh */}
      <div
        style={{
          position: 'absolute',
          right: '25%',
          top: '18%',
          fontSize: '40px',
          animation: 'reindeerFly 6s linear infinite',
          animationDelay: '0.3s',
        }}
      >
        🛷
      </div>

      {/* Christmas Lights Garland Top */}
      <div
        style={{
          position: 'absolute',
          top: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '20px',
          animation: 'garlandSwing 3s ease-in-out infinite',
        }}
      >
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            style={{
              width: '16px',
              height: '24px',
              background: ['#ff0000', '#00ff00', '#ffff00', '#00bfff', '#ff69b4'][i % 5],
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              boxShadow: `0 0 15px ${['#ff0000', '#00ff00', '#ffff00', '#00bfff', '#ff69b4'][i % 5]}`,
              animation: `lightBlink 0.5s ease-in-out infinite`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* Holly Decorations */}
      <div style={{ position: 'absolute', top: '10%', left: '5%', fontSize: '40px' }}>🎄</div>
      <div style={{ position: 'absolute', top: '15%', right: '8%', fontSize: '35px' }}>❄️</div>
      <div style={{ position: 'absolute', bottom: '20%', left: '3%', fontSize: '30px' }}>🔔</div>

      {/* Candy Canes */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`candy-${i}`}
          style={{
            position: 'absolute',
            left: `${10 + i * 15}%`,
            bottom: '0',
            fontSize: '30px',
            transform: `rotate(${i % 2 === 0 ? 15 : -15}deg)`,
            animation: `candySway 2s ease-in-out infinite`,
            animationDelay: `${i * 0.2}s`,
          }}
        >
          🍬
        </div>
      ))}

      {/* Main Content Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          animation: 'contentZoomIn 0.8s ease-out',
          padding: '0 20px',
        }}
      >
        {/* Company Logo with Christmas Frame */}
        <div
          style={{
            position: 'relative',
            marginBottom: '25px',
            animation: 'logoReveal 1s ease-out',
          }}
        >
          {/* Wreath Border */}
          <div
            style={{
              position: 'absolute',
              inset: '-30px',
              borderRadius: '50%',
              border: '8px solid transparent',
              background: 'linear-gradient(45deg, #228b22, #006400, #228b22) border-box',
              animation: 'wreathGlow 2s ease-in-out infinite',
              boxShadow: '0 0 30px rgba(34, 139, 34, 0.5), inset 0 0 30px rgba(34, 139, 34, 0.3)',
            }}
          />

          {/* Holly Berries */}
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: '16px',
                height: '16px',
                background: 'radial-gradient(circle at 30% 30%, #ff4444, #cc0000)',
                borderRadius: '50%',
                top: i < 2 ? '-25px' : 'auto',
                bottom: i >= 2 ? '-25px' : 'auto',
                left: i % 2 === 0 ? '-20px' : 'auto',
                right: i % 2 === 1 ? '-20px' : 'auto',
                boxShadow: '0 0 10px #ff0000',
                animation: 'berryPulse 1s ease-in-out infinite',
                animationDelay: `${i * 0.25}s`,
              }}
            />
          ))}

          {/* Glowing Aura */}
          <div
            style={{
              position: 'absolute',
              inset: '-20px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,215,0,0.4) 0%, rgba(255,0,0,0.2) 50%, transparent 70%)',
              animation: 'auraPulse 2s ease-in-out infinite',
            }}
          />

          {/* Logo Container */}
          <div
            style={{
              width: '130px',
              height: '130px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 40px rgba(0,0,0,0.4), 0 0 60px rgba(255,215,0,0.3)',
              animation: 'logoFloat 3s ease-in-out infinite',
              overflow: 'hidden',
              border: '4px solid #ffd700',
            }}
          >
            <Image
              src="/logo.png"
              alt="Veer Bharat Logo"
              width={100}
              height={100}
              style={{
                objectFit: 'contain',
              }}
            />
          </div>

          {/* Santa Hat on Logo */}
          <div
            style={{
              position: 'absolute',
              top: '-35px',
              left: '50%',
              transform: 'translateX(-50%) rotate(-15deg)',
              fontSize: '50px',
              animation: 'hatWiggle 2s ease-in-out infinite',
            }}
          >
            🎅
          </div>

          {/* Rotating Snowflakes */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                fontSize: '24px',
                opacity: 0.7,
                animation: `snowflakeRotate 8s linear infinite`,
                animationDelay: `${i * 2}s`,
              }}
            >
              ❄️
            </div>
          ))}
        </div>

        {/* Merry Christmas Text */}
        <div
          style={{
            fontSize: 'clamp(36px, 8vw, 56px)',
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #ffd700, #ff6b6b, #ffd700, #ff6b6b, #ffd700)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 0 40px rgba(255,215,0,0.5)',
            animation: 'textShimmer 3s linear infinite, textEntrance 0.8s ease-out',
            fontFamily: '"Mountains of Christmas", cursive, serif',
            marginBottom: '10px',
            textAlign: 'center',
          }}
        >
          🎄 Merry Christmas 🎄
        </div>

        {/* Happy Holidays */}
        <div
          style={{
            fontSize: 'clamp(18px, 4vw, 28px)',
            color: '#90caf9',
            fontWeight: '600',
            animation: 'fadeInUp 0.8s ease-out 0.3s both',
            textShadow: '0 2px 20px rgba(144, 202, 249, 0.5)',
            marginBottom: '20px',
            fontFamily: '"Playfair Display", serif',
          }}
        >
          & Happy New Year 2026! 🎆
        </div>

        {/* Decorative Divider */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            marginBottom: '20px',
            animation: 'dividerSlide 0.8s ease-out 0.5s both',
          }}
        >
          <span style={{ fontSize: '24px', animation: 'iconSpin 2s ease-in-out infinite' }}>🎁</span>
          <div
            style={{
              width: '80px',
              height: '3px',
              background: 'linear-gradient(90deg, transparent, #ffd700, transparent)',
              borderRadius: '2px',
              animation: 'lineGlitter 1.5s ease-in-out infinite',
            }}
          />
          <span style={{ fontSize: '24px', animation: 'iconSpin 2s ease-in-out infinite 0.5s' }}>⭐</span>
          <div
            style={{
              width: '80px',
              height: '3px',
              background: 'linear-gradient(90deg, transparent, #ffd700, transparent)',
              borderRadius: '2px',
              animation: 'lineGlitter 1.5s ease-in-out infinite 0.5s',
            }}
          />
          <span style={{ fontSize: '24px', animation: 'iconSpin 2s ease-in-out infinite 1s' }}>🎁</span>
        </div>

        {/* From Veer Bharat */}
        <div
          style={{
            fontSize: 'clamp(20px, 5vw, 32px)',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #ffd700, #ffeb3b, #ffd700)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'fadeInScale 0.8s ease-out 0.6s both, goldWave 3s ease infinite',
            marginBottom: '15px',
          }}
        >
          ✨ From Team Veer Bharat ✨
        </div>

        {/* Blessing Message */}
        <div
          style={{
            fontSize: 'clamp(14px, 3vw, 18px)',
            color: '#e0e0e0',
            textAlign: 'center',
            maxWidth: '500px',
            lineHeight: 1.6,
            animation: 'fadeInUp 0.8s ease-out 0.8s both',
            padding: '0 20px',
          }}
        >
          May this Christmas bring you joy, peace, love & warmth of the season! 🌟❄️🎅
        </div>

        {/* Special Gift Message */}
        <div
          style={{
            fontSize: 'clamp(12px, 2.5vw, 16px)',
            color: '#ffcc80',
            textAlign: 'center',
            marginTop: '15px',
            animation: 'fadeInUp 0.8s ease-out 1s both',
            fontStyle: 'italic',
          }}
        >
          🫒 A gift of warmth & goodness from Santa! 🎁
        </div>

        {/* Progress Bar */}
        <div
          style={{
            width: 'min(300px, 80vw)',
            height: '12px',
            background: 'rgba(255,255,255,0.15)',
            borderRadius: '10px',
            overflow: 'hidden',
            marginTop: '30px',
            animation: 'fadeInUp 0.8s ease-out 1.1s both',
            border: '2px solid rgba(255,215,0,0.3)',
            boxShadow: '0 0 20px rgba(255,215,0,0.2)',
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #ff0000, #00ff00, #ff0000)',
              backgroundSize: '200% auto',
              borderRadius: '8px',
              transition: 'width 0.1s ease-out',
              animation: 'progressFlow 2s linear infinite',
              boxShadow: '0 0 15px rgba(255,215,0,0.5)',
            }}
          >
            <div
              style={{
                width: '30px',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
                animation: 'progressGlide 1.5s ease-in-out infinite',
              }}
            />
          </div>
        </div>

        {/* Loading Text */}
        <div
          style={{
            marginTop: '15px',
            fontSize: '16px',
            color: '#81c784',
            fontWeight: '600',
            animation: 'textBlink 1s ease-in-out infinite, fadeInUp 0.8s ease-out 1.2s both',
          }}
        >
          🎄 Spreading Christmas Joy... {Math.round(progress)}% 🎅
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mountains+of+Christmas:wght@400;700&family=Playfair+Display:wght@400;600&display=swap');

        @keyframes auroraWave {
          0%, 100% { opacity: 0.5; transform: translateX(-5%); }
          50% { opacity: 0.8; transform: translateX(5%); }
        }

        @keyframes snowFall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0.3; }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes treeGlow {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(0, 255, 0, 0.3)); }
          50% { filter: drop-shadow(0 0 40px rgba(0, 255, 0, 0.6)); }
        }

        @keyframes starGlow {
          0%, 100% { transform: translateX(-50%) scale(1); filter: drop-shadow(0 0 20px #ffd700); }
          50% { transform: translateX(-50%) scale(1.3); filter: drop-shadow(0 0 40px #ffd700); }
        }

        @keyframes ornamentGlow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }

        @keyframes presentBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes santaFloat {
          0%, 100% { transform: translateY(0) rotate(-5deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes bubblePop {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes giftFloat {
          0%, 100% { transform: translateY(0) rotate(-10deg); }
          50% { transform: translateY(-15px) rotate(10deg); }
        }

        @keyframes reindeerFly {
          0% { transform: translateX(100vw); }
          100% { transform: translateX(-100vw); }
        }

        @keyframes garlandSwing {
          0%, 100% { transform: translateX(-50%) rotate(-2deg); }
          50% { transform: translateX(-50%) rotate(2deg); }
        }

        @keyframes lightBlink {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.9); }
        }

        @keyframes candySway {
          0%, 100% { transform: rotate(15deg); }
          50% { transform: rotate(-15deg); }
        }

        @keyframes contentZoomIn {
          0% { opacity: 0; transform: scale(0.5) translateY(50px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }

        @keyframes logoReveal {
          0% { opacity: 0; transform: scale(0) rotate(-180deg); }
          70% { transform: scale(1.1) rotate(10deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }

        @keyframes wreathGlow {
          0%, 100% { box-shadow: 0 0 30px rgba(34, 139, 34, 0.5), inset 0 0 30px rgba(34, 139, 34, 0.3); }
          50% { box-shadow: 0 0 50px rgba(34, 139, 34, 0.8), inset 0 0 50px rgba(34, 139, 34, 0.5); }
        }

        @keyframes berryPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        @keyframes auraPulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.3); opacity: 0.8; }
        }

        @keyframes logoFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes hatWiggle {
          0%, 100% { transform: translateX(-50%) rotate(-15deg); }
          50% { transform: translateX(-50%) rotate(-5deg); }
        }

        @keyframes snowflakeRotate {
          0% { 
            transform: translate(-50%, -50%) rotate(0deg) translateY(-100px); 
            opacity: 0; 
          }
          10%, 90% { opacity: 0.7; }
          100% { 
            transform: translate(-50%, -50%) rotate(360deg) translateY(-100px); 
            opacity: 0; 
          }
        }

        @keyframes textShimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes textEntrance {
          0% { opacity: 0; transform: translateY(-50px) scale(0.8); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes goldWave {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes dividerSlide {
          0% { opacity: 0; transform: scaleX(0); }
          100% { opacity: 1; transform: scaleX(1); }
        }

        @keyframes iconSpin {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(15deg) scale(1.2); }
        }

        @keyframes lineGlitter {
          0%, 100% { box-shadow: 0 0 15px rgba(255, 215, 0, 0.5); }
          50% { box-shadow: 0 0 30px rgba(255, 215, 0, 0.9); }
        }

        @keyframes fadeInScale {
          0% { opacity: 0; transform: scale(0.7) translateY(30px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes progressFlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes progressGlide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }

        @keyframes textBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}
