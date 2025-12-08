// "use client";
// import React from "react";

// export default function Team() {
//   const members = [
//     {
//       name: "Charu ",
//       role: "HR Head & Manager",
//       image: "/images/sunflower-blog.jpg",
//       description: "Experienced managing director leading company growth and innovation with a passion for excellence and teamwork",
//       achievements: ["Technical Excellence", "15+ Years Experience, Industry Leader,Visionary Leadership"],
//       social: {
//         linkedin: "https://linkedin.com",
//         email: "mailto:chandrashekar@company.com"
//       },
//       position: "left",
//       gradient: "from-indigo-600 via-purple-600 to-pink-600"
//     },
//     {
//       name: "Md Laraib",
//       role: "Full Stack Developer",
//       image: "/images/team2.jpg",
//       description: "Skilled web developer crafting seamless digital experiences with expertise in modern frameworks and responsive design techniques. i develop high-quality websites that engage users and drive results.",
//       achievements: ["Full-stack", "E-commarce", "1+ Years Experience"],
//       social: {
//         linkedin: "https://",
//         // twitter: "https://twitter.com",
//         email: "laraibsiddiqui10ki@gmail.com",
//         Protofilo :"https://lightyellow-falcon-969571.hostingersite.com"
//       },
//       position: "center",
//       gradient: "from-blue-600 via-cyan-600 to-teal-600"
//     },
//     {
//       name: "Tahir",
//       role: "Digetal Marketing & SEO Expert",
//       image: "/images/TahirBhai.jpeg",
//       description: " Dynamic marketing leader driving brand growth and online presence with innovative strategies and data-driven insights ,SEO expertise to boost visibility and engagement. Deep Knowledge of digital trends and consumer behavior.",
//       achievements: ["Digital Strategy", "SEO Mastery", "5+ Years Experience"],
//       social: {
//         linkedin: "https://linkedin.com",
//         twitter: "https://twitter.com",
//         email: "mailto:kailash@company.com"
//       },
//       position: "right",
//       gradient: "from-orange-600 via-red-600 to-pink-600"
//     },
   
    
//   ];

//   return (
//     <section className="relative py-24 px-4 sm:py-32 sm:px-6 lg:py-40 bg-gradient-to-br from-[#DFC6F6] via-[#fef9c3] to-[#DFC6F6] overflow-hidden">
//       {/* Classical Elegant Background */}
//       <div className="absolute inset-0 opacity-[0.03]">
//         <div className="absolute top-0 left-0 w-full h-full" style={{
//           backgroundImage: `radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
//                            radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
//                            radial-gradient(circle at 40% 20%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)`
//         }}></div>
//       </div>

//       {/* Decorative Corner Elements */}
//       <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-purple-200 opacity-30"></div>
//       <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-pink-200 opacity-30"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Sophisticated Header Section */}
//         <div className="text-center mb-24">
//           {/* Ornamental Top Line */}
//           <div className="flex items-center justify-center mb-8 gap-4">
//             <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-purple-600"></div>
//             <div className="w-3 h-3 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 animate-pulse"></div>
//             <div className="w-24 h-[2px] bg-gradient-to-l from-transparent via-pink-400 to-pink-600"></div>
//           </div>

//           {/* Badge */}
//           <div className="inline-block mb-8">
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-xl opacity-50 animate-pulse"></div>
//               <span className="relative px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold uppercase tracking-[0.2em] rounded-full shadow-2xl inline-block border-2 border-white/20">
//                 Our Elite Team
//               </span>
//             </div>
//           </div>

//           {/* Main Heading */}
//           <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-gray-900 mb-8 leading-[1.1] tracking-tight">
//             Meet The{" "}
//             <span className="relative inline-block">
//               <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
//                 Visionaries
//               </span>
//               <svg className="absolute -bottom-4 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M2 10C60 4 140 4 198 10" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
//                 <defs>
//                   <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                     <stop offset="0%" stopColor="#9333ea"/>
//                     <stop offset="50%" stopColor="#ec4899"/>
//                     <stop offset="100%" stopColor="#f43f5e"/>
//                   </linearGradient>
//                 </defs>
//               </svg>
//             </span>
//           </h2>

//           {/* Subtitle */}
//           <p className="text-2xl sm:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-8">
//             The brilliant minds and passionate experts driving <span className="font-semibold text-gray-800">innovation</span> and <span className="font-semibold text-gray-800">excellence</span>
//           </p>

