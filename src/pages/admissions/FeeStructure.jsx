import PageHeader from "../../components/PageHeader";

export default function FeeStructure() {
  return (
    <div>
      <PageHeader title="Fee Structure" />

      <div className="p-6 overflow-x-auto">
        <table className="w-full border shadow">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="p-3">Class</th>
              <th className="p-3">Admission Fee</th>
              <th className="p-3">Monthly Fee</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border">
              <td className="p-3">Primary</td>
              <td className="p-3">₹10,000</td>
              <td className="p-3">₹2,000</td>
            </tr>

            <tr className="border">
              <td className="p-3">Middle</td>
              <td className="p-3">₹12,000</td>
              <td className="p-3">₹2,500</td>
            </tr>

            <tr className="border">
              <td className="p-3">Secondary</td>
              <td className="p-3">₹15,000</td>
              <td className="p-3">₹3,000</td>
            </tr>

            <tr className="border">
              <td className="p-3">Senior Secondary</td>
              <td className="p-3">₹18,000</td>
              <td className="p-3">₹3,500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}