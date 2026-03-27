import PageHeader from "../../components/PageHeader";

export default function Notifications() {
  return (
    <div>
      <PageHeader title="Notifications" />

      <div className="p-6 space-y-4">

        <div className="border-l-4 border-blue-900 p-4 bg-gray-100">
          <h3 className="font-bold">Exam Schedule Released</h3>
          <p className="text-sm text-gray-600">
            Mid-term exams will begin from October 20.
          </p>
        </div>

        <div className="border-l-4 border-green-500 p-4 bg-gray-100">
          <h3 className="font-bold">Fee Reminder</h3>
          <p className="text-sm text-gray-600">
            Please pay pending fee before October 15.
          </p>
        </div>

        <div className="border-l-4 border-yellow-500 p-4 bg-gray-100">
          <h3 className="font-bold">Holiday Notice</h3>
          <p className="text-sm text-gray-600">
            School will remain closed on Gandhi Jayanti.
          </p>
        </div>

      </div>
    </div>
  );
}