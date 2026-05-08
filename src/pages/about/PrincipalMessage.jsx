import React from "react";
import { motion } from "framer-motion";
import PageHeader from "../../components/PageHeader";
import student from "../../assets/images/student.jpg";

export default function PrincipalMessage() {
  return (
    <div>
      <PageHeader title="Principal Message" />

      <div className="p-6 grid md:grid-cols-2 gap-6 items-center">
        <motion.img
          src={student}
          className="rounded"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Welcome to BR School. We focus on the holistic development of students and preparing them for the future.
        </motion.p>
      </div>
    </div>
  );
}