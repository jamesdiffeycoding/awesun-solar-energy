"use client"
import WeeklyGraph from "./WeeklyGraph.jsx";
import MonthlyGraph from "./MonthlyGraph.jsx";
import YearlyGraph from "./YearlyGraph.jsx";
import { useState, useEffect } from "react";



// STYLES
import "../app.css"



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
        <span onClick={handleDisplay} style={(display === "last week")?({textDecoration: "underline"}): {textDecoration: "none"}}>last week</span> /{' '}
        <span onClick={handleDisplay} style={(display === "last month")?({textDecoration: "underline"}): {textDecoration: "none"}}>last month</span> /{' '}
        <span onClick={handleDisplay} style={(display === "last year")?({textDecoration: "underline"}): {textDecoration: "none"}}>last year</span>
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
