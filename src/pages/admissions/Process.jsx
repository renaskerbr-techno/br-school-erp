import React from "react";
import { motion } from "framer-motion";
import PageHeader from "../../components/PageHeader";
import school from "../../assets/images/school.jpg";

export default function Process() {
  return (
    <div>
      <PageHeader title="Admission Process" />

      <motion.div
        className="p-6 grid md:grid-cols-2 gap-6 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={school}
          className="rounded shadow"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />

        <div>
          <motion.h2
            className="text-2xl font-bold text-blue-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Steps to Apply
          </motion.h2>

          <motion.ul
            className="mt-4 space-y-3 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <motion.li
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              1. Fill the online application form
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              2. Submit required documents
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              3. Attend entrance/interaction
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              4. Confirm admission & fee payment
            </motion.li>
          </motion.ul>

          {/* Admission Details */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 1 }}
          >
            <h3 className="font-bold text-xl text-blue-800 mt-6">
              Take a step towards excellence
            </h3>
            <p className="mt-2 text-gray-600">
              The core aim of education at St. Joseph’s Public School is to foster all-round development of a child, emphasizing moral, social, emotional, physical, and intellectual growth.
            </p>

            <h3 className="font-bold text-xl text-blue-800 mt-6">
              Pre-Primary Classes
            </h3>
            <p className="mt-2 text-gray-600">
              The first level of admission into school is Pre-Primary classes. Admission notifications are put up on the Notice Board of the school every November.
            </p>

            <h3 className="font-bold text-xl text-blue-800 mt-6">
              Registration
            </h3>
            <p className="mt-2 text-gray-600">
              Prospectus & Registration Forms will be made available in the school office. The duly filled Registration Form, along with necessary documents, must be submitted within 3 working days from the date of issue. Registration does not guarantee admission.
            </p>

            <h3 className="font-bold text-xl text-blue-800 mt-6">
              Age Criteria
            </h3>
            <p className="mt-2 text-gray-600">
              - PP-I: Age 3.5 to 4.5 years<br />
              - PP-II: Age 4.5 to 5.5 years
            </p>

            <h3 className="font-bold text-xl text-blue-800 mt-6">
              ISC – Class XI
            </h3>
            <p className="mt-2 text-gray-600">
              Admission for Class XI starts in May. The candidate must have passed the ICSE exam or an equivalent examination.
            </p>

            <h3 className="font-bold text-xl text-blue-800 mt-6">
              Eligibility
            </h3>
            <p className="mt-2 text-gray-600">
              Eligibility depends on the examination results and the student’s performance in the admission tests.
            </p>

            <h3 className="font-bold text-xl text-blue-800 mt-6">
              Other Classes
            </h3>
            <p className="mt-2 text-gray-600">
              Admission into other classes depends on available vacancies. Registration Forms for these classes will be available in March or April.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}