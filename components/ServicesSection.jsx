// "use client";

// import { useEffect, useRef } from "react";
// import Image from "next/image";

// function BeforeAfter({ before, after }) {
//   const containerRef = useRef(null);
//   const afterRef = useRef(null);
//   const handleRef = useRef(null);

//   useEffect(() => {
//     const slider = containerRef.current;
//     const afterImg = afterRef.current;
//     const handle = handleRef.current;

//     let isDragging = false;

//     const updateSlider = (clientX) => {
//       const rect = slider.getBoundingClientRect();
//       let x = clientX - rect.left;
//       x = Math.max(0, Math.min(x, rect.width));
//       const pct = (x / rect.width) * 100;

//       afterImg.style.clipPath = `inset(0 0 0 ${pct}%)`;
//       handle.style.left = `${pct}%`;
//     };

//     const onMouseMove = (e) => isDragging && updateSlider(e.clientX);
//     const onMouseUp = () => (isDragging = false);

//     slider.addEventListener("mousedown", (e) => {
//       isDragging = true;
//       updateSlider(e.clientX);
//     });

//     window.addEventListener("mousemove", onMouseMove);
//     window.addEventListener("mouseup", onMouseUp);

//     return () => {
//       window.removeEventListener("mousemove", onMouseMove);
//       window.removeEventListener("mouseup", onMouseUp);
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full h-[400px] bg-white rounded-xl overflow-hidden cursor-ew-resize"
//     >
//       <Image src={before} alt="before" fill className="object-contain" />
//       <Image
//         ref={afterRef}
//         src={after}
//         alt="after"
//         fill
//         className="object-contain"
//         style={{ clipPath: "inset(0 0 0 50%)" }}
//       />

//       <div
//         ref={handleRef}
//         className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-blue-500"
//       />
//     </div>
//   );
// }

// export default function ServicesSection() {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6 space-y-12">
//         {/* Header */}
//         <div>
//           <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs rounded-full">
//             ⚡ PROFESSIONAL EDITING
//           </span>
//           <h2 className="text-3xl font-black mt-4">AI-Powered Image Editing</h2>
//           <p className="text-gray-600 mt-2">
//             Industry-leading photo editing with AI precision.
//           </p>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-blue-50 border">
//           {[
//             ["24h", "Turnaround"],
//             ["50K+", "Images"],
//             ["99%", "Accuracy"],
//           ].map(([num, label]) => (
//             <div key={label} className="text-center">
//               <h3 className="text-2xl font-bold text-blue-600">{num}</h3>
//               <p className="text-xs text-gray-600 uppercase">{label}</p>
//             </div>
//           ))}
//         </div>

//         {/* Before After */}
//         <BeforeAfter before="/image/before.jpg" after="/image/after.jpg" />

