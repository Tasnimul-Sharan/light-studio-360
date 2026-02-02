import { packages } from "@/data/packagesData";
import PackageCard from "./PackageCard";

export default function PackagesSection() {
  return (
    <section className="bg-gray-100 rounded-3xl p-12 md:p-16 text-center mb-12">
      <h2
        className="text-4xl md:text-5xl font-black text-white mb-6"
        style={{ fontFamily: "var(--heading-font)" }}
      >
        Choose Your Perfect Package
      </h2>

      <p className="text-lg text-white mb-12 max-w-3xl mx-auto">
        Our post-production system is optimized for high-volume, high-quality
        delivery.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 custom-container mx-auto">
        {packages.map((pkg, i) => (
          <PackageCard
            key={pkg.key}
            data={pkg}
            isPremium={pkg.key === "urgent"} // mark urgent package as premium
          />
        ))}
      </div>
    </section>
  );
}
