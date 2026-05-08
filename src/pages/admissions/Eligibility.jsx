import React from "react";
import { motion } from "framer-motion";
import PageHeader from "../../components/PageHeader";

export default function Eligibility() {
  return (
    <div>
      <PageHeader title="Eligibility" />

      <motion.div
        className="p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Eligibility Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          <motion.div
            className="p-4 border rounded shadow"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="font-bold text-blue-800">Primary Classes</h3>
            <p className="text-gray-600 mt-2">
              Age 5+ years with basic learning skills.
            </p>
          </motion.div>

          <motion.div
            className="p-4 border rounded shadow"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h3 className="font-bold text-blue-800">Middle School</h3>
            <p className="text-gray-600 mt-2">
              Previous class completion certificate required.
            </p>
          </motion.div>

          <motion.div
            className="p-4 border rounded shadow"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h3 className="font-bold text-blue-800">Secondary</h3>
            <p className="text-gray-600 mt-2">
              Must pass previous grade with valid documents.
            </p>
          </motion.div>

          <motion.div
            className="p-4 border rounded shadow"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h3 className="font-bold text-blue-800">Senior Secondary</h3>
            <p className="text-gray-600 mt-2">
              Based on subject stream eligibility.
            </p>
          </motion.div>
        </div>

        {/* Age Criteria Section */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <h3 className="text-xl font-bold text-blue-800">Age Criteria</h3>
          <p className="mt-2 text-gray-600">
            The child should be:
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li>Pre-Nursery: 3+ years by 1st April (NEP) or 31st December (Non-NEP)</li>
            <li>Nursery: 4+ years by 1st April (NEP) or 31st December (Non-NEP)</li>
            <li>Prep/UKG: 5+ years by 1st April (NEP) or 31st December (Non-NEP)</li>
            <li>Class 1: 6+ years by 1st April (NEP) or 31st December (Non-NEP)</li>
          </ul>
        </motion.div>

        {/* Explanation */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <h3 className="font-bold text-xl text-blue-800">
            Note:
          </h3>
          <p className="text-gray-600 mt-2">
            The NEP is a framework and the state decides the implementation. Admission policies are subject to regulations from CBSE, the state government, and the Department of Education.
          </p>
        </motion.div>

        {/* Documents Section */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <h3 className="font-bold text-xl text-blue-800">
            Documents Required:
          </h3>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li>Passport-size photographs of the student, parents, and guardian.</li>
            <li>Date of Birth certificate issued by the competent authority.</li>
            <li>Aadhar card for all types of categories of students.</li>
            <li>Copy of residential proof.</li>
            <li>Bonafide certificate / Study certificate and Transfer certificate.</li>
            <li>Report card of the previous class.</li>
            <li>Passport and Indian VISA / OCI for Non – Indian residents.</li>
            <li>Hospital Vaccination record of early years.</li>
            <li>Govt notified caste certificate (for CBSE Records).</li>
            <li>PEN (Govt of India – UDISE+) Number from the previous school.</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}