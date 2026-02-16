import { stats } from "@/data/data";

export default function TrackRecord() {
  return (
    <section className="relative z-10 bg-primary py-20">
      <div className="grid gap-12 md:grid-cols-4 max-w-7xl mx-auto px-6">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="text-5xl font-extrabold text-secondary mb-3">
              {s.value}
            </div>
            <p className="text-white/80 font-medium tracking-wide">{s.label}</p>
            <div className="mt-5 h-[2px] w-16 mx-auto bg-gradient-to-r from-secondary to-accent" />
          </div>
        ))}
      </div>
    </section>
  );
}
