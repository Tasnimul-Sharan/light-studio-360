import Link from "next/link";

export default function NavLink({ href, children }) {
  return (
    <Link href={href} className="group relative inline-block">
      <span className="relative z-10 transition-colors duration-300 group-hover:text-accent">
        {children}
      </span>

      <span
        className="absolute left-0 -bottom-1 h-[2px] w-full origin-left
        scale-x-0 bg-accent transition-transform duration-300
        group-hover:scale-x-100"
      />
    </Link>
  );
}
