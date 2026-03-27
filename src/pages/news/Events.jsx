import PageHeader from "../../components/PageHeader";
import event from "../../assets/images/event.jpg";

export default function Events() {
  return (
    <div>
      <PageHeader title="Events" />

      <div className="p-6 space-y-6">

        <div className="flex gap-4 items-center border p-4 rounded shadow">
          <img src={event} className="w-32 h-24 object-cover rounded" />
          <div>
            <h3 className="font-bold">Annual Day</h3>
            <p className="text-sm text-gray-600">
              Celebration with cultural programs and performances.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-center border p-4 rounded shadow">
          <img src={event} className="w-32 h-24 object-cover rounded" />
          <div>
            <h3 className="font-bold">Independence Day</h3>
            <p className="text-sm text-gray-600">
              Flag hoisting and patriotic performances.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-center border p-4 rounded shadow">
          <img src={event} className="w-32 h-24 object-cover rounded" />
          <div>
            <h3 className="font-bold">Science Exhibition</h3>
            <p className="text-sm text-gray-600">
              Students present innovative science models.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}