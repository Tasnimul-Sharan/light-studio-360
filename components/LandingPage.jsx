// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Button from "./Button";

// const heroContent = {
//   subheading: "Leading Multinational Group of Bangladesh",
//   heading: "Building the Future Through Innovation & Trust",
//   description: `Established in 2018, Redith Group is a diversified Bangladeshi multinational operating across technology, consumer brands, agribusiness, and retail—driven by innovation, artificial intelligence, and long-term sustainable growth.`,
//   // description: `Founded in 2018, Redith Group is a leading Bangladeshi conglomerate operating across Technology, Consumer Brands, Agribusiness, and Retail—driven by innovation, AI, and sustainable growth.`,
//   image: "/hero.jpg",
// };

// const LandingPage = () => {
//   return (
//     <div className="relative w-full min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
//       <motion.div
//         initial={{ scale: 1.2 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 4, ease: "easeOut" }}
//         className="absolute inset-0 bg-cover bg-center bg-fixed"
//         style={{ backgroundImage: `url(${heroContent.image})` }}
//       />

//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//       <motion.div
//         className="relative z-10 px-6 flex flex-col items-center justify-center max-w-4xl"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//       >
//         <p className="uppercase tracking-widest text-sm text-gray-200 mb-3">
//           {heroContent.subheading}
//         </p>

//         <h1 className="text-4xl md:text-6xl font-serif italic font-semibold mb-4">
//           <span className="text-primary">
//             {heroContent.heading.split(" Through")[0]}
//           </span>{" "}
//           <span className="text-white">
//             Through{heroContent.heading.split(" Through")[1]}
//           </span>
//         </h1>

//         <p className="text-base md:text-lg text-gray-200 leading-relaxed whitespace-pre-line">
//           {heroContent.description}
//         </p>

//         <div className="mt-8 flex gap-4">
//           <Link href="/services">
//             <Button variant="primary" size="md">
//               Explore More
//             </Button>
//           </Link>

//           <Link href="/contact">
//             <Button variant="outline" size="md">
//               Contact Us
//             </Button>
//           </Link>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default LandingPage;

