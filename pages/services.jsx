import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import ServicesSection from "@/components/ServicesSection";

export default function ServicesPage() {
  const meta = {
    title:
      "Our Services | Redith Group – Digital, Consumer, Agribusiness & Retail Solutions",
    description:
      "Explore Redith Group’s diverse services including Digital Marketing & IT, Consumer Brands, Agribusiness, Retail Chain, and Sustainability initiatives—driven by innovation, AI, and impact.",
    keywords:
      "Redith Group Services, Digital Marketing Services Bangladesh, IT Services Bangladesh, Consumer Brands, Agribusiness Solutions, Retail Chain Services, AI Technology Company",
    author: "Redith Group",
    siteName: "Redith Group",
    url: "https://www.redithgroup.com/services",
    image: "https://www.redithgroup.com/services/redith-services-og.jpg",
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
          title: "Services at Redith Group",
          subtitle: "Explore our diverse range of business solutions",
          backgroundImage: "/about-bg.jpg",
        }}
      />

      <ServicesSection />
    </div>
  );
}
