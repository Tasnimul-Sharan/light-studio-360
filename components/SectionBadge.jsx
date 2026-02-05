export default function SectionBadge({ text, className = "" }) {
  return (
    <span
      className={`
        inline-flex items-center
        mb-4 px-6 py-2.5
        text-xs font-medium tracking-[0.28em] uppercase
        text-white
        bg-gradient-to-r from-primary to-secondary
        rounded-full
        ring-1 ring-white/10
        transition-all duration-300
        hover:ring-primary
        ${className}
      `}
    >
      {text}
    </span>
  );
}
