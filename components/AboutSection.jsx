// "use client";

// import { motion } from "framer-motion";

// export default function AboutSection() {
//   return (
//     <section className="relative py-24 bg-gray-50 overflow-hidden">
//       {/* Background Accent */}
//       <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>

//       <div className="custom-container mx-auto px-6 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="max-w-4xl"
//         >
//           {/* Section Label */}
//           <p className="uppercase tracking-widest text-sm text-primary font-semibold mb-4">
//             About Redith Group
//           </p>

//           {/* Heading */}
//           <h2 className="text-3xl md:text-5xl font-serif font-semibold text-gray-900 leading-tight mb-6">
//             A Multinational Conglomerate <br className="hidden md:block" />
//             Driving Innovation & Sustainable Growth
//           </h2>

//           {/* Description */}
//           <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
//             Founded in 2018, <span className="font-semibold">Redith Group</span>{" "}
//             has emerged as one of Bangladesh’s most prominent and diversified
//             conglomerates, operating across Digital Marketing & IT, Consumer
//             Brands, Agribusiness, and Retail Chain.
//           </p>

//           <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-10">
//             Guided by innovation, AI-driven solutions, and strong ethical
//             values, Redith delivers long-term value by empowering businesses,
//             communities, and industries while contributing to sustainable
//             economic growth.
//           </p>

//           {/* Stats */}
//           {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {[
//               ["2018", "Founded"],
//               ["4", "Strategic SBUs"],
//               ["AI", "Innovation Driven"],
//               ["Global", "Market Vision"],
//             ].map(([value, label]) => (
//               <div
//                 key={label}
//                 className="bg-white rounded-xl shadow-sm p-5 text-center"
//               >
//                 <p className="text-3xl font-bold text-primary">{value}</p>
//                 <p className="text-sm text-gray-600 mt-1">{label}</p>
//               </div>
//             ))}
//           </div> */}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import SectionBadge from "./SectionBadge";

export default function AboutSection() {
  return (
    <section className="relative py-28 bg-gray-50 overflow-hidden">
      {/* Soft Background Texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />

      <div className="custom-container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-5xl flex gap-10"
        >
          {/* Vertical Brand Accent */}
          <div className="hidden md:block w-1 bg-primary/80 rounded-full mt-3" />

          {/* Content */}
          <div>
            {/* Label */}
            {/* <p className="uppercase tracking-[0.25em] text-xs text-primary font-semibold mb-4">
              About Redith Group
            </p> */}
            <SectionBadge text="About Redith Group" />

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-gray-900 leading-tight mb-8">
              A Multinational Conglomerate <br className="hidden md:block" />
              Driving Innovation &{" "}
              <span className="text-primary">Sustainable Growth</span>
            </h2>

            {/* Highlight Statement */}
            <p className="text-lg md:text-xl text-gray-800 font-medium mb-6">
              Building future-ready businesses across Bangladesh and beyond.
            </p>

            {/* Description */}
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 max-w-3xl">
              Founded in 2018,{" "}
              <span className="font-semibold">Redith Group</span> has emerged as
              one of Bangladesh’s most prominent and diversified conglomerates,
              operating across Digital Marketing & IT, Consumer Brands,
              Agribusiness, and Retail Chain.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-10 max-w-3xl">
              Guided by innovation, AI-driven solutions, and strong ethical
              values, Redith delivers long-term value by empowering businesses,
              communities, and industries while contributing to sustainable
              economic growth.
            </p>

            {/* Executive CTA (Optional) */}
            <div>
              <a
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold group"
              >
                Learn more about Redith
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
