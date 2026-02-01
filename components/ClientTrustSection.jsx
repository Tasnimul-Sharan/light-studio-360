// "use client";

// import { useEffect, useRef, useState } from "react";

// const stats = [
//   {
//     label: "Happy Clients",
//     value: 1000,
//     gradient: "from-blue-400 to-cyan-400",
//   },
//   {
//     label: "Completed Projects",
//     value: 400,
//     gradient: "from-purple-400 to-pink-400",
//   },
//   {
//     label: "Years in Business",
//     value: 5,
//     gradient: "from-orange-400 to-red-400",
//   },
//   {
//     label: "Countries Served",
//     value: 50,
//     gradient: "from-green-400 to-emerald-400",
//   },
// ];

// export default function ClientTrustSection() {
//   const sectionRef = useRef(null);
//   const countersRef = useRef([]);
//   const [hasAnimated, setHasAnimated] = useState(false);

//   useEffect(() => {
//     if (!sectionRef.current) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !hasAnimated) {
//           animateCounters();
//           setHasAnimated(true);
//         }
//       },
//       { threshold: 0.3 }, // 30% visible
//     );

//     observer.observe(sectionRef.current);

//     return () => observer.disconnect();
//   }, [hasAnimated]);

//   const animateCounters = () => {
//     countersRef.current.forEach((el, index) => {
//       if (!el) return;

//       const target = stats[index].value;
//       let current = 0;
//       const increment = Math.max(1, Math.floor(target / 80));

//       const update = () => {
//         current += increment;
//         if (current >= target) {
//           el.innerText = target.toString();
//         } else {
//           el.innerText = current.toString();
//           requestAnimationFrame(update);
//         }
//       };

//       update();
//     });
//   };

//   return (
//     <section
//       ref={sectionRef}
//       id="client-trust"
//       className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-16 md:p-28"
//     >
//       <div className="max-w-6xl mx-auto">
//         {/* Heading */}
//         <div className="text-center mb-10">
//           <h2
//             className="text-3xl md:text-4xl font-black text-white mb-4"
//             style={{ fontFamily: "var(--heading-font)" }}
//           >
//             Trusted By Global Brands
//           </h2>
//           <p className="text-gray-300">
//             Join 1000+ satisfied clients across 50+ countries
//           </p>
//         </div>

//         {/* Stats */}
//         <div className="grid gap-8 md:grid-cols-4">
//           {stats.map((item, index) => (
//             <div
//               key={item.label}
//               className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center"
//             >
//               <div
//                 ref={(el) => (countersRef.current[index] = el)}
//                 className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`}
//               >
//                 0
//               </div>
//               <p className="text-gray-300 mt-2">{item.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";

/* =======================
   DATA
======================= */
const STATS = [
  {
    label: "Happy Clients",
    value: 1000,
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    label: "Completed Projects",
    value: 400,
    gradient: "from-purple-400 to-pink-400",
  },
  {
    label: "Years in Business",
    value: 5,
    gradient: "from-orange-400 to-red-400",
  },
  {
    label: "Countries Served",
    value: 50,
    gradient: "from-green-400 to-emerald-400",
  },
];

/* =======================
   COMPONENT
======================= */
export default function ClientTrustSection() {
  const sectionRef = useRef(null);
  const countersRef = useRef([]);
  const [hasAnimated, setHasAnimated] = useState(false);

  /* -----------------------
     Scroll Observer
  ----------------------- */
  useEffect(() => {
    if (!sectionRef.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCounters();
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  /* -----------------------
     Counter Animation
  ----------------------- */
  const animateCounters = () => {
    countersRef.current.forEach((el, index) => {
      if (!el) return;

      const target = STATS[index].value;
      let current = 0;
      const step = Math.max(1, Math.floor(target / 80));

      const tick = () => {
        current += step;
        if (current >= target) {
          el.textContent = target.toString();
        } else {
          el.textContent = current.toString();
          requestAnimationFrame(tick);
        }
      };

      tick();
    });
  };

  /* =======================
     JSX
  ======================= */
  return (
    <section
      ref={sectionRef}
      id="client-trust"
      className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-16 md:p-28"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <SectionHeader />

        {/* Stats Grid */}
        <div className="grid gap-8 md:grid-cols-4">
          {STATS.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              refCallback={(el) => (countersRef.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =======================
   SUB COMPONENTS
======================= */

function SectionHeader() {
  return (
    <div className="text-center">
      <h2
        className="text-3xl md:text-4xl font-black text-white mb-4"
        style={{ fontFamily: "var(--heading-font)" }}
      >
        Trusted By Global Brands
      </h2>
      <p className="text-gray-300">
        Join 1000+ satisfied clients across 50+ countries
      </p>
    </div>
  );
}

function StatCard({ stat, refCallback }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
      <div
        ref={refCallback}
        className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient}`}
      >
        0
      </div>
      <p className="text-gray-300 mt-2">{stat.label}</p>
    </div>
  );
}
