export default function AboutPage() {
  return (
    <div className="bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* HERO */}
        <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 md:p-16 text-white mb-12 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80"
              alt="Team"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/85 to-purple-600/85"></div>
          </div>

          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              About Light Studio360
            </h1>
            <p className="text-xl text-indigo-100 max-w-2xl">
              Established in 2020, we've grown from a passionate team of
              creatives into a trusted creative partner for brands worldwide.
            </p>
          </div>
        </section>

        {/* STORY */}
        <section className="mb-12 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-black text-gray-800 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Light Studio360 was founded with a simple but powerful mission:
              bridge creative excellence with strategy.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Today we work with brands across the globe delivering 3D, VFX,
              animation, video and image services.
            </p>
            <p className="text-lg text-gray-700">
              Every project is an opportunity to prove that great creative work
              can transform businesses.
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 shadow-lg">
            <div className="text-6xl font-black text-indigo-600 mb-4">5+</div>
            <p className="text-2xl font-bold text-gray-800 mb-6">
              Years of Excellence
            </p>
            <ul className="space-y-3 text-gray-700 font-medium">
              <li>✓ 1000+ Happy Clients</li>
              <li>✓ 400+ Projects Delivered</li>
              <li>✓ 50+ Countries Served</li>
              <li>✓ 100% Client Satisfaction</li>
            </ul>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="mb-12">
          <h2 className="text-4xl font-black text-gray-800 mb-10 text-center">
            Our Core Values
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Innovation",
                color: "blue",
                desc: "We explore cutting-edge tools and techniques.",
              },
              {
                title: "Clarity",
                color: "purple",
                desc: "Transparent communication and clear timelines.",
              },
              {
                title: "Impact",
                color: "orange",
                desc: "Work that drives measurable results.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-8 rounded-2xl border-2 shadow-md bg-${item.color}-50 border-${item.color}-200`}
              >
                <h3
                  className={`text-2xl font-bold text-${item.color}-600 mb-3`}
                >
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERTISE */}
        <section className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-12 mb-12">
          <h2 className="text-4xl font-black text-gray-800 mb-10 text-center">
            Our Expertise
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Creative Direction",
              "VFX & Motion",
              "3D Modeling & Rendering",
              "Video Production",
              "Animation",
              "Image Services",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl border-l-4 border-indigo-600 shadow-sm hover:shadow-md transition"
              >
                <h4 className="text-xl font-bold text-gray-800 mb-2">{item}</h4>
                <p className="text-gray-600">
                  Professional high-quality service delivery.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Let's Create Something Extraordinary
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Ready to partner with a creative studio? Let's talk.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition"
          >
            Start A Conversation Today
          </a>
        </section>
      </div>
    </div>
  );
}
