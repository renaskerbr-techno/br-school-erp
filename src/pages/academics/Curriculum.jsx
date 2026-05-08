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

    coCurricular: [
      "Memory Game",
      "Word Game",
      "Recitation",
      "Declamation",
    ],

    extraCurricular: [
      "Clay Modelling",
      "Pasting Pictures",
      "Free Hand Drawing",
      "Colour Day",
      "Sports Competitions",
    ],
  },

  {
    title: "Primary Section (Classes I & II)",
    icon: <FaGraduationCap />,

    subjects: [
      "English",
      "2nd Language",
      "Mathematics",
      "Environmental Science",
      "General Knowledge",
      "Moral Science",
      "Computer Education",
      "SUPW & Drawing",
    ],

    coCurricular: [
      "Declamation",
      "Story Narration",
      "Memory Test",
      "Puzzles",
      "English Lab Activities",
    ],

    extraCurricular: [
      "Mass Drill",
      "Chess",
      "Sports Competitions",
    ],
  },

  {
    title: "Primary Section (Classes III - V)",
    icon: <FaBookOpen />,

    subjects: [
      "English Language",
      "English Literature",
      "Hindi / Telugu",
      "Mathematics",
      "Social Studies",
      "General Science",
      "Computer Science",
      "Moral Science",
    ],

    coCurricular: [
      "PowerPoint Presentations",
      "Story Narration",
      "Recitation",
      "Memory Test",
      "English Lab Activities",
    ],

    extraCurricular: [
      "Basketball",
      "Chess",
      "Running Race",
      "Long Jump",
      "Sports Competitions",
    ],
  },

  {
    title: "Upper Primary (Classes VI - VIII)",
    icon: <FaFlask />,

    subjects: [
      "English Language",
      "English Literature",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "History & Civics",
      "Geography",
      "Computer Science",
      "Moral Science",
    ],

    electives: [
      "Commercial Applications",
      "Computer Applications",
      "Fashion Designing",
    ],

    coCurricular: [
      "PowerPoint Presentations",
      "Declamation",
      "Story Narration",
      "Recitation",
      "Puzzles",
      "English Lab Activities",
    ],

    extraCurricular: [
      "Basketball",
      "Badminton",
      "Chess",
      "Running Race",
      "Shotput",
    ],
  },

  {
    title: "ICSE (Classes IX & X)",
    icon: <FaLaptopCode />,

    subjects: [
      "English Language",
      "English Literature",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "History & Civics",
      "Geography",
      "Computer Science",
    ],

    electives: [
      "Computer Applications",
      "Commercial Applications",
      "Fashion Designing",
    ],

    coCurricular: [
      "Debate",
      "Declamation",
      "Role Play",
      "Mathematics Assignments",
      "Project Work",
      "English Lab Activities",
    ],

    extraCurricular: [
      "Basketball",
      "Badminton",
      "Chess",
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

    electives: [
      "Computer Applications",
      "Business Studies",
      "Accounts",
      "Fashion Designing",
    ],

    coCurricular: [
      "Debate",
      "Declamation",
      "Role Play",
      "Assignments",
      "Project Work",
    ],

    extraCurricular: [
      "Basketball",
      "Badminton",
      "Chess",
      "Cricket",
      "Athletics",
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
                BR SCHOOL ERP
              </p>

              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                Academic Curriculum
              </h1>

              <p className="text-slate-300 leading-7 text-lg">
                Affiliated to the Council for the Indian School
                Certificate Examinations, New Delhi since 1980.
                Our curriculum balances academic excellence,
                practical learning, leadership development,
                and co-curricular growth.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">

                <h2 className="text-3xl font-bold">
                  ICSE
                </h2>

                <p className="mt-2 text-slate-300">
                  Classes I & X
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
                  Subjects Offered
                </p>

              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">

                <h2 className="text-3xl font-bold">
                  30+
                </h2>

                <p className="mt-2 text-slate-300">
                  Expert Faculty
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

              {/* HEADER */}

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

              {/* BODY */}

              <div className="p-6 space-y-6">

                {/* SUBJECTS */}

                <div>

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

                {/* ELECTIVES */}

                {section.electives && (

                  <div>

                    <h3 className="text-lg font-bold text-slate-800 mb-4">
                      Elective Subjects
                    </h3>

                    <div className="flex flex-wrap gap-3">

                      {section.electives.map((item, i) => (

                        <span
                          key={i}
                          className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold"
                        >
                          {item}
                        </span>

                      ))}

                    </div>

                  </div>

                )}

                {/* CO CURRICULAR */}

                <div>

                  <h3 className="text-lg font-bold text-slate-800 mb-4">
                    Co-Curricular Activities
                  </h3>

                  <div className="grid md:grid-cols-2 gap-3">

                    {section.coCurricular.map((item, i) => (

                      <div
                        key={i}
                        className="bg-slate-100 rounded-xl px-4 py-3 text-sm font-medium text-slate-700"
                      >
                        {item}
                      </div>

                    ))}

                  </div>

                </div>

                {/* EXTRA CURRICULAR */}

                <div>

                  <h3 className="text-lg font-bold text-slate-800 mb-4">
                    Extra-Curricular Activities
                  </h3>

                  <div className="grid md:grid-cols-2 gap-3">

                    {section.extraCurricular.map((item, i) => (

                      <div
                        key={i}
                        className="bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3 text-sm font-medium text-emerald-700"
                      >
                        {item}
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

      <section className="max-w-7xl mx-auto px-4 pb-10">

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
              Three Unit Tests and Three Terminal
              Examinations are conducted every academic
              year. Promotion is based on student
              performance and continuous evaluation.
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
              The Academic Inspection Cell continuously
              monitors and evaluates academic quality,
              teaching methodology, and curriculum delivery
              standards across all sections.
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
              Faculty & Student Development
            </h2>

          </div>

          <p className="text-slate-300 leading-8 text-lg">
            The school is equipped with highly experienced
            faculty members who guide students in academics,
            sports, leadership, communication, and overall
            personality development. Students actively
            participate in athletics, debates, presentations,
            sports competitions, and project-based learning.
          </p>

        </motion.div>

      </section>

    </div>
  );
}