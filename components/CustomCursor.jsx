"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursor = useRef(null);
  const dot = useRef(null);

  useEffect(() => {
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    gsap.set(cursor.current, { xPercent: -50, yPercent: -50 });
    gsap.set(dot.current, { xPercent: -50, yPercent: -50 });

    gsap.ticker.add(() => {
      pos.x += (mouse.x - pos.x) * 0.12;
      pos.y += (mouse.y - pos.y) * 0.12;

      gsap.set(cursor.current, { x: pos.x, y: pos.y });
      gsap.set(dot.current, { x: mouse.x, y: mouse.y });
    });

    const move = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    document.addEventListener("mouseover", (e) => {
      if (e.target.closest("a, button")) {
        gsap.to(cursor.current, {
          scale: 1.6,
          duration: 0.3,
          ease: "power3.out",
        });
      }
    });

    document.addEventListener("mouseout", (e) => {
      if (e.target.closest("a, button")) {
        gsap.to(cursor.current, {
          scale: 1,
          duration: 0.3,
          ease: "power3.out",
        });
      }
    });

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        ref={cursor}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          width: 48,
          height: 48,
          border: "1.5px solid rgba(255,255,255,0.9)",
          borderRadius: "50%",
          mixBlendMode: "difference",
        }}
      />

      <div
        ref={dot}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          width: 8,
          height: 8,
          background: "#fff",
          borderRadius: "50%",
          mixBlendMode: "difference",
        }}
      />
    </>
  );
}
