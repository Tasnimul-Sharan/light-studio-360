// import { pillars } from "@/data/data";

// export default function PillarsSection() {
//   return (
//     <div className="relative z-10 mb-8">
//       <h3 className="text-4xl font-black text-center mb-12 text-gray-800">
//         Our Three Pillars of Success
//       </h3>

//       <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
//         {pillars.map((p, i) => (
//           <div
//             key={i}
//             className={`bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 ${p.border}`}
//           >
//             <h4 className="text-2xl font-bold mb-3 text-gray-800">{p.title}</h4>
//             <p className="text-gray-700">{p.desc}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { pillars } from "@/data/data";

export default function PillarsSection() {
  return (
    <section className="relative z-10 py-20">
      <h3 className="text-4xl md:text-5xl font-bold text-center mb-14 text-primary">
        Our <span className="text-secondary">Three Pillars</span> of Success
      </h3>

      <div className="grid gap-10 md:grid-cols-3 max-w-7xl mx-auto px-6">
        {pillars.map((p, i) => (
          <div
            key={i}
            className="relative bg-white rounded-3xl p-10 shadow-xl border border-secondary/20
                       transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* Accent line */}
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-secondary to-accent rounded-t-3xl" />

            <h4 className="text-2xl font-semibold text-primary mb-4">
              {p.title}
            </h4>
            <p className="text-dark/70 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
