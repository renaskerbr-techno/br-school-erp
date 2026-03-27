import PageHeader from "../../components/PageHeader";
import classroom from "../../assets/images/classroom.jpg";

export default function Curriculum() {
  return (
    <div>
      <PageHeader title="Curriculum" />

      <div className="p-6 grid md:grid-cols-2 gap-6 items-center">
        <img src={classroom} className="rounded shadow" />

        <div>
          <h2 className="text-2xl font-bold text-blue-800">
            Our Curriculum
          </h2>
          <p className="mt-2 text-gray-600">
            We follow a balanced curriculum focusing on academics,
            co-curricular activities, and skill development.
          </p>

          <ul className="mt-4 list-disc pl-5 text-gray-700">
            <li>ICSE/CBSE/State Board aligned syllabus</li>
            <li>Practical-based learning</li>
            <li>Activity-based education</li>
            <li>Digital classroom integration</li>
          </ul>
        </div>
      </div>
    </div>
  );
}