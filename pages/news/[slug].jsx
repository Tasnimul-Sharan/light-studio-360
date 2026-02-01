"use client";
import { useRouter } from "next/router";
import Head from "next/head";
import { RiLoader2Fill } from "react-icons/ri";
import HeroSection from "@/components/HeroSection";
import newsDetailsData from "@/data/newsDetailsData";
import NewsDetails from "@/components/NewsDetails";

export default function NewsDetailsDataPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return (
      <div className="flex flex-col gap-2 justify-center items-center min-h-screen text-secondary">
        <RiLoader2Fill className="animate-spin w-6 h-6" />
        <p className="font-medium text-xl">Loading...</p>
      </div>
    );
  }

  const { newsDetails, socialIcons } = newsDetailsData;

  const news = newsDetails.find((item) => item.slug === slug);

  if (!news) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-secondary font-medium text-xl">
          News detail not found.
        </p>
      </div>
    );
  }

  const siteUrl = "https://www.redithgroup.com";

  const meta = {
    title: `${news.blogPost.title} | Redith Group`,
    description: news.blogPost.description,
    keywords: news.blogPost.postTags.join(", "),
    author: news.blogPost.author || "Redith Group",
    url: `${siteUrl}/news/${news.slug}`,
    image: `${siteUrl}${news.blogPost.image}`,
    publishedTime: news.blogPost.date,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:site_name" content="Redith Group" />
        <meta property="article:author" content={meta.author} />
        <meta property="article:published_time" content={meta.publishedTime} />
        <meta
          property="article:tag"
          content={news.blogPost.postTags.join(", ")}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      <HeroSection
        hero={{
          title: news.blogPost.title,
          backgroundImage: "/news/blog-hero.jpg",
        }}
      />

      <NewsDetails blogsData={news} socialIcons={socialIcons} />
    </>
  );
}
