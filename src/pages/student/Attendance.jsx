import PageHeader from "../../components/PageHeader";

export default function Attendance() {
  return (
    <div>
      <PageHeader title="Attendance" />

      <div className="p-6 grid md:grid-cols-3 gap-6">
        
        <div className="bg-green-500 text-white p-6 rounded shadow">
          <h3 className="text-xl font-bold">Present</h3>
          <p className="text-2xl mt-2">85%</p>
        </div>

        <div className="bg-red-500 text-white p-6 rounded shadow">
          <h3 className="text-xl font-bold">Absent</h3>
          <p className="text-2xl mt-2">10%</p>
        </div>

        <div className="bg-yellow-500 text-white p-6 rounded shadow">
          <h3 className="text-xl font-bold">Leave</h3>
          <p className="text-2xl mt-2">5%</p>
        </div>

      </div>
    </div>
  );
}