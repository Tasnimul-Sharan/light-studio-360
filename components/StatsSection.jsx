// import {
//   FaCalendarAlt,
//   FaLayerGroup,
//   FaGlobeAsia,
//   FaStore,
//   FaMapMarkedAlt,
// } from "react-icons/fa";

// const stats = [
//   {
//     icon: FaCalendarAlt,
//     number: "2018",
//     label: "Founded",
//   },
//   {
//     icon: FaLayerGroup,
//     number: "4",
//     label: "Business Units",
//   },
//   {
//     icon: FaGlobeAsia,
//     number: "3+",
//     label: "Export Regions",
//   },
//   {
//     icon: FaStore,
//     number: "1st",
//     label: "Retail Chain",
//   },
//   {
//     icon: FaMapMarkedAlt,
//     number: "100%",
//     label: "Bangladesh Coverage",
//   },
// ];

// export default function StatsSection() {
//   return (
//     // <section className="relative py-24 bg-primary overflow-hidden">
//     //   {/* Soft overlay */}
//     //   <div className="absolute inset-0 bg-black/10" />

//     //   <div className="relative max-w-7xl mx-auto px-6">
//     //     <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
//     //       {stats.map((stat, idx) => {
//     //         const Icon = stat.icon;
//     //         return (
//     //           <div
//     //             key={idx}
//     //             className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition"
//     //           >
//     //             <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-white text-red-600">
//     //               <Icon className="text-xl" />
//     //             </div>

//     //             <div className="text-3xl md:text-4xl font-extrabold text-white">
//     //               {stat.number}
//     //             </div>

//     //             <div className="text-sm text-red-100 mt-1">{stat.label}</div>
//     //           </div>
//     //         );
//     //       })}
//     //     </div>
//     //   </div>
//     // </section>

//     <section className="py-24 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="bg-primary rounded-3xl px-8 py-14 relative overflow-hidden">
//           <div className="absolute inset-0 bg-black/10" />

//           <div className="relative grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
//             {stats.map((stat, idx) => {
//               const Icon = stat.icon;
//               return (
//                 <div
//                   key={idx}
//                   className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
//                 >
//                   <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-white text-red-600">
//                     <Icon className="text-xl" />
//                   </div>
//                   <div className="text-3xl font-extrabold text-white">
//                     {stat.number}
//                   </div>
//                   <div className="text-sm text-red-100 mt-1">{stat.label}</div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { FaUsers, FaSeedling, FaStore, FaChartLine } from "react-icons/fa";

// const stats = [
//   {
//     icon: FaUsers,
//     value: "10M+",
//     label: "Customers Served",
//   },
//   {
//     icon: FaSeedling,
//     value: "50K+",
//     label: "Farmers Empowered",
//   },
//   {
//     icon: FaStore,
//     value: "300+",
//     label: "Retail Outlets",
//   },
//   {
//     icon: FaChartLine,
//     value: "1B+",
//     label: "Digital Reach",
//   },
// ];

// export default function StatsImpact() {
//   return (
//     <section className="py-24 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="bg-primary rounded-3xl px-8 py-14 relative overflow-hidden">
//           {/* Soft overlay */}
//           <div className="absolute inset-0 bg-black/10" />

//           <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             {stats.map((stat, idx) => {
//               const Icon = stat.icon;

//               return (
//                 <div
//                   key={idx}
//                   className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
//                 >
//                   <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-white text-red-600">
//                     <Icon className="text-xl" />
//                   </div>

//                   <div className="text-3xl md:text-4xl font-extrabold text-white">
//                     {stat.value}
//                   </div>

//                   <div className="text-sm text-red-100 mt-1">{stat.label}</div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import { FaUsers, FaSeedling, FaStore, FaChartLine } from "react-icons/fa";

const stats = [
  {
    icon: FaUsers,
    value: 10,
    suffix: "M+",
    label: "Customers Served",
  },
  {
    icon: FaSeedling,
    value: 50,
    suffix: "K+",
    label: "Farmers Empowered",
  },
  {
    icon: FaStore,
    value: 300,
    suffix: "+",
    label: "Retail Outlets",
  },
  {
    icon: FaChartLine,
    value: 1,
    suffix: "B+",
    label: "Digital Reach",
  },
];

function CountUp({ value, suffix, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1200;
    const stepTime = 16;
    const increment = value / (duration / stepTime);

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [start, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsImpact() {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary rounded-3xl px-8 py-14 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;

              return (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                >
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-white text-red-600">
                    <Icon className="text-xl" />
                  </div>

                  <div className="text-3xl md:text-4xl font-extrabold text-white">
                    <CountUp
                      value={stat.value}
                      suffix={stat.suffix}
                      start={startCount}
                    />
                  </div>

                  <div className="text-sm text-red-100 mt-1">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
