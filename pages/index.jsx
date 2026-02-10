import Head from "next/head";
import LandingPage from "@/components/LandingPage";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import News from "@/components/News";
import Contact from "@/components/Contact";
import BrandSlider from "@/components/BrandSlider";
import OnModelPreview from "@/components/OnModelPreview";
import CompareSections from "@/components/CompareSections";
// import projectSlideshow from "@/components/projectSlideshow";
import TrustSection from "@/components/TrustSection";
import WhyChooseUs from "@/components/WhyUs";
import CallToActionSection from "@/components/StudioHero";
import About from "@/components/About";
import ProjectsSection from "@/components/ProjectsSection";
import StudioHero from "@/components/StudioHero";
import StudioIntro from "@/components/StudioIntro";
import ProjectSlideshow from "@/components/ProjectSlideshow";

export default function Home() {
  const meta = {
    title:
      "Light Studio360 | Award-Winning Creative Studio for Image Editing, VFX, 3D & Video Production",

    description:
      "Light Studio360 is a global creative studio delivering premium image editing, VFX & compositing, 3D modeling, animation, and cinematic video production. Trusted by 1000+ brands for high-quality visuals, fast turnaround, and professional execution.",

    keywords:
      "Light Studio360, Image Editing Services, Clipping Path, Photo Retouching, VFX Studio, 3D Modeling, CGI Rendering, Animation Studio, Video Production Company, Creative Agency, Post Production Studio, Graphic Design, Bangladesh Creative Studio",

    author: "Light Studio360",

    siteName: "Light Studio360",

    url: "https://www.lightstudio360.com",

    image: "https://www.lightstudio360.com/og/lightstudio360-home-og.jpg",

    locale: "en_US",
  };

  const creativeContent = {
    backgroundImage: "/hero/creative.jpg",
    title: "Ready to Bring Your Vision to Life?",
    description:
      "Let&apos;s create something extraordinary together. Get in touch today and let&apos;s discuss your project.",
    buttonText: "Start Your Project Now",
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
    content="Light Studio360 – Award-Winning Creative Studio"
  />
  <meta property="og:locale" content={meta.locale} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@LightStudio360" />
  <meta name="twitter:title" content={meta.title} />
  <meta name="twitter:description" content={meta.description} />
  <meta name="twitter:image" content={meta.image} />
</Head>
      <LandingPage />
      <About />
      <OnModelPreview />
      <BrandSlider />
      <StatsSection />
      <ServicesSection />
      <ProjectsSection />
      {/* <CompareSections /> */}
      <StudioIntro />
      <ProjectSlideshow />
      <TrustSection />
      {/* <ClientTrustSection /> */}
      {/* <Leadership /> */}
      <WhyChooseUs />
      <StudioHero creativeContent={creativeContent} />
      <News />
      <Contact />
    </div>
  );
}
