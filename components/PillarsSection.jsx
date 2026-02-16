import { pillars } from "@/data/data";
import { HiSparkles } from "react-icons/hi2";

export default function PillarsSection() {
  return (
    <section className="relative z-10 py-20">
      <h3 className="text-4xl md:text-5xl font-bold text-center mb-14 text-primary">
        Our <span className="text-secondary">Three Pillars</span> of Success
      </h3>

      <div className="grid gap-10 md:grid-cols-3 max-w-7xl mx-auto px-6 md:px-0">
        {pillars.map((p, i) => (
          <div
            key={i}
            className="group relative rounded-3xl p-[1px]
                       bg-gradient-to-br from-secondary via-accent to-primary
                       transition-all duration-500 hover:-translate-y-1"
          >
            <div
              className="relative h-full rounded-3xl bg-white p-10
                         shadow-lg group-hover:shadow-2xl transition-all duration-500"
            >
              <div
                className="absolute -top-6 left-10
                           w-12 h-12 rounded-xl flex items-center justify-center
                           bg-gradient-to-br from-secondary to-accent
                           text-white shadow-lg border border-white"
              >
                <HiSparkles className="text-xl" />
              </div>

              <h4 className="text-2xl font-semibold text-primary mb-4 mt-4">
                {p.title}
              </h4>

              <p className="text-dark/70 leading-relaxed">{p.desc}</p>

              <div
                className="pointer-events-none absolute inset-0 rounded-3xl
                           opacity-0 group-hover:opacity-100 transition duration-500
                           bg-gradient-to-br from-secondary/10 to-accent/10"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
