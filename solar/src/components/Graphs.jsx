"use client"
import WeeklyGraph from "./WeeklyGraph.jsx";
import MonthlyGraph from "./MonthlyGraph.jsx";
import YearlyGraph from "./YearlyGraph.jsx";
import { useState, useEffect } from "react";



// STYLES
import "../App.css"



export default function Graphs({
  dayTimeSolarDataWeek,
  dayTimeSolarDataBarWidthWeek,
  highestSolarDataValueWeek,
  dayTimeSolarDataMonth,
  dayTimeSolarDataBarWidthMonth,
  highestSolarDataValueMonth,
  dayTimeSolarDataYear,
  dayTimeSolarDataBarWidthYear,
  highestSolarDataValueYear,
}) {
  const [display, setDisplay] = useState("last week");

  const handleDisplay = (event) => {
    setDisplay(event.target.textContent);
  };

  useEffect(() => {
    console.log(display);
  }, [display]);

  return (
    <>
      <div>Choose a date range: </div>
      <div>
        <span onClick={handleDisplay} className={`cursor-pointer hover:text-slate-900 ${display==='last week' ? 'underline' : 'no-underline'}`}>last week</span> /{' '}
        <span onClick={handleDisplay} className={`cursor-pointer hover:text-slate-900 ${display==='last month' ? 'underline' : 'no-underline'}`} >last month</span> /{' '}
        <span onClick={handleDisplay} className={`cursor-pointer hover:text-slate-900 ${display==='last year' ? 'underline' : 'no-underline'}`} >last year</span>
      </div>
      {display === "last week" && (
        <WeeklyGraph
          dayTimeSolarDataWeek={dayTimeSolarDataWeek}
          dayTimeSolarDataBarWidthWeek={dayTimeSolarDataBarWidthWeek}
          highestSolarDataValueWeek={highestSolarDataValueWeek}
        />
      )}
      {display === "last month" && (
        <MonthlyGraph
          dayTimeSolarDataMonth={dayTimeSolarDataMonth}
          dayTimeSolarDataBarWidthMonth={dayTimeSolarDataBarWidthMonth}
          highestSolarDataValueMonth={highestSolarDataValueMonth}
        />
      )}
      {display === "last year" && (
        <YearlyGraph
          dayTimeSolarDataYear={dayTimeSolarDataYear}
          dayTimeSolarDataBarWidthYear={dayTimeSolarDataBarWidthYear}
          highestSolarDataValueYear={highestSolarDataValueYear}
        />
      )}
    </>
  );
}