//           {/* Ornamental Bottom Line */}
//           <div className="flex items-center justify-center gap-3">
//             <div className="w-32 h-[3px] bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
//             <div className="w-20 h-[3px] bg-gradient-to-r from-pink-600 to-rose-600 rounded-full"></div>
//             <div className="w-12 h-[3px] bg-gradient-to-r from-rose-600 to-red-600 rounded-full"></div>
//           </div>
//         </div>

//         {/* Premium Team Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
//           {members.map((member, index) => (
//             <div
//               key={index}
//               className="group relative"
//               style={{
//                 animation: `floatIn 1s ease-out ${index * 0.1}s both`
//               }}
//             >
//               {/* Card Container */}
//               <div className="relative bg-white rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden transform hover:-translate-y-4 border border-gray-100">
                
//                 {/* Gradient Glow on Hover */}
//                 <div className={`absolute -inset-[1px] bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl -z-10`}></div>

//                 {/* Card Inner Content */}
//                 <div className="relative bg-white rounded-[2rem] p-8">
                  
//                   {/* Large Image Section */}
//                   <div className={`mb-8 flex ${
//                     member.position === 'left' ? 'justify-start' :
//                     member.position === 'center' ? 'justify-center' :
//                     'justify-end'
//                   }`}>
//                     <div className="relative">
//                       {/* Elegant Rotating Border */}
//                       <div className={`absolute -inset-6 bg-gradient-to-br ${member.gradient} rounded-full opacity-20 group-hover:opacity-40 transition-all duration-1000 blur-xl group-hover:rotate-180 transform`}></div>
                      
//                       {/* Main Image - EXTRA LARGE */}
//                       <div className="relative">
//                         <div className="w-52 h-52 sm:w-56 sm:h-56 rounded-full overflow-hidden border-[6px] border-white shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 relative">
//                           <img
//                             src={member.image}
//                             alt={member.name}
//                             className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
//                             loading="lazy"
//                           />
//                           {/* Premium Overlay */}
//                           <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-25 transition-opacity duration-700`}></div>
                          
//                           {/* Sparkle Effect */}
//                           <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
//                             <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-ping"></div>
//                             <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
//                           </div>
//                         </div>

//                         {/* Elegant Verification Badge */}
//                         <div className={`absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br ${member.gradient} rounded-full border-[6px] border-white shadow-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
//                           <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
//                             <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
//                           </svg>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Text Content with Better Typography */}
//                   <div className={`text-${member.position === 'left' ? 'left' : member.position === 'center' ? 'center' : 'right'}`}>
//                     {/* Name - Larger & Bold */}
//                     <h3 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-500">
//                       {member.name}
//                     </h3>
                    
//                     {/* Role Badge - More Prominent */}
//                     <div className="inline-block mb-5">
//                       <div className={`px-5 py-2.5 rounded-2xl bg-gradient-to-r ${member.gradient} shadow-xl transform group-hover:scale-105 transition-all duration-500`}>
//                         <p className="text-sm sm:text-base font-bold text-white uppercase tracking-widest">
//                           {member.role}
//                         </p>
//                       </div>
//                     </div>
                    
//                     {/* Description - Better Readability */}
//                     <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 font-light">
//                       {member.description}
//                     </p>

//                     {/* Achievements - Refined Style */}
//                     <div className="mb-7 space-y-3">
//                       {member.achievements.map((achievement, idx) => (
//                         <div key={idx} className="flex items-center gap-3 text-sm sm:text-base text-gray-700">
//                           <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${member.gradient} animate-pulse`}></div>
//                           <span className="font-semibold">{achievement}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Social Links - Elegant Design */}
//                   <div className="flex gap-4 justify-center pt-7 border-t-2 border-gray-100 mt-7">
//                     {member.social.linkedin && (
//                       <a
//                         href={member.social.linkedin}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white hover:scale-110 hover:-rotate-6 transition-all duration-500 shadow-lg hover:shadow-2xl`}
//                       >
//                         <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//                         </svg>
//                       </a>
//                     )}
//                     {member.social.twitter && (
//                       <a
//                         href={member.social.twitter}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white hover:scale-110 hover:-rotate-6 transition-all duration-500 shadow-lg hover:shadow-2xl`}
//                       >
//                         <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
//                         </svg>
//                       </a>
//                     )}
//                     {member.social.github && (
//                       <a
//                         href={member.social.github}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white hover:scale-110 hover:-rotate-6 transition-all duration-500 shadow-lg hover:shadow-2xl`}
//                       >
//                         <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//                         </svg>
//                       </a>
//                     )}
//                     {member.social.instagram && (
//                       <a
//                         href={member.social.instagram}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white hover:scale-110 hover:-rotate-6 transition-all duration-500 shadow-lg hover:shadow-2xl`}
//                       >
//                         <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                         </svg>
//                       </a>
//                     )}
//                     {member.social.email && (
//                       <a
//                         href={member.social.email}
//                         className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white hover:scale-110 hover:-rotate-6 transition-all duration-500 shadow-lg hover:shadow-2xl`}
//                       >
//                         <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
//                         </svg>
//                       </a>
//                     )}
//                   </div>
//                 </div>

