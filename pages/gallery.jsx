import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import Gallery from "@/components/Gallery";

export default function GalleryPage() {
  const meta = {
    title: "Gallery | Light Studio360 – Image Editing, VFX & 3D Studio",
    description:
      "Explore Light Studio360’s professional gallery featuring image editing, photo retouching, VFX compositing, 3D modeling, animation, and cinematic video production for global brands.",
    keywords:
      "Light Studio360 Gallery, Image Editing Services, Photo Retouching, VFX Studio, 3D Modeling, CGI Rendering, Animation Studio, Video Production Company USA",
    author: "Light Studio360",
    siteName: "Light Studio360",
    url: "https://www.lightstudio360.com/gallery",
    image:
      "https://www.lightstudio360.com/gallery/lightstudio360-gallery-og.jpg",
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
          content="Light Studio360 Professional Gallery Overview"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content={meta.locale} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <HeroSection
        hero={{
          title: "Gallery at Light Studio 360",
          subtitle: "Creative Solutions Tailored to Your Vision",
          backgroundImage: "/about-bg.jpg",
        }}
      />
      <Gallery />
    </div>
  );
}
