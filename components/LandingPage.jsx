"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaTrophy } from "react-icons/fa";

export default function LandingPage() {
  const slides = [
    {
      before: "/slider/before.jpeg",
      after: "/slider/after.jpeg",
    },
    {
      before: "/slider/before1.jpeg",
      after: "/slider/after1.png",
    },
    {
      before: "/slider/before2.jpeg",
      after: "/slider/after2.jpeg",
    },
    {
      before: "/slider/before3.jpeg",
      after: "/slider/after3.jpeg",
    },
    {
      before: "/slider/Before4.png",
      after: "/slider/after4.png",
    },
    {
      before: "/slider/CoatBefore.png",
      after: "/slider/CoatAfter.png",
    },
    {
      before: "/slider/ModelBefore.png",
      after: "/slider/ModelAfter.png",
    },
  ];

  return (
    <section className="relative overflow-hidden w-full min-h-screen flex items-center">
      {/* Background Layer */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
          alt="workspace"
          fill
          className="object-cover blur-sm opacity-70"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/70 to-pink-900/70" /> */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 py-16 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center justify-center">
          {/* LEFT TEXT CONTENT */}
          <div className="space-y-6 md:space-y-8">
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary via-primary to-secondary text-white rounded-full text-sm font-semibold shadow-xl">
              <FaTrophy className="text-secondary text-base" />
              Award-Winning Studio
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Transform Your Vision Into{" "}
              <span className="block bg-gradient-to-r from-accent to-primary text-transparent bg-clip-text">
                Stunning Digital Reality
              </span>
            </h1>

            {/* Divider */}
            <div className="w-28 h-1 rounded-full bg-gradient-to-r from-primary via-primary to-secondary" />

            {/* Description */}
            <p className="text-blue-100/90 text-lg md:text-xl leading-relaxed">
              We deliver world-class creative solutions trusted by 1,000+ global
              brands. From high-end image editing and cinematic VFX to 3D
              modeling and professional video production—we transform your ideas
              into visual masterpieces that captivate and convert.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href="#services"
                className="px-6 py-3 bg-gradient-to-r from-secondary to-primary text-white rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-500"
              >
                Explore Services
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-white text-white rounded-xl font-bold hover:bg-secondary hover:text-white hover:border-transparent hover:shadow-lg transition duration-500"
              >
                Get Free Quote
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE SLIDER */}
          <div className="rounded-md overflow-hidden border border-white/20 backdrop-blur-sm">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop
              className="rounded-md"
            >
              {slides.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="grid grid-cols-2 gap-0">
                    {/* Before */}
                    <div className="relative group overflow-hidden">
                      <Image
                        src={item.before}
                        alt="before"
                        width={1200}
                        height={1200}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-red-600/90 text-white text-xs font-semibold px-3 py-1 rounded shadow-lg">
                        BEFORE
                      </span>
                    </div>

                    {/* After */}
                    <div className="relative group overflow-hidden">
                      <Image
                        src={item.after}
                        alt="after"
                        width={1200}
                        height={1200}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                      />
                      <span className="absolute top-3 right-3 bg-green-600/90 text-white text-xs font-semibold px-3 py-1 rounded shadow-lg">
                        AFTER
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
