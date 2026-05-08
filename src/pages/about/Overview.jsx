import React from "react";
import { motion } from "framer-motion";
import PageHeader from "../../components/PageHeader";
import school from "../../assets/images/school.jpg";

export default function Overview() {
  return (
    <div>
      <PageHeader title="Overview" />

      <motion.div
        className="p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={school}
          className="rounded mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          BR School provides high-quality education with modern teaching methods and excellent infrastructure.
        </motion.p>
      </motion.div>
    </div>
  );
}