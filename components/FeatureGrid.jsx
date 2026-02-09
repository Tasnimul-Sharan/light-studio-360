import { features } from "@/data/data";

export default function FeatureGrid() {
  return (
    <section className="relative z-10 py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-6">
        {features.map((item, i) => (
          <div
            key={i}
            className="group relative rounded-[32px] p-[1px]
                       bg-gradient-to-br from-secondary/50 via-accent/40 to-primary/40
                       transition-all duration-500 hover:-translate-y-1"
          >
            <div
              className="relative h-full rounded-[31px] bg-primary px-8 py-10
                         overflow-hidden shadow-lg
                         group-hover:shadow-2xl transition-all duration-500"
            >
              <div
                className="pointer-events-none absolute inset-0
                           bg-gradient-to-b from-white/[0.08] to-transparent
                           opacity-70"
              />
              <div
                className="pointer-events-none absolute inset-0
                           opacity-0 group-hover:opacity-100 transition duration-700
                           bg-gradient-to-tr from-transparent via-white/15 to-transparent"
              />

              <div className="mb-6 flex items-center gap-3">
                <span className="text-secondary text-sm font-semibold tracking-[0.35em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-[1px] flex-1 bg-secondary/30" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-4 leading-snug">
                {item.title}
              </h3>

              <p className="text-white/65 text-sm leading-relaxed">
                {item.desc}
              </p>
              <div
                className="absolute bottom-0 left-0 h-[3px] w-full
                           bg-gradient-to-r from-secondary via-accent to-secondary
                           opacity-0 group-hover:opacity-100 transition duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
