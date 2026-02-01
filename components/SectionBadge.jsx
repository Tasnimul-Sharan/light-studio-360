export default function SectionBadge({
  text,
  className = "",
  lineWidth = "w-6",
}) {
  return (
    <span
      className={`relative inline-flex items-center mb-3 px-8 py-2 text-sm font-semibold tracking-widest uppercase text-primary ${className}`}
    >
      {/* Left line */}
      <span
        className={`absolute left-0 top-1/2 -translate-y-1/2 h-[1px] ${lineWidth} bg-primary shadow-[0_0_8px_rgba(236,104,9,0.6)]`}
      />

      {text}

      {/* Right line */}
      <span
        className={`absolute right-0 top-1/2 -translate-y-1/2 h-[1px] ${lineWidth} bg-primary shadow-[0_0_8px_rgba(236,104,9,0.6)]`}
      />
    </span>
  );
}
