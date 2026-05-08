import React from "react";
import { motion } from "framer-motion";
import PageHeader from "../../components/PageHeader";

export default function VisionMission() {
  return (
    <div>
      <PageHeader title="Vision & Mission" />

      <motion.div
        className="p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h3
          className="font-bold text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Vision
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          To build future leaders with strong values.
        </motion.p>

        <motion.h3
          className="font-bold text-lg mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Mission
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          Provide quality education, encourage innovation, and develop responsible citizens.
        </motion.p>
      </motion.div>
    </div>
  );
}