// "use client";
// import React, { useState } from "react";

// const CustomerFeedback = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const testimonials = [
//     {
//       id: 1,
//       name: "Anjali Sharma",
//       location: "Delhi",
//       image: "/images/cu1.png",
//       feedback:
//         "Focuses on trying multiple products, better quality and pricing compared to competitors, and being happy with the brand Highlights health benefits, aromatic Oil, commitment to transparency, no additives, pure authentic products, and more things Nice. !",
//     },
//     {
//       id: 2,
//       name: "Tahir",
//       location: "Mumbai",
//       image: "/images/cu2.png",
//       feedback:
//         "Emphasizes freshness, purity, farm-fresh taste, rich curd, perfect paneer, ethical sourcing, and confidence in serving family! Focuses on trying multiple products, better quality and pricing compared to competitors and being happy with the brand Highlights health benefits, aromatic ghee, commitment to transparency, no additives, pure authentic products, and kids loving the milk!",
//     },
//     {
//       id: 3,
//       name: "Tanya Malhotra",
//       location: "Bangalore",
//       image: "/images/cu3.png",
//       feedback:
//         "Highlights health benefits, aromatic ghee, commitment to transparency, no additives, pure authentic products, and kids loving the milk!Emphasizes freshness, purity, farm-fresh taste, rich curd, perfect paneer, ethical sourcing, and confidence in serving family! Focuses on trying multiple products, better quality and pricing compared to competitors",
//     },
//     {
//       id: 4,
//       name: "Shobita Malhotra",
//       location: "Chennai",
//       image: "/images/cu4.png",
//         feedback:"Focuses on trying multiple products, better quality and pricing compared to competitors and being happy with the brand Highlights health benefits, aromatic ghee, commitment to transparency, no additives, pure authentic products, and kids loving the milk!Emphasizes freshness, purity, farm-fresh taste, rich curd, perfect paneer, ethical sourcing, and confidence in serving family!",
// }
//   ];

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
//   };

//   const currentTestimonial = testimonials[currentIndex];

//   return (
//     <section className="py-16 px-4 sm:py-20 sm:px-6 lg:py-24 bg-gradient-to-b from-pink-50 to-white relative overflow-hidden">
//       {/* Decorative background elements */}
//       <div className="absolute top-0 left-0 w-full h-full opacity-10">
//         <div className="absolute top-20 left-10 w-32 h-32 sm:w-48 sm:h-48 bg-pink-300 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-32 h-32 sm:w-48 sm:h-48 bg-pink-300 rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-12 sm:mb-16">
//           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
//             Customer Feedback
//           </h2>
//           <p className="text-lg sm:text-xl font-medium text-gray-700">
//             What Customer Say About Us !
//           </p>
//           <div className="mt-4 sm:mt-6 w-24 sm:w-32 h-1 bg-red-500 mx-auto"></div>
//         </div>

//         {/* Testimonial Content */}
//         <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-8 sm:mb-12">
//           {/* Customer Image */}
//           <div className="flex-shrink-0">
//             <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
//               <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-pink-100 rounded-full"></div>
//               <div className="absolute inset-2 bg-white rounded-full overflow-hidden border-4 border-white shadow-2xl">
//                 <img
//                   src={currentTestimonial.image}
//                   alt={currentTestimonial.name}
//                   className="w-full h-full object-cover"
//                   loading="lazy"
//                 />
//               </div>
//               {/* Decorative dots around image */}
//               <div className="absolute -top-4 -left-4 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full"></div>
//               <div className="absolute top-10 -right-6 w-4 h-4 sm:w-6 sm:h-6 bg-pink-400 rounded-full"></div>
//               <div className="absolute -bottom-6 left-1/4 w-5 h-5 sm:w-7 sm:h-7 bg-red-400 rounded-full"></div>
//             </div>
//           </div>

//           {/* Feedback Content */}
//           <div className="flex-1 max-w-2xl text-center lg:text-left px-4 sm:px-0">
//             {/* Quote Icon */}
//             <div className="mb-4 sm:mb-6">
//               <svg
//                 className="w-12 h-12 sm:w-16 sm:h-16 text-red-500 mx-auto lg:mx-0"
//                 fill="currentColor"
//                 viewBox="0 0 32 32"
//               >
//                 <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
//               </svg>
//             </div>

