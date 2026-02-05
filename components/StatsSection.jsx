"use client";

import { useEffect, useRef, useState } from "react";
import SectionBadge from "./SectionBadge";

/* =======================
   DATA
======================= */
const STATS = [
  {
    label: "Happy Clients",
    value: 1000,
    // gradient: "secondary",
  },
  {
    label: "Completed Projects",
    value: 400,
    // gradient: "from-secondary to-primary",
  },
  {
    label: "Years in Business",
    value: 5,
    // gradient: "from-primary to-secondary",
  },
  {
    label: "Countries Served",
    value: 50,
    // gradient: "from-primary to-secondary",
  },
];

/* =======================
   COMPONENT
======================= */
export default function StatsSection() {
  const sectionRef = useRef(null);
  const countersRef = useRef([]);
  const [hasAnimated, setHasAnimated] = useState(false);

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

  const animateCounters = () => {
    countersRef.current.forEach((el, index) => {
      if (!el) return;

      const target = STATS[index].value;
      let current = 0;
      const step = Math.max(1, Math.floor(target / 80));

      const tick = () => {
        current += step;
        if (current >= target) {
          el.textContent = target.toString() + "+";
        } else {
          el.textContent = current.toString();
          requestAnimationFrame(tick);
        }
      };

      tick();
    });
  };

  return (
    <section
      ref={sectionRef}
      id="client-trust"
      className="w-full bg-dark py-20 md:py-28"
    >
      <div className="max-w-6xl mx-auto px-6 space-y-14">
        <SectionHeader />

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


function SectionHeader() {
  return (
    <div className="text-center mb-16 md:mb-20">
      <SectionBadge text="Our Impact" />

      <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
        Building Trust With{" "}
        <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
          Every Project
        </span>
      </h2>
      <p className="text-light">
        Join 1000+ satisfied clients across 50+ countries who trust Light Studio360
        for exceptional 3D, VFX, animation, and image services that drive real
        business results.
      </p>
    </div>
  );
}

function StatCard({ stat, refCallback }) {
  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-3xl text-center hover:scale-105 transition duration-300 shadow-lg">
      <div
        ref={refCallback}
        // className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient}`}
        className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-secondary"
      >
        0
      </div>
      <p className="text-gray-400 mt-3 font-medium">{stat.label}</p>
    </div>
  );
}
