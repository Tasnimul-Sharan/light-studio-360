"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function PortfolioSlideshow() {
  const images = [
    "/image/Slideshow/1 (1).jpeg",
    "/image/Slideshow/1 (2).jpeg",
    "/image/Slideshow/1 (3).jpeg",
    "/image/Slideshow/1 (4).jpeg",
    "/image/Slideshow/1 (5).jpeg",
    "/image/Slideshow/1 (6).jpeg",
    "/image/Slideshow/1 (7).jpeg",
    "/image/Slideshow/1.png",
    "/image/Slideshow/2.png",
    "/image/Slideshow/3.png",
    "/image/Slideshow/4.png",
    "/image/Slideshow/5.png",
    "/image/Slideshow/background remove.png",
    "/image/Slideshow/background.png",
    "/image/Slideshow/M1.png",
    "/image/Slideshow/M2.png",
    "/image/Slideshow/M3.png",
    "/image/Slideshow/masking.jpg",
    "/image/Slideshow/Masking.png",
    "/image/Slideshow/neck.jpg",
    "/image/Slideshow/s1.png",
    "/image/Slideshow/s2.png",
    "/image/Slideshow/s3.png",
    "/image/Slideshow/s4.png",
    "/image/Slideshow/s5.png",
    "/image/Slideshow/Bracelet.png",
    "/image/Slideshow/Chain.png",
    "/image/Slideshow/Earring.png",
    "/image/Slideshow/Necklace.png",
    "/image/Slideshow/Ring.png",
    "/image/Slideshow/Shoesdummy.png",
  ];

  const [current, setCurrent] = useState(0);
  const total = images.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  // Auto Slide
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full p-10 md:p-16 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full text-sm font-bold mb-4">
            OUR PORTFOLIO
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Gallery Showcase
          </h2>
          <p className="text-lg text-gray-300">
            Explore our finest work – Professional image editing
          </p>
        </div>

        {/* Slideshow */}
        <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
          <div className="aspect-[16/6] relative flex items-center justify-center">
            <Image
              src={images[current]}
              alt="Portfolio"
              fill
              className="object-contain"
              priority
            />

            {/* Prev */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full"
            >
              ‹
            </button>

            {/* Next */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full"
            >
              ›
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
              {current + 1} / {total}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="bg-gray-800 p-4 overflow-x-auto flex gap-3">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 ${
                  current === i
                    ? "border-blue-500 opacity-100"
                    : "border-transparent opacity-50 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt="thumb"
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