//             {/* Feedback Text */}
//             <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 italic">
//               {currentTestimonial.feedback}
//             </p>

//             {/* Customer Name */}
//             <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
//               - {currentTestimonial.name}
//             </h3>
//             <p className="text-base sm:text-lg text-gray-600">
//               {currentTestimonial.location}
//             </p>
//           </div>
//         </div>

//         {/* Navigation Controls */}
//         <div className="flex items-center justify-center gap-6 sm:gap-8">
//           {/* Previous Button */}
//           <button
//             onClick={handlePrev}
//             className="group w-12 h-12 sm:w-14 sm:h-14 bg-white hover:bg-red-500 border-2 border-gray-300 hover:border-red-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
//             aria-label="Previous testimonial"
//           >
//             <svg
//               className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700 group-hover:text-white transition-colors"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//           </button>

//           {/* Indicator Dots */}
//           <div className="flex gap-2 sm:gap-3">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`transition-all duration-300 rounded-full ${
//                   index === currentIndex
//                     ? "w-3 h-3 sm:w-4 sm:h-4 bg-gray-900 ring-2 ring-gray-900 ring-offset-2"
//                     : "w-3 h-3 sm:w-4 sm:h-4 bg-gray-300 hover:bg-gray-400"
//                 }`}
//                 aria-label={`Go to testimonial ${index + 1}`}
//               />
//             ))}
//           </div>

//           {/* Next Button */}
//           <button
//             onClick={handleNext}
//             className="group w-12 h-12 sm:w-14 sm:h-14 bg-white hover:bg-red-500 border-2 border-gray-300 hover:border-red-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
//             aria-label="Next testimonial"
//           >
//             <svg
//               className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700 group-hover:text-white transition-colors"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CustomerFeedback;





// "use client";
// import React, { useState } from "react";

// const CustomerFeedback = () => {
//   const testimonials = [
//     {
//       id: 1,
//       name: "Anjali Sharma",
//       location: "Delhi",
//       image: "/images/cu1.png",
//       feedback:
//         "Focuses on trying multiple products, better quality and pricing compared to competitors, and being happy with the brand. Highlights health benefits and aromatic oil.",
//       highlight: "Quality products at competitive prices"
//     },
//     {
//       id: 2,
//       name: "Tahir",
//       location: "Mumbai",
//       image: "/images/cu2.png",
//       feedback:
//         "Emphasizes freshness, purity, farm-fresh taste, rich curd, perfect paneer, ethical sourcing, and confidence in serving family!",
//       highlight: "Pure and authentic products"
//     },
//     {
//       id: 3,
//       name: "Tanya Malhotra",
//       location: "Bangalore",
//       image: "/images/cu3.png",
//       feedback:
//         "Highlights health benefits, aromatic ghee, commitment to transparency, no additives, pure authentic products, and kids loving the milk!",
//       highlight: "No additives, pure authentic"
//     },
//     {
//       id: 4,
//       name: "Shobita Malhotra",
//       location: "Chennai",
//       image: "/images/cu4.png",
//       feedback:
//         "Focuses on trying multiple products, better quality and pricing compared to competitors. Emphasizes freshness, purity, and ethical sourcing.",
//       highlight: "Better quality and pricing"
//     }
//   ];

//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
//             See what people like about us.
//           </h2>
//         </div>

//         {/* Testimonials Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {testimonials.map((testimonial) => (
//             <div
//               key={testimonial.id}
//               className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
//             >
//               {/* Star Rating */}
//               <div className="flex gap-1 mb-4">
//                 {[...Array(5)].map((_, i) => (
//                   <svg
//                     key={i}
//                     className="w-5 h-5 text-yellow-400 fill-current"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
//                   </svg>
//                 ))}
//               </div>

//               {/* Feedback Text */}
//               <p className="text-gray-700 text-sm leading-relaxed mb-6">
//                 <span className="bg-yellow-200 px-1">{testimonial.highlight}</span>
//                 {" "}{testimonial.feedback}
//               </p>

