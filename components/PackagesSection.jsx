// import { packages } from "@/data/packagesData";
// import PackageCard from "./PackageCard";

// export default function PackagesSection() {
//   return (
//     <section className="relative bg-white py-20 px-8 md:px-14 mb-20 overflow-hidden">
//       {/* subtle glow */}
//       <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10" />

//       <div className="relative z-10 text-center">
//         <h2
//           className="text-4xl md:text-5xl font-bold text-white mb-6"
//           style={{ fontFamily: "var(--heading-font)" }}
//         >
//           Choose Your <span className="text-secondary">Perfect Package</span>
//         </h2>

//         <p className="text-lg text-white/70 mb-14 max-w-3xl mx-auto">
//           Our post-production system is optimized for high-volume, high-quality
//           delivery.
//         </p>

//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
//           {packages.map((pkg) => (
//             <PackageCard
//               key={pkg.key}
//               data={pkg}
//               isPremium={pkg.key === "urgent"}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { packages } from "@/data/packagesData";
import PackageCard from "./PackageCard";

export default function PackagesSection() {
  return (
    <section className="relative bg-light py-24 px-8 md:px-14 mb-24 overflow-hidden">
      {/* ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10" />

      <div className="relative z-10 text-center">
        <h2
          className="text-4xl md:text-5xl font-bold text-primary mb-6"
          style={{ fontFamily: "var(--heading-font)" }}
        >
          Choose Your <span className="text-secondary">Perfect Package</span>
        </h2>

        <p className="text-lg text-dark/70 mb-16 max-w-3xl mx-auto">
          Our post-production system is optimized for high-volume, high-quality
          delivery.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.key}
              data={pkg}
              isPremium={pkg.key === "urgent"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
