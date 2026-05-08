import React from "react";
import { motion } from "framer-motion";
import PageHeader from "../../components/PageHeader";
import classroom from "../../assets/images/classroom.jpg";
import lab from "../../assets/images/lab.jpg";

export default function Infrastructure() {
  return (
    <div>
      <PageHeader title="Infrastructure" />

      <motion.div
        className="p-6 grid md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={classroom}
          className="rounded"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img
          src={lab}
          className="rounded"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
}