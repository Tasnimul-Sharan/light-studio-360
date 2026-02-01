import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import Careers from "@/components/Careers";

export default function CareersPage() {
  const meta = {
    title: "Careers at Redith Group | Join a Future-Focused Team",
    description:
      "Explore career opportunities at Redith Group. Join a dynamic team working across Digital Marketing & IT, Consumer Brands, Agribusiness, and Retail Chain to shape the future of business in Bangladesh.",
    keywords:
      "Redith Group careers, jobs at Redith Group, Redith Group hiring, Bangladesh corporate jobs, IT jobs Bangladesh, marketing jobs Bangladesh, agribusiness careers",
    author: "Redith Group",
    url: "https://www.redithgroup.com/careers",
    image: "https://www.redithgroup.com/og/redith-careers-og.jpg",
  };

  return (
    <div className="w-full relative">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      <HeroSection
        hero={{
          title: "Careers at Redith Group",
          subtitle: "Build your career with purpose, innovation, and growth",
          backgroundImage: "/about-bg.jpg",
        }}
      />

      <Careers />
    </div>
  );
}
