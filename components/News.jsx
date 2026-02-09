import Image from "next/image";
import SectionBadge from "./SectionBadge";
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
];

export default function News() {
  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-3xl">
            <SectionBadge text="Our Blogs" />
            <h2 className="text-3xl font-extrabold text-gray-900">
              Latest <span className="text-secondary">News & Media</span>
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Stay informed with the latest announcements, achievements, and
              developments across Redith Group.
            </p>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center justify-center
               px-6 py-3 rounded-md border border-primary/50
               text-sm font-semibold text-primary
               hover:bg-primary hover:text-white hover:border-primary
              transition-all transform duration-500"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={article.img}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
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
        group-hover:text-primary transition-colors"
                    >
                      Read More
                      <span
                        className="ml-2 h-[2px] w-6 bg-gray-900
          group-hover:bg-primary group-hover:w-10
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
