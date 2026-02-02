export default function QualityAssurance() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 md:p-16 mb-12 border-l-4 border-indigo-600">
      <h2
        className="text-4xl font-black text-center mb-10"
        style={{ fontFamily: "var(--heading-font)" }}
      >
        Quality Assurance Process
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          ["1", "Automated Validation", "Initial AI-based quality checks"],
          ["2", "Expert Review", "Manual professional inspection"],
          ["3", "Final Delivery", "Verified & confirmed delivery"],
        ].map(([n, t, d]) => (
          <div
            key={n}
            className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-600"
          >
            <div className="text-4xl font-black text-purple-600 mb-3">{n}</div>
            <h3 className="font-bold text-xl mb-2">{t}</h3>
            <p className="text-gray-600">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
