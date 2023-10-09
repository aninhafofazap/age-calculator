import React, { useState } from "react";
import "./styles.css";
import DownArrow from "../Arrow";
import CalculatorResult from "../CalculatorResult";

function DateOfBirth() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

  const calculateAge = () => {
    const birthDate = new Date(`${year}-${month}-${day}`);
    const currentDate = new Date();

    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      const lastDayOfPreviousMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      ).getDate();
      days += lastDayOfPreviousMonth;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <div className="container">
      <div className="date-birth">
        <div className="input-container">
          <label>Day</label>
          <input
            type="number"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Month</label>
          <input
            type="number"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Year</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
      </div>
      <DownArrow handleCalculateAge={calculateAge} />

      <CalculatorResult
        age={{ year: age.years, month: age.months, day: age.days }}
      />
    </div>
  );
}

export default DateOfBirth;
