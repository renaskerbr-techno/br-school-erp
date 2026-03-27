import PageHeader from "../../components/PageHeader";

export default function Progress() {
  return (
    <div>
      <PageHeader title="Student Progress" />

      <div className="p-6 grid md:grid-cols-3 gap-6">

        <div className="bg-blue-900 text-white p-6 rounded shadow">
          <h3 className="font-bold">Overall Performance</h3>
          <p className="text-2xl mt-2">A Grade</p>
        </div>

        <div className="bg-green-500 text-white p-6 rounded shadow">
          <h3 className="font-bold">Attendance</h3>
          <p className="text-2xl mt-2">85%</p>
        </div>

        <div className="bg-yellow-500 text-white p-6 rounded shadow">
          <h3 className="font-bold">Assignments</h3>
          <p className="text-2xl mt-2">Completed</p>
        </div>

      </div>

      {/* Subject Performance */}
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