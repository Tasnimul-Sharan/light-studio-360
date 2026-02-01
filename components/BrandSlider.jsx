"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function BrandSlider() {
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
    <section className="w-full py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView="auto"
          loop
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
        >
          {brands.map((brand, i) => (
            <SwiperSlide key={i} className="!w-auto">
              <div className="flex items-center justify-center px-6 group">
                <div className="h-14 flex items-center justify-center">
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    width={120}
                    height={60}
                    className="max-h-14 w-auto grayscale group-hover:grayscale-0 transition duration-300"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
