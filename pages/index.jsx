import Head from "next/head";
import LandingPage from "@/components/LandingPage";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import Leadership from "@/components/Leadership";
import News from "@/components/News";
import Contact from "@/components/Contact";
import BrandSlider from "@/components/BrandSlider";
import OnModelPreview from "@/components/OnModelPreview";
import CompareSections from "@/components/CompareSections";
import PortfolioSlideshow from "@/components/PortfolioSlideshow";
import TrustSection from "@/components/TrustSection";
import WhyChooseUs from "@/components/WhyUs";
import CallToActionSection from "@/components/CallToActionSection";
import About from "@/components/About";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  const meta = {
    title:
      "Redith Group | Leading Conglomerate in Bangladesh – Innovation & Sustainability",
    description:
      "Redith Group is a diversified conglomerate in Bangladesh operating across Digital Marketing & IT, Consumer Brands, Agribusiness, and Retail Chain. Powered by AI, innovation, and sustainable growth.",
    keywords:
      "Redith Group, Bangladesh Conglomerate, Digital Marketing Bangladesh, IT Company Bangladesh, Consumer Brands, Agribusiness Bangladesh, Retail Chain Bangladesh, AI Technology Company",
    author: "Redith Group",
    siteName: "Redith Group",
    url: "https://www.redithgroup.com",
    image: "https://www.redithgroup.com/og/redith-home-og.jpg",
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
          content="Redith Group Corporate Website"
        />
        <meta property="og:locale" content={meta.locale} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@RedithGroup" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <LandingPage />
      <About />
      <OnModelPreview />
      <BrandSlider />
      <ServicesSection />
      <ProjectsSection />
      <CompareSections />
      <PortfolioSlideshow />
      <StatsSection />
      <TrustSection />
      {/* <ClientTrustSection /> */}
      {/* <Leadership /> */}
      <WhyChooseUs />
      <CallToActionSection />
      <News />
      <Contact />
    </div>
  );
}
