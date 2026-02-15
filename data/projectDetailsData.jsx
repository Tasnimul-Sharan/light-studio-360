import { getBeforeAfterImages } from "@/lib/getProjectImages";

const projectDetailsData = {
  meta: {
    title: "Project Details - Light Studio360",
    description:
      "Explore detailed project works including VFX, image editing, 3D modeling, animation, and cinematic video production crafted by Light Studio360.",
    keywords:
      "Light Studio360, VFX, Video Editing, Image Editing, Retouching, Clipping Path, Jewelry Retouching, Ghost Mannequin, Shadow Retouch, 3D Modeling, Animation, Professional Video Production",
    author: "Light Studio360",
    viewport: "width=device-width, initial-scale=1",
    og: {
      title: "Project Details - Light Studio360",
      description:
        "High-quality project showcase including VFX, image editing, 3D modeling, animation, and professional video production by Light Studio360.",
      url: "https://www.lightstudio360.com/project",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Project Details - Light Studio360",
      description:
        "High-quality portfolio showcasing VFX, image editing, 3D modeling, animation, and video production projects by Light Studio360.",
      site: "@LightStudio360",
    },
  },

  projectDetails: [
    // ===== VFX =====
    {
      slug: "ultimate-vfx-reel-2026",
      title: "Ultimate VFX Reel 2026",
      category: "VFX",
      videos: [{ url: "https://www.youtube.com/embed/Dkl6q5pfRWI" }],
    },
    {
      slug: "advanced-rotoscoping-demo",
      title: "Advanced Rotoscoping Demo",
      category: "VFX",
      videos: [{ url: "https://www.youtube.com/embed/QF4N98KRC1A" }],
    },

    // ===== VIDEO EDITING =====
    {
      slug: "cinematic-color-grading-showcase",
      title: "Cinematic Color Grading Showcase",
      category: "Video Editing",
      videos: [{ url: "https://www.youtube.com/embed/7XfCM3yVuko" }],
    },
    {
      slug: "professional-trailer-edit",
      title: "Professional Trailer Edit",
      category: "Video Editing",
      videos: [{ url: "https://www.youtube.com/embed/SjkcA2ZCmDU" }],
    },

    // ===== 3D MODELING =====
    {
      slug: "3d-product-visualization",
      title: "3D Product Visualization – Watch Render",
      category: "3D Modeling",
      videos: [
        { url: "https://www.youtube.com/embed/t9Ibk0I8Jyk" },
        { url: "https://www.youtube.com/embed/WoaAMzG31P4" },
      ],
    },

    // ===== ANIMATION =====
    {
      slug: "2d-character-animation-reel",
      title: "2D Character Animation Reel",
      category: "Animation",
      videos: [{ url: "https://www.youtube.com/embed/2lvRFj-RSaU" }],
    },
    {
      slug: "3d-logo-animation",
      title: "3D Logo Animation",
      category: "Animation",
      videos: [{ url: "https://www.youtube.com/embed/1La4QzGeaaQ" }],
    },

    // ===== IMAGE EDITING (Dynamic) =====
    {
      slug: "clipping-path",
      title: "Clipping Path",
      category: "Image Editing",
      images: getBeforeAfterImages("clipping"),
    },
    {
      slug: "ghost-mannequin",
      title: "Ghost Mannequin",
      category: "Image Editing",
      images: getBeforeAfterImages("ghost-mannequin"),
    },
    {
      slug: "jewelry-retouching",
      title: "Jewelry Retouching",
      category: "Image Editing",
      images: getBeforeAfterImages("jewelry-retouching"),
    },
    {
      slug: "retouching",
      title: "Retouching",
      category: "Image Editing",
      images: getBeforeAfterImages("retouching"),
    },
    {
      slug: "color-correction",
      title: "Color Correction",
      category: "Image Editing",
      images: getBeforeAfterImages("color-correction"),
    },
    {
      slug: "shoes-enhancement",
      title: "eCommerce Shoes Enhancement",
      category: "Image Editing",
      images: getBeforeAfterImages("shoes-enhancement"),
    },
    {
      slug: "glamour-model",
      title: "Glamour Model Retouching",
      category: "Image Editing",
      images: getBeforeAfterImages("glamour-model"),
    },
    {
      slug: "masking",
      title: "Masking",
      category: "Image Editing",
      images: getBeforeAfterImages("masking"),
    },
    {
      slug: "background-removal",
      title: "Background Removal",
      category: "Image Editing",
      images: getBeforeAfterImages("background-removal"),
    },
    {
      slug: "real-estate",
      title: "Real Estate",
      category: "Image Editing",
      images: getBeforeAfterImages("real-estate"),
    },
  ],
};

export default projectDetailsData;
