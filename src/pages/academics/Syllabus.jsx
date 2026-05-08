import React from "react";
import { motion } from "framer-motion";
import PageHeader from "../../components/PageHeader";

export default function Syllabus() {
  return (
    <div>
      <PageHeader title="Syllabus" />

      <motion.div
        className="p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-gray-700 mb-4">
          Download syllabus for each class:
        </p>

        <motion.div
          className="grid md:grid-cols-2 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.div
            className="p-4 border rounded shadow"
            whileHover={{ scale: 1.05 }}
          >
            Class 1 - 5 Syllabus
          </motion.div>

          <motion.div
            className="p-4 border rounded shadow"
            whileHover={{ scale: 1.05 }}
          >
            Class 6 - 8 Syllabus
          </motion.div>

          <motion.div
            className="p-4 border rounded shadow"
            whileHover={{ scale: 1.05 }}
          >
            Class 9 - 10 Syllabus
          </motion.div>

          <motion.div
            className="p-4 border rounded shadow"
            whileHover={{ scale: 1.05 }}
          >
            Class 11 - 12 Syllabus
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}