//               {/* Customer Info */}
//               <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
//                   loading="lazy"
//                 />
//                 <div>
//                   <h4 className="font-bold text-gray-900 text-sm">
//                     {testimonial.name}
//                   </h4>
//                   <p className="text-xs text-gray-600">{testimonial.location}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Navigation Arrows */}
//         <div className="flex justify-center gap-4 mt-12">
//           <button
//             className="w-12 h-12 rounded-full bg-white border border-gray-300 hover:bg-gray-50 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
//             aria-label="Previous"
//           >
//             <svg
//               className="w-5 h-5 text-gray-700"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//           </button>
//           <button
//             className="w-12 h-12 rounded-full bg-white border border-gray-300 hover:bg-gray-50 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
//             aria-label="Next"
//           >
//             <svg
//               className="w-5 h-5 text-gray-700"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CustomerFeedback;





"use client";
import React, { useState } from "react";

const CustomerFeedback = () => {
  const testimonials = [
    {
      id: 1,
      name: "Avinash Kumar",
      location: "9 months ago",
      image: "/images/cu1.png",
      feedback:
        "I have been using VEER BHARAT mustard oil and refined oil for a while now, and I must say, the quality is exceptional! The mustard oil has a rich aroma and pure taste, making my dishes more flavorful and authentic.",
      highlight: "exceptional quality and pure taste"
    },
    {
      id: 2,
      name: "Gunnu Srivastava",
      location: "2 months ago",
      image: "/images/cu2.png",
      feedback:
        "Trust worthy product in quality. My family is using from past 3 years it's Kachi Ghani and Soyabean oil.",
      highlight: "Trust worthy product"
    },
    {
      id: 3,
      name: "SHARAD SRIVASTAV",
      location: "a year ago",
      image: "/images/cu3.png",
      feedback:
        "Purity and healthy quality giving this brand. Hats off Veer Bharat.",
      highlight: "Purity and healthy quality"
    },
    {
      id: 4,
      name: "Santosh Yadav",
      location: "a year ago",
      image: "/images/cu4.png",
      feedback:
        "Excellent quality products",
      highlight: "Excellent quality"
    },
    {
      id: 5,
      name: "Ankit Kumar Jain",
      location: "a year ago",
      image: "/images/cu1.png",
      feedback:
        "Top Growing Brand Must recommend Mustard Oil from personal experience.",
      highlight: "Top Growing Brand"
    },
    {
      id: 6,
      name: "Anjul Bhardwaj",
      location: "2 months ago",
      image: "/images/cu2.png",
      feedback:
        "Nice Product, using since 2022",
      highlight: "using since 2022"
    },
    {
      id: 7,
      name: "Pankaj Yadav",
      location: "11 months ago",
      image: "/images/cu3.png",
      feedback:
        "Good quality product",
      highlight: "Good quality product"
    },
    {
      id: 8,
      name: "Laraib Siddiqui",
      location: "Recently",
      image: "/images/cu4.png",
      feedback:
        "What a cool and wonderful company. There all product and office environment is too much cool. Nice",
      highlight: "wonderful company"
    },
    {
      id: 9,
      name: "Vinay Jha",
      location: "9 months ago",
      image: "/images/cu1.png",
      feedback:
        "Superb quality",
      highlight: "Superb quality"
    },
    {
      id: 10,
      name: "Anil Gautam",
      location: "a year ago",
      image: "/images/cu2.png",
      feedback:
        "Good quality and good service",
      highlight: "Good quality and good service"
    },
    {
      id: 11,
      name: "Prabhavati Burla",
      location: "a year ago",
      image: "/images/cu3.png",
      feedback:
        "Excellent product and qualitative service",
      highlight: "Excellent product"
    },
    {
      id: 12,
      name: "Amar Manral",
      location: "a year ago",
      image: "/images/cu4.png",
      feedback:
        "Good quality",
      highlight: "Good quality"
    }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#DFC6F6] via-[#fef9c3] to-[#DFC6F6]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
            See what people like about us.
          </h2>
          <p className="text-lg text-gray-600">Real reviews from real customers</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Feedback Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                <span className="bg-yellow-200 px-1">{testimonial.highlight}</span>
                {" "}{testimonial.feedback}
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-12">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-white border border-gray-300 hover:bg-gray-50 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
            aria-label="Previous"
          >
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          
          {/* Page Indicator */}
          <div className="flex items-center gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentPage ? "w-8 bg-gray-900" : "bg-gray-300"
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-white border border-gray-300 hover:bg-gray-50 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
            aria-label="Next"
          >
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;