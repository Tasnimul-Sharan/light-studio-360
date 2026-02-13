// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
// import NavLink from "./NavLink";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const menuItems = [
//     { label: "Home", path: "/" },
//     { label: "About", path: "/about" },
//     { label: "Projects", path: "/projects" },
//     { label: "Services", path: "/services" },
//     { label: "Packages", path: "/packages" },
//     { label: "Why Us", path: "/whyus" },
//     { label: "News", path: "/news" },
//   ];

//   return (
//     // <header
//     //   className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 transform-gpu
//     //     ${scrolled ? "bg-dark" : "bg-transparent border-transparent"}`}
//     // >
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 transform-gpu
//      bg-dark ${scrolled ? "shadow-lg" : ""}`}
//     >
//       <div className="custom-container mx-auto relative  flex items-center justify-between w-full h-24 overflow-hidden">
//         {/* <Link href="/" className="flex items-center">
//           <Image
//             src="/logo-main.png"
//             alt="Light Studio 360"
//             width={4096}
//             height={4096}
//             priority
//             className="md:h-40 h-16 w-full object-cover overflow-hidden"
//           />
//         </Link> */}
//         <Link href="/" className="flex items-center">
//           <Image
//             src="/logo-scale-up.jpg"
//             alt="Light Studio 360"
//             width={4000}
//             height={4000}
//             priority
//             className="md:h-36 h-16 w-full object-cover"
//           />
//         </Link>

//         <button
//           className={`md:hidden text-3xl z-50 transition-colors ${
//             scrolled ? "text-secondary" : "text-white"
//           }`}
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <HiOutlineX /> : <HiOutlineMenu />}
//         </button>

//         <nav
//           className={`hidden md:flex items-center gap-10 text-sm font-semibold tracking-wide
//     ${scrolled ? "text-secondary" : "text-white"}`}
//         >
//           {menuItems.map((item) => (
//             <NavLink key={item.path} href={item.path}>
//               {item.label}
//             </NavLink>
//           ))}

//           {/* <div className="group relative">
//             <button className="flex items-center gap-1">
//               <span className="relative inline-block group">
//                 <span className="relative z-10 transition-colors group-hover:text-primary">
//                   SBUs
//                 </span>
//                 <span className="absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
//               </span>
//               <span className="text-xs mt-1">▾</span>
//             </button>

//             <div className="absolute left-0 top-full mt-3 w-52 bg-white text-secondary shadow-xl rounded-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
//               {[
//                 ["Digital & IT", "/sbu/digital-it"],
//                 ["Consumer Brands", "/sbu/consumer-brands"],
//                 ["Agribusiness", "/sbu/agribusiness"],
//                 ["Retail Chain", "/sbu/retail"],
//               ].map(([label, path]) => (
//                 <Link
//                   key={path}
//                   href={path}
//                   className="block px-3 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition"
//                 >
//                   {label}
//                 </Link>
//               ))}
//             </div>
//           </div> */}

//           <Link
//             href="/contact"
//             className="bg-primary text-white px-6 py-2.5 rounded hover:bg-secondary transition-all transform-gpu duration-500"
//           >
//             Contact
//           </Link>
//         </nav>
//       </div>

//       <div
//         className={`md:hidden fixed top-0 right-0 h-full w-72 bg-white shadow-xl p-6 transition-transform duration-300
//           ${open ? "translate-x-0" : "translate-x-full"}`}
//       >
//         <div className="flex flex-col gap-5 text-base font-semibold mt-16 text-secondary">
//           <Link href="/about" onClick={() => setOpen(false)}>
//             About
//           </Link>

//           {/* <div className="border-t pt-4">
//             <p className="font-bold mb-2">SBUs</p>
//             <div className="flex flex-col gap-3 ml-2 text-sm">
//               <Link href="/sbu/digital-it">Digital & IT</Link>
//               <Link href="/sbu/consumer-brands">Consumer Brands</Link>
//               <Link href="/sbu/agribusiness">Agribusiness</Link>
//               <Link href="/sbu/retail">Retail Chain</Link>
//             </div>
//           </div> */}
//           <Link href="/service">Service</Link>
//           <Link href="/projects">Projects</Link>
//           <Link href="/packages">Packages</Link>
//           <Link href="/news">News</Link>
//           <Link href="/whyus">Why US</Link>
//           <Link href="/contact">Contact</Link>
//         </div>
//       </div>
//     </header>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import NavLink from "./NavLink";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Services", path: "/services" },
    { label: "Packages", path: "/packages" },
    { label: "Why Us", path: "/whyus" },
    { label: "News", path: "/news" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
      bg-dark ${scrolled ? "shadow-xl" : ""}`}
    >
      {/* TOP BAR */}
      <div className="custom-container mx-auto flex items-center justify-between h-24 overflow-hidden">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-scale-up.jpg"
            alt="Light Studio 360"
            width={4000}
            height={4000}
            priority
            className="md:h-36 h-32 w-auto object-cover overflow-hidden"
          />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-3xl z-50 text-white hover:text-secondary transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center justify-start gap-10 text-sm font-semibold tracking-wide text-white">
          {menuItems.map((item) => (
            <NavLink key={item.path} href={item.path}>
              {item.label}
            </NavLink>
          ))}

          <Link
            href="/contact"
            className="bg-primary text-white px-6 py-2.5 rounded hover:bg-secondary transition-all duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* PREMIUM MOBILE OVERLAY MENU */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-500
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
          onClick={() => setOpen(false)}
        />

        {/* MENU CONTENT */}
        <div
          className={`relative h-full w-full flex flex-col items-start justify-center px-10
          text-white text-2xl font-bold tracking-wide
          transition-all duration-500
          ${open ? "translate-y-0" : "-translate-y-10"}`}
        >
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setOpen(false)}
              className="relative group py-3 hover:text-secondary transition"
            >
              {item.label}

              {/* UNDERLINE ANIMATION */}
              <span
                className="absolute left-0 -bottom-1 h-[2px] w-0
                bg-secondary transition-all duration-300
                group-hover:w-full"
              />
            </Link>
          ))}

          {/* CONTACT BUTTON */}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-8 px-10 py-3 rounded-lg bg-primary hover:bg-secondary
            text-white text-lg transition-all duration-300 shadow-lg"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
