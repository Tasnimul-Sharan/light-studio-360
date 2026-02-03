"use client";
import { useState } from "react";
import Image from "next/image";
import { FiArrowRight, FiArrowRightCircle, FiClock } from "react-icons/fi";
import ReactCompareImage from "react-compare-image";
import Link from "next/link";

const categories = ["All", "VFX", "Video Editing", "Image Editing"];

const projects = [
  {
    title: "CFROG VFX MAIN SHOWREEL",
    category: "VFX",
    video:
      "https://www.youtube.com/embed/rUC51rO9ojg?autoplay=1&mute=1&rel=0&modestbranding=1",
  },
  {
    title: "Rotoscoping Sample",
    category: "VFX",
    video:
      "https://www.youtube.com/embed/8EP5pDqTk0Y?autoplay=1&mute=1&rel=0&modestbranding=1",
  },
  {
    title: "Cinematic Edit Sample 1",
    category: "Video Editing",
    video:
      "https://www.youtube.com/embed/FVR8zz8ci2k?autoplay=1&mute=1&rel=0&modestbranding=1",
  },
  {
    title: "Cinematic Edit Sample 2",
    category: "Video Editing",
    video:
      "https://www.youtube.com/embed/N_mKCJSfyww?autoplay=1&mute=1&rel=0&modestbranding=1",
  },
  {
    title: "Clipping Path",
    category: "Image Editing",
    slug: "clipping-path",
    before: "/image-edating/clipping/1--1.jpg",
    after: "/image-edating/clipping/1--2.jpg",
  },
  {
    title: "Retouching",
    category: "Image Editing",
    slug: "retouching",
    before: "/image-edating/retouching/1--1.jpg",
    after: "/image-edating/retouching/1--2.jpg",
  },
  {
    title: "Jewelry Retouching",
    category: "Image Editing",
    slug: "jewelry-retouching",
    before: "/image-edating/jewelry-retouching/1--1.jpg",
    after: "/image-edating/jewelry-retouching/1--2.jpg",
  },
  {
    title: "Ghost Mannequin",
    category: "Image Editing",
    slug: "ghost-mannequin",
    before: "/image-edating/ghost-mannequin/1--1.jpg",
    after: "/image-edating/ghost-mannequin/1--2.jpg",
  },
  {
    title: "Shadow Retouch",
    category: "Image Editing",
    slug: "shadow-retouch",
    before: "/image-edating/shadow-retouch/1--1.jpg",
    after: "/image-edating/shadow-retouch/1--2.jpg",
  },
  {
    title: "Background Retouch",
    category: "Image Editing",
    slug: "background-retouch",
    before: "/image-edating/background-retouch/1--1.jpg",
    after: "/image-edating/background-retouch/1--2.jpg",
  },
  {
    title: "eCommerce Shoes Enhancement",
    category: "Image Editing",
    slug: "ecommerce-shoes-enhancement",
    before: "/image-edating/shoes-enhancement/1--1.jpg",
    after: "/image-edating/shoes-enhancement/1--2.jpg",
  },
  {
    title: "Glamour Model Retouching",
    category: "Image Editing",
    slug: "glamour-model-retouching",
    before: "/image-edating/glamour-model/1--1.jpg",
    after: "/image-edating/glamour-model/1--2.jpg",
  },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isInteractive, setIsInteractive] = useState(false);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((proj) => proj.category === activeCategory);

  return (
    <section className="bg-white text-secondary py-16 custom-container mx-auto">
      <div className="text-center mb-10">
        <p className="text-primary uppercase text-sm font-semibold tracking-wider">
          Latest Work
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Transforming Ideas into Exceptional Visuals
        </h2>
        <p className="text-secondary_two text-sm max-w-2xl mx-auto mt-2">
          At Creative Frog, we craft stunning VFX, animations, video
          productions, and graphic designs that bring your vision to life.
          Explore our portfolio to see how creativity meets technology.
        </p>
      </div>

      {/* Categories */}
      <div className="flex justify-center gap-4 flex-wrap mb-10">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all transform duration-500
              ${
                activeCategory === cat
                  ? "bg-primary text-white border-primary"
                  : "bg-transparent text-secondary_two border-border_color hover:bg-primary hover:text-white hover:border-primary"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* {filteredProjects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-xl border border-border_color hover:border-primary hover:shadow-xl transition-all transform-gpu duration-500"
          >
            <div className="rounded-xl overflow-hidden">
              {project.video ? (
                <div
                  className="relative w-full h-96 aspect-video rounded-xl overflow-hidden transition-all will-change-transform transform-gpu duration-500"
                  onClick={() => setIsInteractive(true)}
                >
                  <iframe
                    className={`w-full h-full object-cover ${
                      !isInteractive ? "pointer-events-none" : ""
                    }`}
                    src={project.video}
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              ) : project.category === "Image Editing" ? (
                <Link href={`/portfolio/${project.slug}`}>
                  <div className="cursor-pointer">
                    <ReactCompareImage
                      hover
                      leftImage={project.before}
                      rightImage={project.after}
                      leftImageCss={{ width: "100%", height: "auto" }}
                      rightImageCss={{ width: "100%", height: "auto" }}
                    />
                  </div>
                </Link>
              ) : project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              ) : (
                <div className="w-full h-24 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">No preview available</span>
                </div>
              )}
            </div>

            <div className="mt-4">
              <div className="bg-primary text-white px-4 py-2 rounded-full text-sm inline-block">
                {project.category}
              </div>

              <div className="flex justify-between items-center mt-2">
                <h4 className="text-lg font-semibold mt-1">{project.title}</h4>
                <div className="flex items-center gap-1 text-sm hover:text-secondary transition">
                  <FiClock className="text-base" />
                  Jan 2025
                </div>
              </div>
            </div>
          </div>
        ))} */}
        {filteredProjects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-xl border border-border_color hover:border-primary hover:shadow-xl transition-all transform-gpu duration-500"
          >
            <div className="rounded-xl overflow-hidden">
              {project.video ? (
                <iframe
                  className="w-full h-96 aspect-video"
                  src={project.video}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              ) : project.category === "Image Editing" &&
                project.before &&
                project.after ? (
                <ReactCompareImage
                  hover
                  leftImage={project.before}
                  rightImage={project.after}
                />
              ) : null}
            </div>

            <div className="mt-4">
              <div className="bg-primary text-white px-4 py-2 rounded-full text-sm inline-block">
                {project.category}
              </div>

              <div className="flex justify-between items-center mt-2">
                <h4 className="text-lg font-semibold mt-1">{project.title}</h4>
                {project.slug && (
                  <Link href={`/portfolio/${project.slug}`}>
                    <button className="mt-3 text-sm border border-border_color px-4 py-3 rounded-full hover:bg-primary hover:text-white transition duration-500 flex items-center gap-2">
                      See Details <FiArrowRight className="text-base" />
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      {/* <div className="text-center mt-12">
        <Link
          href="/portfolio"
          className="px-8 py-3 bg-primary text-white rounded-full font-medium shadow-lg 
                     transition-all transform duration-500 hover:shadow-2xl hover:scale-105 hover:bg-Secound_primary"
        >
          See All
        </Link>
      </div> */}
    </section>
  );
};

export default ProjectsSection;
