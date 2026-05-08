import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

// Main Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";

// Student
import StudentLogin from "./pages/StudentLogin";
import StudentDashboard from "./pages/StudentDashboard";

// Parent (NEW)
import ParentLogin from "./pages/parent/ParentLogin";
import ParentDashboard from "./pages/parent/ParentDashboard";

// Existing Pages (keep all)
import Overview from "./pages/about/Overview";
import VisionMission from "./pages/about/VisionMission";
import PrincipalMessage from "./pages/about/PrincipalMessage";
import History from "./pages/about/History";
import Infrastructure from "./pages/about/Infrastructure";

import Curriculum from "./pages/academics/Curriculum";
import Classes from "./pages/academics/Classes";
import Syllabus from "./pages/academics/Syllabus";
import AcademicCalendar from "./pages/academics/AcademicCalendar";

import Process from "./pages/admissions/Process";
import Eligibility from "./pages/admissions/Eligibility";
import FeeStructure from "./pages/admissions/FeeStructure";
import ApplyOnline from "./pages/admissions/ApplyOnline";

import Teaching from "./pages/faculty/Teaching";
import NonTeaching from "./pages/faculty/NonTeaching";

import Facilities from "./pages/facilities/Facilities";

import Timetable from "./pages/student/Timetable";
import Attendance from "./pages/student/Attendance";
import Results from "./pages/student/Results";
import Assignments from "./pages/student/Assignments";

import Progress from "./pages/parent/Progress";
import FeePayment from "./pages/parent/FeePayment";
import Notifications from "./pages/parent/Notifications";

import News from "./pages/news/News";
import Events from "./pages/news/Events";
import Achievements from "./pages/news/Achievements";

import Photos from "./pages/gallery/Photos";
import Videos from "./pages/gallery/Videos";

import PortalSelectionPage from './pages/PortalSelectionPage';

export default function App() {
  return (
    <Routes>

      {/* 🌐 PUBLIC WEBSITE */}
      <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />

        {/* About */}
        <Route path="about/overview" element={<Overview />} />
        <Route path="about/vision" element={<VisionMission />} />
        <Route path="about/principal" element={<PrincipalMessage />} />
        <Route path="about/history" element={<History />} />
        <Route path="about/infrastructure" element={<Infrastructure />} />

        {/* Academics */}
        <Route path="academics/curriculum" element={<Curriculum />} />
        <Route path="academics/classes" element={<Classes />} />
        <Route path="academics/syllabus" element={<Syllabus />} />
        <Route path="academics/calendar" element={<AcademicCalendar />} />

        {/* Admissions */}
        <Route path="admissions/process" element={<Process />} />
        <Route path="admissions/eligibility" element={<Eligibility />} />
        <Route path="admissions/fee" element={<FeeStructure />} />
        <Route path="admissions/apply" element={<ApplyOnline />} />

        {/* Faculty */}
        <Route path="faculty/teaching" element={<Teaching />} />
        <Route path="faculty/non-teaching" element={<NonTeaching />} />

        {/* Facilities */}
        <Route path="facilities" element={<Facilities />} />

        {/* Student Public Pages */}
        <Route path="student/timetable" element={<Timetable />} />
        <Route path="student/attendance" element={<Attendance />} />
        <Route path="student/results" element={<Results />} />
        <Route path="student/assignments" element={<Assignments />} />

        {/* Parent Public Pages */}
        <Route path="parent/progress" element={<Progress />} />
        <Route path="parent/payment" element={<FeePayment />} />
        <Route path="parent/notifications" element={<Notifications />} />

        {/* News */}
        <Route path="news" element={<News />} />
        <Route path="events" element={<Events />} />
        <Route path="achievements" element={<Achievements />} />

        {/* Gallery */}
        <Route path="gallery/photos" element={<Photos />} />
        <Route path="gallery/videos" element={<Videos />} />

        <Route path="portal-selection" element={<PortalSelectionPage />} />

      </Route>

      {/* 🔐 LOGIN ROUTES */}
      <Route path="/student/login" element={<StudentLogin />} />
      <Route path="/parent/login" element={<ParentLogin />} />

      {/* 🎓 STUDENT DASHBOARD (PROTECTED) */}
      <Route
        path="/student/dashboard"
        element={
          <ProtectedRoute role="student">
            <StudentDashboard />
          </ProtectedRoute>
        }
      />

      {/* 👨‍👩‍👧 PARENT DASHBOARD (PROTECTED) */}
      <Route
        path="/parent/dashboard"
        element={
          <ProtectedRoute role="parent">
            <ParentDashboard />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}