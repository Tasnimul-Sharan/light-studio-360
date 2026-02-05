"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Button from "./Button";
import SectionBadge from "./SectionBadge";

const StudioHero = ({ creativeContent }) => {
  const router = useRouter();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${creativeContent.backgroundImage})` }}
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      />

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 text-center text-white">
        <SectionBadge text="Light Studio360" />

        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9 }}
        >
          {creativeContent.title}
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          {creativeContent.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            onClick={() => router.push("/services")}
            className="
              px-8 py-4 rounded-md font-semibold tracking-wide
              bg-gradient-to-r from-primary to-secondary
              hover:from-secondary hover:to-primary
              transition-all duration-500
            "
          >
            {creativeContent.buttonText}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default StudioHero;
