"use client";

import Link from "next/link";

export default function CallToActionSection() {
  return (
    <section className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-12 md:p-16 text-center shadow-2xl">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-black text-white mb-6"
          style={{ fontFamily: "var(--heading-font)" }}
        >
          Ready to Bring Your Vision to Life?
        </h2>

        {/* Description */}
        <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
          Let&apos;s create something extraordinary together. Get in touch today
          and let&apos;s discuss your project.
        </p>

        {/* CTA Button */}
        <Link
          href="#contact"
          className="inline-block px-10 py-4 bg-white text-indigo-600 font-bold rounded-xl
                     transition-all duration-300 shadow-lg hover:shadow-xl
                     hover:bg-indigo-50 hover:scale-105"
        >
          Start Your Project Now
        </Link>
      </div>
    </section>
  );
}
