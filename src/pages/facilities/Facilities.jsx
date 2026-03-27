import PageHeader from "../../components/PageHeader";
import classroom from "../../assets/images/classroom.jpg";
import lab from "../../assets/images/lab.jpg";
import school from "../../assets/images/school.jpg";
import event from "../../assets/images/event.jpg";

export default function Facilities() {
  return (
    <div>
      <PageHeader title="Facilities" />

      {/* Intro Section */}
      <div className="p-6 text-center max-w-3xl mx-auto">
        <p className="text-gray-600">
          BR School provides world-class facilities to ensure holistic
          development of students in academics, sports, and extracurricular
          activities.
        </p>
      </div>

      {/* Facilities Grid */}
      <div className="p-6 grid md:grid-cols-4 gap-6">
        
        {/* Classroom */}
        <div className="bg-white shadow rounded overflow-hidden">
          <img src={classroom} className="h-40 w-full object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-blue-900">Smart Classrooms</h3>
            <p className="text-sm text-gray-600 mt-1">
              Digital boards and interactive learning tools.
            </p>
          </div>
        </div>

        {/* Lab */}
        <div className="bg-white shadow rounded overflow-hidden">
          <img src={lab} className="h-40 w-full object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-blue-900">Science Labs</h3>
            <p className="text-sm text-gray-600 mt-1">
              Fully equipped labs for practical learning.
            </p>
          </div>
        </div>

        {/* Library */}
        <div className="bg-white shadow rounded overflow-hidden">
          <img src={school} className="h-40 w-full object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-blue-900">Library</h3>
            <p className="text-sm text-gray-600 mt-1">
              Rich collection of books and digital resources.
            </p>
          </div>
        </div>

        {/* Sports */}
        <div className="bg-white shadow rounded overflow-hidden">
          <img src={event} className="h-40 w-full object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-blue-900">Sports Facilities</h3>
            <p className="text-sm text-gray-600 mt-1">
              Playground, indoor games, and physical training.
            </p>
          </div>
        </div>

      </div>

      {/* Additional Section */}
      <div className="p-6 grid md:grid-cols-2 gap-6 items-center">
        <img src={school} className="rounded shadow" />

        <div>
          <h2 className="text-2xl font-bold text-blue-800">
            Safe & Modern Campus
          </h2>
          <p className="mt-2 text-gray-600">
            Our campus is equipped with CCTV surveillance, clean
            infrastructure, and a safe learning environment for all students.
          </p>
        </div>
      </div>
    </div>
  );
}