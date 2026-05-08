import React from "react";
import { motion } from "framer-motion";
import PageHeader from "../../components/PageHeader";

export default function History() {
  return (
    <div>
      <PageHeader title="History" />

      <motion.div
        className="p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Established in 2000, BR School has grown into a leading institution known for academic excellence.
        </motion.p>
      </motion.div>
    </div>
  );
}