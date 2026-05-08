// AcademicCalendar.jsx

import React, { useMemo, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaBookOpen,
  FaUmbrellaBeach,
  FaUsers,
  FaFlask,
} from "react-icons/fa";

import "./AcademicCalendar.css";

const EVENTS = [
  {
    title: "School Reopens VIII-XII",
    start: "2026-02-26",
    end: "2026-02-26",
    type: "activity",
  },

  {
    title: "Classes PII-VII",
    start: "2026-03-02",
    end: "2026-03-02",
    type: "activity",
  },

  {
    title: "Class PI",
    start: "2026-03-05",
    end: "2026-03-05",
    type: "activity",
  },

  {
    title: "Class XI",
    start: "2026-04-06",
    end: "2026-04-06",
    type: "activity",
  },

  {
    title: "Unit Test I",
    start: "2026-04-09",
    end: "2026-04-23",
    type: "exam",
  },

  {
    title: "Summer Vacation",
    start: "2026-04-24",
    end: "2026-05-31",
    type: "vacation",
  },

  {
    title: "School Reopens X-XII",
    start: "2026-06-08",
    end: "2026-06-08",
    type: "activity",
  },

  {
    title: "School Reopens PI-IX",
    start: "2026-06-10",
    end: "2026-06-10",
    type: "activity",
  },

  {
    title: "Parent Teacher Meeting",
    start: "2026-06-13",
    end: "2026-06-13",
    type: "meeting",
  },

  {
    title: "Unit Test II",
    start: "2026-07-15",
    end: "2026-07-31",
    type: "exam",
  },

  {
    title: "Term Exam I",
    start: "2026-09-25",
    end: "2026-10-10",
    type: "exam",
  },

  {
    title: "Term Vacation",
    start: "2026-10-12",
    end: "2026-10-21",
    type: "vacation",
  },

  {
    title: "School Reopens",
    start: "2026-10-22",
    end: "2026-10-22",
    type: "activity",
  },

  {
    title: "Sports Day",
    start: "2026-10-31",
    end: "2026-11-01",
    type: "activity",
  },

  {
    title: "Unit Test III",
    start: "2026-12-01",
    end: "2026-12-12",
    type: "exam",
  },

  {
    title: "Christmas Vacation",
    start: "2026-12-24",
    end: "2027-01-27",
    type: "vacation",
  },

  {
    title: "Pre Final Exams",
    start: "2027-01-04",
    end: "2027-01-31",
    type: "exam",
  },

  {
    title: "Annual Exams",
    start: "2027-02-08",
    end: "2027-02-20",
    type: "exam",
  },
];

const DAYS = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

function generateMonth(year, month) {
  const firstDay = new Date(year, month, 1);

  const lastDay = new Date(
    year,
    month + 1,
    0
  );

  const days = [];

  const startDay =
    firstDay.getDay();

  for (let i = 0; i < startDay; i++) {
    days.push(null);
  }

  for (
    let d = 1;
    d <= lastDay.getDate();
    d++
  ) {
    days.push(
      new Date(year, month, d)
    );
  }

  while (days.length % 7 !== 0) {
    days.push(null);
  }

  return days;
}

function getWeeks(days) {
  const weeks = [];

  for (
    let i = 0;
    i < days.length;
    i += 7
  ) {
    weeks.push(days.slice(i, i + 7));
  }

  return weeks;
}

function formatDate(date) {
  return date
    .toISOString()
    .split("T")[0];
}

