export function AnalogClock({ time, city }) {
  const { h, m, s } = time;

  const secondDeg = s * 6;
  const minuteDeg = m * 6 + s * 0.1;
  const hourDeg = (h % 12) * 30 + m * 0.5;

  return (
    <div className="flex flex-col items-center">
      {/* Clock */}
      <div className="relative w-48 h-48 rounded-full border-[6px] border-cyan-300 flex items-center justify-center">
        {/* Hour hand */}
        <div
          className="absolute w-1 h-12 bg-black origin-bottom"
          style={{ transform: `rotate(${hourDeg}deg)` }}
        />

        {/* Minute hand */}
        <div
          className="absolute w-1 h-16 bg-black origin-bottom"
          style={{ transform: `rotate(${minuteDeg}deg)` }}
        />

        {/* Second hand */}
        <div
          className="absolute w-[2px] h-20 bg-red-500 origin-bottom"
          style={{ transform: `rotate(${secondDeg}deg)` }}
        />

        {/* Center dot */}
        <div className="absolute w-3 h-3 bg-black rounded-full" />
      </div>

      {/* Digital time */}
      <div className="mt-4 text-red-500 text-xl font-bold">
        {`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`}
      </div>

      <div className="text-red-500 tracking-widest mt-1">{city}</div>
    </div>
  );
}
