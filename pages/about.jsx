import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import VisionMission from "@/components/VisionMission";
import FAQ from "@/components/FAQ";
import faqData from "@/data/faqData";
import CoreValues from "@/components/CoreValues";
import Expertise from "@/components/ExpertiseSection";
import WhyUsSection from "@/components/WhyUsSection";
import AboutCTA from "@/components/AboutCTA";
import CompanyStory from "@/components/CompanyStory";

export default function AboutPageProfile() {
  const meta = {
    title:
      "About Light Studio360 | Award-Winning Creative Studio for Image, VFX, 3D & Video",
    description:
      "Founded in 2020, Light Studio360 is a global creative production studio specializing in professional image editing, VFX & compositing, 3D modeling, animation, and video production. Trusted by 1000+ brands for premium visuals, fast turnaround, and measurable results.",
    keywords:
      "About Light Studio360, creative studio Bangladesh, image editing company, VFX studio, 3D modeling services, animation studio, video production company, post production agency, professional retouching, global creative agency",
    author: "Light Studio360",
    siteName: "Light Studio360",
    url: "https://www.lightstudio360.com/about",
    image: "https://www.lightstudio360.com/og/lightstudio360-about-og.jpg",
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
          content="About Light Studio360 – Award-Winning Creative Studio"
        />
        <meta property="og:locale" content={meta.locale} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      <HeroSection
        hero={{
          title: "About Light Studio360",
          subtitle: "Building the Future Through Innovation & Trust",
          backgroundImage: "/hero-bg.jpg",
        }}
      />
      <CompanyStory />
      <VisionMission />
      <CoreValues />
      <Expertise />
      <WhyUsSection />
      <FAQ faqData={faqData} />
      <AboutCTA />
    </div>
  );
}
