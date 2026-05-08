import React from "react";
import { motion } from "framer-motion";

// ✅ Import images
import school from "../assets/images/school.jpg";
import classroom from "../assets/images/classroom.jpg";
import lab from "../assets/images/lab.jpg";
import student from "../assets/images/student.jpg";
import "./Home.css";

export default function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <motion.div
        className="relative h-[calc(100vh-64px)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={school}
          alt="school"
          className="w-full h-full object-cover object-top"
        />
        {/* Modern transparent gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

        {/* Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-8 py-6 rounded-xl backdrop-blur-md">
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              BR SCHOOL
            </motion.h1>

            <motion.p
              className="text-xl mt-3 text-yellow-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Building Future Leaders
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* ABOUT SECTION */}
      <div className="p-8 grid md:grid-cols-2 gap-6 items-center">
        <motion.img
          src={classroom}
          alt="classroom"
          className="rounded shadow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        />

        <div>
          <motion.h2
            className="text-3xl font-bold text-blue-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            About Our School
          </motion.h2>

          <motion.p
            className="mt-2 text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            BR School provides modern education with advanced infrastructure and experienced faculty.
          </motion.p>

          {/* Cards for Facilities */}
          <motion.div
            className="grid grid-cols-3 gap-4 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <motion.div
              className="bg-blue-800 text-white p-4 rounded"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="font-bold">Modern Labs</h3>
              <p className="text-sm">Fully equipped labs</p>
            </motion.div>

            <motion.div
              className="bg-blue-800 text-white p-4 rounded"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="font-bold">Smart Classes</h3>
              <p className="text-sm">Digital learning</p>
            </motion.div>

            <motion.div
              className="bg-blue-800 text-white p-4 rounded"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="font-bold">Sports</h3>
              <p className="text-sm">Physical development</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* CAMPUS LIFE */}
      <motion.div
        className="p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.h2
          className="text-2xl font-bold text-blue-700 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Campus Life
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          <motion.img
            src={classroom}
            alt="classroom"
            className="rounded shadow"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            src={lab}
            alt="lab"
            className="rounded shadow"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            src={student}
            alt="student"
            className="rounded shadow"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            src={classroom}
            alt="classroom"
            className="rounded shadow"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}