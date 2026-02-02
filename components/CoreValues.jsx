const values = [
  {
    title: "Innovation",
    color: "blue",
    desc: "We constantly explore cutting-edge tools and creative techniques.",
  },
  {
    title: "Clarity",
    color: "purple",
    desc: "Clear communication, timelines, and expectations.",
  },
  {
    title: "Impact",
    color: "orange",
    desc: "Work that drives measurable business results.",
  },
];

export default function CoreValues() {
  return (
    <section>
      <h2 className="text-4xl font-black text-gray-800 mb-10 text-center">
        Our Core Values
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {values.map((item, i) => (
          <div
            key={i}
            className={`p-8 rounded-2xl border-2 shadow-md bg-${item.color}-50 border-${item.color}-200`}
          >
            <h3 className={`text-2xl font-bold text-${item.color}-600 mb-3`}>
              {item.title}
            </h3>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
