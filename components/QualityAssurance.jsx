export default function QualityAssurance() {
  return (
    <section className="bg-light rounded-3xl py-20 px-8 md:px-14">
      <h2
        className="text-4xl font-bold text-primary text-center mb-14"
        style={{ fontFamily: "var(--heading-font)" }}
      >
        Quality <span className="text-secondary">Assurance</span> Process
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto md:px-0 px-6">
        {[
          ["01", "Automated Validation", "Initial AI-powered quality checks"],
          ["02", "Expert Review", "Manual inspection by senior professionals"],
          ["03", "Final Delivery", "Verified, approved & delivered"],
        ].map(([n, t, d]) => (
          <div
            key={n}
            className="relative bg-white rounded-3xl p-10 border-2 border-secondary/30"
          >
            <div className="text-secondary text-sm font-semibold mb-4 tracking-widest">
              {n}
            </div>

            <h3 className="font-semibold text-xl text-primary mb-3">{t}</h3>

            <p className="text-dark/70 leading-relaxed">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
