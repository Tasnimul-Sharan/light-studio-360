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
    <section className="relative py-28 bg-gray-50 text-dark overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="w-[600px] h-[600px] bg-secondary blur-[160px] rounded-full absolute -top-40 -left-40" />
        <div className="w-[500px] h-[500px] bg-accent blur-[160px] rounded-full absolute bottom-0 right-0" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-center text-4xl md:text-5xl font-extrabold mb-20 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
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
                className={`group backdrop-blur-xl bg-dark/5 border-l-2 border-dark/60 rounded-2xl p-6 md:p-8 transition-all duration-500
                ${isActive ? "shadow-primary-500/20 scale-[1.01]" : "hover:shadow-accent/10 hover:bg-dark/10"}
                `}
              >
                <div
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center justify-between gap-6 cursor-pointer"
                >
                  <h3
                    className={`text-lg md:text-xl font-semibold transition-colors duration-300
                    ${isActive ? "text-accent" : "text-dark"}
                  `}
                  >
                    {faq.question}
                  </h3>

                  <span
                    className={`p-3 rounded-full border transition-all duration-500
                    ${
                      isActive
                        ? "rotate-180 border-accent text-accent shadow-lg shadow-accent"
                        : "border-dark/60 text-dark/60 group-hover:text-accent group-hover:border-accent"
                    }
                  `}
                  >
                    {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
                  </span>
                </div>

                <span
                  className={`block mt-4 h-[1px] w-full bg-gradient-to-r from-transparent via-dark to-transparent transition-opacity duration-500
                  ${isActive ? "opacity-100" : "opacity-60"}
                `}
                />
                <div
                  ref={(el) => (answerRefs.current[index] = el)}
                  className="mt-6 text-dark/60 leading-relaxed overflow-hidden"
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
