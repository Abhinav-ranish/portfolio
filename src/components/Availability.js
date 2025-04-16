import React, { useState } from "react";
import { motion } from "framer-motion";
import "./CSS/availability.css";

const schedule = {
  Monday: [
    { start: "9:00 AM", end: "11:30 AM" },
    { start: "1:30 PM", end: "4:30 PM" },
  ],
  Tuesday: [{ start: "1:30 PM", end: "10:30 PM" }],
  Wednesday: [
    { start: "9:00 AM", end: "12:30 PM" },
  ],
  Thursday: [{ start: "10:30 AM", end: "1:30 PM" }],
  Friday: [{ start: "1:30 PM", end: "7:30 PM" }],
  Saturday: [{ start: "8:30 AM", end: "1:30 PM" }],
  Sunday: "Free",
};

// Generate time slots every 30 minutes
const generateTimeSlots = () => {
  const slots = [];
  let hour = 6;
  let minute = 0;
  const ampm = ["AM", "PM"];

  while (!(hour === 10 && minute === 30 && ampm[0] === "PM")) {
    let formattedTime = `${hour}:${minute === 0 ? "00" : "30"} ${ampm[0]}`;
    slots.push(formattedTime);

    // Increase time by 30 mins
    if (minute === 0) minute = 30;
    else {
      minute = 0;
      hour++;
      if (hour === 12) ampm.reverse(); // Switch AM/PM at 12
      if (hour > 12) hour = 1; // Reset hour after 12
    }
  }
  slots.push("10:30 PM"); // Last slot
  return slots;
};

const timeSlots = generateTimeSlots();

// Function to check if a time slot is busy
const isTimeBusy = (day, time) => {
  if (typeof schedule[day] === "string") {
    return schedule[day] !== "Free"; // If "Free", return false, else true
  }

  return schedule[day].some(({ start, end }) => {
    const startTime = new Date(`2000-01-01 ${start}`);
    const endTime = new Date(`2000-01-01 ${end}`);
    const currentTime = new Date(`2000-01-01 ${time}`);
    return currentTime >= startTime && currentTime < endTime;
  });
};

const Availability = () => {
  const [view, setView] = useState("list");

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center p-20">
      <div className="flex gap-4 mb-4">
        <button
          className="bg-green-500 px-4 py-2 rounded transition transform hover:scale-105"
          onClick={() => setView("list")}
        >
          List View
        </button>
        <button
          className="bg-blue-500 px-4 py-2 rounded transition transform hover:scale-105"
          onClick={() => setView("calendar")}
        >
          Calendar View
        </button>
      </div>

      {view === "list" ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {Object.entries(schedule).map(([day, times], index) => (
            <motion.div
              key={day}
              className="bg-gray-800/80 backdrop-blur-md p-6 rounded-2xl shadow-xl transform hover:scale-105 transition duration-300 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <h2 className="text-2xl font-semibold mb-3 flex items-center">
                {typeof times === "string" ? "🟢" : "🔴"} {day}
              </h2>
              {typeof times === "string" ? (
                <p className="text-lg italic text-gray-300">{times}</p>
              ) : (
                <ul className="text-lg list-none space-y-2">
                  {times.map((time, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="bg-red-500 px-2 py-1 rounded text-sm mr-2">
                        ⏰ {time.start} - {time.end}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="overflow-x-auto w-full max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <table className="w-full border-collapse text-center">
            <thead>
              <tr className="bg-gray-800">
                <th className="border p-2">Time</th>
                {Object.keys(schedule).map((day) => (
                  <th className="border p-2" key={day}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((time, index) => (
                <motion.tr
                  key={time}
                  className="border"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                >
                  <td className="border p-2 bg-gray-800">{time}</td>
                  {Object.keys(schedule).map((day) => {
                    const isBusy = isTimeBusy(day, time);
                    return (
                      <td
                        key={day + time}
                        className={`border p-2 transition transform ${
                          isBusy ? "bg-red-500 hover:scale-105" : "bg-green-500 hover:scale-105"
                        }`}
                      ></td>
                    );
                  })}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      )}
    </div>
  );
};

export default Availability;
