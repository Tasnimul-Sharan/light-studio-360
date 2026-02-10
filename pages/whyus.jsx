import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import PackagesSection from "@/components/PackagesSection";
import QualityAssurance from "@/components/QualityAssurance";
import PackageComparison from "@/components/PackageComparison";
import TrackRecord from "@/components/TrackRecord";
import WhyUsHero from "@/components/WhyUsHero";
import PillarsSection from "@/components/PillarsSection";
import WhyUsCTA from "@/components/WhyUsCTA";
import FeatureGrid from "@/components/FeatureGrid";

export default function WhyUsPage() {
  const meta = {
    title:
      "Why Choose Light Studio360 | Trusted Creative Studio for Image, VFX, 3D & Video",

    description:
      "Discover why 1000+ global brands trust Light Studio360 for professional image editing, VFX & compositing, 3D modeling, animation, and video production. Premium quality, fast turnaround, and client-focused execution.",

    keywords:
      "Why choose Light Studio360, trusted creative studio, image editing experts, VFX studio, 3D modeling company, animation studio, fast turnaround editing, premium post production services",

    author: "Light Studio360",

    siteName: "Light Studio360",

    url: "https://www.lightstudio360.com/why-us",

    image: "https://www.lightstudio360.com/og/lightstudio360-why-us-og.jpg",

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
          title: "Why Choose Light Studio360",
          subtitle: "Discover the Benefits of Partnering with Us",
          backgroundImage: "/about-bg.jpg",
        }}
      />
      {/* <WhyUsHero /> */}
      <FeatureGrid />
      <TrackRecord />
      <PillarsSection />
      <WhyUsCTA />
    </div>
  );
}
