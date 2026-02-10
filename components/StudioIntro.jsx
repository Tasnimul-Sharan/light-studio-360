"use client";

import { motion } from "framer-motion";
import SectionBadge from "./SectionBadge";

export default function StudioIntro() {
  return (
    <section className="bg-light py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
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

          <p className="text-gray-600 leading-relaxed">
            From high-end image editing and cinematic VFX to 3D modeling and
            video production — our studio is fully equipped to handle global
            client projects with precision and creativity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
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
