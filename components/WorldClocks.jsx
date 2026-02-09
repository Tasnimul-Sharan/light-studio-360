"use client";

import { useEffect, useState } from "react";

function getTimeParts(timeZone) {
  const date = new Date(new Date().toLocaleString("en-US", { timeZone }));

  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    digital: date.toLocaleTimeString("en-GB"),
  };
}

export default function WorldClocks() {
  const [mounted, setMounted] = useState(false);

  const [dhaka, setDhaka] = useState(() => getTimeParts("Asia/Dhaka"));
  const [cet, setCet] = useState(() => getTimeParts("Europe/Berlin"));

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setDhaka(getTimeParts("Asia/Dhaka"));
      setCet(getTimeParts("Europe/Berlin"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // 🚫 Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <section className="world-clock-section">
      <div className="clock-wrapper">
        <Clock {...dhaka} city="DHAKA" />
        <Clock {...cet} city="CET" />
      </div>
    </section>
  );
}

// function Clock({ hour, minute, second, digital, city }) {
//   const hourDeg = (hour % 12) * 30 + minute * 0.5;
//   const minuteDeg = minute * 6;
//   const secondDeg = second * 6;

//   return (
//     <div className="clock-box">
//       <div className="clock">
//         <div
//           className="hand hour"
//           style={{ transform: `rotate(${hourDeg - 90}deg)` }}
//         />
//         <div
//           className="hand minute"
//           style={{ transform: `rotate(${minuteDeg - 90}deg)` }}
//         />
//         <div
//           className="hand second"
//           style={{ transform: `rotate(${secondDeg - 90}deg)` }}
//         />
//         <div className="center-dot" />
//       </div>

//       <div className="digital">{digital}</div>
//       <div className="city">{city}</div>
//     </div>
//   );
// }

function Clock({ hour, minute, second, digital, city }) {
  const hourDeg = (hour % 12) * 30 + minute * 0.5;
  const minuteDeg = minute * 6;
  const secondDeg = second * 6;

  const numbers = Array.from({ length: 12 }, (_, i) => i + 1);
  const hourMarks = Array.from({ length: 12 });
  const minuteMarks = Array.from({ length: 60 });

  return (
    <div className="clock-box">
      <div className="clock">
        {/* Hour marks */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="hour-mark"
            style={{ transform: `rotate(${i * 30}deg)` }}
          />
        ))}

        {/* Minute marks */}
        {[...Array(60)].map((_, i) => {
          if (i % 5 === 0) return null; // hour position skip

          return (
            <div
              key={i}
              className="minute-mark"
              style={{ transform: `rotate(${i * 6}deg)` }}
            />
          );
        })}

        {/* Numbers */}
        {numbers.map((num) => {
          const angle = (num * 30 - 90) * (Math.PI / 180);
          const radius = 70;
          const x = 100 + radius * Math.cos(angle);
          const y = 100 + radius * Math.sin(angle);

          return (
            <div
              key={num}
              className="number"
              style={{
                left: `${x}px`,
                top: `${y}px`,
              }}
            >
              {num}
            </div>
          );
        })}

        {/* Hands */}
        <div
          className="hand hour"
          style={{ transform: `rotate(${hourDeg - 90}deg)` }}
        />
        <div
          className="hand minute"
          style={{ transform: `rotate(${minuteDeg - 90}deg)` }}
        />
        <div
          className="hand second"
          style={{ transform: `rotate(${secondDeg - 90}deg)` }}
        />

        <div className="center-dot" />
      </div>

      <div className="digital">{digital}</div>
      <div className="city">{city}</div>
    </div>
  );
}
