import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import NewsSection from "@/components/NewsSection";

export default function NewsPage() {
  const meta = {
    title: "News & Updates | Redith Group – Latest Insights & Announcements",
    description:
      "Stay updated with the latest news, announcements, business updates, and insights from Redith Group across Digital Marketing & IT, Consumer Brands, Agribusiness, and Retail Chain.",
    keywords:
      "Redith Group News, Redith Updates, Bangladesh Business News, Corporate News Bangladesh, Redith Announcements",
    author: "Redith Group",
    siteName: "Redith Group",
    url: "https://www.redithgroup.com/news",
    image: "https://www.redithgroup.com/news/redith-news-og.jpg",
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
        <meta property="og:locale" content={meta.locale} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <HeroSection
        hero={{
          title: "News & Updates from Redith Group",
          subtitle: "Stay updated with the latest news and insights",
          backgroundImage: "/about-bg.jpg",
        }}
      />
      <NewsSection />
    </div>
  );
}
