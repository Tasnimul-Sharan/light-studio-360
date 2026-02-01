import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import ContactPageSection from "@/components/ContactPageSection";
import GoogleMapSection from "@/components/GoogleMapSection";

export default function ContactPage() {
  const meta = {
    title: "Contact Us | Redith Group – Let’s Build the Future Together",
    description:
      "Get in touch with Redith Group for business inquiries, partnerships, or support. We operate across Digital Marketing & IT, Consumer Brands, Agribusiness, and Retail Chain in Bangladesh.",
    keywords:
      "Contact Redith Group, Redith Group contact, business inquiry Bangladesh, corporate contact Bangladesh, Redith Group office, Redith Group support",
    author: "Redith Group",
    url: "https://www.redithgroup.com/contact",
    image: "https://www.redithgroup.com/og/redith-contact-og.jpg",
  };

  return (
    <div className="w-full relative">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      <HeroSection
        hero={{
          title: "Contact Redith Group",
          subtitle: "We’re here to help—let’s connect and grow together.",
          backgroundImage: "/about-bg.jpg",
        }}
      />

      <ContactPageSection />
      <GoogleMapSection />
    </div>
  );
}
