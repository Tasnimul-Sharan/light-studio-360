import { features } from "@/data/data";

export default function FeatureGrid() {
  return (
    <div className="relative z-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4 py-12 max-w-7xl mx-auto">
      {features.map((item, i) => (
        <div
          key={i}
          className={`bg-gradient-to-br ${item.gradient} p-8 rounded-2xl text-white shadow-lg hover:shadow-2xl border border-white/30`}
        >
          <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
          <p className="opacity-90 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
