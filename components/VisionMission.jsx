"use client";

import { FaEye, FaBullseye } from "react-icons/fa";
import { motion } from "framer-motion";

function InfoCard({ icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg md:p-7 hover:shadow-primary/50"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-60" />

      <div className="flex items-start gap-4">
        <div className="flex w-16 h-16 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-md text-2xl">
          {icon}
        </div>

        <div>
          <h3 className="text-lg font-semibold leading-tight text-secondary md:text-xl">
            {title}
          </h3>
          {Array.isArray(desc) ? (
            <ul className="mt-3 space-y-2 text-sm text-gray-600 md:text-base list-disc list-inside">
              {desc.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-sm leading-relaxed text-gray-600 md:text-base">
              {desc}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function VisionMission() {
  const items = [
    {
      title: "Our Vision",
      desc: "To become a globally trusted creative studio that sets new standards in visual storytelling—where innovation, artistic excellence, and technical precision come together to elevate brands and bring ideas to life.",
      icon: <FaEye />,
    },
    {
      title: "Our Mission",
      desc: [
        "Deliver world-class Image, VFX, 3D, Animation, and Video solutions with uncompromising quality.",
        "Help brands stand out through visually powerful, detail-driven creative execution.",
        "Maintain fast, reliable turnaround without sacrificing artistic excellence.",
        "Build long-term partnerships through transparency, consistency, and trust.",
        "Continuously evolve with industry trends, tools, and creative innovation.",
      ],
      icon: <FaBullseye />,
    },
  ];

  return (
    <section className="relative max-w-7xl mx-auto py-14 md:py-20 px-6 md:px-0">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="text-primary font-medium tracking-widest uppercase mb-2">
          Light Studio360 • Image • VFX • 3D • Animation
        </p>

        <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
          Vision & Mission Behind Our Creative Excellence
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600 md:text-base">
          Driving visual excellence through creativity, technology, and
          precision—helping brands communicate, inspire, and grow across global
          markets.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {items.map((it) => (
          <InfoCard
            key={it.title}
            icon={it.icon}
            title={it.title}
            desc={it.desc}
          />
        ))}
      </div>
    </section>
  );
}
