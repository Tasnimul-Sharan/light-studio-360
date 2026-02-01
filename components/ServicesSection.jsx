"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

function BeforeAfter({ before, after }) {
  const containerRef = useRef(null);
  const afterRef = useRef(null);
  const handleRef = useRef(null);

  useEffect(() => {
    const slider = containerRef.current;
    const afterImg = afterRef.current;
    const handle = handleRef.current;

    let isDragging = false;

    const updateSlider = (clientX) => {
      const rect = slider.getBoundingClientRect();
      let x = clientX - rect.left;
      x = Math.max(0, Math.min(x, rect.width));
      const pct = (x / rect.width) * 100;

      afterImg.style.clipPath = `inset(0 0 0 ${pct}%)`;
      handle.style.left = `${pct}%`;
    };

    const onMouseMove = (e) => isDragging && updateSlider(e.clientX);
    const onMouseUp = () => (isDragging = false);

    slider.addEventListener("mousedown", (e) => {
      isDragging = true;
      updateSlider(e.clientX);
    });

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] bg-white rounded-xl overflow-hidden cursor-ew-resize"
    >
      <Image src={before} alt="before" fill className="object-contain" />
      <Image
        ref={afterRef}
        src={after}
        alt="after"
        fill
        className="object-contain"
        style={{ clipPath: "inset(0 0 0 50%)" }}
      />

      <div
        ref={handleRef}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-blue-500"
      />
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div>
          <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs rounded-full">
            ⚡ PROFESSIONAL EDITING
          </span>
          <h2 className="text-3xl font-black mt-4">AI-Powered Image Editing</h2>
          <p className="text-gray-600 mt-2">
            Industry-leading photo editing with AI precision.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-blue-50 border">
          {[
            ["24h", "Turnaround"],
            ["50K+", "Images"],
            ["99%", "Accuracy"],
          ].map(([num, label]) => (
            <div key={label} className="text-center">
              <h3 className="text-2xl font-bold text-blue-600">{num}</h3>
              <p className="text-xs text-gray-600 uppercase">{label}</p>
            </div>
          ))}
        </div>

        {/* Before After */}
        <BeforeAfter before="/image/before.jpg" after="/image/after.jpg" />

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "VFX & Visual Effects",
              color: "purple",
              img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800",
            },
            {
              title: "3D Modeling & Rendering",
              color: "orange",
              img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800",
            },
            {
              title: "Video Production",
              color: "green",
              img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl overflow-hidden shadow hover:-translate-y-2 transition"
            >
              <div className="relative h-48">
                <Image src={card.img} alt="" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl">{card.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Professional high-quality creative services.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
