import { FiCheckCircle, FiZap, FiDollarSign } from "react-icons/fi";

export default function TrustSection() {
  const values = [
    {
      title: "Industry-Standard Quality",
      desc: "We maintain strict quality standards across all projects. Our work speaks for itself—1000+ satisfied clients worldwide validate our commitment to excellence.",
      border: "border-primary",
      iconColor: "text-primary",
      icon: FiCheckCircle,
    },
    {
      title: "Fast Turnaround Time",
      desc: "Time matters. We deliver quality work quickly—from image retouching in 24–48 hours to complete projects within tight deadlines without compromising excellence.",
      border: "border-accent",
      iconColor: "text-accent",
      icon: FiZap,
    },
    {
      title: "Competitive Pricing",
      desc: "Premium quality doesn't mean premium pricing. We offer competitive rates with flexible packages designed to fit any budget while delivering premium results.",
      border: "border-secondary",
      iconColor: "text-secondary",
      icon: FiDollarSign,
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-accent/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-dark mb-4">
            Why Businesses Trust{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Light Studio360
            </span>
          </h2>
          <p className="text-dark/70 max-w-2xl mx-auto">
            Proven quality, reliability, and expertise that delivers real
            results
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {values.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`bg-white p-8 rounded-2xl hover:shadow-xl transition border-t-4 ${item.border}`}
              >
                <div className={`mb-4 ${item.iconColor}`}>
                  <Icon className="w-12 h-12" />
                </div>

                <h3 className="text-2xl font-bold text-dark mb-3">
                  {item.title}
                </h3>

                <p className="text-dark/70 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
