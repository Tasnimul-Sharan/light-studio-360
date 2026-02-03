import { stats } from "@/data/data";
import React from "react";
export default function TrackRecord() {
  return (
    <div className="relative z-10 bg-primary p-12 mb-16">
      <h3 className="text-2xl font-bold text-white text-center mb-12">
        Our Track Record
      </h3>

      <div className="grid gap-10 md:grid-cols-4 max-w-7xl mx-auto">
        {stats.map((s, i) => (
          <div key={i} className="text-center group">
            <div
              className={`text-4xl font-black mb-3 bg-white bg-clip-text text-transparent`}
            >
              {s.value}
            </div>
            <p className="text-white font-semibold text-lg">{s.label}</p>
            <div
              className={`mt-2 h-1 w-0 bg-gradient-to-r ${s.gradient} group-hover:w-full transition-all mx-auto`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
