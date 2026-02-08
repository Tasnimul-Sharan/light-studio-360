import { features } from "@/data/data";

export default function FeatureGrid() {
  return (
    <section className="relative z-10 py-12 md:py-20">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-6">
        {features.map((item, i) => (
          <div
            key={i}
            className="group relative rounded-[28px] p-[1px]
                       bg-gradient-to-br from-secondary/60 via-accent/40 to-secondary/60
                       transition-all duration-300 hover:shadow-2xl"
          >
            {/* Card body */}
            <div
              className="relative h-full rounded-[27px] bg-primary p-8
                         overflow-hidden"
            >
              {/* Hover light sweep */}
              <div
                className="pointer-events-none absolute inset-0
                           opacity-0 group-hover:opacity-100 transition duration-500
                           bg-gradient-to-tr from-transparent via-white/10 to-transparent"
              />

              {/* Feature number */}
              <div className="text-secondary text-sm font-semibold mb-4 tracking-widest">
                {String(i + 1).padStart(2, "0")}
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-white/70 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
