import PageHeader from "../../components/PageHeader";

export default function Syllabus() {
  return (
    <div>
      <PageHeader title="Syllabus" />

      <div className="p-6">
        <p className="text-gray-700 mb-4">
          Download syllabus for each class:
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 border rounded shadow">
            Class 1 - 5 Syllabus
          </div>

          <div className="p-4 border rounded shadow">
            Class 6 - 8 Syllabus
          </div>

          <div className="p-4 border rounded shadow">
            Class 9 - 10 Syllabus
          </div>

          <div className="p-4 border rounded shadow">
            Class 11 - 12 Syllabus
          </div>
        </div>
      </div>
    </div>
  );
}