"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

function CompareItem({ before, after, title, desc, reverse }) {
  const wrapRef = useRef(null);
  const sliderRef = useRef(null);
  const afterRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const slider = sliderRef.current;
    const afterImg = afterRef.current;
    if (!wrap || !slider || !afterImg) return;

    let dragging = false;
    let frame = false;
    let pendingX = 0;

    const apply = () => {
      frame = false;
      const rect = wrap.getBoundingClientRect();
      const clamped = Math.max(0, Math.min(pendingX - rect.left, rect.width));
      const pct = (clamped / rect.width) * 100;
      slider.style.left = pct + "%";
      afterImg.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    };

    const schedule = (x) => {
      pendingX = x;
      if (!frame) {
        frame = true;
        requestAnimationFrame(apply);
      }
    };

    const rect = wrap.getBoundingClientRect();
    schedule(rect.left + rect.width / 2);

    wrap.addEventListener("mousemove", (e) => schedule(e.clientX));
    slider.addEventListener("mousedown", (e) => {
      dragging = true;
      schedule(e.clientX);
    });
    window.addEventListener("mouseup", () => (dragging = false));
    window.addEventListener("mousemove", (e) => {
      if (dragging) schedule(e.clientX);
    });

    // touch
    slider.addEventListener("touchstart", (e) => {
      dragging = true;
      schedule(e.touches[0].clientX);
    });
    window.addEventListener("touchend", () => (dragging = false));
    window.addEventListener("touchmove", (e) => {
      if (dragging) schedule(e.touches[0].clientX);
    });
  }, []);

  const ImageBox = (
    <div className="rounded-xl bg-white shadow-sm flex items-center justify-center overflow-hidden h-[430px] md:h-[550px]">
      <div
        ref={wrapRef}
        className="relative w-full h-full overflow-hidden rounded-xl bg-white"
      >
        {/* BEFORE */}
        <Image
          src={before}
          alt="Before"
          fill
          className="object-contain pointer-events-none"
        />

        {/* AFTER */}
        <Image
          ref={afterRef}
          src={after}
          alt="After"
          fill
          className="object-contain pointer-events-none z-10"
          style={{ clipPath: "inset(0 50% 0 0)" }}
        />

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="absolute top-0 left-1/2 w-[3px] h-full bg-white z-20 cursor-ew-resize"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-red-500 grid place-items-center shadow-lg text-lg">
            ↔
          </div>
        </div>
      </div>
    </div>
  );

  const TextBox = (
    <div className="rounded-xl p-8 bg-sky-100 shadow-sm flex flex-col justify-center h-[430px] md:h-[550px]">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        {title}
      </h3>
      <p className="text-lg text-gray-900 leading-relaxed">{desc}</p>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
      {reverse ? (
        <>
          {ImageBox}
          {TextBox}
        </>
      ) : (
        <>
          {TextBox}
          {ImageBox}
        </>
      )}
    </div>
  );
}

export default function CompareSections() {
  return (
    <section className="w-full py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <CompareItem
          before="/image/Model/GlamBefore.jpg"
          after="/image/Model/Glamafter.jpg"
          title="Glamour Model Retouching"
          desc="High-end, non-destructive retouching focused on natural skin texture and tonal accuracy..."
        />

        <CompareItem
          reverse
          before="/image/Neck/Suitebefore.png"
          after="/image/Neck/Suiteafter.png"
          title="Ghost Mannequin"
          desc="Professional ghost mannequin retouching with complete dummy removal..."
        />

        <CompareItem
          reverse
          before="/image/Clipping/ShoesBefore1.png"
          after="/image/Clipping/ShoesAfter1.png"
          title="eCommerce Shoes Enhancement"
          desc="Precise clipping path and background removal with clean edge control..."
        />

        <CompareItem
          before="/image/Jewelry/Before2.png"
          after="/image/Jewelry/After2.png"
          title="High-End Jewelry Retouching"
          desc="Precision retouching that enhances brilliance and gemstone clarity..."
        />

        <CompareItem
          before="/image/Real Estate/Realestatebefore.png"
          after="/image/Real Estate/Realestateafter.png"
          title="Real Estate Visual Production"
          desc="High-quality real estate visuals delivered with speed and consistency..."
        />
      </div>
    </section>
  );
}