export default function AcademicCalendar() {

  const [currentDate, setCurrentDate] =
    useState(new Date(2026, 4));

  const year =
    currentDate.getFullYear();

  const month =
    currentDate.getMonth();

  const days = useMemo(
    () =>
      generateMonth(year, month),
    [year, month]
  );

  const weeks = getWeeks(days);

  const monthName =
    currentDate.toLocaleString(
      "default",
      {
        month: "long",
      }
    );

  const today = new Date();

  const changeMonth = (
    offset
  ) => {
    setCurrentDate(
      new Date(year, month + offset)
    );
  };

  const getEventIcon = (type) => {

    switch (type) {

      case "exam":
        return <FaBookOpen />;

      case "vacation":
        return <FaUmbrellaBeach />;

      case "meeting":
        return <FaUsers />;

      case "activity":
        return <FaFlask />;

      default:
        return null;
    }
  };

  return (
    <div className="calendar-page">

      {/* HERO */}

      <div className="calendar-hero">

        <div>

          <p className="hero-label">
            BR SCHOOL ERP
          </p>

          <h1>
            Academic Calendar
          </h1>

          <p className="hero-subtitle">
            School Events, Exams,
            Vacations & Activities
          </p>

        </div>

        <div className="hero-stats">

          <div className="stat-card">
            <h3>
              {EVENTS.length}
            </h3>

            <p>Total Events</p>
          </div>

          <div className="stat-card">
            <h3>
              {monthName}
            </h3>

            <p>Current Month</p>
          </div>

        </div>

      </div>

      {/* CALENDAR */}

      <div className="calendar-wrapper">

        {/* TOPBAR */}

        <div className="calendar-topbar">

          <button
            className="nav-btn"
            onClick={() =>
              changeMonth(-1)
            }
          >
            <FaChevronLeft />
          </button>

          <div className="calendar-title">

            <h2>
              {monthName} {year}
            </h2>

            <p>
              Academic Planner
            </p>

          </div>

          <button
            className="nav-btn"
            onClick={() =>
              changeMonth(1)
            }
          >
            <FaChevronRight />
          </button>

        </div>

        {/* LEGEND */}

        <div className="calendar-legend">

          <div className="legend-item">
            <span className="dot exam"></span>
            Exams
          </div>

          <div className="legend-item">
            <span className="dot vacation"></span>
            Vacation
          </div>

          <div className="legend-item">
            <span className="dot meeting"></span>
            Meetings
          </div>

          <div className="legend-item">
            <span className="dot activity"></span>
            Activities
          </div>

        </div>

        {/* DAYS */}

        <div className="calendar-days">

          {DAYS.map((day) => (
            <div
              key={day}
              className="day-name"
            >
              {day}
            </div>
          ))}

        </div>

        {/* GRID */}

        <div className="calendar-grid">

          {weeks.map(
            (week, weekIndex) => {

              const weekEvents =
                EVENTS.filter(
                  (event) => {

                    const weekStart =
                      week.find(
                        (d) => d
                      );

                    const weekEnd =
                      [...week]
                        .reverse()
                        .find(
                          (d) => d
                        );

                    if (
                      !weekStart ||
                      !weekEnd
                    )
                      return false;

                    const start =
                      new Date(
                        event.start
                      );

                    const end =
                      new Date(
                        event.end
                      );

                    return (
                      start <=
                        weekEnd &&
                      end >=
                        weekStart
                    );
                  }
                );

              return (
                <div
                  className="week-wrapper"
                  key={weekIndex}
                >

                  {/* DAYS */}

                  <div className="week-row">

                    {week.map(
                      (date, i) => {

                        const isToday =
                          date &&
                          date.toDateString() ===
                            today.toDateString();

                        return (
                          <div
                            key={i}
                            className={`day-card
                            ${
                              !date
                                ? "empty-day"
                                : ""
                            }
                            ${
                              isToday
                                ? "today"
                                : ""
                            }
                          `}
                          >

                            {date && (
                              <div className="day-header">

                                <span className="date-number">
                                  {date.getDate()}
                                </span>

                                {isToday && (
                                  <span className="today-badge">
                                    Today
                                  </span>
                                )}

                              </div>
                            )}

                          </div>
                        );
                      }
                    )}

                  </div>

                  {/* EVENTS */}

                  <div className="week-events">

                    {weekEvents.map(
                      (
                        event,
                        idx
                      ) => {

                        let startCol = 1;

                        let endCol = 7;

                        week.forEach(
                          (
                            day,
                            i
                          ) => {

                            if (
                              !day
                            )
                              return;

                            const current =
                              formatDate(
                                day
                              );

                            if (
                              current ===
                              event.start
                            ) {
                              startCol =
                                i +
                                1;
                            }

                            if (
                              current ===
                              event.end
                            ) {
                              endCol =
                                i +
                                1;
                            }
                          }
                        );

                        return (
                          <div
                            key={idx}
                            className={`week-event ${event.type}`}
                            style={{
                              gridColumn: `${startCol} / ${endCol + 1}`,
                            }}
                          >

                            <span className="event-icon">
                              {getEventIcon(
                                event.type
                              )}
                            </span>

                            {event.title}

                          </div>
                        );
                      }
                    )}

                  </div>

                </div>
              );
            }
          )}

        </div>

      </div>

    </div>
  );
}