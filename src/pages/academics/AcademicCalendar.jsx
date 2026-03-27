import PageHeader from "../../components/PageHeader";

export default function AcademicCalendar() {
  return (
    <div>
      <PageHeader title="Academic Calendar" />

      <div className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full border shadow">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="p-3">Month</th>
                <th className="p-3">Events</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border">
                <td className="p-3">June</td>
                <td className="p-3">School Reopens</td>
              </tr>

              <tr className="border">
                <td className="p-3">August</td>
                <td className="p-3">Independence Day</td>
              </tr>

              <tr className="border">
                <td className="p-3">December</td>
                <td className="p-3">Winter Exams</td>
              </tr>

              <tr className="border">
                <td className="p-3">March</td>
                <td className="p-3">Final Exams</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}