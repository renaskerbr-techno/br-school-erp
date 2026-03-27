import PageHeader from "../../components/PageHeader";
import school from "../../assets/images/school.jpg";

export default function Process() {
  return (
    <div>
      <PageHeader title="Admission Process" />

      <div className="p-6 grid md:grid-cols-2 gap-6 items-center">
        <img src={school} className="rounded shadow" />

        <div>
          <h2 className="text-2xl font-bold text-blue-800">
            Steps to Apply
          </h2>

          <ul className="mt-4 space-y-3 text-gray-700">
            <li>1. Fill the online application form</li>
            <li>2. Submit required documents</li>
            <li>3. Attend entrance/interaction</li>
            <li>4. Confirm admission & fee payment</li>
          </ul>
        </div>
      </div>
    </div>
  );
}