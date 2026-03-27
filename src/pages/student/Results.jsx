import PageHeader from "../../components/PageHeader";

export default function Results() {
  return (
    <div>
      <PageHeader title="Results" />

      <div className="p-6 overflow-x-auto">
        <table className="w-full border shadow text-center">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="p-3">Subject</th>
              <th className="p-3">Marks</th>
              <th className="p-3">Grade</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border">
              <td>Math</td>
              <td>90</td>
              <td>A+</td>
            </tr>

            <tr className="border">
              <td>Science</td>
              <td>85</td>
              <td>A</td>
            </tr>

            <tr className="border">
              <td>English</td>
              <td>88</td>
              <td>A</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}