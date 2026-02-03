export default function SectionBadge({ text, className = "" }) {
  return (
    <span
      className={`relative inline-block mb-3 px-6 py-1.5
      text-xs font-bold tracking-widest uppercase
      text-primary
      border border-primary
      ${className}`}
    >
      <span className="absolute -top-1 -left-1 w-2 h-2 border border-primary" />
      <span className="absolute -bottom-1 -right-1 w-2 h-2 border border-primary" />
      {text}
    </span>
  );
}
