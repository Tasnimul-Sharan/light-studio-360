const expertise = [
  "Creative Direction",
  "VFX & Motion",
  "3D Modeling & Rendering",
  "Video Production",
  "Animation",
  "Image Services",
];

export default function ExpertiseSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-12">
      <h2 className="text-4xl font-black text-gray-800 mb-10 text-center">
        Our Expertise
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {expertise.map((item, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-xl border-l-4 border-indigo-600 shadow-sm hover:shadow-md transition"
          >
            <h4 className="text-xl font-bold text-gray-800 mb-2">{item}</h4>
            <p className="text-gray-600">
              High-quality professional service delivery.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
