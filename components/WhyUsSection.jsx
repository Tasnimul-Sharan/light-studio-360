import {
  HiShieldCheck,
  HiSquares2X2,
  HiUserGroup,
  HiCurrencyDollar,
} from "react-icons/hi2";
const reasons = [
  { title: "Proven Track Record", icon: <HiShieldCheck /> },
  { title: "Full-Service Solutions", icon: <HiSquares2X2 /> },
  { title: "Client-Centric Approach", icon: <HiUserGroup /> },
  { title: "Competitive Pricing", icon: <HiCurrencyDollar /> },
];
export default function WhyUsSection() {
  return (
    <section className=" py-20 bg-primary/10 text-dark">
      <h2 className="text-4xl md:text-5xl font-black text-primary text-center mb-14 font-heading">
        Why Work With Light Studio360?
      </h2>
      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {reasons.map((r, i) => (
          <div
            key={i}
            className="group relative rounded-3xl bg-gradient-to-br from-secondary/40 via-accent/30 to-primary/30
                       p-[1px] transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative rounded-3xl bg-white p-8 h-full shadow-sm transition-all duration-500 group-hover:shadow-2xl overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-secondary to-accent rounded-t-3xl" />
              <div className="flex items-start gap-5 relative z-10">
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-xl
                                bg-gradient-to-br from-secondary to-accent
                                text-white text-xl shadow-md shrink-0"
                >
                  {r.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {r.title}
                  </h3>
                  <p className="text-dark/70 leading-relaxed">
                    Premium quality, disciplined workflow, and results you can
                    confidently measure.
                  </p>
                </div>
              </div>
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl
                              opacity-0 group-hover:opacity-100 transition duration-500
                              bg-gradient-to-br from-secondary/10 to-accent/10"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
