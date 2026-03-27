import PageHeader from "../../components/PageHeader";

export default function Timetable() {
  return (
    <div>
      <PageHeader title="Timetable" />

      <div className="p-6 overflow-x-auto">
        <table className="w-full border shadow text-center">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="p-3">Day</th>
              <th className="p-3">1st</th>
              <th className="p-3">2nd</th>
              <th className="p-3">3rd</th>
              <th className="p-3">4th</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border">
              <td className="p-3 font-bold">Mon</td>
              <td>Math</td>
              <td>Science</td>
              <td>English</td>
              <td>Sports</td>
            </tr>

            <tr className="border">
              <td className="p-3 font-bold">Tue</td>
              <td>Physics</td>
              <td>Chemistry</td>
              <td>Math</td>
              <td>Library</td>
            </tr>

            <tr className="border">
              <td className="p-3 font-bold">Wed</td>
              <td>Biology</td>
              <td>English</td>
              <td>Math</td>
              <td>Games</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}