// "use client";

// export default function WhyChooseUs() {
//   const features = [
//     {
//       title: "Expert Team",
//       desc: "Talented professionals with years of industry experience",
//       gradient: "from-primary to-purpleAccent",
//     },
//     {
//       title: "Latest Technology",
//       desc: "State-of-the-art tools and cutting-edge software",
//       gradient: "from-primary to-secondary",
//     },
//     {
//       title: "Fast Turnaround",
//       desc: "Efficient delivery without compromising quality",
//       gradient: "from-purpleAccent to-pinkAccent",
//     },
//     {
//       title: "Client Focused",
//       desc: "Your vision is our priority, always",
//       gradient: "from-secondary to-pinkAccent",
//     },
//   ];

//   const stats = [
//     {
//       number: "400+",
//       label: "Successful Projects",
//       gradient: "from-primary to-purpleAccent",
//     },
//     {
//       number: "200+",
//       label: "Satisfied Clients",
//       gradient: "from-primary to-secondary",
//     },
//     {
//       number: "5+",
//       label: "Years Experience",
//       gradient: "from-purpleAccent to-pinkAccent",
//     },
//   ];

//   return (
//     <section className="bg-light w-full py-16 md:py-24">
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* LEFT: Features */}
//           <div>
//             <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-10">
//               Why Choose{" "}
//               <span className="text-gradient bg-gradient-to-r from-primary to-purpleAccent bg-clip-text text-transparent">
//                 Light Studio360
//               </span>
//               ?
//             </h2>

//             <ul className="space-y-6">
//               {features.map((item, i) => (
//                 <li
//                   key={i}
//                   className="flex items-start gap-4 group cursor-pointer hover:scale-105 transition-transform duration-300"
//                 >
//                   <div
//                     className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg transform transition-transform duration-500 group-hover:rotate-12`}
//                   >
//                     ✓
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-dark text-lg md:text-xl mb-1 group-hover:text-gradient bg-gradient-to-r from-primary to-purpleAccent bg-clip-text text-transparent transition">
//                       {item.title}
//                     </h4>
//                     <p className="text-dark/70 text-sm md:text-base leading-relaxed">
//                       {item.desc}
//                     </p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* RIGHT: Stats */}
//           <div className="space-y-6">
//             {stats.map((stat, i) => (
//               <div
//                 key={i}
//                 className={`bg-gradient-to-br ${stat.gradient} rounded-3xl w-96 p-8 text-white text-center shadow-2xl backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform duration-300`}
//               >
//                 <div className="text-5xl md:text-6xl font-extrabold mb-2">
//                   {stat.number}
//                 </div>
//                 <p className="text-lg md:text-xl font-semibold">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Expert Team",
      desc: "Talented professionals with years of industry experience",
      gradient: "from-primary to-accent",
    },
    {
      title: "Latest Technology",
      desc: "State-of-the-art tools and cutting-edge software",
      gradient: "from-primary to-secondary",
    },
    {
      title: "Fast Turnaround",
      desc: "Efficient delivery without compromising quality",
      gradient: "from-accent to-primary",
    },
    {
      title: "Client Focused",
      desc: "Your vision is our priority, always",
      gradient: "from-secondary to-primary",
    },
  ];

  const stats = [
    {
      number: "400+",
      label: "Successful Projects",
      gradient: "from-primary to-accent",
    },
    {
      number: "200+",
      label: "Satisfied Clients",
      gradient: "from-primary to-secondary",
    },
    {
      number: "5+",
      label: "Years Experience",
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <section className="bg-light w-full py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT: Features */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-10">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Light Studio360
              </span>
              ?
            </h2>

            <ul className="space-y-6">
              {features.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 group hover:scale-105 transition-transform duration-300"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:rotate-6 transition-transform`}
                  >
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark text-lg md:text-xl mb-1 group-hover:text-secondary transition">
                      {item.title}
                    </h4>
                    <p className="text-dark/70 text-sm md:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Stats */}
          <div className="space-y-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${stat.gradient} rounded-3xl w-96 p-8 text-white text-center shadow-2xl border border-white/10 hover:scale-105 transition-transform duration-300`}
              >
                <div className="text-5xl md:text-6xl font-extrabold mb-2">
                  {stat.number}
                </div>
                <p className="text-lg md:text-xl font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
