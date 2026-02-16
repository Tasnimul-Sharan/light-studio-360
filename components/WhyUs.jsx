"use client";

import { FaCheckCircle } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Expert Team",
      desc: "Talented professionals with years of industry experience",
      gradient: "from-primary to-accent",
    },
    {
      title: "Latest Technology",
      desc: "State-of-the-art tools and cutting-edge software",
      gradient: "from-primary to-secondary",
    },
    {
      title: "Fast Turnaround",
      desc: "Efficient delivery without compromising quality",
      gradient: "from-accent to-primary",
    },
    {
      title: "Client Focused",
      desc: "Your vision is our priority, always",
      gradient: "from-secondary to-primary",
    },
    {
      title: "Affordable Pricing",
      desc: "Best value solutions within your budget",
      gradient: "from-primary to-accent",
    },
    {
      title: "24/7 Support",
      desc: "Always available whenever you need help",
      gradient: "from-secondary to-accent",
    },
  ];

  return (
    <section className="bg-light w-full py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-12 text-center">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Light Studio360
          </span>
          ?
        </h2>

        <ul className="grid md:grid-cols-2 gap-8">
          {features.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-4 group hover:scale-105 transition-transform duration-500"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform`}
              >
                <FaCheckCircle size={22} />
              </div>

              <div className="text-left">
                <h4 className="font-semibold text-dark text-lg md:text-xl mb-1 group-hover:text-secondary transition">
                  {item.title}
                </h4>
                <p className="text-dark/70 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
