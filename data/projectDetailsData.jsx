const projectDetailsData = {
  meta: {
    title: "project Details - CFROG Studio",
    description:
      "Explore detailed project works including VFX, image editing, and retouching samples.",
    keywords:
      "VFX, Video Editing, Image Editing, Retouching, Clipping Path, Jewelry Retouching, Ghost Mannequin, Shadow Retouch",
    author: "CFROG Studio",
    viewport: "width=device-width, initial-scale=1",
    og: {
      title: "project Details - CFROG Studio",
      description: "High-quality project showcase crafted by CFROG Studio.",
      url: "https://yourdomain.com/project",
      type: "website",
    },
  },
  projectDetails: [
    {
  slug: "cfrog-vfx-showreel",
  title: "CFROG VFX Main Showreel",
  category: "VFX",
  videos: [
    {
      url: "https://www.youtube.com/embed/rUC51rO9ojg",
    },
  ],
},
{
  slug: "rotoscoping-sample",
  title: "Rotoscoping Sample",
  category: "VFX",
  videos: [
    {
      url: "https://www.youtube.com/embed/8EP5pDqTk0Y",
    },
  ],
},
{
  slug: "cinematic-edit-1",
  title: "Cinematic Edit Sample 1",
  category: "Video Editing",
  videos: [
    {
      url: "https://www.youtube.com/embed/FVR8zz8ci2k",
    },
  ],
},
{
  slug: "cinematic-edit-2",
  title: "Cinematic Edit Sample 2",
  category: "Video Editing",
  videos: [
    {
      url: "https://www.youtube.com/embed/N_mKCJSfyww",
    },
  ],
},

    {
      slug: "clipping-path",
      title: "Clipping Path",
      category: "Image Editing",
      images: Array.from({ length: 12 }, (_, i) => ({
        before: `/image-edating/clipping/${i + 1}--1.jpg`,
        after: `/image-edating/clipping/${i + 1}--2.jpg`,
      })),
    },
    {
      slug: "ghost-mannequin",
      title: "Ghost Mannequin",
      category: "Image Editing",
      images: Array.from({ length: 29 }, (_, i) => ({
        before: `/image-edating/ghost-mannequin/${i + 1}--1.jpg`,
        after: `/image-edating/ghost-mannequin/${i + 1}--2.jpg`,
      })),
    },
    {
      slug: "jewelry-retouching",
      title: "Jewelry Retouching",
      category: "Image Editing",
      images: Array.from({ length: 6 }, (_, i) => ({
        before: `/image-edating/jewelry-retouching/${i + 1}--1.jpg`,
        after: `/image-edating/jewelry-retouching/${i + 1}--2.jpg`,
      })),
    },
    {
      slug: "retouching",
      title: "Retouching",
      category: "Image Editing",
      images: Array.from({ length: 6 }, (_, i) => ({
        before: `/image-edating/retouching/${i + 1}--1.jpg`,
        after: `/image-edating/retouching/${i + 1}--2.jpg`,
      })),
    },
    {
      slug: "shadow-retouch",
      title: "Shadow Retouch",
      category: "Image Editing",
      images: Array.from({ length: 12 }, (_, i) => ({
        before: `/image-edating/shadow-retouch/${i + 1}--1.jpg`,
        after: `/image-edating/shadow-retouch/${i + 1}--2.jpg`,
      })),
    },
    {
      slug: "background-retouch",
      title: "Background Retouch",
      category: "Image Editing",
      images: Array.from({ length: 7 }, (_, i) => ({
        before: `/image-edating/background-retouch/${i + 1}--1.jpg`,
        after: `/image-edating/background-retouch/${i + 1}--2.jpg`,
      })),
    },
  ],
};

export default projectDetailsData;