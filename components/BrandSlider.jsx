"use client";

import Image from "next/image";

export default function BrandGrid() {
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
    <section className="w-full py-14 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl font-black text-[#2B2B2B] mb-3"
            style={{ fontFamily: "var(--heading-font)" }}
          >
            Trusted by Global Brands
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Leading brands worldwide rely on our production quality and delivery
            standards.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-6 flex items-center justify-center shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={140}
                height={70}
                className="max-h-14 w-auto grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
