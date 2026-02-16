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
    { label: "gallery", path: "/gallery" },
    { label: "Packages", path: "/packages" },
    { label: "Why Us", path: "/whyus" },
    { label: "News", path: "/news" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
      bg-dark ${scrolled ? "shadow-xl" : ""}`}
    >
      <div className="custom-container mx-auto flex items-center justify-between h-24 overflow-hidden">
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
        <button
          className="md:hidden text-3xl z-50 text-white hover:text-secondary transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
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

      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-500
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
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

              <span
                className="absolute left-0 -bottom-1 h-[2px] w-0
                bg-secondary transition-all duration-300
                group-hover:w-full"
              />
            </Link>
          ))}

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
