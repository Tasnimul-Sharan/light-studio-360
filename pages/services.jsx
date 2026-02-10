import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import ServicesSection from "@/components/ServicesSection";

export default function ServicesPage() {
 const meta = {
    title:
      "Our Services | Light Studio360 – Image Editing, VFX, 3D & Video Production",
    description:
      "Discover Light Studio360’s professional services including image editing, photo retouching, VFX & compositing, 3D modeling & animation, and cinematic video production—crafted for global brands.",
    keywords:
      "Light Studio360 Services, Image Editing Services, Photo Retouching, VFX Studio, 3D Modeling, CGI Rendering, Animation Studio, Video Production Company, Creative Studio Bangladesh",
    author: "Light Studio360",
    siteName: "Light Studio360",
    url: "https://www.lightstudio360.com/services",
    image:
      "https://www.lightstudio360.com/services/lightstudio360-services-og.jpg",
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
          content="Redith Group Services Overview"
        />
        <meta property="og:locale" content={meta.locale} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <HeroSection
        hero={{
          title: "Services at Light Studio 360",
          subtitle: "Creative Solutions Tailored to Your Vision",
          backgroundImage: "/about-bg.jpg",
        }}
      />

      <ServicesSection />
    </div>
  );
}
