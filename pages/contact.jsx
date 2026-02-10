import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import ContactPageSection from "@/components/ContactPageSection";
import GoogleMapSection from "@/components/GoogleMapSection";
import WorldClocks from "@/components/WorldClocks";

export default function ContactPage() {
  const meta = {
    title: "Contact Light Studio360 | Start Your Creative Project Today",

    description:
      "Get in touch with Light Studio360 for image editing, VFX & compositing, 3D modeling, animation, and video production services. Contact our creative team for quotes, partnerships, or project support worldwide.",

    keywords:
      "Contact Light Studio360, creative studio contact, image editing services Bangladesh, VFX studio contact, 3D modeling company, video production agency, post production support, get free quote creative services",

    author: "Light Studio360",

    url: "https://www.lightstudio360.com/contact",

    image: "https://www.lightstudio360.com/og/lightstudio360-contact-og.jpg",
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
          content="Contact Light Studio360 – Award-Winning Creative Studio"
        />
        <meta property="og:locale" content={meta.locale} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <HeroSection
        hero={{
          title: "Contact Redith Group",
          subtitle: "We’re here to help—let’s connect and grow together.",
          backgroundImage: "/about-bg.jpg",
        }}
      />
      <ContactPageSection />
      <WorldClocks />
      <GoogleMapSection />
    </div>
  );
}
