import { FaLightbulb, FaRegEye, FaChartLine } from "react-icons/fa";

const values = [
  {
    title: "Innovation",
    desc: "We continuously explore cutting-edge tools and techniques to keep our work ahead of the curve.",
    icon: FaLightbulb,
  },
  {
    title: "Clarity",
    desc: "Transparent communication, clear timelines, and zero surprises.",
    icon: FaRegEye,
  },
  {
    title: "Impact",
    desc: "We measure success by real business results, not just visuals.",
    icon: FaChartLine,
  },
];

export default function CoreValues() {
  return (
    <section className="mb-24">
      <h2 className="text-4xl md:text-5xl font-black text-primary text-center mb-14 font-heading">
        Our Core Values
      </h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto px-6 md:px-0">
        {values.map((v, i) => {
          const Icon = v.icon;

          return (
            <div
              key={i}
              className="group relative rounded-3xl border border-primary/15
                         bg-white p-8 transition-all duration-500
                         hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Border glow on hover */}
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl
                              opacity-0 group-hover:opacity-100 transition
                              bg-gradient-to-br from-secondary/20 via-transparent to-accent/20"
              />

              {/* Icon */}
              <div
                className="relative z-10 mb-6 inline-flex h-14 w-14 items-center justify-center
                           rounded-2xl bg-gradient-to-br from-secondary to-accent
                           text-white text-xl shadow-md transition-all duration-500
                           group-hover:scale-110 group-hover:shadow-secondary/40"
              >
                <Icon />
              </div>

              {/* Content */}
              <h3 className="relative z-10 text-2xl font-bold text-primary mb-4 font-heading">
                {v.title}
              </h3>

              <p className="relative z-10 text-dark/70 leading-relaxed">
                {v.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
