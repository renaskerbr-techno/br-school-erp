import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import avatar from "../assets/images/avatar.png";

import {
  FaHome,
  FaSchool,
  FaUserGraduate,
  FaNewspaper,
  FaPhone,
  FaSignInAlt,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setDropdown(null);
    setMenuOpen(false);
  }, [location.pathname]);

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
    <>
      {/* NAVBAR */}
      <nav
        ref={navRef}
        className={`fixed top-10 left-0 w-full h-16 px-6 flex items-center justify-between z-40 transition-all duration-300 ${
          scrolled
            ? "bg-blue-900 shadow-xl"
            : "bg-blue-900/70 backdrop-blur-lg"
        }`}
      >
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src={avatar}
            alt="User Avatar"
            className="h-12 w-12 rounded-full"
          />
          <span className="text-white text-lg font-semibold">
            BR SCHOOL
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6 text-white">
          <NavItem to="/" icon={<FaHome />} text="Home" isActive={isActive("/")} />

          <Dropdown
            title="About"
            icon={<FaSchool />}
            name="about"
            dropdown={dropdown}
            setDropdown={setDropdown}
          >
            <MegaLink to="/about/overview" text="Overview" />
            <MegaLink to="/about/vision" text="Vision & Mission" />
            <MegaLink to="/about/principal" text="Principal Message" />
            <MegaLink to="/about/history" text="History" />
          </Dropdown>

          <Dropdown
            title="Academics"
            icon={<FaUserGraduate />}
            name="academics"
            dropdown={dropdown}
            setDropdown={setDropdown}
          >
            <MegaLink to="/academics/curriculum" text="Curriculum" />
            <MegaLink to="/academics/classes" text="Classes" />
            <MegaLink to="/academics/syllabus" text="Syllabus" />
            <MegaLink to="/academics/calendar" text="Calendar" />
          </Dropdown>

          <Dropdown
            title="Admissions"
            icon={<FaSchool />}
            name="admissions"
            dropdown={dropdown}
            setDropdown={setDropdown}
          >
            <MegaLink to="/admissions/process" text="Process" />
            <MegaLink to="/admissions/eligibility" text="Eligibility" />
            <MegaLink to="/admissions/fee" text="Fee Structure" />
            <MegaLink to="/admissions/apply" text="Apply Online" />
          </Dropdown>

          <Dropdown
            title="News"
            icon={<FaNewspaper />}
            name="news"
            dropdown={dropdown}
            setDropdown={setDropdown}
          >
            <MegaLink to="/news" text="News" />
            <MegaLink to="/events" text="Events" />
            <MegaLink to="/achievements" text="Achievements" />
          </Dropdown>

          <NavItem
            to="/contact"
            icon={<FaPhone />}
            text="Contact"
            isActive={isActive("/contact")}
          />

          {/* ✅ FIXED LOGIN (NO DROPDOWN) */}
          <NavItem
            to="/portal-selection"
            icon={<FaSignInAlt />}
            text="Login"
            isActive={isActive("/portal-selection")}
          />
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-blue-900 text-white p-6 z-50">
          <button
            onClick={() => setMenuOpen(false)}
            className="mb-6 text-2xl"
          >
            <FaTimes />
          </button>

          <MobileLink to="/" text="Home" close={setMenuOpen} />

          <MobileLink to="/about/overview" text="About" close={setMenuOpen} />
          <MobileLink to="/academics/curriculum" text="Academics" close={setMenuOpen} />
          <MobileLink to="/admissions/process" text="Admissions" close={setMenuOpen} />
          <MobileLink to="/news" text="News" close={setMenuOpen} />

          <MobileLink to="/contact" text="Contact" close={setMenuOpen} />

          {/* ✅ FIXED LOGIN MOBILE */}
          <MobileLink
            to="/portal-selection"
            text="Login"
            close={setMenuOpen}
          />
        </div>
      )}
    </>
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

function Dropdown({ title, icon, children, name, dropdown, setDropdown }) {
  return (
    <div className="relative">
      <button
        onClick={() => setDropdown(dropdown === name ? null : name)}
        className="flex items-center gap-1"
      >
        {icon} {title} <FaChevronDown size={12} />
      </button>

      {dropdown === name && (
        <div className="absolute top-12 left-0 bg-white text-black rounded-xl shadow-xl p-4 w-60">
          {children}
        </div>
      )}
    </div>
  );
}

function MegaLink({ to, text }) {
  return (
    <Link to={to} className="block px-3 py-2 hover:bg-blue-50">
      {text}
    </Link>
  );
}

function MobileLink({ to, text, close }) {
  return (
    <Link
      to={to}
      onClick={() => close(false)}
      className="block py-2"
    >
      {text}
    </Link>
  );
}