//                 {/* Luxurious Shine Effect */}
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none overflow-hidden rounded-[2rem]">
//                   <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1500"></div>
//                 </div>
//               </div>
//             </div>
//           ))}

//           {/* Elegant "Join Us" Card */}
//           <div className="group relative" style={{animation: `floatIn 1s ease-out ${members.length * 0.1}s both`}}>
//             <div className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden transform hover:-translate-y-4 border-4 border-dashed border-purple-300 h-full min-h-[600px]">
//               <div className="relative p-8 h-full flex flex-col items-center justify-center">
                
//                 {/* Decorative Floating Elements */}
//                 <div className="absolute top-8 right-8 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-float"></div>
//                 <div className="absolute bottom-12 left-12 w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full opacity-20 animate-float" style={{animationDelay: '0.5s'}}></div>
//                 <div className="absolute top-1/3 left-8 w-16 h-16 bg-gradient-to-br from-rose-400 to-red-400 rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>

//                 {/* Central Icon - Larger */}
//                 <div className="relative mb-10">
//                   <div className="absolute -inset-8 bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400 rounded-full opacity-30 group-hover:opacity-50 transition-opacity blur-3xl animate-pulse"></div>
//                   <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 border-8 border-white">
//                     <svg className="w-24 h-24 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4"/>
//                     </svg>
//                   </div>
//                 </div>

//                 {/* Text Content - Larger Typography */}
//                 <h3 className="text-5xl sm:text-6xl font-black text-center mb-5 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent leading-tight">
//                   Join Our Team!
//                 </h3>
//                 <p className="text-2xl font-bold text-purple-600 mb-4 text-center">
//                   🌟 Be The Next Star 🌟
//                 </p>
//                 <p className="text-lg sm:text-xl text-gray-600 text-center max-w-sm leading-relaxed mb-10 font-light">
//                   We're looking for talented individuals ready to make an impact. Join our amazing team and be part of something <span className="font-semibold">extraordinary!</span>
//                 </p>

//                 {/* Premium CTA Button - Larger */}
//                 <button className="relative px-12 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white font-black text-xl rounded-3xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500 group-hover:from-purple-700 group-hover:via-pink-700 group-hover:to-rose-700 overflow-hidden">
//                   <span className="relative z-10">Apply Now</span>
//                   <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
//                 </button>

//                 {/* Decorative Dots */}
//                 <div className="absolute bottom-6 right-6 flex gap-2">
//                   <div className="w-4 h-4 rounded-full bg-purple-400 animate-pulse"></div>
//                   <div className="w-4 h-4 rounded-full bg-pink-400 animate-pulse" style={{animationDelay: '0.2s'}}></div>
//                   <div className="w-4 h-4 rounded-full bg-rose-400 animate-pulse" style={{animationDelay: '0.4s'}}></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Classical Elegant CSS Animations */}
//       <style jsx>{`
//         @keyframes floatIn {
//           0% {
//             opacity: 0;
//             transform: translateY(60px) scale(0.9);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-20px) rotate(5deg);
//           }
//         }

//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }

//         @media (max-width: 640px) {
//           .text-6xl { font-size: 3rem; }
//           .text-7xl { font-size: 3.5rem; }
//           .text-8xl { font-size: 4rem; }
//         }
//       `}</style>
//     </section>
//   );
// }




"use client";
import React, { useState, useEffect } from "react";

