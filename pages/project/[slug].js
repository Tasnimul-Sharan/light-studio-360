import Head from "next/head";
import { useRouter } from "next/router";
import { RiLoader2Fill } from "react-icons/ri";
import ProjectDetails from "@/components/ProjectDetails";
import projectDetailsData from "@/data/projectDetailsData";
import HeroSection from "@/components/HeroSection";
export default function projectDetailsPage() {
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

  const { meta, projectDetails } = projectDetailsData;
  const project = projectDetails.find((b) => b.slug === slug);

  if (!project) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-secondary font-medium text-xl">
          project detail not found.
        </p>
      </div>
    );
  }

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
      <HeroSection
        hero={{
          backgroundImage: "/vfx.jpg",
          title: project.title,
          description:
            project.slug === "clipping-path"
              ? "Perfect clipping path services for e-commerce and photography."
              : project.slug === "ghost-mannequin"
              ? "Professional ghost mannequin effect for apparel products."
              : project.slug === "jewelry-retouching"
              ? "High-end jewelry retouching with extra shine and clarity."
              : project.slug === "retouching"
              ? "Advanced retouching services to enhance portraits and product images."
              : project.slug === "shadow-retouch"
              ? "Natural-looking shadow retouching for realistic product presentation."
              : project.slug === "background-retouch"
              ? "Clean background retouching for sharp and attractive visuals."
              : "Explore our stunning before & after project work crafted with precision.",
        }}
      />
      <ProjectDetails project={project} />
    </div>
  );
}