import React from "react";
import { motion } from "framer-motion";
import PageHeader from "../../components/PageHeader";

export default function ApplyOnline() {
  return (
    <div>
      <PageHeader title="Admission Form - 2026/27" />

      <motion.div
        className="p-6 max-w-xl mx-auto bg-white shadow rounded"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <form className="space-y-4">

          {/* School Section */}
          <div className="grid grid-cols-2 gap-4">
            <motion.input
              type="text"
              placeholder="School"
              className="w-full border p-3 rounded"
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.input
              type="text"
              placeholder="Sub-Branch"
              className="w-full border p-3 rounded"
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Class and Wing */}
          <div className="grid grid-cols-2 gap-4">
            <motion.input
              type="text"
              placeholder="Class"
              className="w-full border p-3 rounded"
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.input
              type="text"
              placeholder="Wing"
              className="w-full border p-3 rounded"
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Student and Parent Information */}
          <motion.input
            type="text"
            placeholder="Student Name"
            className="w-full border p-3 rounded"
            whileFocus={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />

          <motion.input
            type="text"
            placeholder="Parent Name"
            className="w-full border p-3 rounded"
            whileFocus={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />

          <motion.input
            type="email"
            placeholder="Parent Email"
            className="w-full border p-3 rounded"
            whileFocus={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />

          <motion.input
            type="tel"
            placeholder="Parent Contact"
            className="w-full border p-3 rounded"
            whileFocus={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />

          {/* Location Section */}
          <div className="grid grid-cols-3 gap-4">
            <motion.input
              type="text"
              placeholder="Country"
              className="w-full border p-3 rounded"
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.input
              type="text"
              placeholder="State"
              className="w-full border p-3 rounded"
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.input
              type="text"
              placeholder="City"
              className="w-full border p-3 rounded"
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Source of Information */}
          <motion.input
            type="text"
            placeholder="Where did you hear about us?"
            className="w-full border p-3 rounded"
            whileFocus={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />

          {/* Terms & Conditions */}
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <motion.input
              type="checkbox"
              className="form-checkbox"
              whileHover={{ scale: 1.1 }}
            />
            <motion.label
              className="text-gray-600"
              whileHover={{ scale: 1.05 }}
            >
              I agree to the Terms and Conditions and Privacy Policy
            </motion.label>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            className="w-full bg-blue-900 text-white py-3 rounded"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            Submit Application
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}