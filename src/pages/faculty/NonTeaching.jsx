import PageHeader from "../../components/PageHeader";
import staff from "../../assets/images/student.jpg"; // placeholder image

export default function NonTeaching() {
  return (
    <div>
      <PageHeader title="Non-Teaching Staff" />

      <div className="p-6 grid md:grid-cols-3 gap-6">

        {/* Staff Card */}
        <div className="bg-white shadow rounded overflow-hidden">
          <img src={staff} className="h-48 w-full object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-lg">Mr. Suresh</h3>
            <p className="text-gray-600">Office Staff</p>
          </div>
        </div>

        <div className="bg-white shadow rounded overflow-hidden">
          <img src={staff} className="h-48 w-full object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-lg">Mrs. Lakshmi</h3>
            <p className="text-gray-600">Receptionist</p>
          </div>
        </div>

        <div className="bg-white shadow rounded overflow-hidden">
          <img src={staff} className="h-48 w-full object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-lg">Mr. Ravi</h3>
            <p className="text-gray-600">Lab Assistant</p>
          </div>
        </div>

      </div>
    </div>
  );
}