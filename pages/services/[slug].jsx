import { useRouter } from "next/router";
import ServiceDetails from "@/components/ServiceDetails";
import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import { servicesDetailsData } from "@/data/servicesDetailsData";

export default function ServicePage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return null;

  const service = Object.values(servicesDetailsData).find(
    (item) => item.slug === slug,
  );

  if (!service) return <h1>404 | Service Not Found</h1>;

  const { meta } = service;

  return (
    <div>
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
          title: service.hero.title,
          subtitle: service.hero.desc,
          backgroundImage: "/news/blog-hero.jpg",
        }}
      />

      <ServiceDetails service={service} />
    </div>
  );
}
