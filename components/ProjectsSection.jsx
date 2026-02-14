"use client";
import { useState } from "react";
import { FiArrowRight, FiArrowRightCircle, FiClock } from "react-icons/fi";
import ReactCompareImage from "react-compare-image";
import Link from "next/link";
import SectionBadge from "./SectionBadge";

const categories = [
  "VFX",
  "Video Editing",
  "Image Editing",
  "3D Modeling",
  "Animation",
];

const projects = [
  // ===== VFX =====
  {
    title: "Ultimate VFX Reel 2026",
    category: "VFX",
    slug: "ultimate-vfx-reel-2026",
    video: "https://www.youtube.com/embed/Dkl6q5pfRWI?autoplay=1&mute=1",
  },
  {
    title: "Advanced Rotoscoping Demo",
    category: "VFX",
    slug: "advanced-rotoscoping-demo",
    video: "https://www.youtube.com/embed/QF4N98KRC1A?autoplay=1&mute=1",
  },
  // ===== VIDEO EDITING =====
  {
    title: "Cinematic Color Grading Showcase",
    category: "Video Editing",
    slug: "cinematic-color-grading-showcase",
    video: "https://www.youtube.com/embed/7XfCM3yVuko?autoplay=1&mute=1",
  },
  {
    title: "Professional Trailer Edit",
    category: "Video Editing",
    slug: "professional-trailer-edit",
    video: "https://www.youtube.com/embed/SjkcA2ZCmDU?autoplay=1&mute=1",
  },

  // ===== 3D MODELING =====
  {
    title: "3D Product Visualization – Watch Render",
    category: "3D Modeling",
    slug: "3d-product-visualization",
    video: "https://www.youtube.com/embed/t9Ibk0I8Jyk?autoplay=1&mute=1",
  },
  {
    title: "3D Product Animation Video",
    category: "3D Modeling",
    slug: "3d-product-visualization",
    video: "https://www.youtube.com/embed/WoaAMzG31P4?autoplay=1&mute=1",
  },

  // ===== ANIMATION =====
  {
    title: "2D Character Animation Reel",
    category: "Animation",
    slug: "2d-character-animation-reel",
    video: "https://www.youtube.com/embed/2lvRFj-RSaU?autoplay=1&mute=1",
  },
  {
    title: "3D Logo Animation",
    category: "Animation",
    slug: "3d-logo-animation",
    video: "https://www.youtube.com/embed/1La4QzGeaaQ?autoplay=1&mute=1",
  },

  {
    title: "Clipping Path",
    category: "Image Editing",
    slug: "clipping-path",
    before: "/image-edating/clipping/BinocularBefore.jpg",
    after: "/image-edating/clipping/BinocularAfter.jpg",
  },
  {
    title: "Retouching",
    category: "Image Editing",
    slug: "retouching",
    before: "/image-edating/retouching/lipstick1.png",
    after: "/image-edating/retouching/lipstick2.png",
  },
  {
    title: "Jewelry Retouching",
    category: "Image Editing",
    slug: "jewelry-retouching",
    before: "/image-edating/jewelry-retouching/Before2.png",
    after: "/image-edating/jewelry-retouching/After2.png",
  },
  {
    title: "Ghost Mannequin",
    category: "Image Editing",
    slug: "ghost-mannequin",
    before: "/image-edating/ghost-mannequin/A-1.png",
    after: "/image-edating/ghost-mannequin/A-2.png",
  },
  {
    title: "Color Correction",
    category: "Image Editing",
    slug: "color-correction",
    before: "/image-edating/color-correction/Chair1.png",
    after: "/image-edating/color-correction/Chair2.png",
  },
  {
    title: "Masking",
    category: "Image Editing",
    slug: "masking",
    before: "/image-edating/masking/masking1.jpg",
    after: "/image-edating/masking/masking2.jpg",
  },
  {
    title: "eCommerce Shoes Enhancement",
    category: "Image Editing",
    slug: "ecommerce-shoes-enhancement",
    before: "/image-edating/shoes-enhancement/black-shoes1.jpg",
    after: "/image-edating/shoes-enhancement/black-shoes2.jpg",
  },
  {
    title: "Glamour Model Retouching",
    category: "Image Editing",
    slug: "glamour-model-retouching",
    before: "/image-edating/glamour-model/aiimageeditorfeatt1.jpg",
    after: "/image-edating/glamour-model/aiimageeditorfeatt2.jpg",
  },
  {
    title: "Real Estate",
    category: "Image Editing",
    slug: "real-estate",
    before: "/image-edating/real-estate/Realestatebefore.png",
    after: "/image-edating/real-estate/Realestateafter.png",
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
    <section className="bg-white text-dark py-16 custom-container mx-auto">
      <div className="text-center mb-10">
        <SectionBadge text="Latest Work" />

        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Crafting Powerful{" "}
          <span className="text-secondary">Visual Experiences</span>
        </h2>
        <p className="text-dark text-sm max-w-2xl mx-auto mt-2">
          We specialize in high-quality VFX, animation, video production, and
          graphic design—turning creative concepts into visually compelling
          stories that leave a lasting impact.
        </p>
      </div>

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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filteredProjects.map((project, idx) => (
          <Link
            key={idx}
            href={project.slug ? `/project/${project.slug}` : "#"}
            className="group"
          >
            <div
              className="bg-white p-4 rounded-xl border-2 border-border_color 
                 hover:border-primary hover:shadow-xl hover:shadow-primary/50
                 transition-all transform-gpu duration-500 
                 h-full cursor-pointer"
            >
              <div
                className="rounded-xl overflow-hidden h-96
 flex items-center justify-center 
                bg-gradient-to-br from-gray-100 to-gray-200 relative"
              >
                {/* VIDEO */}
                {project.video ? (
                  <iframe
                    className="w-full h-full aspect-video pointer-events-none"
                    src={project.video}
                    title={project.title}
                    frameBorder="0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    loading="lazy"
                  />
                ) : /* IMAGE EDITING */
                project.before && project.after ? (
                  <ReactCompareImage
                    hover
                    leftImage={project.before}
                    rightImage={project.after}
                    style={{ width: "100%", height: "100%" }}
                    leftImageCss={{ objectFit: "contain" }}
                    rightImageCss={{ objectFit: "contain" }}
                  />
                ) : /* ANIMATION & 3D MODELING VISUAL */
                project.comingSoon ? (
                  <div className="text-center px-6">
                    <div className="text-5xl mb-4 animate-pulse">🎬</div>
                    <h4 className="text-xl font-semibold mb-2">
                      {project.category}
                    </h4>
                    <p className="text-sm text-secondary">
                      Projects coming soon
                    </p>

                    <span
                      className="inline-block mt-4 text-xs px-4 py-1 rounded-full 
                       border border-border_color text-secondary"
                    >
                      Under Development
                    </span>
                  </div>
                ) : null}
              </div>

              {/* Content */}
              <div className="mt-4">
                <span className="bg-primary text-white px-4 py-2 rounded-full text-sm inline-block">
                  {project.category}
                </span>

                <div className="flex justify-between items-center mt-3">
                  <h4 className="text-lg font-semibold">{project.title}</h4>

                  {project.slug && (
                    <span
                      className="text-sm border border-border_color px-4 py-2 rounded-full 
                         flex items-center gap-2 
                         group-hover:bg-primary group-hover:text-white 
                         transition duration-500"
                    >
                      See Details <FiArrowRight />
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