//         {/* Service Cards */}
//         <div className="grid md:grid-cols-3 gap-6">
//           {[
//             {
//               title: "VFX & Visual Effects",
//               color: "purple",
//               img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800",
//             },
//             {
//               title: "3D Modeling & Rendering",
//               color: "orange",
//               img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800",
//             },
//             {
//               title: "Video Production",
//               color: "green",
//               img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800",
//             },
//           ].map((card) => (
//             <div
//               key={card.title}
//               className="bg-white rounded-2xl overflow-hidden shadow hover:-translate-y-2 transition"
//             >
//               <div className="relative h-48">
//                 <Image src={card.img} alt="" fill className="object-cover" />
//               </div>
//               <div className="p-6">
//                 <h3 className="font-bold text-xl">{card.title}</h3>
//                 <p className="text-gray-600 mt-2 text-sm">
//                   Professional high-quality creative services.
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import {
//   FaCamera,
//   FaVideo,
//   FaMagic,
//   FaCube,
//   FaFilm,
//   FaCode,
// } from "react-icons/fa";

// export default function ServicesSection() {
//   const services = [
//     {
//       icon: FaCamera,
//       title: "Image Editing",
//       desc: "Professional retouching, clipping path, background removal and high-end photo enhancement.",
//       id: "services-image",
//     },
//     {
//       icon: FaVideo,
//       title: "Video Production",
//       desc: "Commercial videos, product promos, cinematic edits and storytelling visuals.",
//       id: "services-videos",
//     },
//     {
//       icon: FaMagic,
//       title: "VFX & Compositing",
//       desc: "Hollywood-style visual effects, green screen removal and motion graphics.",
//       id: "services-vfx",
//     },
//     {
//       icon: FaCube,
//       title: "3D Modeling",
//       desc: "Photorealistic product rendering, architectural visuals and CGI creation.",
//       id: "services-3d",
//     },
//     {
//       icon: FaFilm,
//       title: "Animation",
//       desc: "2D & 3D animation, character motion and explainer visuals for brands.",
//       id: "services-animation",
//     },
//     {
//       icon: FaCode,
//       title: "Web Development",
//       desc: "Modern responsive websites, landing pages and UI/UX focused solutions.",
//       id: "services-webdev",
//     },
//   ];

//   return (
//     <section className="bg-dark text-white py-20" id="services">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <div className="text-center mb-14">
//           <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
//             Our{" "}
//             <span className="bg-gradient-to-r from-primary to-purpleAccent bg-clip-text text-transparent">
//               Services
//             </span>
//           </h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Creative solutions designed to elevate your brand with premium
//             visuals and digital experiences.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((item, i) => {
//             const Icon = item.icon;
//             return (
//               <a
//                 key={i}
//                 href={`#${item.id}`}
//                 className="group relative bg-[#111827] rounded-2xl p-8 border border-white/5
//                 hover:border-primary/40 transition-all duration-300
//                 hover:-translate-y-2 shadow-xl"
//               >
//                 {/* Glow */}
//                 <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur-xl bg-primary/10" />

//                 {/* Icon */}
//                 <div
//                   className="w-14 h-14 flex items-center justify-center rounded-xl
//                   bg-gradient-to-br from-primary to-purpleAccent
//                   text-white text-2xl mb-6 shadow-lg"
//                 >
//                   <Icon />
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition">
//                   {item.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-gray-400 text-sm leading-relaxed">
//                   {item.desc}
//                 </p>
//               </a>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import {
  FaCamera,
  FaVideo,
  FaMagic,
  FaCube,
  FaFilm,
  FaCode,
} from "react-icons/fa";

export default function ServicesSection() {
  const services = [
    {
      icon: FaCamera,
      title: "Image Editing",
      desc: "Professional retouching, clipping path, background removal and high-end photo enhancement.",
      id: "services-image",
      img: "/image/services/image-edit.jpg",
    },
    {
      icon: FaVideo,
      title: "Video Production",
      desc: "Commercial videos, product promos and cinematic storytelling visuals.",
      id: "services-videos",
      img: "/image/services/video.jpg",
    },
    {
      icon: FaMagic,
      title: "VFX & Compositing",
      desc: "Hollywood-style visual effects, green screen removal and motion graphics.",
      id: "services-vfx",
      img: "/image/services/vfx.jpg",
    },
    {
      icon: FaCube,
      title: "3D Modeling",
      desc: "Photorealistic product rendering, architectural visuals and CGI creation.",
      id: "services-3d",
      img: "/image/services/3d.jpg",
    },
    {
      icon: FaFilm,
      title: "Animation",
      desc: "2D & 3D animation, character motion and explainer visuals.",
      id: "services-animation",
      img: "/image/services/animation.jpg",
    },
    {
      icon: FaCode,
      title: "Web Development",
      desc: "Modern responsive websites, landing pages and UI/UX solutions.",
      id: "services-webdev",
      img: "/image/services/web.jpg",
    },
  ];

  return (
    <section className="bg-dark text-white py-20" id="services">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-purpleAccent bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Creative solutions designed to elevate your brand with premium
            visuals and digital experiences.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <a
                key={i}
                href={`#${item.id}`}
                className="group relative bg-[#111827] rounded-2xl overflow-hidden
                border border-white/5 hover:border-primary/40
                transition-all duration-300 hover:-translate-y-2 shadow-xl"
              >
                {/* Top Image */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />
                </div>

                {/* Content */}
                <div className="p-8 relative">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-xl
                    bg-gradient-to-br from-primary to-purpleAccent
                    text-white text-xl mb-5 shadow-lg"
                  >
                    <Icon />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 blur-xl bg-primary/10" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
