import { pillars } from "@/data/data";

export default function PillarsSection() {
  return (
    <div className="relative z-10 mb-8">
      <h3 className="text-4xl font-black text-center mb-12 text-gray-800">
        Our Three Pillars of Success
      </h3>

      <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
        {pillars.map((p, i) => (
          <div
            key={i}
            className={`bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 ${p.border}`}
          >
            <h4 className="text-2xl font-bold mb-3 text-gray-800">{p.title}</h4>
            <p className="text-gray-700">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
