// export default function About() {
//   return (
//     <section className="relative bg-white md:py-28 py-20 overflow-hidden">
//       {/* Background Glow */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="w-[500px] h-[500px] bg-purple-600/30 blur-[180px] rounded-full absolute -top-32 -left-32" />
//         <div className="w-[400px] h-[400px] bg-cyan-500/30 blur-[160px] rounded-full absolute bottom-0 right-0" />
//       </div>

//       <div className="relative max-w-5xl mx-auto px-6">
//         {/* Small Label */}
//         <p className="text-sm uppercase tracking-[0.25em] text-cyan-400 mb-6 font-semibold">
//           About Light Studio360
//         </p>

//         {/* Headline */}
//         <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
//           Crafting Visual Stories That Captivate and Convert
//         </h2>

//         {/* Divider */}
//         <div className="w-20 h-[3px] bg-gradient-to-r from-cyan-400 to-purple-500 mb-12 rounded-full" />

//         {/* Body */}
//         <div className="space-y-8 text-gray-300 text-base md:text-lg leading-relaxed">
//           <p>
//             Founded in <strong>2020</strong>, <strong>Light Studio360</strong>{" "}
//             is an award-winning creative studio dedicated to transforming ideas
//             into stunning digital experiences. Our expertise spans image
//             editing, cinematic VFX, 3D modeling, professional video production,
//             and immersive animations.
//           </p>

//           <p>
//             We work with <strong>1,000+ global brands</strong> across
//             industries, delivering world-class visual solutions that drive
//             engagement and elevate brand presence. Every project is treated as
//             an opportunity to merge creativity, technology, and strategy for
//             maximum impact.
//           </p>

//           <p>
//             At Light Studio360, innovation, precision, and client satisfaction
//             are at the heart of everything we do. Our team of talented creatives
//             leverages the latest tools and techniques to ensure each visual
//             story not only looks spectacular but also achieves measurable
//             results.
//           </p>
//         </div>

//         {/* CTA Button */}
//         <div className="mt-12">
//           <a
//             href="/contact"
//             className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold rounded-xl shadow-xl hover:scale-105 transform transition-all duration-300"
//           >
//             Get in Touch
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function About() {
  return (
    <section className="relative bg-[#0B0F14] md:py-28 py-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[500px] h-[500px] bg-[#D4AF37]/20 blur-[180px] rounded-full absolute -top-32 -left-32" />
        <div className="w-[400px] h-[400px] bg-[#1E2A44]/40 blur-[160px] rounded-full absolute bottom-0 right-0" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Small Label */}
        <p className="text-sm uppercase tracking-[0.25em] text-[#D4AF37] mb-6 font-semibold">
          About Light Studio360
        </p>

        {/* Headline */}
        <h2
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-10 
          bg-clip-text text-transparent 
          bg-gradient-to-r from-[#F5F7FA] to-[#D4AF37]"
        >
          Crafting Visual Stories That Captivate and Convert
        </h2>

        {/* Divider */}
        <div className="w-20 h-[3px] bg-[#D4AF37] mb-12 rounded-full" />

        {/* Body */}
        <div className="space-y-8 text-[#F5F7FA]/80 text-base md:text-lg leading-relaxed">
          <p>
            Founded in <strong className="text-[#F5F7FA]">2020</strong>,{" "}
            <strong className="text-[#F5F7FA]">Light Studio360</strong> is an
            award-winning creative studio dedicated to transforming ideas into
            stunning digital experiences.
          </p>

          <p>
            We work with{" "}
            <strong className="text-[#D4AF37]">1,000+ global brands</strong>{" "}
            across industries, delivering world-class visual solutions that
            elevate brand presence and engagement.
          </p>

          <p>
            Innovation, precision, and client satisfaction are central to
            everything we do—combining creativity with cutting-edge technology
            to deliver measurable results.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <a
            href="/contact"
            className="inline-block px-10 py-4 
              bg-[#D4AF37] text-[#0B0F14] 
              font-bold rounded-xl shadow-xl
              hover:bg-[#F5F7FA] hover:text-[#0B0F14]
              transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
