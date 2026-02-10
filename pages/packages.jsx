import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import PackagesSection from "@/components/PackagesSection";
import QualityAssurance from "@/components/QualityAssurance";
import PackageComparison from "@/components/PackageComparison";

export default function PackagePage() {
  const meta = {
    title:
      "Packages & Pricing | Light Studio360 – Fast Turnaround Image Editing, VFX & Creative Services",

    description:
      "Choose flexible packages from Light Studio360 for professional image editing, VFX, 3D modeling, animation, and video production. Standard, Express, and Urgent delivery options with fast turnaround and premium quality.",

    keywords:
      "Light Studio360 pricing, image editing packages, clipping path pricing, photo retouching cost, VFX services pricing, post production packages, bulk image editing, fast turnaround editing service, creative studio packages",

    author: "Light Studio360",

    siteName: "Light Studio360",

    url: "https://www.lightstudio360.com/packages",

    image: "https://www.lightstudio360.com/og/lightstudio360-packages-og.jpg",

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
          title: "Packages & Pricing Plans",
          subtitle: "Find the Right Package for Your Needs",
          backgroundImage: "/about-bg.jpg",
        }}
      />
      <PackagesSection />
      <PackageComparison />
      <QualityAssurance />
    </div>
  );
}
