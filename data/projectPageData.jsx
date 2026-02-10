import { FaVideo, FaMagic, FaPaintBrush, FaImage } from "react-icons/fa";

export const projectPageData = {
  meta: {
    title:
      "Our Projects | Light Studio360 – Image Editing, VFX, 3D & Video Portfolio",

    description:
      "Explore Light Studio360’s portfolio featuring premium image editing, VFX & compositing, 3D modeling, animation, and cinematic video production projects trusted by 1000+ global brands.",

    keywords:
      "Light Studio360 portfolio, creative studio projects, image editing portfolio, VFX projects, 3D modeling showcase, animation work, video production portfolio, post production studio work, professional retouching examples",

    author: "Light Studio360",

    viewport: "width=device-width, initial-scale=1.0",

    og: {
      title: "Our Projects | Light Studio360 Portfolio",
      description:
        "Browse our latest creative work including image retouching, VFX, 3D renders, animation, and professional video production.",
      url: "https://www.lightstudio360.com/projects",
      type: "website",
    },
  },
  hero: {
    backgroundImage: "/vfx.jpg",
    title: "Our project",
    description: "Crafted visuals that speak louder than words.",
  },
  services: [
    {
      url: "/project/vfx-animation",
      icon: FaMagic,
      title: "VFX & Animation",
      description:
        "A showcase of our most dynamic and imaginative motion graphics and effects.",
    },
    {
      url: "/project/video-production",
      icon: FaVideo,
      title: "Video Production",
      description:
        "From corporate shoots to creative commercials, explore our video reels.",
    },
    {
      url: "/project/graphics-design",
      icon: FaPaintBrush,
      title: "Graphics Design",
      description:
        "Creative branding, posters, and digital designs built to inspire.",
    },
    {
      url: "/project/image-editing",
      icon: FaImage,
      title: "Image Editing",
      description:
        "Before-and-after visuals that demonstrate precision in every pixel.",
    },
  ],
  testimonials: {
    title: "Client Testimonials",
    testimonial: [
      {
        message: "Their designs speak volumes. Exceptional talent!",
        name: "Nabila Rahman",
        position: "CEO, NexArt",
      },
      {
        message: "Every project has exceeded expectations.",
        name: "Mizan Uddin",
        position: "Founder, VisualAce",
      },
      {
        message: "A reliable partner for all our visual content needs.",
        name: "Farzana Akter",
        position: "Brand Coordinator",
      },
    ],
  },
};
