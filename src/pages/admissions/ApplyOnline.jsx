import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaSchool,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

import PageHeader from "../../components/PageHeader";

const classOptions = [
  "Nursery",
  "LKG",
  "UKG",
  "Class I",
  "Class II",
  "Class III",
  "Class IV",
  "Class V",
  "Class VI",
  "Class VII",
  "Class VIII",
  "Class IX",
  "Class X",
  "Class XI",
  "Class XII",
];

const countries = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Singapore",
  "UAE",
];

const states = [
  "Andhra Pradesh",
  "Telangana",
  "Tamil Nadu",
  "Karnataka",
  "Kerala",
  "Maharashtra",
  "Delhi",
  "West Bengal",
  "Gujarat",
  "Rajasthan",
  "Uttar Pradesh",
];

const cities = [
  "Hyderabad",
  "Bengaluru",
  "Chennai",
  "Mumbai",
  "Delhi",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Visakhapatnam",
  "Vijayawada",
];

const hearOptions = [
  "Google Search",
  "Social Media",
  "Friends / Relatives",
  "School Website",
  "Advertisement",
  "YouTube",
  "Newspaper",
  "Existing Student",
  "Other",
];

export default function ApplyOnline() {

  const [formData, setFormData] = useState({
    school: "",
    branch: "",
    className: "",
    wing: "",
    studentName: "",
    parentName: "",
    parentEmail: "",
    parentContact: "",
    country: "India",
    state: "",
    city: "",
    hearAbout: "",
  });

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(formData);

    alert("Application Submitted Successfully");
  };

  return (

    <div className="bg-slate-100 min-h-screen pb-20">

      <PageHeader title="Admission Form - 2026/27" />

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-4 mt-8">

        <motion.div
          className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 rounded-[32px] p-8 md:p-12 shadow-2xl overflow-hidden relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div>

              <p className="uppercase tracking-[4px] text-slate-300 text-sm mb-3">
                BR SCHOOL ERP
              </p>

              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5">
                Begin Your Academic Journey
              </h1>

              <p className="text-slate-300 text-lg leading-8">
                Admissions are now open for the academic year
                2026–27. Submit your application online and
                join a future-focused learning environment.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 text-white">

                <h2 className="text-4xl font-black">
                  15+
                </h2>

                <p className="mt-2 text-slate-300">
                  Classes
                </p>

              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 text-white">

                <h2 className="text-4xl font-black">
                  ICSE
                </h2>

                <p className="mt-2 text-slate-300">
                  Curriculum
                </p>

              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 text-white">

                <h2 className="text-4xl font-black">
                  30+
                </h2>

                <p className="mt-2 text-slate-300">
                  Expert Faculty
                </p>

              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 text-white">

                <h2 className="text-4xl font-black">
                  100%
                </h2>

                <p className="mt-2 text-slate-300">
                  Student Support
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </section>

      {/* FORM */}

      <section className="max-w-5xl mx-auto px-4 mt-10">

        <motion.div
          className="bg-white rounded-[32px] shadow-2xl border border-slate-200 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          {/* TOP */}

          <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-8 text-white">

            <div className="flex items-center gap-4">

              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-3xl">

                <FaUserGraduate />

              </div>

              <div>

                <h2 className="text-3xl font-bold">
                  Online Admission Application
                </h2>

                <p className="text-blue-100 mt-2">
                  Complete the form below carefully.
                </p>

              </div>

            </div>

          </div>

          {/* FORM BODY */}

          <form
            onSubmit={handleSubmit}
            className="p-8 md:p-10 space-y-6"
          >

            {/* SCHOOL */}

            <div className="grid md:grid-cols-2 gap-5">

              <div className="relative">

                <FaSchool className="absolute top-5 left-4 text-slate-400" />

                <input
                  type="text"
                  name="school"
                  placeholder="School"
                  value={formData.school}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-blue-600"
                />

              </div>

              <input
                type="text"
                name="branch"
                placeholder="Sub-Branch"
                value={formData.branch}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-2xl py-4 px-4 outline-none focus:border-blue-600"
              />

            </div>

            {/* CLASS */}

            <div className="grid md:grid-cols-2 gap-5">

              <select
                name="className"
                value={formData.className}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-2xl py-4 px-4 bg-white outline-none focus:border-blue-600"
                required
              >

                <option value="">
                  Select Class
                </option>

                {classOptions.map((item, index) => (

                  <option
                    key={index}
                    value={item}
                  >
                    {item}
                  </option>

                ))}

              </select>

              <input
                type="text"
                name="wing"
                placeholder="Wing"
                value={formData.wing}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-2xl py-4 px-4 outline-none focus:border-blue-600"
              />

            </div>

            {/* STUDENT */}

            <input
              type="text"
              name="studentName"
              placeholder="Student Name"
              value={formData.studentName}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-2xl py-4 px-4 outline-none focus:border-blue-600"
              required
            />

            {/* PARENT */}

            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="text"
                name="parentName"
                placeholder="Parent Name"
                value={formData.parentName}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-2xl py-4 px-4 outline-none focus:border-blue-600"
                required
              />

              <div className="relative">

                <FaPhoneAlt className="absolute top-5 left-4 text-slate-400" />

                <input
                  type="tel"
                  name="parentContact"
                  placeholder="Parent Contact"
                  value={formData.parentContact}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-blue-600"
                  required
                />

              </div>

            </div>

            <input
              type="email"
              name="parentEmail"
              placeholder="Parent Email"
              value={formData.parentEmail}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-2xl py-4 px-4 outline-none focus:border-blue-600"
              required
            />

            {/* LOCATION */}

            <div className="grid md:grid-cols-3 gap-5">

              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-2xl py-4 px-4 bg-white outline-none focus:border-blue-600"
              >

                {countries.map((item, index) => (

                  <option
                    key={index}
                    value={item}
                  >
                    {item}
                  </option>

                ))}

              </select>

              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-2xl py-4 px-4 bg-white outline-none focus:border-blue-600"
                required
              >

                <option value="">
                  Select State
                </option>

                {states.map((item, index) => (

                  <option
                    key={index}
                    value={item}
                  >
                    {item}
                  </option>

                ))}

              </select>

              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-2xl py-4 px-4 bg-white outline-none focus:border-blue-600"
                required
              >

                <option value="">
                  Select City
                </option>

                {cities.map((item, index) => (

                  <option
                    key={index}
                    value={item}
                  >
                    {item}
                  </option>

                ))}

              </select>

            </div>

            {/* SOURCE */}

            <div className="relative">

              <FaMapMarkerAlt className="absolute top-5 left-4 text-slate-400" />

              <select
                name="hearAbout"
                value={formData.hearAbout}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-2xl py-4 pl-12 pr-4 bg-white outline-none focus:border-blue-600"
                required
              >

                <option value="">
                  Where did you hear about us?
                </option>

                {hearOptions.map((item, index) => (

                  <option
                    key={index}
                    value={item}
                  >
                    {item}
                  </option>

                ))}

              </select>

            </div>

            {/* TERMS */}

            <div className="flex items-start gap-3 pt-2">

              <input
                type="checkbox"
                required
                className="mt-1"
              />

              <p className="text-slate-600 text-sm leading-6">

                I agree to the Terms and Conditions and
                Privacy Policy of BR School ERP.

              </p>

            </div>

            {/* BUTTON */}

            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-4 rounded-2xl text-lg font-bold shadow-lg"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >

              Submit Application

            </motion.button>

          </form>

        </motion.div>

      </section>

    </div>
  );
}