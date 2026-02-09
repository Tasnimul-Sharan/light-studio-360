"use client";

import Image from "next/image";
import SectionBadge from "./SectionBadge";

export default function Brands() {
  const brands = [
    { name: "Adidas", src: "/Brand/Adidas.png" },
    { name: "C&A", src: "/Brand/C&A.png" },
    { name: "Calvin Klein", src: "/Brand/CK.png" },
    { name: "Gucci", src: "/Brand/GUCCI.png" },
    { name: "Mango", src: "/Brand/MANGO.png" },
    { name: "OTTO", src: "/Brand/OTTO.png" },
    { name: "Van Lier", src: "/Brand/Vanlier.png" },
    { name: "Zalando", src: "/Brand/Zalando.png" },
  ];

  return (
    <section className="relative w-full py-20 bg-[#F5F7FA] overflow-hidden">
      {/* Soft Background Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[420px] h-[420px] bg-[#D4AF37]/20 blur-[160px] rounded-full absolute -top-32 -left-32" />
        <div className="w-[360px] h-[360px] bg-[#1E2A44]/15 blur-[140px] rounded-full absolute bottom-0 right-0" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          {/* <p className="text-sm uppercase tracking-[0.3em] text-accent font-semibold mb-4">
            Our Clients
          </p> */}
          <SectionBadge text="Our Clients" />

          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
            Trusted by <span className="text-secondary">Global Brands</span>
          </h2>

          <p className="text-[#1E2A44]/70 max-w-2xl mx-auto text-base md:text-lg">
            World-renowned brands rely on Light Studio360 for consistent
            quality, precision, and creative excellence.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl p-8 flex items-center justify-center hover:shadow-xl transition-all duration-500
              hover:-translate-y-2"
            >
              {/* Gold border on hover */}
              <div className="absolute inset-0 rounded-2xl border group-hover:border-secondary/50 transition duration-500" />

              <Image
                src={brand.src}
                alt={brand.name}
                width={548}
                height={336}
                className="max-h-20 w-auto 
                grayscale opacity-70 
                group-hover:grayscale-0 group-hover:opacity-100 
                transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
