import Head from "next/head";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import { projectPageData } from "@/data/projectPageData";
export default function ProjectsPage() {
  const { meta, hero } = projectPageData;
  return (
    <div className="w-full relative">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <meta name="viewport" content={meta.viewport} />
        <meta property="og:title" content={meta.og.title} />
        <meta property="og:description" content={meta.og.description} />
        <meta property="og:url" content={meta.og.url} />
        <meta property="og:type" content={meta.og.type} />
      </Head>
      <HeroSection hero={hero} />
      <ProjectsSection />
    </div>
  );
}
