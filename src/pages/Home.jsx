import school from "../assets/images/school.jpg";
import classroom from "../assets/images/classroom.jpg";
import lab from "../assets/images/lab.jpg";
import student from "../assets/images/student.jpg";

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <div
        className="h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${school})` }}
      >
        <div className="text-center bg-black/40 p-6 rounded">
          <h1 className="text-5xl font-bold">BR SCHOOL</h1>
          <p className="text-xl mt-2">Building Future Leaders.</p>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="p-8 grid md:grid-cols-2 gap-6 items-center">
        <img src={classroom} className="rounded shadow" />

        <div>
          <h2 className="text-3xl font-bold text-blue-700">
            About Our School
          </h2>
          <p className="mt-2 text-gray-600">
            BR School provides modern education with advanced infrastructure
            and experienced faculty.
          </p>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-800 text-white p-4 rounded">
              <h3 className="font-bold">Modern Labs</h3>
              <p className="text-sm">Fully equipped labs</p>
            </div>

            <div className="bg-blue-800 text-white p-4 rounded">
              <h3 className="font-bold">Smart Classes</h3>
              <p className="text-sm">Digital learning</p>
            </div>

            <div className="bg-blue-800 text-white p-4 rounded">
              <h3 className="font-bold">Sports</h3>
              <p className="text-sm">Physical development</p>
            </div>
          </div>
        </div>
      </div>

      {/* CAMPUS LIFE */}
      <div className="p-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Campus Life
        </h2>

        <div className="grid md:grid-cols-4 gap-4">
          <img src={classroom} className="rounded shadow" />
          <img src={lab} className="rounded shadow" />
          <img src={student} className="rounded shadow" />
          <img src={classroom} className="rounded shadow" />
        </div>
      </div>
    </div>
  );
}