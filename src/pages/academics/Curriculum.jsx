import React from "react";
import { motion } from "framer-motion";
import PageHeader from "../../components/PageHeader";
import classroom from "../../assets/images/classroom.jpg";

export default function Curriculum() {
  return (
    <div>
      <PageHeader title="Curriculum" />

      <motion.div
        className="p-6 grid md:grid-cols-2 gap-6 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={classroom}
          className="rounded shadow"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />

        <div>
          <motion.h2
            className="text-2xl font-bold text-blue-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Our Curriculum
          </motion.h2>

          <motion.p
            className="mt-2 text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            We follow a balanced curriculum focusing on academics, co-curricular activities, and skill development.
          </motion.p>

          <motion.ul
            className="mt-4 list-disc pl-5 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <li>ICSE/CBSE/State Board aligned syllabus</li>
            <li>Practical-based learning</li>
            <li>Activity-based education</li>
            <li>Digital classroom integration</li>
          </motion.ul>
        </div>
      </motion.div>
    </div>
  );
}