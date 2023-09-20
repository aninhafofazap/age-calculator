import React, { useState } from "react";
import "./styles.css";

function DateOfBirth() {
  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDay(e.target.value);
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(e.target.value);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
  };

  return (
    <div className="container">
      <div className="date-birth">
        <label htmlFor="day">Day</label>
        <input type="text" id="day" value={day} onChange={handleDayChange} />

        <label htmlFor="month">Month</label>
        <input
          type="text"
          id="month"
          value={month}
          onChange={handleMonthChange}
        />

        <label htmlFor="year">Year</label>
        <input type="text" id="year" value={year} onChange={handleYearChange} />
      </div>
    </div>
  );
}

export default DateOfBirth;
