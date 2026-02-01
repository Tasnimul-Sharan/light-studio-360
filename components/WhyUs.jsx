export default function WhyChooseUs() {
  const features = [
    {
      title: "Expert Team",
      desc: "Talented professionals with years of industry experience",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Latest Technology",
      desc: "State-of-the-art tools and cutting-edge software",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Fast Turnaround",
      desc: "Efficient delivery without compromising quality",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Client Focused",
      desc: "Your vision is our priority, always",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const stats = [
    {
      number: "400+",
      label: "Successful Projects",
      gradient: "from-indigo-600 to-purple-600",
    },
    {
      number: "200+",
      label: "Satisfied Clients",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      number: "5+",
      label: "Years Experience",
      gradient: "from-orange-600 to-red-600",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-gray-50 to-white w-full py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <h2 className="text-4xl font-black text-gray-800 mb-6">
              Why Light Studio360?
            </h2>

            <ul className="space-y-5">
              {features.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}
                  >
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Stats */}
          <div className="space-y-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${stat.gradient} rounded-2xl p-8 text-white text-center shadow-lg`}
              >
                <div className="text-5xl font-black mb-2">{stat.number}</div>
                <p className="text-lg font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
