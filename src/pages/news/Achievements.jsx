import PageHeader from "../../components/PageHeader";
import student from "../../assets/images/student.jpg";

export default function Achievements() {
  return (
    <div>
      <PageHeader title="Achievements" />

      <div className="p-6 grid md:grid-cols-3 gap-6">

        <div className="bg-white shadow rounded overflow-hidden text-center p-4">
          <img
            src={student}
            className="w-24 h-24 object-cover rounded-full mx-auto"
          />
          <h3 className="font-bold mt-3">Rahul</h3>
          <p className="text-sm text-gray-600">
            Won 1st Prize in Math Olympiad
          </p>
        </div>

        <div className="bg-white shadow rounded overflow-hidden text-center p-4">
          <img
            src={student}
            className="w-24 h-24 object-cover rounded-full mx-auto"
          />
          <h3 className="font-bold mt-3">Anjali</h3>
          <p className="text-sm text-gray-600">
            State-level Science Competition Winner
          </p>
        </div>

        <div className="bg-white shadow rounded overflow-hidden text-center p-4">
          <img
            src={student}
            className="w-24 h-24 object-cover rounded-full mx-auto"
          />
          <h3 className="font-bold mt-3">Kiran</h3>
          <p className="text-sm text-gray-600">
            Best Athlete Award
          </p>
        </div>

      </div>
    </div>
  );
}