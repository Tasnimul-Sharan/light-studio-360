import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import NewsSection from "@/components/NewsSection";

export default function NewsPage() {
  const meta = {
    title:
      "News & Insights | Light Studio360 – Creative Trends, VFX, Image Editing & Production Updates",

    description:
      "Explore the latest news, creative insights, tutorials, and industry updates from Light Studio360. Discover trends in image editing, VFX & compositing, 3D modeling, animation, and video production from our expert team.",

    keywords:
      "Light Studio360 news, creative studio blog, image editing tips, VFX insights, 3D modeling trends, animation tutorials, video production updates, post production studio news, creative agency articles",

    author: "Light Studio360",

    siteName: "Light Studio360",

    url: "https://www.lightstudio360.com/news",

    image: "https://www.lightstudio360.com/og/lightstudio360-news-og.jpg",

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
          title: "News & Updates",
          subtitle: "Stay updated with the latest news and insights", 
          backgroundImage: "/about-bg.jpg",
        }}
      />
      <NewsSection />
    </div>
  );
}
