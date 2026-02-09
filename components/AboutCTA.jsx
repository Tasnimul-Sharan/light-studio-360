export default function AboutCTA() {
  return (
    <section
      className="rounded-3xl bg-gradient-to-r from-primary via-dark to-primary max-w-6xl mx-auto
                        p-14 md:p-20 text-center shadow-2xl my-12"
    >
      <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-heading">
        Let’s Create Something Extraordinary
      </h2>

      <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
        Partner with a creative studio that understands premium execution and
        business impact.
      </p>

      <a
        href="#contact"
        className="inline-block px-10 py-4 rounded-full
                   bg-secondary text-primary font-bold
                   hover:bg-secondary/90 transition
                   shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        Start A Conversation
      </a>
    </section>
  );
}
