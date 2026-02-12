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
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      icon: FaCamera,
      slug: "image-editing",
      title: "Image Editing",
      desc: "Professional retouching, clipping path, background removal and high-end photo enhancement.",
      id: "services-image",
      img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXAzaGowZjlyZnBydmpmYXZrempxOWxxYjE3dTh3YjV0bTJyeW1kcCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/YVuKOuBWDDnuE/giphy.gif",
    },
    {
      icon: FaVideo,
      slug: "video-production",
      title: "Video Production",
      desc: "Commercial videos, product promos and cinematic storytelling visuals.",
      id: "services-videos",
      img: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWt0NWgwc3FrcGlsd3VzZWJ5M2d2d2JibjVybWx4cHYxamE5YTFhOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mIvCfCG6xk1d2AmQSJ/giphy.gif",
    },
    {
      icon: FaMagic,
      slug: "vfx",
      title: "VFX & Compositing",
      desc: "Hollywood-style visual effects, green screen removal and motion graphics.",
      id: "services-vfx",
      img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTZoejZnYWRzYWszMXFiOGE4eGZ3ZXBocXo5dHg0bnRxb2F3MGY3eiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/LPpz08GcLINFJMnbwP/giphy.gif",
    },
    {
      icon: FaCube,
      slug: "3d-modeling",
      title: "3D Modeling",
      desc: "Photorealistic product rendering, architectural visuals and CGI creation.",
      id: "services-3d",
      img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGZkNmt0Zjc2dXB2a2puaHRiY2V6aGwxZHIxOTNobHZnZ3c4cWlxbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/vWvvVmlE6zNuCMWjJK/giphy.gif",
    },
    {
      icon: FaFilm,
      slug: "animation",
      title: "Animation",
      desc: "2D & 3D animation, character motion and explainer visuals.",
      id: "services-animation",
      img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXZqY2w2Njk5aWFkY3AxM2Y4M2pxazh4d25kcTBqN2pjd2lxa3pxMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/jzHFPlw89eTqU/giphy.gif",
    },
    {
      icon: FaCode,
      slug: "web-development",
      title: "Web Development",
      desc: "Modern responsive websites, landing pages and UI/UX solutions.",
      id: "services-webdev",
      img: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3Zzh2dmVlZXRvbHNsdjVsdm5weGVwcm54cmRzM2YwcTdhYTRvMWEwOCZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif",
    },
  ];

  return (
    <section className="bg-primary/10 text-dark py-20" id="services">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="text-center mb-14">
          <SectionBadge text="Services" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our{" "}
            <span className="bg-secondary bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-dark/70 max-w-2xl mx-auto">
            Creative solutions designed to elevate your brand with premium
            visuals and digital experiences.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <Link
                key={i}
                href={`/services/${item.slug}`}
                className="group relative bg-white rounded-2xl overflow-hidden
                border border-white/5 hover:border-primary/40
                transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition" />
                </div>

                <div className="p-8 relative">
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

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                  <button
                    className="
    relative mt-6 px-5 py-2 rounded-lg border border-primary text-primary
    overflow-hidden group
  "
                  >
                    <span className="relative z-10">View Details</span>
                    <span
                      className="
      absolute left-0 bottom-0 w-0 h-[2px] bg-primary
      transition-all duration-300 group-hover:w-full
    "
                    />
                  </button>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 blur-xl bg-primary/10" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
