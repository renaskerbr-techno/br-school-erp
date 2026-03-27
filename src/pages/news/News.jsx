import PageHeader from "../../components/PageHeader";
import event from "../../assets/images/event.jpg";

export default function News() {
  return (
    <div>
      <PageHeader title="Latest News" />

      <div className="p-6 grid md:grid-cols-3 gap-6">

        <div className="bg-white shadow rounded overflow-hidden">
          <img src={event} className="h-40 w-full object-cover" />
          <div className="p-4">
            <h3 className="font-bold">New Academic Year Started</h3>
            <p className="text-sm text-gray-600 mt-2">
              The new academic session has begun with exciting activities.
            </p>
          </div>
        </div>

        <div className="bg-white shadow rounded overflow-hidden">
          <img src={event} className="h-40 w-full object-cover" />
          <div className="p-4">
            <h3 className="font-bold">Science Fair Conducted</h3>
            <p className="text-sm text-gray-600 mt-2">
              Students showcased innovative science projects.
            </p>
          </div>
        </div>

        <div className="bg-white shadow rounded overflow-hidden">
          <img src={event} className="h-40 w-full object-cover" />
          <div className="p-4">
            <h3 className="font-bold">Sports Meet Announced</h3>
            <p className="text-sm text-gray-600 mt-2">
              Annual sports meet scheduled for next month.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}