// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";

// export default function projectSlideshow() {
//   const images = [
//     "/Slideshow/1 (1).jpeg",
//     "/Slideshow/1 (2).jpeg",
//     "/Slideshow/1 (3).jpeg",
//     "/Slideshow/1 (4).jpeg",
//     "/Slideshow/1 (5).jpeg",
//     "/Slideshow/1 (6).jpeg",
//     "/Slideshow/1 (7).jpeg",
//     "/Slideshow/1.png",
//     "/Slideshow/2.png",
//     "/Slideshow/3.png",
//     "/Slideshow/4.png",
//     "/Slideshow/5.png",
//     "/Slideshow/background remove.png",
//     "/Slideshow/background.png",
//     "/Slideshow/M1.png",
//     "/Slideshow/M2.png",
//     "/Slideshow/M3.png",
//     "/Slideshow/masking.jpg",
//     "/Slideshow/Masking.png",
//     "/Slideshow/neck.jpg",
//     "/Slideshow/s1.png",
//     "/Slideshow/s2.png",
//     "/Slideshow/s3.png",
//     "/Slideshow/s4.png",
//     "/Slideshow/s5.png",
//     "/Slideshow/Bracelet.png",
//     "/Slideshow/Chain.png",
//     "/Slideshow/Earring.png",
//     "/Slideshow/Necklace.png",
//     "/Slideshow/Ring.png",
//     "/Slideshow/Shoesdummy.png",
//   ];

//   const [current, setCurrent] = useState(0);
//   const total = images.length;

//   const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
//   const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

//   // Auto Slide
//   useEffect(() => {
//     const timer = setInterval(nextSlide, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="w-full p-10 md:p-16 bg-gray-50">
//       <div className="max-w-5xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full text-sm font-bold mb-4">
//             OUR project
//           </div>
//           <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
//             Gallery Showcase
//           </h2>
//           <p className="text-lg text-gray-300">
//             Explore our finest work – Professional image editing
//           </p>
//         </div>

//         {/* Slideshow */}
//         <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
//           <div className="aspect-video relative flex items-center justify-center">
//             <Image
//               src={images[current]}
//               alt="project"
//               fill
//               className="object-cover w-full h-full"
//               priority
//             />

//             {/* Prev */}
//             <button
//               onClick={prevSlide}
//               className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full"
//             >
//               ‹
//             </button>

//             <button
//               onClick={nextSlide}
//               className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full"
//             >
//               ›
//             </button>

//             {/* Counter */}
//             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
//               {current + 1} / {total}
//             </div>
//           </div>

//           {/* Thumbnails */}
//           <div className="bg-gray-800 p-4 overflow-x-auto flex gap-3">
//             {images.map((img, i) => (
//               <button
//                 key={i}
//                 onClick={() => setCurrent(i)}
//                 className={`w-20 h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 ${
//                   current === i
//                     ? "border-blue-500 opacity-100"
//                     : "border-transparent opacity-50 hover:opacity-100"
//                 }`}
//               >
//                 <Image
//                   src={img}
//                   alt="thumb"
//                   width={80}
//                   height={80}
//                   className="object-cover w-full h-full"
//                 />
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import SectionBadge from "./SectionBadge";

export default function ProjectSlideshow() {
  const images = [
    // "/Slideshow/1 (1).jpeg",
    // "/Slideshow/1 (2).jpeg",
    // "/Slideshow/1 (3).jpeg",
    // "/Slideshow/1 (4).jpeg",
    // "/Slideshow/1 (5).jpeg",
    // "/Slideshow/1 (6).jpeg",
    // "/Slideshow/1 (7).jpeg",
    "/Slideshow/1.png",
    "/Slideshow/2.png",
    "/Slideshow/3.png",
    "/Slideshow/4.png",
    "/Slideshow/5.png",
    "/Slideshow/background remove.png",
    "/Slideshow/background.png",
    "/Slideshow/M1.png",
    "/Slideshow/M2.png",
    "/Slideshow/M3.png",
    "/Slideshow/masking.jpg",
    "/Slideshow/Masking.png",
    "/Slideshow/neck.jpg",
    "/Slideshow/s1.png",
    "/Slideshow/s2.png",
    "/Slideshow/s3.png",
    "/Slideshow/s4.png",
    "/Slideshow/s5.png",
    "/Slideshow/Bracelet.png",
    "/Slideshow/Chain.png",
    "/Slideshow/Earring.png",
    "/Slideshow/Necklace.png",
    "/Slideshow/Ring.png",
    "/Slideshow/Shoesdummy.png",
    "/Slideshow/Skirt (1).png",
    "/Slideshow/Skirt (2).png",
    "/Slideshow/Skirt (3).png",
  ];

  const [current, setCurrent] = useState(0);
  const total = images.length;

  const nextSlide = () => setCurrent((p) => (p + 1) % total);
  const prevSlide = () => setCurrent((p) => (p - 1 + total) % total);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionBadge text="Our project" />

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Gallery Showcase
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Explore our finest work — professional image editing & visual
            craftsmanship
          </p>
        </div>

        {/* Slideshow */}
        <div className="relative rounded-3xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]">
          <div className="relative aspect-video bg-black group">
            <Image
              src={images[current]}
              alt="project"
              fill
              priority
              className="object-cover object-center transition-transform duration-[1200ms] group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2
              backdrop-blur-xl bg-white/10 hover:bg-white/20
              border border-white/20 text-white
              p-4 rounded-full transition-all"
            >
              <HiChevronLeft size={22} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2
              backdrop-blur-xl bg-white/10 hover:bg-white/20
              border border-white/20 text-white
              p-4 rounded-full transition-all"
            >
              <HiChevronRight size={22} />
            </button>

            {/* Counter */}
            <div
              className="absolute bottom-6 left-1/2 -translate-x-1/2
              backdrop-blur-md bg-black/50
              text-white text-xs px-4 py-2 rounded-full tracking-wide"
            >
              {current + 1} / {total}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="bg-black/80 backdrop-blur-md p-4 flex gap-3 overflow-x-auto">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`relative w-20 h-20 rounded-xl overflow-hidden border
                transition-all duration-300 flex-shrink-0
                ${
                  current === i
                    ? "border-primary scale-105 opacity-100"
                    : "border-white/10 opacity-50 hover:opacity-100"
                }`}
              >
                <Image src={img} alt="thumb" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
