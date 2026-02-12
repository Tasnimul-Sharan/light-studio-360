"use client";

import { motion } from "framer-motion";
import SectionBadge from "./SectionBadge";
import Link from "next/link";

export default function StudioIntro() {
  return (
    <section className="bg-light py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <SectionBadge text="Our Studio" />

          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            A Creative Studio Built for
            <span className="text-secondary"> Visual Excellence</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Light Studio360 is a modern creative production studio where ideas
            turn into powerful visual experiences. Our team works with advanced
            tools, professional workflows, and a passion for quality to deliver
            world-class results.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            From high-end image editing and cinematic VFX to 3D modeling and
            video production — our studio is fully equipped to handle global
            client projects with precision and creativity.
          </p>

          <motion.div
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href="/contact"
              className="
      inline-block
      px-8 py-3
      bg-primary
      text-white
      font-semibold
      rounded-lg
      shadow-lg
      hover:bg-secondary
      transition-all duration-300
      relative overflow-hidden
      group
    "
            >
              <span className="relative z-10">Start a Project</span>

              {/* Hover Shine Line */}
              <span
                className="
        absolute left-[-100%] top-0 h-full w-full
        bg-white/20
        group-hover:left-0
        transition-all duration-500
      "
              />
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="/studio.jpg"
            alt="Light Studio360 Workspace"
            className="rounded-xl shadow-2xl w-full object-cover"
          />

          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
