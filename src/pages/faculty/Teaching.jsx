import PageHeader from "../../components/PageHeader";
import teacher from "../../assets/images/student.jpg"; // use student image as placeholder

export default function Teaching() {
  return (
    <div>
      <PageHeader title="Teaching Staff" />

      <div className="p-6 grid md:grid-cols-3 gap-6">
        
        {/* Teacher Card */}
        <div className="bg-white shadow rounded overflow-hidden">
          <img src={teacher} className="h-48 w-full object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-lg">Mr. Ramesh Kumar</h3>
            <p className="text-gray-600">Mathematics Teacher</p>
          </div>
        </div>

        <div className="bg-white shadow rounded overflow-hidden">
          <img src={teacher} className="h-48 w-full object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-lg">Ms. Priya Sharma</h3>
            <p className="text-gray-600">Science Teacher</p>
          </div>
        </div>

        <div className="bg-white shadow rounded overflow-hidden">
          <img src={teacher} className="h-48 w-full object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-lg">Mr. Anil Verma</h3>
            <p className="text-gray-600">English Teacher</p>
          </div>
        </div>

      </div>
    </div>
  );
}