import PageHeader from "../../components/PageHeader";

export default function Assignments() {
  return (
    <div>
      <PageHeader title="Assignments" />

      <div className="p-6 grid md:grid-cols-2 gap-6">
        
        <div className="border p-4 rounded shadow">
          <h3 className="font-bold">Math Assignment</h3>
          <p className="text-gray-600">Due: 10 Oct</p>
          <button className="mt-2 bg-blue-900 text-white px-4 py-2 rounded">
            Submit
          </button>
        </div>

        <div className="border p-4 rounded shadow">
          <h3 className="font-bold">Science Project</h3>
          <p className="text-gray-600">Due: 15 Oct</p>
          <button className="mt-2 bg-blue-900 text-white px-4 py-2 rounded">
            Submit
          </button>
        </div>

      </div>
    </div>
  );
}