export default function About() {
  return (
    <section className="relative bg-[#F5F7FA] text-[#1E2A44] md:py-28 py-20 overflow-hidden">
      {/* Soft Brand Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[420px] h-[420px] bg-[#D4AF37]/20 blur-[160px] rounded-full absolute -top-24 -left-24" />
        <div className="w-[360px] h-[360px] bg-[#1E2A44]/15 blur-[140px] rounded-full absolute bottom-0 right-0" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Small Label */}
        <p className="text-sm uppercase tracking-[0.25em] text-[#D4AF37] mb-6 font-semibold">
          About Light Studio360
        </p>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-10">
          Crafting <span className="text-[#D4AF37]">Visual Stories</span> That
          Captivate and Convert
        </h2>

        {/* Divider */}
        <div className="w-20 h-[3px] bg-[#D4AF37] mb-12 rounded-full" />

        {/* Body */}
        <div className="space-y-8 text-[#1E2A44]/80 text-base md:text-lg leading-relaxed">
          <p>
            Founded in <strong className="text-[#1E2A44]">2020</strong>,{" "}
            <strong className="text-[#1E2A44]">Light Studio360</strong> is an
            award-winning creative studio focused on transforming ideas into
            powerful digital experiences.
          </p>

          <p>
            We collaborate with{" "}
            <strong className="text-[#D4AF37]">1,000+ global brands</strong>{" "}
            across industries, delivering premium visual solutions that elevate
            brand presence and engagement.
          </p>

          <p>
            Innovation, precision, and client satisfaction define our approach—
            blending creativity with modern technology to deliver measurable,
            real-world results.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <a
            href="/contact"
            className="inline-block px-10 py-4 
              bg-[#D4AF37] text-[#0B0F14] 
              font-bold rounded-xl shadow-lg
              hover:bg-[#1E2A44] hover:text-[#F5F7FA]
              transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
