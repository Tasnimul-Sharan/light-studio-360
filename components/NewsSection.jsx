import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    title: "Professional Image Editing for eCommerce Growth",
    slug: "professional-image-editing-ecommerce",
    date: "Jan 12, 2026",
    author: "Light Studio 360",
    img: "/news/image-editing.jpg",
    description:
      "Clipping path, high-end retouching, ghost mannequin and product enhancement services designed for modern eCommerce brands.",
  },
  {
    title: "Commercial Video Production That Tells Your Story",
    slug: "commercial-video-production-storytelling",
    date: "Dec 28, 2025",
    author: "Light Studio 360",
    img: "/news/video-production.jpg",
    description:
      "From cinematic edits to product promos, discover how professional video production builds strong visual branding.",
  },
  {
    title: "Hollywood-Style VFX & Compositing Techniques",
    slug: "hollywood-style-vfx-compositing",
    date: "Dec 10, 2025",
    author: "Light Studio 360",
    img: "/news/vfx.jpg",
    description:
      "Green screen removal, rotoscoping and advanced visual effects that transform raw footage into cinematic visuals.",
  },
  {
    title: "3D Modeling & Photorealistic Product Rendering",
    slug: "3d-modeling-product-rendering",
    date: "Nov 25, 2025",
    author: "Light Studio 360",
    img: "/news/3d-modeling.jpg",
    description:
      "Architectural visuals, CGI creation and photorealistic 3D product renders for modern digital marketing.",
  },
  {
    title: "2D & 3D Animation for Modern Brands",
    slug: "2d-3d-animation-for-brands",
    date: "Nov 10, 2025",
    author: "Light Studio 360",
    img: "/news/animation.jpg",
    description:
      "Explainer videos, character animation and motion graphics designed to simplify complex ideas visually.",
  },
  {
    title: "Modern Web Development & UI/UX Solutions",
    slug: "modern-web-development-ui-ux",
    date: "Oct 30, 2025",
    author: "Light Studio 360",
    img: "/news/web-development.jpg",
    description:
      "Responsive websites, landing pages and custom UI/UX experiences that boost engagement and conversions.",
  },
];

export default function NewsSection() {
  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {articles.map((article, idx) => (
            <Link key={idx} href={`/news/${article.slug}`} className="block">
              <article
                className="group relative bg-white rounded-2xl overflow-hidden
  border border-gray-200/60
  transition-all duration-500
  hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)]"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
    bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none"
                />
                <div className="relative overflow-hidden">
                  <Image
                    src={article.img}
                    alt={article.title}
                    width={1200}
                    height={1200}
                    className="w-full md:h-96 h-56 object-cover
                     group-hover:scale-105 transition duration-500"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t
      from-black/50 via-black/10 to-transparent"
                  />
                </div>
                <div className="relative p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-primary uppercase">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    <span className="text-gray-500">{article.author}</span>
                  </div>

                  <h3
                    className="mt-3 text-lg font-bold text-gray-900 leading-snug
      group-hover:text-primary transition-colors duration-300"
                  >
                    {article.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {article.description}
                  </p>

                  <div className="mt-6">
                    <span
                      className="relative inline-flex items-center text-sm font-semibold text-gray-900
        group-hover:text-secondary transition-colors"
                    >
                      Read More
                      <span
                        className="ml-2 h-[2px] w-6 bg-gray-900
          group-hover:bg-secondary group-hover:w-10
          transition-all duration-500"
                      />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