export default function Team() {
  const [expandedMember, setExpandedMember] = useState(null);
  const [hoveredMember, setHoveredMember] = useState(null);

  const members = [
    {
      name: "Charu",
      role: "HR Head & Manager",
      image: "/images/sunflower-blog.jpg",
      description: "Experienced managing director leading company growth and innovation with a passion for excellence and teamwork",
      achievements: ["Technical Excellence", "15+ Years Experience", "Industry Leader", "Visionary Leadership"],
      social: {
        linkedin: "https://linkedin.com",
        email: "mailto:chandrashekar@company.com"
      },
      position: "left",
      gradient: "from-rose-500 via-pink-500 to-purple-600",
      particles: "rose"
    },
    {
      name: "Md Laraib",
      role: "Full Stack Developer",
      image: "/images/team2.jpg",
      description: "Elite full-stack developer mastering Next.js, MERN stack, Prisma ORM & e-commerce solutions. Crafts pixel-perfect websites that convert visitors into customers with blazing-fast performance and stunning UI/UX.",
      achievements: ["Next.js Expert", "MERN Stack", "50+ Projects", "2K+ Commits", "E-commerce Pro", "Responsive Master"],
      social: {
        github: "https://github.com/Laraib207",
        portfolio: "https://lightyellow-falcon-969571.hostingersite.com",
        email: "mailto:laraibsiddiqui10ki@gmail.com"
      },
      position: "center",
      gradient: "from-emerald-400 via-blue-500 to-purple-600",
      particles: "emerald",
      stats: [
        { label: "Projects", value: "50+" },
        { label: "Commits", value: "2K+" },
        { label: "Stars", value: "150+" }
      ]
    },
    {
      name: "Tahir",
      role: "Digital Marketing & SEO Expert",
      image: "/images/TahirBhai.jpeg",
      description: "Digital growth wizard with SEO mastery, driving massive traffic and conversions through data-driven strategies and cutting-edge marketing automation.",
      achievements: ["SEO Mastery", "5+ Years Exp", "Google Partner", "Conversion Expert"],
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "mailto:kailash@company.com"
      },
      position: "right",
      gradient: "from-orange-500 via-red-500 to-yellow-500",
      particles: "orange"
    },
  ];

  const toggleExpand = (index) => {
    setExpandedMember(expandedMember === index ? null : index);
  };

  return (
    <section className="relative py-24 px-4 sm:py-32 sm:px-6 lg:py-40 overflow-hidden">
      {/* Animated Particle Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_50%),radial-gradient(circle_at_40%_40%,rgba(120,219,255,0.3),transparent_50%)]"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Neon Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center mb-8">
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 rounded-full"></div>
            <div className="w-4 h-4 mx-4 bg-gradient-to-r from-emerald-400 to-purple-600 rounded-full animate-ping"></div>
            <div className="w-32 h-1 bg-gradient-to-l from-purple-600 via-blue-500 to-emerald-400 rounded-full"></div>
          </div>

          <div className="mb-12">
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-600 blur-3xl animate-pulse"></div>
              <span className="relative px-12 py-4 bg-black/20 backdrop-blur-xl text-white text-lg font-black uppercase tracking-widest rounded-3xl border border-white/30 shadow-2xl">
                🔥 Elite Creators 🔥
              </span>
            </div>
          </div>

          <h2 className="text-7xl sm:text-8xl lg:text-9xl font-black bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-8 leading-none tracking-tight">
            CORE TEAM
          </h2>
          <p className="text-2xl sm:text-3xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Building the future, one line of code at a time
          </p>
        </div>

        {/* 3D Glassmorphism Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {members.map((member, index) => (
            <div
              key={index}
              className="group relative perspective-1000"
              style={{
                perspective: '1000px',
                animation: `slideIn${index + 1} 1s ease-out forwards`,
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* 3D Card */}
              <div className={`relative h-[650px] w-full transform-style-3d group-hover:rotate-y-5 transition-all duration-1000 cursor-pointer ${
                expandedMember === index ? 'scale-110 z-50' : ''
              }`}>
                
                {/* Card Front */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-3xl border border-white/20 rounded-3xl shadow-2xl p-8 flex flex-col transition-all duration-1000 group-hover:shadow-emerald/25 hover:shadow-3xl transform rotate-y-0 group-hover:rotate-y-3">
                  
                  {/* Profile Image with 3D Effect */}
                  <div className="relative mx-auto mb-8">
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-1000 -rotate-6`}></div>
                    <div className="relative w-64 h-64 rounded-3xl overflow-hidden border-8 border-white/50 shadow-2xl group-hover:scale-110 transition-all duration-700 group-hover:shadow-emerald/50">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-700`}></div>
                    </div>
                    
                    {/* Neon Badge */}
                    <div className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-br ${member.gradient} rounded-3xl border-4 border-white shadow-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      <div className="w-6 h-6 bg-white rounded-full animate-ping"></div>
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="text-center mb-8 flex-1 flex flex-col justify-center">
                    <h3 className="text-5xl font-black bg-gradient-to-r from-white via-emerald-400 to-blue-500 bg-clip-text text-transparent mb-4 tracking-tight group-hover:scale-105 transition-transform">
                      {member.name}
                    </h3>
                    <div className={`inline-block px-8 py-4 bg-gradient-to-r ${member.gradient} text-white font-black text-xl rounded-2xl shadow-2xl group-hover:scale-105 group-hover:shadow-emerald/50 transition-all duration-500 backdrop-blur-sm`}>
                      {member.role}
                    </div>
                  </div>

                  {/* Stats for Laraib */}
                  {member.stats && (
                    <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/30">
                      {member.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-3xl font-black bg-gradient-to-r from-emerald-400 to-purple-500 bg-clip-text text-transparent mb-1">
                            {stat.value}
                          </div>
                          <div className="text-white/70 text-sm uppercase tracking-wider font-bold">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Achievements */}
                  <div className="space-y-3 mb-10">
                    {member.achievements.slice(0, expandedMember === index ? member.achievements.length : 3).map((achievement, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group-hover:bg-white/10 transition-all">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${member.gradient} animate-bounce`}></div>
                        <span className="text-white font-bold text-lg">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expand Button */}
                  {member.expandable && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className={`w-full py-4 px-8 bg-gradient-to-r ${member.gradient} text-white font-black text-xl rounded-2xl shadow-2xl hover:shadow-emerald/50 transition-all duration-300 border border-white/20 backdrop-blur-sm ${
                        expandedMember === index ? 'rotate-180' : ''
                      }`}
                    >
                      {expandedMember === index ? '▲ COLLAPSE' : '▼ EXPAND'}
                    </button>
                  )}

                  {/* Social Links */}
                  <div className="flex gap-4 justify-center pt-8 border-t border-white/20">
                    {member.social.github && (
                      <a href={member.social.github} target="_blank" rel="noopener noreferrer" className={`group/social w-16 h-16 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-2xl hover:scale-125 hover:rotate-12 transition-all duration-500 hover:shadow-emerald/50`} title="GitHub">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {member.social.portfolio && (
                      <a href={member.social.portfolio} target="_blank" rel="noopener noreferrer" className={`group/social w-16 h-16 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-2xl hover:scale-125 hover:rotate-12 transition-all duration-500 hover:shadow-emerald/50`} title="Portfolio">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                        </svg>
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className={`group/social w-16 h-16 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-2xl hover:scale-125 hover:rotate-12 transition-all duration-500 hover:shadow-emerald/50`} title="LinkedIn">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    )}
                    {member.social.email && (
                      <a href={member.social.email} className={`group/social w-16 h-16 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-2xl hover:scale-125 hover:rotate-12 transition-all duration-500 hover:shadow-emerald/50`} title="Email">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Join Us Card */}
          <div className="group relative lg:col-span-3" style={{animation: 'slideIn4 1.2s ease-out forwards'}}>
            <div className="relative h-[300px] bg-gradient-to-br from-emerald-500/20 via-blue-500/20 to-purple-600/20 backdrop-blur-3xl border-2 border-white/30 rounded-3xl shadow-2xl hover:shadow-emerald/50 transition-all duration-700 hover:scale-105 p-12 flex items-center justify-center text-center">
              <div>
                <div className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl animate-spin-slow">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
                  </svg>
                </div>
                <h3 className="text-5xl font-black text-white mb-4 bg-gradient-to-r from-emerald-400 to-purple-500 bg-clip-text">
                  JOIN US
                </h3>
                <p className="text-xl text-white/80 mb-8 max-w-md mx-auto">
                  Ready to create something legendary?
                </p>
                <button className="px-12 py-6 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-600 text-white font-black text-2xl rounded-3xl shadow-2xl hover:shadow-emerald/50 hover:scale-110 transition-all duration-500 border-2 border-white/30 backdrop-blur-sm">
                  🚀 Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn1 { 0% { opacity: 0; transform: translateX(-100px); } 100% { opacity: 1; transform: translateX(0); } }
        @keyframes slideIn2 { 0% { opacity: 0; transform: translateY(-100px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes slideIn3 { 0% { opacity: 0; transform: translateX(100px); } 100% { opacity: 1; transform: translateX(0); } }
        @keyframes slideIn4 { 0% { opacity: 0; transform: scale(0.5); } 100% { opacity: 1; transform: scale(1); } }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .rotate-y-5 { transform: rotateY(5deg); }
        @keyframes spin-slow { 0%, 100% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        @media (max-width: 1024px) {
          .perspective-1000, .transform-style-3d { perspective: none; transform-style: flat; }
        }
      `}</style>
    </section>
  );
}
