// import Head from "next/head";
// import { useRouter } from "next/router";
// import { RiLoader2Fill } from "react-icons/ri";
// import ProjectDetails from "@/components/ProjectDetails";
// import projectDetailsData from "@/data/projectDetailsData";
// import HeroSection from "@/components/HeroSection";
// export default function projectDetailsPage() {
//   const router = useRouter();
//   const { slug } = router.query;

//   if (!slug) {
//     return (
//       <div className="flex flex-col gap-2 justify-center items-center min-h-screen text-secondary">
//         <RiLoader2Fill className="animate-spin w-6 h-6" />
//         <p className="font-medium text-xl">Loading...</p>
//       </div>
//     );
//   }

//   const { meta, projectDetails } = projectDetailsData;
//   const project = projectDetails.find((b) => b.slug === slug);

//   if (!project) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <p className="text-secondary font-medium text-xl">
//           project detail not found.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full relative">
{
  /* <Head>
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
    content="Projects Light Studio360 – Award-Winning Creative Studio"
  />
  <meta property="og:locale" content={meta.locale} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={meta.title} />
  <meta name="twitter:description" content={meta.description} />
  <meta name="twitter:image" content={meta.image} />
</Head> */
}
// <HeroSection
//   hero={{
//     backgroundImage: "/vfx.jpg",
//     title: project.title,
//     description:
//       project.slug === "clipping-path"
//         ? "Perfect clipping path services for e-commerce and photography."
//         : project.slug === "ghost-mannequin"
//         ? "Professional ghost mannequin effect for apparel products."
//         : project.slug === "jewelry-retouching"
//         ? "High-end jewelry retouching with extra shine and clarity."
//         : project.slug === "retouching"
//         ? "Advanced retouching services to enhance portraits and product images."
//         : project.slug === "shadow-retouch"
//         ? "Natural-looking shadow retouching for realistic product presentation."
//         : project.slug === "background-retouch"
//         ? "Clean background retouching for sharp and attractive visuals."
//         : "Explore our stunning before & after project work crafted with precision.",
//   }}
// />
//       <ProjectDetails project={project} />
//     </div>
//   );
// }

import Head from "next/head";
import fs from "fs";
import path from "path";
import projectDetailsData from "@/data/projectDetailsData";
import ProjectDetails from "@/components/ProjectDetails";
import HeroSection from "@/components/HeroSection";

export default function ProjectDetailsPage({ project, meta }) {
  if (!project) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-secondary font-medium text-xl">
          Project detail not found.
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
          content="Projects Light Studio360 – Award-Winning Creative Studio"
        />
        <meta property="og:locale" content={meta.locale} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
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

export async function getStaticPaths() {
  const paths = projectDetailsData.projectDetails.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const { projectDetails, meta } = projectDetailsData;
  const project = projectDetails.find((p) => p.slug === slug);

  if (!project) {
    return { notFound: true };
  }

  // Image Editing auto folder scan
  if (project.category === "Image Editing" && project.folder) {
    const directoryPath = path.join(
      process.cwd(),
      "public/image-editing/",
      project.folder,
    );

    const files = fs.readdirSync(directoryPath);

    const beforeImages = files
      .filter((file) => file.includes("--1"))
      .sort((a, b) => {
        const numA = parseInt(a.split("--")[0]);
        const numB = parseInt(b.split("--")[0]);
        return numA - numB;
      });

    project.images = beforeImages.map((file) => {
      const baseName = file.split("--")[0];

      return {
        before: `/image-editing/${project.folder}/${baseName}--1.jpg`,
        after: `/image-editing/${project.folder}/${baseName}--2.jpg`,
      };
    });
  }

  return {
    props: {
      project,
      meta,
    },
  };
}
