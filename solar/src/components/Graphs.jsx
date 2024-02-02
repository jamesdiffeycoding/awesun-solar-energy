"use client";
import WeeklyGraph from "./WeeklyGraph.jsx";
import MonthlyGraph from "./MonthlyGraph.jsx";
import YearlyGraph from "./YearlyGraph.jsx";
import { useState, useEffect } from "react";

// STYLES
import "../App.css";

export default function Graphs({
	daytimeDataWeek,
	daytimeDataBarWidthWeek,
	peakMWWeek,
	daytimeDataMonth,
	daytimeDataBarWidthMonth,
	peakMWMonth,
	daytimeDataYear,
	daytimeDataBarWidthYear,
	peakMWYear,
}) {
	const [display, setDisplay] = useState("last week");

	const handleDisplay = (event) => {
		setDisplay(event.target.textContent);
	};

	return (
		<>
			{/* FULL COMPONENT SECTION CONTAINER */}
			<section className="w-full">
				{/* GRAPH SELECTOR */}
				<div className="graph-selector">
					<div>Choose a date range: </div>
					<span
						onClick={handleDisplay}
						className={`cursor-pointer hover:text-slate-900 ${
							display === "last week" ? "underline" : "no-underline"
						}`}
					>
						last week
					</span>{" "}
					/{" "}
					<span
						onClick={handleDisplay}
						className={`cursor-pointer hover:text-slate-900 ${
							display === "last month" ? "underline" : "no-underline"
						}`}
					>
						month
					</span>{" "}
					/{" "}
					<span
						onClick={handleDisplay}
						className={`cursor-pointer hover:text-slate-900 ${
							display === "last year" ? "underline" : "no-underline"
						}`}
					>
						year
					</span>
				</div>
				{/* GRAPH DISPLAY */}

				{display === "last week" && (
					<WeeklyGraph
						daytimeDataWeek={daytimeDataWeek}
						daytimeDataBarWidthWeek={daytimeDataBarWidthWeek}
						peakMWWeek={peakMWWeek}
					/>
				)}
				{display === "last month" && (
					<MonthlyGraph
						daytimeDataMonth={daytimeDataMonth}
						daytimeDataBarWidthMonth={daytimeDataBarWidthMonth}
						peakMWMonth={peakMWMonth}
					/>
				)}
				{display === "last year" && (
					<YearlyGraph
						daytimeDataYear={daytimeDataYear}
						daytimeDataBarWidthYear={daytimeDataBarWidthYear}
						peakMWYear={peakMWYear}
					/>
				)}
			</section>
		</>
	);
}
