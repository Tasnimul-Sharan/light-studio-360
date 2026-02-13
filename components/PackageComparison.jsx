import { comparisonRows } from "@/data/packageComparisonData";
import { packages } from "@/data/packagesData";
export default function PackageComparison() {
  return (
    <section className="mb-24">
      <h2
        className="text-4xl font-bold text-primary mb-12 text-center"
        style={{ fontFamily: "var(--heading-font)" }}
      >
        Package <span className="text-secondary">Comparison</span>
      </h2>
      <div className="overflow-x-auto max-w-6xl mx-auto rounded-2xl border border-secondary/30">
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr className="bg-primary text-white">
              <th className="px-6 py-6 text-left font-semibold">Feature</th>
              {packages.map((pkg) => (
                <th
                  key={pkg.key}
                  className="px-6 py-5 text-center font-semibold"
                >
                  {pkg.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row, i) => (
              <tr
                key={row.feature}
                className={`border-b ${i % 2 === 0 ? "bg-light" : "bg-white"}`}
              >
                <td className="px-6 py-4 font-medium text-primary">
                  {row.feature}
                </td>

                {packages.map((pkg) => {
                  const value = row.values[pkg.key];
                  return (
                    <td
                      key={pkg.key}
                      className="px-6 py-4 text-center text-dark/70"
                    >
                      {typeof value === "boolean" ? (
                        value ? (
                          <span className="text-secondary font-bold">✓</span>
                        ) : (
                          <span className="text-dark/30">—</span>
                        )
                      ) : (
                        value
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
