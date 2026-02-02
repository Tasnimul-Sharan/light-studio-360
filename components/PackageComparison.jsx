import { comparisonRows } from "@/data/packageComparisonData";
import { packages } from "@/data/packagesData";

export default function PackageComparison() {
  return (
    <section className="mb-12">
      <h2
        className="text-4xl font-black text-gray-800 mb-10 text-center "
        style={{ fontFamily: "var(--heading-font)" }}
      >
        Package Comparison
      </h2>

      <div className="overflow-x-auto rounded-md max-w-4xl mx-auto border border-gray-200">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <th className="px-6 py-4 text-left">Feature</th>
              {packages.map((pkg) => (
                <th key={pkg.key} className="px-6 py-4 text-center">
                  {pkg.title}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {comparisonRows.map((row, i) => (
              <tr
                key={row.feature}
                className={`border-b hover:bg-gray-50 ${i % 2 === 1 ? "bg-gray-50" : ""}`}
              >
                <td className="px-6 py-4 font-semibold text-gray-800">
                  {row.feature}
                </td>

                {packages.map((pkg) => {
                  const value = row.values[pkg.key];
                  return (
                    <td
                      key={pkg.key}
                      className="px-6 py-4 text-center text-gray-600"
                    >
                      {typeof value === "boolean" ? (
                        value ? (
                          <span className="text-green-600 font-bold">✓</span>
                        ) : (
                          <span className="text-gray-400">—</span>
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
