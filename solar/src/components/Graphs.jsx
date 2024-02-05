"use client";
import WeeklyGraph from "./WeeklyGraph.jsx";
import MonthlyGraph from "./MonthlyGraph.jsx";
import YearlyGraph from "./YearlyGraph.jsx";
import { useState, useEffect } from "react";
import graphHoverContext from "./graphHoverBarContext.js";

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
	const [barHovered, setBarHovered] = useState("Hover over a bar to see the data");
	function updateBarContext(newValue) {
		setBarHovered (newValue);
		console.log("barHovered", barHovered)
	}


	return (
		<>
			{/* FULL COMPONENT SECTION CONTAINER */}
			<section className="w-full fixed bottom-0">
				{/* GRAPH SELECTOR */}
				<div className="pl-9 fixed bottom-1/3 z-50">
					<div className="text-black">{barHovered} </div>
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
							display === "month" ? "underline" : "no-underline"
						}`}
					>
						month
					</span>{" "}
					/{" "}
					<span
						onClick={handleDisplay}
						className={`cursor-pointer hover:text-slate-900 ${
							display === "year" ? "underline" : "no-underline"
						}`}
					>
						year
					</span>
				</div>
				{/* GRAPH DISPLAY */}
				<graphHoverContext.Provider value={{ graphHoverContext }}>
				{display === "last week" && (
					<WeeklyGraph
						daytimeDataWeek={daytimeDataWeek}
						daytimeDataBarWidthWeek={daytimeDataBarWidthWeek}
						peakMWWeek={peakMWWeek}
						updateBarContext={updateBarContext}
						barHovered={barHovered}
					/>
				)}
				{display === "month" && (
					<MonthlyGraph
						daytimeDataMonth={daytimeDataMonth}
						daytimeDataBarWidthMonth={daytimeDataBarWidthMonth}
						peakMWMonth={peakMWMonth}
						updateBarContext={updateBarContext}
					/>
				)}
				{display === "year" && (
					<YearlyGraph
						daytimeDataYear={daytimeDataYear}
						daytimeDataBarWidthYear={daytimeDataBarWidthYear}
						peakMWYear={peakMWYear}
						updateBarContext={updateBarContext}
					/>
				)}
				</graphHoverContext.Provider>
			</section>
		</>
	);
}
