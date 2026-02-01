export default function TrustSection() {
  const values = [
    {
      title: "Industry-Standard Quality",
      desc: "We maintain strict quality standards across all projects. Our work speaks for itself—1000+ satisfied clients worldwide validate our commitment to excellence.",
      border: "border-indigo-600",
      iconColor: "text-indigo-600",
      icon: <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />,
    },
    {
      title: "Fast Turnaround Time",
      desc: "Time matters. We deliver quality work quickly—from image retouching in 24–48 hours to complete projects within tight deadlines without compromising excellence.",
      border: "border-purple-600",
      iconColor: "text-purple-600",
      icon: <path d="M13 10V3L4 14h7v7l9-11h-7z" />,
    },
    {
      title: "Competitive Pricing",
      desc: "Premium quality doesn't mean premium pricing. We offer competitive rates with flexible packages designed to fit any budget while delivering premium results.",
      border: "border-pink-600",
      iconColor: "text-pink-600",
      icon: (
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
      ),
    },
  ];

  return (
    <section className="w-full py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-800 mb-4">
            Why Businesses Trust Light Studio360
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proven quality, reliability, and expertise that delivers results
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {values.map((item, i) => (
            <div
              key={i}
              className={`bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition border-t-4 ${item.border}`}
            >
              <div className={`mb-4 ${item.iconColor}`}>
                <svg
                  className="w-12 h-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {item.icon}
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-700 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
