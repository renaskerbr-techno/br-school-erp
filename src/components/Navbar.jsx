import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="bg-white text-blue-900 font-bold px-2 py-1 rounded-full">
          BR
        </div>
        <h1 className="font-bold text-xl">BR SCHOOL</h1>
      </div>

      {/* Menu */}
      <div className="hidden md:flex gap-6 font-medium">
        <Link to="/">Home</Link>

        {/* About Dropdown */}
        <div className="group relative cursor-pointer">
          <span>About ▾</span>
          <div className="absolute hidden group-hover:block bg-white text-black p-3 shadow-lg rounded w-44">
            <Link to="/about/overview" className="block hover:text-blue-600">Overview</Link>
            <Link to="/about/vision" className="block hover:text-blue-600">Vision & Mission</Link>
            <Link to="/about/principal" className="block hover:text-blue-600">Principal Message</Link>
            <Link to="/about/history" className="block hover:text-blue-600">History</Link>
            <Link to="/about/infrastructure" className="block hover:text-blue-600">Infrastructure</Link>
          </div>
        </div>

        {/* Academics Dropdown */}
        <div className="group relative cursor-pointer">
          <span>Academics ▾</span>
          <div className="absolute hidden group-hover:block bg-white text-black p-3 shadow-lg rounded w-44">
            <Link to="/academics/curriculum">Curriculum</Link>
            <Link to="/academics/classes">Classes</Link>
            <Link to="/academics/syllabus">Syllabus</Link>
            <Link to="/academics/calendar">Academic Calendar</Link>
          </div>
        </div>

        {/* Simple Links */}
        <Link to="/admissions/process">Admissions</Link>
        <Link to="/faculty/teaching">Faculty</Link>
        <Link to="/facilities">Facilities</Link>
        <Link to="/student/timetable">Student</Link>
        <Link to="/parent/progress">Parent</Link>
        <Link to="/news">News</Link>
        <Link to="/gallery/photos">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}