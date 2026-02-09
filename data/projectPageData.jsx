import { FaVideo, FaMagic, FaPaintBrush, FaImage } from "react-icons/fa";

export const projectPageData = {
  meta: {
    title: "Our project | Creative Frog",
    description:
      "Take a look at our work in animation, video production, graphics design, and photo editing at Creative Frog.",
    keywords:
      "Creative Frog project, Animation project, Graphics Design Projects, Video Editing, Image Retouching",
    author: "Creative Frog",
    viewport: "width=device-width, initial-scale=1.0",
    og: {
      title: "Our project | Creative Frog",
      description:
        "Browse the creative project of Creative Frog featuring work in animation, video, and design.",
      url: "https://creativefrog.org/project",
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