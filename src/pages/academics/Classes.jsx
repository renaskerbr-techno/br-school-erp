import React from "react";
import { motion } from "framer-motion";
import PageHeader from "../../components/PageHeader";

export default function Classes() {
  return (
    <div>
      <PageHeader title="Classes" />

      <motion.div
        className="p-6 grid md:grid-cols-3 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="bg-blue-900 text-white p-6 rounded shadow"
          whileHover={{ scale: 1.05 }}
        >
          Nursery - KG
        </motion.div>

        <motion.div
          className="bg-blue-900 text-white p-6 rounded shadow"
          whileHover={{ scale: 1.05 }}
        >
          Primary (1 - 5)
        </motion.div>

        <motion.div
          className="bg-blue-900 text-white p-6 rounded shadow"
          whileHover={{ scale: 1.05 }}
        >
          Middle (6 - 8)
        </motion.div>

        <motion.div
          className="bg-blue-900 text-white p-6 rounded shadow"
          whileHover={{ scale: 1.05 }}
        >
          Secondary (9 - 10)
        </motion.div>

        <motion.div
          className="bg-blue-900 text-white p-6 rounded shadow"
          whileHover={{ scale: 1.05 }}
        >
          Senior Secondary (11 - 12)
        </motion.div>
      </motion.div>
    </div>
  );
}