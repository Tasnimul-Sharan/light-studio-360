import Image from "next/image";
import PageHeader from "./PageHeader";
import SectionBadge from "./SectionBadge";
import Link from "next/link";

const articles = [
  {
    title: "AI-Powered Digital Transformation",
    slug: "ai-powered-digital-transformation",
    date: "Jan 5, 2026",
    author: "Redith IT",
    img: "/news/redith-it.jpg",
    description:
      "Redith IT delivers AI-driven software, cloud, and cybersecurity solutions to accelerate digital growth across industries.",
  },
  {
    title: "Web Development Solutions",
    slug: "web-development-solutions",
    date: "Nov 5, 2025",
    author: "Redith IT",
    img: "/news/web-development.jpg",
    description:
      "Redith IT builds modern, secure, and scalable websites and web applications tailored to business growth and user experience.",
  },
  {
    title: "AI in Digital Marketing",
    slug: "ai-in-digital-marketing",
    date: "Oct 15, 2025",
    author: "Redith Digital",
    img: "/news/digital-marketing.jpg",
    description:
      "AI-powered analytics and data-driven strategies are reshaping digital branding and marketing performance.",
  },
];

export default function News() {
  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        {/* <div className="max-w-3xl mb-14">
          <SectionBadge text="Our Blogs" />
          <h2 className="text-3xl font-extrabold text-gray-900">
            Latest <span className="text-primary">News & Media</span>
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Stay informed with the latest announcements, achievements, and
            developments across Redith Group.
          </p>
        </div> */}

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-3xl">
            <SectionBadge text="Our Blogs" />
            <h2 className="text-3xl font-extrabold text-gray-900">
              Latest <span className="text-primary">News & Media</span>
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Stay informed with the latest announcements, achievements, and
              developments across Redith Group.
            </p>
          </div>

          {/* View All Button */}
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
                className="group bg-white border rounded-2xl overflow-hidden
                 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={article.img}
                    alt={article.title}
                    width={500}
                    height={300}
                    className="w-full h-56 object-cover
                     group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    <span className="text-gray-700">{article.author}</span>
                  </div>

                  <h3 className="mt-2 text-lg font-semibold text-gray-900 leading-snug">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {article.description}
                  </p>

                  <div className="mt-6">
                    <span
                      className="inline-flex items-center text-sm font-semibold
                       text-gray-900 group-hover:text-primary transition"
                    >
                      Read More
                      <span
                        className="ml-2 h-[1px] w-6 bg-gray-900
                         group-hover:bg-orange-600 transition"
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