"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function LandingPage() {
  const slides = [
    {
      before: "/image/Showcase/before.jpeg",
      after: "/image/Showcase/after.jpeg",
    },
    {
      before: "/image/Showcase/before1.jpeg",
      after: "/image/Showcase/after1.png",
    },
    {
      before: "/image/Showcase/before2.jpeg",
      after: "/image/Showcase/after2.jpeg",
    },
    {
      before: "/image/Showcase/before3.jpeg",
      after: "/image/Showcase/after3.jpeg",
    },
    {
      before: "/image/Showcase/Before4.png",
      after: "/image/Showcase/after4.png",
    },
  ];

  return (
    <section className="relative overflow-hidden w-full">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
          alt="workspace"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-blue-700/70" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full text-sm font-semibold shadow-lg">
              <Image
                src="/image/Icon/trophy.png"
                alt="award"
                width={28}
                height={28}
              />
              Award-Winning Creative Studio
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-white leading-snug mb-4">
              Transform Your Vision Into
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
                Stunning Digital Reality
              </span>
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-6" />

            <p className="text-blue-100 mb-6 leading-relaxed">
              We deliver world-class creative solutions trusted by 1,000+
              brands. From image editing to cinematic VFX — we turn ideas into
              visual masterpieces.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#services"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold hover:scale-105 transition"
              >
                Explore Services
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-blue-900 transition"
              >
                Get Quote
              </a>
            </div>
          </div>

          {/* RIGHT SLIDER */}
          <div>
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500 }}
              loop
              className="rounded-xl overflow-hidden"
            >
              {slides.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="grid grid-cols-2">
                    <div className="relative">
                      <Image
                        src={item.before}
                        alt="before"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded">
                        BEFORE
                      </span>
                    </div>
                    <div className="relative">
                      <Image
                        src={item.after}
                        alt="after"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-3 right-3 bg-green-600 text-white text-xs px-3 py-1 rounded">
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

// "use client";
// import React, { useRef, useState, useEffect } from "react";
// import dynamic from "next/dynamic";
// import { gsap } from "gsap";
// import { motion } from "framer-motion";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FaArrowLeft, FaArrowRight, FaLeaf } from "react-icons/fa";
// import Button from "./Button";
// import Link from "next/link";

// const Slider = dynamic(() => import("react-slick"), {
//   ssr: false,
// });

// const sliderData = [
//   {
//     subtitle: "Redith Group",
//     title: "Building the Future Through Innovation & Trust",
//     description: `
// A leading Bangladeshi multinational conglomerate operating across
// Technology, Consumer Brands, Agribusiness, and Retail—driven by AI,
// innovation, and sustainable growth.
//     `,
//     image: "/slider/slider1.png",
//     buttons: [
//       { text: "Our Businesses", link: "/business", variant: "primary" },
//       { text: "Contact Us", link: "/contact", variant: "outline" },
//     ],
//   },
//   {
//     subtitle: "Technology • AI • Digital Transformation",
//     title: "Empowering Businesses with Intelligent Technology",
//     description: `
// Through Redith IT and Digital Marketing, we deliver enterprise software,
// AI-powered solutions, cybersecurity, cloud infrastructure, and data-driven
// marketing strategies that accelerate growth.
//     `,
//     image: "/slider/slider2.png",
//     buttons: [
//       { text: "Technology Division", link: "/technology", variant: "primary" },
//       { text: "Get in Touch", link: "/contact", variant: "outline" },
//     ],
//   },
//   {
//     subtitle: "Consumer Brands • Agribusiness • Retail",
//     title: "Enhancing Everyday Life at Scale",
//     description: `
// From FMCG and consumer electronics to smart agriculture and Bangladesh’s
// largest retail chain, Redith delivers quality, affordability, and
// sustainability across every sector we serve.
//     `,
//     image: "/slider/slider3.jpg",
//     buttons: [
//       { text: "Explore Portfolio", link: "/portfolio", variant: "primary" },
//       { text: "Learn More", link: "/about", variant: "outline" },
//     ],
//   },
// ];

// export default function LandingPage() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const textRefs = useRef([]);

//   useEffect(() => {
//     const currentText = textRefs.current[activeIndex];
//     if (currentText) {
//       gsap.fromTo(
//         currentText,
//         { opacity: 0, y: 10 },
//         { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
//       );
//     }
//   }, [activeIndex]);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 0,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     fade: true,
//     autoplay: true,
//     autoplaySpeed: 7000,
//     arrows: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     beforeChange: (_, next) => setActiveIndex(next),
//   };

//   const textVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   return (
//     <div className="relative w-full min-h-screen overflow-hidden group">
//       <Slider {...settings}>
//         {sliderData.map((slide, index) => (
//           <div key={index} className="relative w-full md:py-96 py-60">
//             <motion.div
//               initial={{ scale: 1.2 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 5, ease: "easeOut" }}
//               className="absolute inset-0 bg-cover bg-center"
//               style={{ backgroundImage: `url(${slide.image})` }}
//             />

//             <div className="absolute inset-0 bg-secondary bg-opacity-50" />

//             <motion.div
//               ref={(el) => (textRefs.current[index] = el)}
//               className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center text-white z-10 px-4"
//               initial="hidden"
//               animate={activeIndex === index ? "visible" : "hidden"}
//               variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
//             >
//               <motion.p
//                 className="uppercase tracking-[0.3em] text-sm text-green-200 inline-flex items-center gap-3 border border-primary rounded-full px-4 py-1 bg-emerald-950/20 backdrop-blur-sm"
//                 variants={textVariants}
//               >
//                 <FaLeaf className="text-primary text-sm" />
//                 {slide.subtitle}
//               </motion.p>

//               <motion.h1
//                 className="text-4xl md:text-6xl font-serif italic font-semibold leading-tight max-w-[900px]"
//                 variants={textVariants}
//               >
//                 {slide.title}
//               </motion.h1>

//               <motion.p
//                 className="mt-3 text-base md:text-lg max-w-2xl text-gray-200"
//                 variants={textVariants}
//               >
//                 {slide.description}
//               </motion.p>

//               <motion.div
//                 className="mt-6 flex gap-4 flex-wrap"
//                 variants={textVariants}
//               >
//                 {slide.primaryButton && (
//                   <Link href={slide.primaryButton.link}>
//                     <Button variant="primary">
//                       {slide.primaryButton.text}
//                     </Button>
//                   </Link>
//                 )}
//                 {slide.secondaryButton && (
//                   <Link href={slide.secondaryButton.link}>
//                     <Button variant="outline">
//                       {slide.secondaryButton.text}
//                     </Button>
//                   </Link>
//                 )}
//               </motion.div>
//             </motion.div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// const PrevArrow = ({ onClick }) => (
//   <div
//     onClick={onClick}
//     className="absolute z-20 top-1/2 left-6 -translate-y-1/2 bg-primary text-white p-4 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-700"
//   >
//     <FaArrowLeft />
//   </div>
// );

// const NextArrow = ({ onClick }) => (
//   <div
//     onClick={onClick}
//     className="absolute z-20 top-1/2 right-6 -translate-y-1/2 bg-primary text-white p-4 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-700"
//   >
//     <FaArrowRight />
//   </div>
// );
