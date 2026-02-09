export default function CompanyStory() {
  return (
    <section className="bg-accent/10 text-dark">
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto px-6 md:px-0 py-16 md:py-20">
        {/* Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 font-heading">
            Our Story
          </h2>

          <p className="text-lg text-dark/70 mb-5 leading-relaxed">
            Light Studio360 was founded with a simple but powerful mission: to
            bridge the gap between creative excellence and strategic execution.
            What started as a small team of passionate designers and developers
            has evolved into a full-service creative studio.
          </p>

          <p className="text-lg text-dark/70 mb-5 leading-relaxed">
            Today, we work with brands across the globe—from startups to Fortune
            500 companies—delivering solutions in 3D modeling, VFX, video
            production, animation, and professional image services.
          </p>

          <p className="text-lg text-dark/70 leading-relaxed">
            Our journey isn’t about us—it’s about the impact we create for our
            clients.
          </p>
        </div>

        {/* Stats Card */}
        <div className="relative rounded-3xl p-10 bg-gradient-to-br from-primary to-dark shadow-2xl text-white">
          <div className="text-6xl font-black text-secondary mb-3">5+</div>
          <p className="text-2xl font-bold mb-8">Years of Excellence</p>

          <ul className="space-y-4">
            {[
              "1000+ Happy Clients",
              "400+ Projects Delivered",
              "50+ Countries Served",
              "100% Client Satisfaction",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-white/90">
                <span className="text-secondary text-xl">✓</span>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
