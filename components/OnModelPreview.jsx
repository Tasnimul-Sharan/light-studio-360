"use client";

import { useState } from "react";
import Image from "next/image";

export default function OnModelPreview() {
  const images = [
    { id: "front", src: "/Model/Front.png", alt: "Front View" },
    { id: "side", src: "/Model/Side.png", alt: "Side View" },
    { id: "back", src: "/Model/Back.png", alt: "Back View" },
  ];

  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* LEFT – Thumbnails */}
          <div className="md:col-span-2 flex md:flex-col gap-4">
            {images.map((img) => (
              <button
                key={img.id}
                onClick={() => setActiveImage(img)}
                className={`flex-shrink-0 w-16 h-20 md:w-full md:h-64 rounded-lg overflow-hidden border-2 transition
                  ${
                    activeImage.id === img.id
                      ? "border-blue-500"
                      : "border-gray-300 hover:border-blue-400"
                  }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* CENTER – Main Image */}
          <div className="md:col-span-6">
            <div className="bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                width={800}
                height={900}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* RIGHT – Description */}
          <div className="md:col-span-4">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              (On) Model Imagery
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6 bg-sky-100 p-4 rounded-lg">
              End-to-end model image refinement designed for impact —
              transforming raw visuals into publish-ready assets through expert
              cleanup, seamless background removal, realistic shadows, and
              refined model and garment retouching.
            </p>

            <div className="flex gap-3">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-accent to-primary text-white font-bold rounded-lg hover:shadow-lg transition"
              >
                Get Started
              </a>
              <a
                href="#portfolio"
                className="px-6 py-3 border-2 border-accent text-accent font-bold rounded-lg hover:bg-blue-50 transition"
              >
                View More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
