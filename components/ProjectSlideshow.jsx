"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import SectionBadge from "./SectionBadge";

export default function ProjectSlideshow() {
  const images = [
    "/Slideshow/1.png",
    "/Slideshow/2.png",
    "/Slideshow/3.png",
    "/Slideshow/4.png",
    "/Slideshow/5.png",
    "/Slideshow/background.png",
    "/Slideshow/M1.png",
    "/Slideshow/M2.png",
    "/Slideshow/M3.png",
    "/Slideshow/masking.jpg",
    "/Slideshow/Masking.png",
    "/Slideshow/s1.png",
    "/Slideshow/s2.png",
    "/Slideshow/s3.png",
    "/Slideshow/s4.png",
    "/Slideshow/s5.png",
    "/Slideshow/Bracelet.png",
    "/Slideshow/Chain.png",
    "/Slideshow/Earring.png",
    "/Slideshow/Necklace.png",
    "/Slideshow/Ring.png",
    "/Slideshow/Shoesdummy.png",
    "/Slideshow/Skirt (1).png",
    "/Slideshow/Skirt (2).png",
    "/Slideshow/Skirt (3).png",
  ];

  const [current, setCurrent] = useState(0);
  const total = images.length;

  const nextSlide = () => setCurrent((p) => (p + 1) % total);
  const prevSlide = () => setCurrent((p) => (p - 1 + total) % total);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <SectionBadge text="Our project" />

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Gallery <span className="text-secondary">Showcase</span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Explore our finest work — professional image editing & visual
            craftsmanship
          </p>
        </div>
        <div className="relative rounded-3xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]">
          <div className="relative aspect-video bg-black group">
            <Image
              src={images[current]}
              alt="project"
              fill
              priority
              className="object-cover object-center transition-transform duration-[1200ms] group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2
              backdrop-blur-xl bg-white/10 hover:bg-white/20
              border border-white/20 text-white
              p-4 rounded-full transition-all"
            >
              <HiChevronLeft size={22} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2
              backdrop-blur-xl bg-white/10 hover:bg-white/20
              border border-white/20 text-white
              p-4 rounded-full transition-all"
            >
              <HiChevronRight size={22} />
            </button>
            <div
              className="absolute bottom-6 left-1/2 -translate-x-1/2
              backdrop-blur-md bg-black/50
              text-white text-xs px-4 py-2 rounded-full tracking-wide"
            >
              {current + 1} / {total}
            </div>
          </div>

          <div className="bg-black/80 backdrop-blur-md p-4 flex gap-3 overflow-x-auto">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`relative w-20 h-20 rounded-xl overflow-hidden border
                transition-all duration-300 flex-shrink-0
                ${
                  current === i
                    ? "border-primary scale-105 opacity-100"
                    : "border-white/10 opacity-50 hover:opacity-100"
                }`}
              >
                <Image src={img} alt="thumb" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
