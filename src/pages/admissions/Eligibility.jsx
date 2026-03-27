import PageHeader from "../../components/PageHeader";

export default function Eligibility() {
  return (
    <div>
      <PageHeader title="Eligibility" />

      <div className="p-6">
        <div className="grid md:grid-cols-2 gap-4">
          
          <div className="p-4 border rounded shadow">
            <h3 className="font-bold text-blue-800">Primary Classes</h3>
            <p className="text-gray-600 mt-2">
              Age 5+ years with basic learning skills.
            </p>
          </div>

          <div className="p-4 border rounded shadow">
            <h3 className="font-bold text-blue-800">Middle School</h3>
            <p className="text-gray-600 mt-2">
              Previous class completion certificate required.
            </p>
          </div>

          <div className="p-4 border rounded shadow">
            <h3 className="font-bold text-blue-800">Secondary</h3>
            <p className="text-gray-600 mt-2">
              Must pass previous grade with valid documents.
            </p>
          </div>

          <div className="p-4 border rounded shadow">
            <h3 className="font-bold text-blue-800">Senior Secondary</h3>
            <p className="text-gray-600 mt-2">
              Based on subject stream eligibility.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}