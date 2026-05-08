import React from "react";
import { motion } from "framer-motion";
import PageHeader from "../../components/PageHeader";

export default function FeeStructure() {
  return (
    <div>
      <PageHeader title="Fee Structure" />

      <motion.div
        className="p-6 overflow-x-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.table
          className="w-full border shadow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="p-3">Class</th>
              <th className="p-3">Admission Fee</th>
              <th className="p-3">Monthly Fee</th>
            </tr>
          </thead>

          <tbody>
            {["Primary", "Middle", "Secondary", "Senior Secondary"].map((classType, index) => (
              <motion.tr
                key={index}
                className="border"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)" }}
              >
                <td className="p-3">{classType}</td>
                <td className="p-3">₹{index * 5000 + 10000}</td>
                <td className="p-3">₹{index * 500 + 2000}</td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </motion.div>

      {/* Detailed Charges */}
      <motion.div
        className="p-6 mt-6 bg-white shadow rounded"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-xl font-bold text-blue-800">Fee Breakdown</h3>

        {/* Detailed Fee Categories */}
        <motion.table
          className="w-full border shadow mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="p-3">Category</th>
              <th className="p-3">FDN (Pre-School)</th>
              <th className="p-3">6-10 Classes</th>
              <th className="p-3">11-12 Classes</th>
            </tr>
          </thead>
          <tbody>
            <motion.tr
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <td className="p-3">Tuition Fee (Quarterly)</td>
              <td className="p-3">₹51,228</td>
              <td className="p-3">₹58,881</td>
              <td className="p-3">₹70,098</td>
            </motion.tr>
            <motion.tr
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <td className="p-3">Admission Fee (One-Time)</td>
              <td className="p-3">₹200</td>
              <td className="p-3">₹200</td>
              <td className="p-3">₹200</td>
            </motion.tr>
            <motion.tr
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <td className="p-3">Bus Charges (Quarterly)</td>
              <td className="p-3">₹10,494</td>
              <td className="p-3">₹10,494</td>
              <td className="p-3">₹10,494</td>
            </motion.tr>
            <motion.tr
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <td className="p-3">Medical Charges (Annually)</td>
              <td className="p-3">₹2,000</td>
              <td className="p-3">₹2,000</td>
              <td className="p-3">₹2,000</td>
            </motion.tr>
          </tbody>
        </motion.table>
      </motion.div>
    </div>
  );
}