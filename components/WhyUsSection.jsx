import WhyUsHero from "./WhyUsHero";
import FeatureGrid from "./FeatureGrid";
import StatsSection from "./StatsSection";
import PillarsSection from "./PillarsSection";
import WhyUsCTA from "./WhyUsCTA";

export default function WhyUsSection() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 p-8 rounded-2xl overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
          alt="Why choose us"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-white/80" />
      </div>

      <WhyUsHero />
      <FeatureGrid />
      <StatsSection />
      <PillarsSection />
      <WhyUsCTA />
    </section>
  );
}
