import React, { useState } from "react";
import "./CSS/availability.css";

const schedule = {
  Monday: [
    { start: "9:00 AM", end: "11:30 AM" },
    { start: "1:30 PM", end: "4:30 PM" }
  ],
  Tuesday: [
    { start: "10:30 AM", end: "1:30 PM" }
  ],
  Wednesday: [
    { start: "9:00 AM", end: "11:30 AM" },
    { start: "4:30 PM", end: "7:15 PM" }
  ],
  Thursday: [
    { start: "10:30 AM", end: "1:30 PM" }
  ],
  Friday: "Free", 
  Saturday: [
    { start: "8:30 AM", end: "1:30 PM" }
  ],
  Sunday: "Free"
};

const invertSchedule = (schedule) => {
  const allTimes = [
    "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM",
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "10:30 PM"
  ];
  
  let freeSchedule = {};
  Object.entries(schedule).forEach(([day, busyTimes]) => {
    if (typeof busyTimes === "string") {
      freeSchedule[day] = busyTimes;
      return;
    }
    let freeTimes = [];
    let lastEnd = "6:00 AM";
    
    busyTimes.forEach(({ start, end }) => {
      if (lastEnd !== start) {
        freeTimes.push({ start: lastEnd, end: start });
      }
      lastEnd = end;
    });
    if (lastEnd !== "10:30 PM") {
      freeTimes.push({ start: lastEnd, end: "10:30 PM" });
    }
    freeSchedule[day] = freeTimes;
  });
  return freeSchedule;
};

const freeSchedule = invertSchedule(schedule);

const Availability = () => {
  const [view, setView] = useState("list");

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-6">My Weekly Availability</h1>
      <div className="flex gap-4 mb-4">
        <button className="bg-green-500 px-4 py-2 rounded" onClick={() => setView("list")}>
          List View
        </button>
        <button className="bg-blue-500 px-4 py-2 rounded" onClick={() => setView("calendar")}>
          Calendar View
        </button>
      </div>
      {view === "list" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
          {Object.entries(freeSchedule).map(([day, times]) => (
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg" key={day}>
              <h2 className="text-2xl font-semibold mb-2">{day}</h2>
              {typeof times === "string" ? (
                <p className="text-xl">{times}</p>
              ) : (
                <ul className="text-xl list-disc list-inside">
                  {times.map((time, index) => (
                    <li key={index}>{`${time.start} - ${time.end}`}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto w-full max-w-5xl">
          <table className="w-full border-collapse text-center">
            <thead>
              <tr className="bg-gray-800">
                <th className="border p-2">Time</th>
                {Object.keys(freeSchedule).map((day) => (
                  <th className="border p-2" key={day}>{day.charAt(0)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM",
                "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "10:30 PM"
              ].map((time) => (
                <tr key={time} className="border">
                  <td className="border p-2 bg-gray-800">{time}</td>
                  {Object.entries(freeSchedule).map(([day, times]) => {
                    const isFree = typeof times === "string" ? times === "Free" :
                      times.some(({ start, end }) => time >= start && time < end);
                    return (
                      <td key={day + time} className={`border p-2 ${isFree ? "bg-green-500" : "bg-red-500"}`}></td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Availability;