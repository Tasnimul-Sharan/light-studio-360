"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-dark text-gray-300">
      {/* Top */}
      <div className="custom-container mx-auto py-20 grid gap-14 md:grid-cols-5">
        {/* Brand */}
        <div className="md:col-span-2 space-y-6">
          <Link href="#home" className="inline-block">
            <Image
              src="/logo-scale-up.jpg"
              alt="Light Studio360"
              width={4000}
              height={4000}
              priority
              className="h-64 w-full object-contain
      transition-transform duration-500
      hover:scale-105
    "
            />
          </Link>

          <p className="text-gray-400 leading-relaxed max-w-md">
            We craft visuals, image, VFX, 3D, and video experiences that make
            products and stories stand out globally.
          </p>

          <div className="text-sm text-gray-500">
            Available worldwide • Fast turnaround
          </div>
        </div>

        {/* Services */}
        <FooterColumn title="Services">
          <FooterLink href="#services-image">Image Editing</FooterLink>
          <FooterLink href="#services-clipping">Clipping Path</FooterLink>
          <FooterLink href="#services-masking">Masking</FooterLink>
          <FooterLink href="#services-retouching">Retouching</FooterLink>
          <FooterLink href="#services-color">Color Correction</FooterLink>
          <FooterLink href="#services-vfx">VFX</FooterLink>
          <FooterLink href="#services-3d">3D & CGI</FooterLink>
          <FooterLink href="#services-videos">Video Production</FooterLink>
        </FooterColumn>

        {/* Company */}
        <FooterColumn title="Company">
          <FooterLink href="#home">Home</FooterLink>
          <FooterLink href="#about">About</FooterLink>
          <FooterLink href="#portfolio">Portfolio</FooterLink>
          <FooterLink href="#packages">Packages</FooterLink>
          <FooterLink href="#whyus">Why Us</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
        </FooterColumn>

        {/* Contact + Social */}
        <div className="space-y-6">
          <h4 className="text-white font-semibold tracking-wide">Contact</h4>

          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="mailto:support@lightstudio360.com"
                className="hover:text-white transition"
              >
                support@lightstudio360.com
              </a>
            </li>
            <li>
              <a
                href="tel:+8801326414530"
                className="hover:text-white transition"
              >
                +880 1326 414 530
              </a>
            </li>
            <li className="text-gray-500">24/6 response for global clients</li>
          </ul>

          {/* Social */}
          <div className="flex items-center gap-4 pt-2">
            <SocialIcon href="https://www.facebook.com/LightStudio360">
              <FaFacebookF />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/company/LightStudio360/">
              <FaLinkedinIn />
            </SocialIcon>
            <SocialIcon href="https://www.youtube.com/c/LightStudio360">
              <FaYoutube />
            </SocialIcon>
            <SocialIcon href="https://x.com/LightStudio360">
              <FaXTwitter />
            </SocialIcon>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="custom-container mx-auto border-t border-white/10">
        <div className=" py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <span>© 2025 LightStudio360. All rights reserved.</span>

          <div className="flex gap-6">
            <Link href="#contact" className="hover:text-white transition">
              Support
            </Link>
            <Link href="#portfolio" className="hover:text-white transition">
              Case Studies
            </Link>
            <Link href="#packages" className="hover:text-white transition">
              Pricing
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div className="space-y-4">
      <h4 className="text-white font-semibold tracking-wide">{title}</h4>
      <ul className="space-y-2 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className="hover:text-white transition-colors duration-200"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full
                 bg-white/5 text-gray-300
                 hover:bg-secondary hover:text-white
                 transition-all duration-500"
    >
      {children}
    </a>
  );
}
