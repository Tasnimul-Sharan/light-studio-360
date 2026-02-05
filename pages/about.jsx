import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import VisionMission from "@/components/VisionMission";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import faqData from "@/data/faqData";
import AboutPage from "@/components/AboutPage";
import StorySection from "@/components/StorySection";

export default function AboutPageProfile() {
  const meta = {
    title: "About Us | Redith Group – Innovation, Industry & Impact",
    description:
      "Founded in 2018, Redith Group is one of Bangladesh’s leading conglomerates operating across Digital Marketing & IT, Consumer Brands, Agribusiness, and Retail Chain—driven by innovation, AI, and sustainable growth.",
    keywords:
      "About Redith Group, Redith Bangladesh, Bangladeshi Conglomerate, Digital IT Company Bangladesh, Agribusiness Bangladesh, Retail Chain Bangladesh, Sustainable Business",
    author: "Redith Group",
    siteName: "Redith Group",
    url: "https://www.redithgroup.com/about",
    image: "https://www.redithgroup.com/about/redith-about-og.jpg",
    locale: "en_US",
  };

  return (
    <div className="w-full relative">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={meta.url} />
        <meta property="og:site_name" content={meta.siteName} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:image" content={meta.image} />
        <meta
          property="og:image:alt"
          content="About Redith Group – Corporate Profile"
        />
        <meta property="og:locale" content={meta.locale} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      <HeroSection
        hero={{
          title: "About Redith Group",
          subtitle: "Building the Future Through Innovation & Trust",
          backgroundImage: "/hero-bg.jpg",
        }}
      />
      <StorySection />
      <VisionMission />
      <FAQ faqData={faqData} />
    </div>
  );
}
