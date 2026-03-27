import PageHeader from "../../components/PageHeader";

export default function Classes() {
  return (
    <div>
      <PageHeader title="Classes" />

      <div className="p-6 grid md:grid-cols-3 gap-4">
        <div className="bg-blue-900 text-white p-6 rounded shadow">
          Nursery - KG
        </div>

        <div className="bg-blue-900 text-white p-6 rounded shadow">
          Primary (1 - 5)
        </div>

        <div className="bg-blue-900 text-white p-6 rounded shadow">
          Middle (6 - 8)
        </div>

        <div className="bg-blue-900 text-white p-6 rounded shadow">
          Secondary (9 - 10)
        </div>

        <div className="bg-blue-900 text-white p-6 rounded shadow">
          Senior Secondary (11 - 12)
        </div>
      </div>
    </div>
  );
}