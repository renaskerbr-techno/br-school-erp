import PageHeader from "../../components/PageHeader";

export default function ApplyOnline() {
  return (
    <div>
      <PageHeader title="Apply Online" />

      <div className="p-6 max-w-xl mx-auto bg-white shadow rounded">
        <form className="space-y-4">

          <input
            type="text"
            placeholder="Student Name"
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            placeholder="Parent Name"
            className="w-full border p-3 rounded"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded"
          />

          <input
            type="tel"
            placeholder="Phone"
            className="w-full border p-3 rounded"
          />

          <select className="w-full border p-3 rounded">
            <option>Select Class</option>
            <option>Primary</option>
            <option>Middle</option>
            <option>Secondary</option>
            <option>Senior Secondary</option>
          </select>

          <textarea
            placeholder="Address"
            className="w-full border p-3 rounded"
          />

          <button className="w-full bg-blue-900 text-white py-3 rounded">
            Submit Application
          </button>

        </form>
      </div>
    </div>
  );
}