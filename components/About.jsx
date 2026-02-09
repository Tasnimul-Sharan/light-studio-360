import SectionBadge from "./SectionBadge";

export default function About() {
  return (
    <section className="relative bg-[#F5F7FA] text-[#1E2A44] md:py-28 py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[420px] h-[420px] bg-secondary/20 blur-[160px] rounded-full absolute -top-24 -left-24" />
        <div className="w-[360px] h-[360px] bg-[#1E2A44]/15 blur-[140px] rounded-full absolute bottom-0 right-0" />
      </div>

      <div className="relative max-w-5xl mx-auto md:px-6 px-0">
        <SectionBadge text="About Light Studio360" />
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-10">
          Crafting <span className="text-secondary">Visual Stories</span> That
          Captivate and Convert
        </h2>

        <div className="w-20 h-[3px] bg-secondary mb-12 rounded-full" />

        <div className="space-y-8 text-[#1E2A44]/80 text-base md:text-lg leading-relaxed">
          <p>
            Founded in <strong className="text-[#1E2A44]">2020</strong>,{" "}
            <strong className="text-[#1E2A44]">Light Studio360</strong> is an
            award-winning creative studio focused on transforming ideas into
            powerful digital experiences.
          </p>

          <p>
            We collaborate with{" "}
            <strong className="text-secondary">1,000+ global brands</strong>{" "}
            across industries, delivering premium visual solutions that elevate
            brand presence and engagement.
          </p>

          <p>
            Innovation, precision, and client satisfaction define our approach—
            blending creativity with modern technology to deliver measurable,
            real-world results.
          </p>
        </div>

        <div className="mt-12">
          <a
            href="/contact"
            className="inline-block px-10 py-4 
              bg-secondary text-[#0B0F14] 
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
