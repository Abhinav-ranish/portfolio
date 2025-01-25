import React from "react";
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

const fancyBackground = "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white";
const cardStyle = "p-4 m-4 rounded-2xl shadow-lg bg-white text-black";

const Availability = () => {
  return (
    <div className={`min-h-screen ${fancyBackground} flex flex-col items-center justify-center p-4`}>
      <h1 className="text-4xl font-bold mb-6 drop-shadow-lg">My Weekly Schedule</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
        {Object.entries(schedule).map(([day, times]) => (
          <div className={`${cardStyle}`} key={day}>
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
    </div>
  );
};

export default Availability;
