"use client";

import Image from "next/image";

export default function Brands() {
  const brands = [
    { name: "Adidas", src: "/image/Brand/Adidas.png" },
    { name: "C&A", src: "/image/Brand/C&A.png" },
    { name: "Calvin Klein", src: "/image/Brand/CK.png" },
    { name: "Gucci", src: "/image/Brand/GUCCI.png" },
    { name: "Mango", src: "/image/Brand/MANGO.png" },
    { name: "OTTO", src: "/image/Brand/OTTO.png" },
    { name: "Van Lier", src: "/image/Brand/Vanlier.png" },
    { name: "Zalando", src: "/image/Brand/Zalando.png" },
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
          <p className="text-sm uppercase tracking-[0.3em] text-accent font-semibold mb-4">
            Our Clients
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E2A44] mb-4">
            Trusted by <span className="text-primary">Global Brands</span>
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
              className="group relative bg-white rounded-2xl p-8 flex items-center justify-center
              shadow-md hover:shadow-xl transition-all duration-500
              hover:-translate-y-2"
            >
              {/* Gold border on hover */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#D4AF37]/50 transition duration-500" />

              <Image
                src={brand.src}
                alt={brand.name}
                width={160}
                height={80}
                className="max-h-16 w-auto 
                grayscale opacity-60 
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
