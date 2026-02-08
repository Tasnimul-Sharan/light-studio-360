export default function WhyUsCTA() {
  return (
    <section className="relative z-10 my-12 md:my-20">
      <div className="relative overflow-hidden max-w-6xl mx-auto rounded-3xl bg-primary px-10 py-16 text-center shadow-2xl border border-white/10">
        {/* Subtle glow layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10 opacity-70" />

        <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Elevate Your <span className="text-secondary">Vision</span>
            ?
          </h3>

          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
            Partner with Light Studio360 and experience premium creative
            solutions trusted by brands worldwide.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2
                       bg-secondary text-primary font-semibold
                       px-10 py-4 rounded-xl
                       transition-all duration-300
                       hover:bg-secondary/90 hover:-translate-y-[2px]
                       shadow-lg"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
