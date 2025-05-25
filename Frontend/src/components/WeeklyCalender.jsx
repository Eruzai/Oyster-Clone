import React, { useState, useEffect } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

function WeeklyCalendar() {
  const [weekDays, setWeekDays] = useState([]);
  const today = new Date(); // Calculate `today` once, outside `useEffect`

  useEffect(() => {
    // Get the start of the week (Sunday)
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());

    const days = [];
    // Generate the 7 days for the current week
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      days.push(day);
    }

    setWeekDays(days);
  }, []); // Run the effect only once when the component mounts

  return (
    <div className="w-full max-w-md mx-auto p-4 font-general-sans text-textColor">
      <h2 className="flex flex-col justify-between text-lg font-semibold text-center mb-4">
        <div className="flex items-center justify-center">
          <IoIosArrowDropleft />
          {today.toLocaleDateString("default", { month: "long" })}{" "}
          <IoIosArrowDropright />
        </div>
        {today.getFullYear()}
      </h2>

      {/* Days of the Week */}
      <div className="flex justify-between font-semibold">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="flex justify-center w-[20px]">{day}</div>
        ))}
      </div>

      {/* Current Week Days */}
      <div className="flex justify-between">
        {weekDays.map((day, index) => (
          <div
            key={index}
            className={`w-5 h-5 flex items-center justify-center rounded ${
              day.toDateString() === today.toDateString() ? "bg-[#D8E6FD]" : ""
            }`}
          >
            {day.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
}

// Full Date and Time Component
function FullDateTime() {
  const today = new Date();
  const fullDateTime = today.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true, // For 12-hour format, set to false for 24-hour
  });

  return (
    <div className="text-xl font-medium text-gray-700">{fullDateTime}</div>
  );
}

export { WeeklyCalendar, FullDateTime };
