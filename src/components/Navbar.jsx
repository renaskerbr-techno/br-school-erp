import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaSchool,
  FaUserGraduate,
  FaNewspaper,
  FaImages,
  FaPhone,
  FaSignInAlt,
  FaBars,
  FaTimes,
  FaChevronDown
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navRef = useRef();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setDropdown(null);
    setMenuOpen(false);
  }, [location.pathname]);

  // Click outside close
  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isActive = (path) =>
    location.pathname.startsWith(path)
      ? "text-yellow-300"
      : "hover:text-yellow-300";

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 w-full h-16 px-6 flex items-center justify-between z-50 transition-all duration-300 ${
        scrolled
          ? "bg-blue-900 shadow-xl"
          : "bg-blue-900/70 backdrop-blur-lg"
      }`}
    >
      {/* LOGO */}
      <div className="flex items-center gap-2 text-white text-xl font-bold">
        <div className="bg-white text-blue-900 px-2 py-1 rounded-full shadow">
          BR
        </div>
        BR SCHOOL
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-6 text-white">

        <NavItem to="/" icon={<FaHome />} text="Home" isActive={isActive("/")} />

        <Dropdown title="About" icon={<FaSchool />} name="about" dropdown={dropdown} setDropdown={setDropdown}>
          <MegaLink to="/about/overview" text="Overview" />
          <MegaLink to="/about/vision" text="Vision & Mission" />
          <MegaLink to="/about/principal" text="Principal Message" />
          <MegaLink to="/about/history" text="History" />
        </Dropdown>

        <Dropdown title="Academics" icon={<FaUserGraduate />} name="academics" dropdown={dropdown} setDropdown={setDropdown}>
          <MegaLink to="/academics/curriculum" text="Curriculum" />
          <MegaLink to="/academics/classes" text="Classes" />
          <MegaLink to="/academics/syllabus" text="Syllabus" />
          <MegaLink to="/academics/calendar" text="Calendar" />
        </Dropdown>

        <Dropdown title="Admissions" icon={<FaSchool />} name="admissions" dropdown={dropdown} setDropdown={setDropdown}>
          <MegaLink to="/admissions/process" text="Process" />
          <MegaLink to="/admissions/eligibility" text="Eligibility" />
          <MegaLink to="/admissions/fee" text="Fee Structure" />
          <MegaLink to="/admissions/apply" text="Apply Online" />
        </Dropdown>

        <Dropdown title="Faculty" icon={<FaUserGraduate />} name="faculty" dropdown={dropdown} setDropdown={setDropdown}>
          <MegaLink to="/faculty/teaching" text="Teaching" />
          <MegaLink to="/faculty/non-teaching" text="Non Teaching" />
        </Dropdown>

	<Dropdown
  title="Student"
  icon={<FaUserGraduate />}
  name="student"
  dropdown={dropdown}
  setDropdown={setDropdown}
>
  <MegaLink to="/student/timetable" text="Timetable" />
  <MegaLink to="/student/attendance" text="Attendance" />
  <MegaLink to="/student/results" text="Results" />
  <MegaLink to="/student/assignments" text="Assignments" />
</Dropdown>

        <Dropdown title="Parent" icon={<FaUserGraduate />} name="parent" dropdown={dropdown} setDropdown={setDropdown}>
          <MegaLink to="/parent/progress" text="Progress" />
          <MegaLink to="/parent/payment" text="Fee Payment" />
          <MegaLink to="/parent/notifications" text="Notifications" />
        </Dropdown>

        <Dropdown title="News" icon={<FaNewspaper />} name="news" dropdown={dropdown} setDropdown={setDropdown}>
          <MegaLink to="/news" text="News" />
          <MegaLink to="/events" text="Events" />
          <MegaLink to="/achievements" text="Achievements" />
        </Dropdown>

        <Dropdown title="Gallery" icon={<FaImages />} name="gallery" dropdown={dropdown} setDropdown={setDropdown}>
          <MegaLink to="/gallery/photos" text="Photos" />
          <MegaLink to="/gallery/videos" text="Videos" />
        </Dropdown>

        <NavItem to="/contact" icon={<FaPhone />} text="Contact" isActive={isActive("/contact")} />

        <Dropdown
          title="Login"
          icon={<FaSignInAlt />}
          name="login"
          dropdown={dropdown}
          setDropdown={setDropdown}
          highlight
        >
          <MegaLink to="/login/parent" text="Parent" />
	  <MegaLink to="/login/student" text="Student" />
          <MegaLink to="/login/parent" text="Teacher" />
          <MegaLink to="/login/teacher" text="Admin" />
        </Dropdown>

      </div>

      {/* MOBILE BUTTON */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setMenuOpen(true)}
      >
        <FaBars />
      </button>

      {/* MOBILE SIDEBAR */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-72 h-full bg-blue-900 text-white p-6 z-50 shadow-xl overflow-y-auto animate-fadeIn">

          <button onClick={() => setMenuOpen(false)} className="mb-6 text-2xl">
            <FaTimes />
          </button>

          <div className="flex flex-col gap-4 text-lg">

            <MobileLink to="/" text="Home" close={setMenuOpen} />

            <MobileAccordion title="About">
              <MobileLink to="/about/overview" text="Overview" close={setMenuOpen} />
              <MobileLink to="/about/vision" text="Vision & Mission" close={setMenuOpen} />
              <MobileLink to="/about/principal" text="Principal Message" close={setMenuOpen} />
              <MobileLink to="/about/history" text="History" close={setMenuOpen} />
            </MobileAccordion>

            <MobileAccordion title="Academics">
              <MobileLink to="/academics/curriculum" text="Curriculum" close={setMenuOpen} />
              <MobileLink to="/academics/classes" text="Classes" close={setMenuOpen} />
              <MobileLink to="/academics/syllabus" text="Syllabus" close={setMenuOpen} />
              <MobileLink to="/academics/calendar" text="Calendar" close={setMenuOpen} />
            </MobileAccordion>

            <MobileAccordion title="Admissions">
              <MobileLink to="/admissions/process" text="Process" close={setMenuOpen} />
              <MobileLink to="/admissions/eligibility" text="Eligibility" close={setMenuOpen} />
              <MobileLink to="/admissions/fee" text="Fee Structure" close={setMenuOpen} />
              <MobileLink to="/admissions/apply" text="Apply Online" close={setMenuOpen} />
            </MobileAccordion>

            <MobileAccordion title="Faculty">
              <MobileLink to="/faculty/teaching" text="Teaching" close={setMenuOpen} />
              <MobileLink to="/faculty/non-teaching" text="Non Teaching" close={setMenuOpen} />
            </MobileAccordion>
<MobileAccordion title="Student">
  <MobileLink to="/student/timetable" text="Timetable" close={setMenuOpen} />
  <MobileLink to="/student/attendance" text="Attendance" close={setMenuOpen} />
  <MobileLink to="/student/results" text="Results" close={setMenuOpen} />
  <MobileLink to="/student/assignments" text="Assignments" close={setMenuOpen} />
</MobileAccordion>

            <MobileAccordion title="Parent">
              <MobileLink to="/parent/progress" text="Progress" close={setMenuOpen} />
              <MobileLink to="/parent/payment" text="Fee Payment" close={setMenuOpen} />
              <MobileLink to="/parent/notifications" text="Notifications" close={setMenuOpen} />
            </MobileAccordion>

            <MobileAccordion title="News">
              <MobileLink to="/news" text="News" close={setMenuOpen} />
              <MobileLink to="/events" text="Events" close={setMenuOpen} />
              <MobileLink to="/achievements" text="Achievements" close={setMenuOpen} />
            </MobileAccordion>

            <MobileAccordion title="Gallery">
              <MobileLink to="/gallery/photos" text="Photos" close={setMenuOpen} />
              <MobileLink to="/gallery/videos" text="Videos" close={setMenuOpen} />
            </MobileAccordion>

            <MobileLink to="/contact" text="Contact" close={setMenuOpen} />

            <MobileAccordion title="Login">
	      <MobileLink to="/login/parent" text="Parent" close={setMenuOpen} />
              <MobileLink to="/login/student" text="Student" close={setMenuOpen} />
              <MobileLink to="/login/parent" text="Teacher" close={setMenuOpen} />
              <MobileLink to="/login/teacher" text="Admin" close={setMenuOpen} />
            </MobileAccordion>

          </div>
        </div>
      )}
    </nav>
  );
}

/* COMPONENTS */

function NavItem({ to, icon, text, isActive }) {
  return (
    <Link to={to} className={`flex items-center gap-2 ${isActive}`}>
      {icon} {text}
    </Link>
  );
}

function Dropdown({ title, icon, children, name, dropdown, setDropdown, highlight }) {
  return (
    <div className="relative">
      <button
        onClick={() => setDropdown(dropdown === name ? null : name)}
        className={`flex items-center gap-1 ${
          highlight ? "bg-yellow-400 text-blue-900 px-3 py-1 rounded-full" : ""
        }`}
      >
        {icon} {title} <FaChevronDown size={12} />
      </button>

      {dropdown === name && (
        <div className="absolute top-12 left-0 bg-white text-black rounded-xl shadow-2xl p-4 w-56 space-y-1 animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
}

function MegaLink({ to, text }) {
  return (
    <Link
      to={to}
      className="block px-3 py-2 rounded hover:bg-blue-50 hover:text-blue-700"
    >
      {text}
    </Link>
  );
}

function MobileLink({ to, text, close }) {
  return (
    <Link
      to={to}
      onClick={() => close(false)}
      className="block px-2 py-2 rounded hover:bg-white/10 transition"
    >
      {text}
    </Link>
  );
}

function MobileAccordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full px-2 py-2 rounded hover:bg-white/10"
      >
        {title}
        <FaChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="ml-3 mt-2 space-y-1 border-l border-white/20 pl-3">
          {children}
        </div>
      )}
    </div>
  );
}