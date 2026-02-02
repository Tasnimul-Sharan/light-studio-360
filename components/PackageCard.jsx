// export default function PackageCard({ data }) {
//   return (
//     <div
//       className={`package-card ${data.delay} bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500`}
//     >
//       <h3
//         className="text-3xl font-black text-purple-600 mb-2"
//         style={{ fontFamily: "var(--heading-font)" }}
//       >
//         {data.title}
//       </h3>

//       <p className="text-purple-600 font-bold text-sm mb-4">{data.timeLabel}</p>
//       <p className="text-sm text-purple-600 mb-6">{data.shortDesc}</p>

//       <ul className="space-y-3 mb-8">
//         {data.features.map((f, i) => (
//           <li key={i} className="flex gap-3">
//             <span className="text-purple-600 font-bold">✓</span>
//             <span className="text-gray-700 text-sm">{f}</span>
//           </li>
//         ))}
//       </ul>

//       <a
//         href="#contact"
//         className="block w-full bg-purple-600 text-white font-bold py-3 rounded-full hover:bg-purple-700 transition text-sm text-center"
//       >
//         {data.button}
//       </a>
//     </div>
//   );
// }

export default function PackageCard({ data, isPremium }) {
  return (
    <div
      className={`package-card ${data.delay} relative rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-b from-white to-${isPremium ? "primary/10" : "light"} `}
      style={{
        border: isPremium ? `2px solid #FF6A00` : "1px solid #E5E5E5",
      }}
    >
      {/* Premium Badge */}
      {isPremium && (
        <span className="absolute top-4 right-5 bg-primary text-white font-bold px-4 py-1 rounded-full text-xs tracking-wider shadow-md">
          PREMIUM
        </span>
      )}

      {/* Title */}
      <h3
        className={`text-3xl font-black mb-2 ${isPremium ? "text-primary" : "text-accent"}`}
        style={{ fontFamily: "var(--heading-font)" }}
      >
        {data.title}
      </h3>

      {/* Time Label */}
      <p
        className={`font-bold text-sm mb-4 ${isPremium ? "text-primary" : "text-secondary"}`}
      >
        {data.timeLabel}
      </p>

      {/* Description */}
      <p
        className={`text-sm mb-6 ${isPremium ? "text-accent/80" : "text-accent/70"}`}
      >
        {data.shortDesc}
      </p>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {data.features.map((f, i) => (
          <li key={i} className="flex items-start gap-3">
            <span
              className={`font-bold ${isPremium ? "text-primary" : "text-secondary"} text-lg`}
            >
              ✓
            </span>
            <span className="text-accent text-sm">{f}</span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <a
        href="#contact"
        className={`block w-full font-bold py-3 rounded-full text-sm text-white text-center transition-transform duration-300
          ${isPremium ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/90"} transform hover:scale-105 shadow-md hover:shadow-lg`}
      >
        {data.button}
      </a>
    </div>
  );
}
