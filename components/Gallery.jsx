"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import SectionBadge from "./SectionBadge";

export default function Gallery() {
  const images = [
    "/Slideshow/1.png",
    "/Slideshow/2.png",
    "/Slideshow/4.png",
    "/Slideshow/M1.png",
    "/Slideshow/M2.png",
    "/Slideshow/Masking.png",
    "/Slideshow/s1.png",
    "/Slideshow/s2.png",
    "/Slideshow/s5.png",
    "/Slideshow/Bracelet.png",
    "/Slideshow/Chain.png",
    "/Slideshow/Earring.png",
    "/Slideshow/Necklace.png",
    "/Slideshow/Skirt1.png",
    "/Slideshow/Skirt2.png",
  ];

  const slides = images.map((src) => ({ src }));

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="w-full py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <SectionBadge text="Our Gallery" />

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Image <span className="text-secondary">Showcase</span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Explore our professional edits & visual craftsmanship
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              className="relative group rounded-2xl overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image
                  src={img}
                  alt="gallery"
                  fill
                  className="object-cover w-full h-full transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Hover Overlay */}
              <div
                className="absolute inset-0 bg-black/40 opacity-0
                group-hover:opacity-100 transition duration-300
                flex items-center justify-center text-white text-sm"
              >
                View Image
              </div>
            </button>
          ))}
        </div>

        {/* LIGHTBOX */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          index={index}
        />
      </div>
    </section>
  );
}
