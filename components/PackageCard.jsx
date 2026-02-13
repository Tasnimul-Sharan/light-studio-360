export default function PackageCard({ data, isPremium }) {
  return (
    <div
      className={`
        relative rounded-3xl p-8 border
        transition-all duration-500
        ${
          isPremium
            ? "bg-primary text-white shadow-2xl scale-[1.03]"
            : "bg-white text-primary shadow-xl hover:-translate-y-1 hover:shadow-2xl"
        }
      `}
      style={{
        border: isPremium
          ? "2px solid #d3ab64"
          : "1px solid rgba(30,42,68,0.15)",
      }}
    >
      {isPremium && (
        <span className="absolute top-3 right-5 bg-secondary text-primary text-xs font-semibold px-4 py-1 rounded-full tracking-wider">
          MOST POPULAR
        </span>
      )}
      <h3
        className={`text-3xl font-bold mb-2 ${
          isPremium ? "text-secondary" : "text-primary"
        }`}
        style={{ fontFamily: "var(--heading-font)" }}
      >
        {data.title}
      </h3>
      <p
        className={`
    text-xs font-semibold mb-4 tracking-widest uppercase
    ${isPremium ? "text-secondary" : "text-primary/90"}
    ${isPremium ? "bg-white/10 px-3 py-1 rounded-full inline-block" : "bg-primary/10 px-3 py-1 rounded-full inline-block"}
  `}
      >
        {data.timeLabel}
      </p>
      <p
        className={`text-sm leading-relaxed mb-8 ${
          isPremium ? "text-white/70" : "text-dark/70"
        }`}
      >
        {data.shortDesc}
      </p>
      <ul className="space-y-4 mb-10">
        {data.features.map((f, i) => (
          <li key={i} className="flex gap-3 items-start">
            <span
              className={`text-lg font-bold ${
                isPremium ? "text-secondary" : "text-accent"
              }`}
            >
              ✓
            </span>
            <span
              className={`text-sm ${
                isPremium ? "text-white/80" : "text-dark/70"
              }`}
            >
              {f}
            </span>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className={`
          block w-full text-center py-3 rounded-xl font-semibold
          transition-all duration-300
          ${
            isPremium
              ? "bg-secondary text-primary hover:bg-secondary/90"
              : "bg-primary text-white hover:bg-primary/90"
          }
        `}
      >
        {data.button}
      </a>
    </div>
  );
}
