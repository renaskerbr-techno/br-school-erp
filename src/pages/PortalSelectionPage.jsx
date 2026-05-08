import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaUsers,
  FaChalkboardTeacher,
  FaUserTie,
  FaShieldAlt,
} from "react-icons/fa";

import "./PortalSelectionPage.css";

const portals = [
  {
    title: "Parent Portal",
    desc: "Access child’s attendance, results, and notices for parents.",
    path: "/parent-login",
    color: "green",
    icon: <FaUsers />,
  },
  {
    title: "Student Portal",
    desc: "Results, attendance, and performance reports.",
    path: "/student-login",
    color: "blue",
    icon: <FaUserGraduate />,
  },
  {
    title: "Staff Portal",
    desc: "Attendance management, marks entry, and circulars for faculty.",
    path: "/staff-login",
    color: "red",
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "Principal Portal",
    desc: "School reports, faculty performance, and school management.",
    path: "/principal-login",
    color: "yellow",
    icon: <FaUserTie />,
  },
  {
    title: "Admin Panel",
    desc: "Secure control panel for system admins and departments.",
    path: "/admin-login",
    color: "dark",
    icon: <FaShieldAlt />,
  },
];

/* 🔥 Animation Variants */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const PortalSelectionPage = () => {
  return (
    <div className="portal-wrapper">

      {/* HERO */}
      <motion.div
        className="portal-hero"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>BR School Portal</h1>
        <p>Access your digital campus services</p>
        <div className="underline"></div>
      </motion.div>

      {/* GRID */}
      <motion.div
        className="portal-grid"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {portals.map((portal, index) => (
          <motion.div
            key={index}
            className={`portal-card ${portal.color}`}
            variants={item}

            /* 🔥 Hover + Tap */
            whileHover={{
              scale: 1.05,
              y: -10,
            }}
            whileTap={{ scale: 0.96 }}
          >
            <motion.div
              className="icon"
              whileHover={{ rotate: 8, scale: 1.2 }}
            >
              {portal.icon}
            </motion.div>

            <h3>{portal.title}</h3>
            <p>{portal.desc}</p>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to={portal.path} className="login-btn">
                LOGIN NOW →
              </Link>
            </motion.div>

          </motion.div>
        ))}
      </motion.div>

    </div>
  );
};

export default PortalSelectionPage;