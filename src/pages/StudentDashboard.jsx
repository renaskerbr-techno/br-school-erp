import React, { useState } from "react";
import { motion } from "framer-motion";
import "./StudentDashboard.css";

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("attendance");

  return (
    <motion.div
      className="StudentDashboard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >

      {/* HEADER */}
      <motion.div
        className="welcome"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Welcome, Student 👋</h2>
        <p>Here is your academic overview</p>
      </motion.div>

      {/* SUMMARY CARDS */}
      <motion.div
        className="cards"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <motion.div className="card" whileHover={{ scale: 1.05 }}>
          <h3>Attendance</h3>
          <p>85%</p>
        </motion.div>

        <motion.div className="card" whileHover={{ scale: 1.05 }}>
          <h3>Results</h3>
          <p>8.2 GPA</p>
        </motion.div>

        <motion.div className="card" whileHover={{ scale: 1.05 }}>
          <h3>Activities</h3>
          <p>5 Events</p>
        </motion.div>

        <motion.div className="card" whileHover={{ scale: 1.05 }}>
          <h3>Assignments</h3>
          <p>2 Pending</p>
        </motion.div>
      </motion.div>

      {/* TABS */}
      <motion.div
        className="tabs"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.button onClick={() => setActiveTab("attendance")}>
          Attendance
        </motion.button>
        <motion.button onClick={() => setActiveTab("results")}>
          Results
        </motion.button>
        <motion.button onClick={() => setActiveTab("timetable")}>
          Timetable
        </motion.button>
        <motion.button onClick={() => setActiveTab("assignments")}>
          Assignments
        </motion.button>
      </motion.div>

      {/* TAB CONTENT */}
      <div className="tab-content">
        {activeTab === "attendance" && (
          <div>
            <h3>Attendance Overview</h3>
            <motion.div
              className="graph"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              📊 Attendance Graph (Weekly/Monthly)
            </motion.div>
          </div>
        )}

        {activeTab === "results" && (
          <div>
            <h3>Exam Results</h3>
            <ul>
              <li>Math - 85</li>
              <li>Science - 90</li>
              <li>English - 88</li>
            </ul>
          </div>
        )}

        {activeTab === "timetable" && (
          <div>
            <h3>Today Timetable</h3>
            <ul>
              <li>Math - 9:00 AM</li>
              <li>Science - 10:00 AM</li>
              <li>English - 11:00 AM</li>
            </ul>
          </div>
        )}

        {activeTab === "assignments" && (
          <div>
            <h3>Assignments</h3>
            <ul>
              <li>Math Homework - Pending</li>
              <li>Science Project - Submitted</li>
            </ul>
          </div>
        )}
      </div>

      {/* NOTICES */}
      <motion.div
        className="notices"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 1 }}
      >
        <h3>📢 Notices</h3>
        <p>Unit Test starts next week</p>
        <p>Holiday on Monday</p>
      </motion.div>
    </motion.div>
  );
};

export default StudentDashboard;