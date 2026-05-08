import React from "react";
import { motion } from "framer-motion";

import {
  FaBookOpen,
  FaFlask,
  FaLaptopCode,
  FaBasketballBall,
  FaGraduationCap,
  FaUsers,
  FaChalkboardTeacher,
} from "react-icons/fa";

import PageHeader from "../../components/PageHeader";

const curriculumSections = [
  {
    title: "Pre Primary (Preparatory I & II)",
    icon: <FaBookOpen />,
    subjects: [
      "English",
      "Number Work",
      "General Knowledge",
      "Drawing Activities",
      "Rhymes",
    ],
    activities: [
      "Memory Game",
      "Word Game",
      "Clay Modelling",
      "Free Hand Drawing",
    ],
  },

  {
    title: "Primary Section (Classes I - V)",
    icon: <FaGraduationCap />,
    subjects: [
      "English",
      "Mathematics",
      "Environmental Science",
      "General Knowledge",
      "Computer Education",
      "Moral Science",
    ],
    activities: [
      "Story Narration",
      "Recitation",
      "Chess",
      "Basketball",
      "English Lab Activities",
    ],
  },

  {
    title: "Upper Primary (Classes VI - VIII)",
    icon: <FaFlask />,
    subjects: [
      "English Literature",
      "Physics",
      "Chemistry",
      "Biology",
      "History & Civics",
      "Geography",
      "Computer Science",
    ],
    activities: [
      "PowerPoint Presentations",
      "Debates",
      "Basketball",
      "Badminton",
      "Shotput",
    ],
  },

  {
    title: "ICSE (Classes IX & X)",
    icon: <FaLaptopCode />,
    subjects: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Computer Applications",
      "Commercial Applications",
      "Fashion Designing",
    ],
    activities: [
      "Role Play",
      "Project Work",
      "Assignments",
      "Cricket",
      "Athletics",
    ],
  },

  {
    title: "ISC (Classes XI & XII)",
    icon: <FaChalkboardTeacher />,
    subjects: [
      "MPC",
      "BiPC",
      "MEC",
      "Business Studies",
      "Accounts",
      "Computer Science",
      "Fashion Designing",
    ],
    activities: [
      "Debates",
      "Research Projects",
      "Leadership Activities",
      "Basketball",
      "Cricket",
    ],
  },
];

export default function Curriculum() {

  return (

    <div className="bg-slate-100 min-h-screen">

      <PageHeader title="Curriculum" />

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-4 py-8">

        <motion.div
          className="rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 to-blue-950 text-white p-8 md:p-12 shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <div className="grid md:grid-cols-2 gap-8 items-center">

            <div>

              <p className="uppercase tracking-[4px] text-sm text-slate-300 mb-3">
                BR School ERP
              </p>

              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                Modern Academic Curriculum
              </h1>

              <p className="text-slate-300 leading-7 text-lg">
                Affiliated to the Council for the Indian School
                Certificate Examinations, New Delhi since 1980.
                Our curriculum combines academic excellence,
                co-curricular development, and practical learning.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <h2 className="text-3xl font-bold">
                  ICSE
                </h2>

                <p className="mt-2 text-slate-300">
                  Classes IX & X
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <h2 className="text-3xl font-bold">
                  ISC
                </h2>

                <p className="mt-2 text-slate-300">
                  Classes XI & XII
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <h2 className="text-3xl font-bold">
                  40+
                </h2>

                <p className="mt-2 text-slate-300">
                  Subjects & Activities
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <h2 className="text-3xl font-bold">
                  30+
                </h2>

                <p className="mt-2 text-slate-300">
                  Experienced Faculty
                </p>
              </div>

            </div>

          </div>

        </motion.div>

      </section>

      {/* CURRICULUM SECTIONS */}

      <section className="max-w-7xl mx-auto px-4 pb-10">

        <div className="grid lg:grid-cols-2 gap-6">

          {curriculumSections.map((section, index) => (

            <motion.div
              key={index}
              className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >

              <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-6 flex items-center gap-4">

                <div className="text-3xl">
                  {section.icon}
                </div>

                <div>
                  <h2 className="text-2xl font-bold">
                    {section.title}
                  </h2>
                </div>

              </div>

              <div className="p-6">

                <div className="mb-6">

                  <h3 className="text-lg font-bold text-slate-800 mb-4">
                    Subjects Offered
                  </h3>

                  <div className="flex flex-wrap gap-3">

                    {section.subjects.map((subject, i) => (

                      <span
                        key={i}
                        className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold"
                      >
                        {subject}
                      </span>

                    ))}

                  </div>

                </div>

                <div>

                  <h3 className="text-lg font-bold text-slate-800 mb-4">
                    Co-Curricular Activities
                  </h3>

                  <div className="grid grid-cols-2 gap-3">

                    {section.activities.map((activity, i) => (

                      <div
                        key={i}
                        className="bg-slate-100 rounded-xl px-4 py-3 text-sm font-medium text-slate-700"
                      >
                        {activity}
                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* EXAMS + ACADEMIC CELL */}

      <section className="max-w-7xl mx-auto px-4 pb-14">

        <div className="grid md:grid-cols-2 gap-6">

          <motion.div
            className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <div className="flex items-center gap-4 mb-5">

              <FaBookOpen className="text-3xl text-blue-700" />

              <h2 className="text-2xl font-bold text-slate-800">
                Tests & Examinations
              </h2>

            </div>

            <p className="text-slate-600 leading-7">
              Three Unit Tests and Three Terminal Examinations
              are conducted every academic year. Promotion is
              based on student performance, continuous assessment,
              and academic progress evaluation.
            </p>

          </motion.div>

          <motion.div
            className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <div className="flex items-center gap-4 mb-5">

              <FaUsers className="text-3xl text-emerald-600" />

              <h2 className="text-2xl font-bold text-slate-800">
                Academic Inspection Cell
              </h2>

            </div>

            <p className="text-slate-600 leading-7">
              Our Academic Inspection Cell continuously monitors
              and evaluates teaching standards, curriculum delivery,
              and student learning outcomes to ensure consistent
              academic excellence.
            </p>

          </motion.div>

        </div>

      </section>

      {/* FACULTY */}

      <section className="max-w-7xl mx-auto px-4 pb-20">

        <motion.div
          className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-10 shadow-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >

          <div className="flex items-center gap-4 mb-6">

            <FaBasketballBall className="text-4xl text-yellow-400" />

            <h2 className="text-3xl font-bold">
              Experienced Faculty & Activities
            </h2>

          </div>

          <p className="text-slate-300 leading-8 text-lg">
            Our institution is supported by highly experienced
            teaching professionals with over 30 years of
            academic expertise. Alongside academics, students
            actively participate in sports, leadership programs,
            presentations, project work, debates, athletics,
            and creative activities for holistic development.
          </p>

        </motion.div>

      </section>

    </div>
  );
}