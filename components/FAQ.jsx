"use client";

import { useRef, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function FAQ({ faqData }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const answerRefs = useRef([]);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      collapse(index);
      setActiveIndex(null);
    } else {
      if (activeIndex !== null) {
        collapse(activeIndex, () => {
          expand(index);
          setActiveIndex(index);
        });
      } else {
        expand(index);
        setActiveIndex(index);
      }
    }
  };

  const expand = (index) => {
    const el = answerRefs.current[index];
    if (!el) return;
    gsap.killTweensOf(el);
    el.style.display = "block";
    gsap.fromTo(
      el,
      { height: 0, opacity: 0 },
      {
        height: el.scrollHeight,
        opacity: 1,
        duration: 0.45,
        ease: "power3.out",
        onComplete: () => (el.style.height = "auto"),
      },
    );
  };

  const collapse = (index, cb) => {
    const el = answerRefs.current[index];
    if (!el) return;
    gsap.killTweensOf(el);
    gsap.to(el, {
      height: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: () => {
        el.style.display = "none";
        cb?.();
      },
    });
  };

  return (
    <section className="relative py-28 bg-gradient-to-b from-[#0f172a] via-[#020617] to-black text-white overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="w-[600px] h-[600px] bg-purple-600 blur-[160px] rounded-full absolute -top-40 -left-40" />
        <div className="w-[500px] h-[500px] bg-cyan-600 blur-[160px] rounded-full absolute bottom-0 right-0" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-center text-4xl md:text-5xl font-extrabold mb-20 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {faqData.title}
        </motion.h2>

        <div className="space-y-8">
          {faqData.faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-500 shadow-lg
                ${isActive ? "shadow-purple-500/20 scale-[1.01]" : "hover:shadow-cyan-500/10 hover:bg-white/10"}
                `}
              >
                {/* Question */}
                <div
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center justify-between gap-6 cursor-pointer"
                >
                  <h3
                    className={`text-lg md:text-xl font-semibold transition-colors duration-300
                    ${isActive ? "text-cyan-400" : "text-white"}
                  `}
                  >
                    {faq.question}
                  </h3>

                  <span
                    className={`p-3 rounded-full border transition-all duration-500
                    ${
                      isActive
                        ? "rotate-180 border-cyan-400 text-cyan-400 shadow-lg shadow-cyan-500/20"
                        : "border-white/30 text-gray-300 group-hover:text-white"
                    }
                  `}
                  >
                    {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
                  </span>
                </div>

                {/* Divider */}
                <span
                  className={`block mt-4 h-[1px] w-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-opacity duration-500
                  ${isActive ? "opacity-100" : "opacity-40"}
                `}
                />

                {/* Answer */}
                <div
                  ref={(el) => (answerRefs.current[index] = el)}
                  className="mt-6 text-gray-300 leading-relaxed overflow-hidden"
                  style={{ height: 0, opacity: 0, display: "none" }}
                >
                  {faq.answer}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
