"use client";

import Image from "next/image";
import {
  FaCamera,
  FaVideo,
  FaMagic,
  FaCube,
  FaFilm,
  FaCode,
} from "react-icons/fa";
import SectionBadge from "./SectionBadge";

export default function ServicesSection() {
  const services = [
    {
      icon: FaCamera,
      title: "Image Editing",
      desc: "Professional retouching, clipping path, background removal and high-end photo enhancement.",
      id: "services-image",
      img: "/image/services/image-edit.jpg",
    },
    {
      icon: FaVideo,
      title: "Video Production",
      desc: "Commercial videos, product promos and cinematic storytelling visuals.",
      id: "services-videos",
      img: "/image/services/video.jpg",
    },
    {
      icon: FaMagic,
      title: "VFX & Compositing",
      desc: "Hollywood-style visual effects, green screen removal and motion graphics.",
      id: "services-vfx",
      img: "/image/services/vfx.jpg",
    },
    {
      icon: FaCube,
      title: "3D Modeling",
      desc: "Photorealistic product rendering, architectural visuals and CGI creation.",
      id: "services-3d",
      img: "/image/services/3d.jpg",
    },
    {
      icon: FaFilm,
      title: "Animation",
      desc: "2D & 3D animation, character motion and explainer visuals.",
      id: "services-animation",
      img: "/image/services/animation.jpg",
    },
    {
      icon: FaCode,
      title: "Web Development",
      desc: "Modern responsive websites, landing pages and UI/UX solutions.",
      id: "services-webdev",
      img: "/image/services/web.jpg",
    },
  ];

  return (
    <section className="bg-primary/10 text-dark py-20" id="services">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <SectionBadge text="Services" />

          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our{" "}
            <span className="bg-accent bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-dark/70 max-w-2xl mx-auto">
            Creative solutions designed to elevate your brand with premium
            visuals and digital experiences.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <a
                key={i}
                href={`#${item.id}`}
                className="group relative bg-white rounded-2xl overflow-hidden
                border border-white/5 hover:border-primary/40
                transition-all duration-500 hover:-translate-y-2"
              >
                {/* Top Image */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />
                </div>

                {/* Content */}
                <div className="p-8 relative">
                  {/* Icon */}
                  <div
                    className="
      w-14 h-14 md:w-16 md:h-16
      flex items-center justify-center
      rounded-2xl
      bg-gradient-to-br from-primary to-secondary
      group-hover:from-secondary group-hover:to-primary
      text-white text-2xl md:text-3xl
      mb-5
      shadow-xl group-hover:shadow-2xl
      transition-all duration-500
      transform group-hover:scale-110 group-hover:rotate-3
    "
                  >
                    <Icon />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 blur-xl bg-primary/10" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
