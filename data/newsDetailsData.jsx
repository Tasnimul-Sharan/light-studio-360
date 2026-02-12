import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const newsDetailsData = {
  socialIcons: [
    {
      icon: FaFacebookF,
      link: (url) =>
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      icon: FaXTwitter,
      link: (url, title) =>
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url,
        )}&text=${encodeURIComponent(title)}`,
    },
    {
      icon: FaLinkedinIn,
      link: (url, title) =>
        `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
          url,
        )}&title=${encodeURIComponent(title)}`,
    },
  ],
  newsDetails: [
    {
      slug: "professional-image-editing-ecommerce",
      blogPost: {
        title: "Professional Image Editing for eCommerce Growth",
        author: "Light Studio 360",
        date: "Jan 12, 2026",
        image: "/news/image-editing.jpg",
        description:
          "Professional image editing services help eCommerce brands present products with clarity and consistency. From clipping paths to high-end retouching, optimized visuals directly influence customer trust and conversion rates.",

        checklist: [
          "Clipping Path & Background Removal",
          "High-End Beauty & Product Retouching",
          "Ghost Mannequin & Apparel Editing",
          "Color Correction & Enhancement",
          "Shadow & Reflection Creation",
          "Bulk Image Optimization for Stores",
        ],

        subImages: ["/news/image-editing-1.jpg", "/news/image-editing-2.jpg"],

        subContent: [
          "Clean background and accurate cut-outs ensure your product stands out across marketplaces.",
          "High-end retouching enhances textures, lighting, and realism without losing authenticity.",
          "Ghost mannequin techniques provide a 3D look for apparel without visible models.",
          "Consistent color grading maintains brand identity across all listings.",
          "Optimized images improve loading speed and SEO performance.",
          "Professional editing ultimately increases customer confidence and sales.",
        ],

        quote:
          "A perfectly edited product image speaks louder than a thousand marketing words.",

        postTags: [
          "Image Editing",
          "eCommerce",
          "Retouching",
          "Product Enhancement",
          "Clipping Path",
        ],
      },
    },

    {
      slug: "commercial-video-production-storytelling",
      blogPost: {
        title: "Commercial Video Production That Tells Your Story",
        author: "Light Studio 360",
        date: "Dec 28, 2025",
        image: "/news/video-production.jpg",
        description:
          "Commercial video production transforms brand messages into engaging visual stories. From promotional ads to cinematic edits, strong storytelling builds emotional connection and brand recognition.",

        checklist: [
          "Corporate & Brand Commercials",
          "Product Promo Videos",
          "Cinematic Editing & Color Grading",
          "Script & Storyboarding Support",
          "Motion Graphics Integration",
          "Multi-Platform Video Optimization",
        ],

        subImages: ["/news/video-1.jpg", "/news/video-2.jpg"],

        subContent: [
          "Story-driven visuals create deeper audience engagement and retention.",
          "Cinematic editing enhances emotion, pacing, and professionalism.",
          "Product promos highlight features in a visually persuasive way.",
          "Motion graphics simplify complex information.",
          "Multi-platform optimization ensures quality across YouTube, social media, and websites.",
          "Strong visuals strengthen brand identity and recall.",
        ],

        quote:
          "Great video content doesn’t just show a product—it tells a memorable story.",

        postTags: [
          "Video Production",
          "Brand Storytelling",
          "Commercial Ads",
          "Cinematic Editing",
          "Marketing",
        ],
      },
    },

    {
      slug: "hollywood-style-vfx-compositing",
      blogPost: {
        title: "Hollywood-Style VFX & Compositing Techniques",
        author: "Light Studio 360",
        date: "Dec 10, 2025",
        image: "/news/vfx.jpg",
        description:
          "Advanced VFX and compositing techniques bring cinematic quality to digital content. From green screen removal to complex visual effects, raw footage is transformed into immersive visuals.",

        checklist: [
          "Green Screen Keying",
          "Rotoscoping & Masking",
          "CGI Integration",
          "Visual Effects Simulation",
          "Scene Compositing",
          "Color Matching & Final Grading",
        ],

        subImages: ["/news/vfx-1.jpg", "/news/vfx-2.jpg"],

        subContent: [
          "Precise rotoscoping ensures clean subject isolation in complex scenes.",
          "Green screen removal allows limitless background possibilities.",
          "CGI elements add depth and realism to footage.",
          "Compositing blends multiple layers seamlessly.",
          "Color matching ensures visual harmony across shots.",
          "Professional VFX increases production value dramatically.",
        ],

        quote:
          "Visual effects turn imagination into believable cinematic reality.",

        postTags: ["VFX", "Compositing", "Rotoscoping", "CGI", "Cinematic"],
      },
    },

    {
      slug: "3d-modeling-product-rendering",
      blogPost: {
        title: "3D Modeling & Photorealistic Product Rendering",
        author: "Light Studio 360",
        date: "Nov 25, 2025",
        image: "/news/3d-modeling.jpg",
        description:
          "3D modeling and photorealistic rendering allow brands to visualize products before production. High-quality CGI visuals are essential for architecture, marketing, and digital presentations.",

        checklist: [
          "Product 3D Modeling",
          "Photorealistic Rendering",
          "Architectural Visualization",
          "CGI Asset Creation",
          "Lighting & Material Setup",
          "Marketing Visual Production",
        ],

        subImages: ["/news/3d-1.jpg", "/news/3d-2.jpg"],

        subContent: [
          "Detailed modeling ensures accurate product representation.",
          "Photorealistic lighting enhances realism and depth.",
          "Architectural renders showcase spaces before construction.",
          "CGI assets are reusable across campaigns.",
          "Material accuracy increases authenticity.",
          "3D visuals reduce production costs and time.",
        ],

        quote:
          "If you can imagine it in 3D, you can present it before it exists.",

        postTags: [
          "3D Modeling",
          "Rendering",
          "CGI",
          "Architecture",
          "Product Visualization",
        ],
      },
    },

    {
      slug: "2d-3d-animation-for-brands",
      blogPost: {
        title: "2D & 3D Animation for Modern Brands",
        author: "Light Studio 360",
        date: "Nov 10, 2025",
        image: "/news/animation.jpg",
        description:
          "2D and 3D animation help brands communicate ideas visually and creatively. From explainer videos to character animation, motion content boosts engagement and understanding.",

        checklist: [
          "Explainer Videos",
          "Character Animation",
          "Motion Graphics",
          "Logo Animation",
          "Storyboard & Concept Design",
          "Social Media Animated Content",
        ],

        subImages: ["/news/animation-1.jpg", "/news/animation-2.jpg"],

        subContent: [
          "Animated explainers simplify complex services.",
          "Character animation adds personality to brands.",
          "Motion graphics enhance marketing visuals.",
          "Logo animations improve brand recall.",
          "Creative storytelling keeps viewers engaged longer.",
          "Animation increases shareability across platforms.",
        ],

        quote:
          "Animation brings static ideas to life with movement and emotion.",

        postTags: [
          "Animation",
          "Motion Graphics",
          "Explainer Video",
          "Branding",
          "Creative Media",
        ],
      },
    },

    {
      slug: "modern-web-development-ui-ux",
      blogPost: {
        title: "Modern Web Development & UI/UX Solutions",
        author: "Light Studio 360",
        date: "Oct 30, 2025",
        image: "/news/web-development.jpg",
        description:
          "Modern web development combined with intuitive UI/UX design ensures engaging and high-performing digital experiences that convert visitors into customers.",

        checklist: [
          "Responsive Website Development",
          "Landing Page Design",
          "Custom UI/UX Prototyping",
          "Performance Optimization",
          "SEO-Friendly Architecture",
          "API & CMS Integration",
        ],

        subImages: [
          "/news/web-1.jpg",
          "/news/web-2.jpg",
        ],

        subContent: [
          "Responsive layouts ensure compatibility across all devices.",
          "User-focused UI design improves interaction flow.",
          "Optimized performance reduces bounce rates.",
          "SEO-friendly structure increases visibility.",
          "Custom solutions align with brand identity.",
          "Analytics integration enables continuous improvement.",
        ],

        quote:
          "A modern website is the digital foundation of every successful brand.",

        postTags: [
          "Web Development",
          "UI UX",
          "Responsive Design",
          "Technology",
          "Digital Presence",
        ],
      },
    },
  ],
};

export default newsDetailsData;
