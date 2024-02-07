"use client";
import WeeklyGraph from "./WeeklyGraph.jsx";
import MonthlyGraph from "./MonthlyGraph.jsx";
import YearlyGraph from "./YearlyGraph.jsx";
import { useState, useEffect } from "react";
import { formatDateForSolarData, getTimeHalfHourLater} from "@/app/helper.js";
// STYLES
import "../App.css";


export default function Graphs({
	peakMWDay,
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
	const [graphToDisplay, setGraphToDisplay] = useState("last week");
	const handleDisplay = (event) => {
		setGraphToDisplay(event.target.textContent);
	};

	const [barHoveredInformation, setBarHoveredInformation] = useState("Hover below to see");
	const [barHovered, setBarHovered] = useState("data");	
	
	const [sunSizeState, setSunSizeState] = useState(100);

	function updateBarContext(newValue) {
		let peakMWForComparison = 0;
		if (graphToDisplay == "last week") {
			peakMWForComparison = peakMWWeek;
		} else if (graphToDisplay == "month") {
			peakMWForComparison = peakMWMonth;
		} else {
			peakMWForComparison = peakMWYear;
		}
		// PRODUCTION NUMBER
		let newValueRounded = Math.ceil(newValue[2]);
		setBarHovered(newValueRounded + " MW")
		setSunSizeState (sunSizeState => newValueRounded / peakMWForComparison * 100);

		// DATE AND TIME INFORMATION USING HELPER.JS IMPORTED FUNCTIONS
		let formattedInformation = formatDateForSolarData(newValue[1]);
		let timeHalfHourLater = getTimeHalfHourLater(newValue[1]);
		let informationToDisplay = `${formattedInformation}-${timeHalfHourLater}`;
		setBarHoveredInformation(informationToDisplay)
	}

	return (
		<>	
			{/* SUN GRID */}
				<div className="sunGrid grid absolute w-screen h-screen top-0">
				{/* placeholder 4 grid items  */}
				<div className=""></div>
					<div className=""></div>
					<div className=""></div>
					<div className=""></div>
					{/* THE SUN  */}
					<div className = "flex text-center justify-center items-center w-full">
						<div className="heroContainer pb-square h-full flex justify-center items-center aspect-square">
						<div className="largestSquare w-full h-full aspect-square flex justify-center items-center"
								style={{height: `${sunSizeState}%`, width: `${sunSizeState}%`, transition: 'width 1s ease, height 1s ease'}}>
								<div className= "sunCircle bg-yellow-400 w-full h-full z-30 aspect-square"></div>
						</div>
						</div>
					</div>
					{/* placeholder 4 grid items */}
					<div className=""></div>
					<div className=""></div>
					<div className=""></div>
					<div className=""></div>
				</div>
				<div>
				</div> 		

			{/* FULL COMPONENT SECTION CONTAINER */}
			<section className="w-full fixed bottom-0">
				{/* GRAPH SELECTOR AND HOVERED STATISTICS */}
				<div className="flex w-full justify-between pl-9 pr-9 fixed bottom-1/3 z-50">
					<div className="text-slate-900">
						<div>Choose <span className="hide-when-portrait">date</span> range: </div>
						<span onClick={handleDisplay} className={`cursor-pointer hover:text-white ${ graphToDisplay === "last week" ? "underline" : "no-underline" }`} >
							last week</span>{" "} /{" "}
						<span onClick={handleDisplay} className={`cursor-pointer hover:text-white ${ graphToDisplay === "month" ? "underline" : "no-underline" }`} >
							month</span>{" "} /{" "}
						<span onClick={handleDisplay} className={`cursor-pointer hover:text-white ${ graphToDisplay === "year" ? "underline" : "no-underline" }`} >
							year</span>
					</div>
					<div className="text-right ">{barHoveredInformation} <p className="text-yellow-500">{barHovered}</p> </div>
				</div>
				{/* GRAPH DISPLAY */}
				{graphToDisplay === "last week" && (
					<WeeklyGraph
						daytimeDataWeek={daytimeDataWeek}
						daytimeDataBarWidthWeek={daytimeDataBarWidthWeek}
						peakMWWeek={peakMWWeek}
						updateBarContext={updateBarContext}
						barHovered={barHovered}
					/>
				)}
				{graphToDisplay === "month" && (
					<MonthlyGraph
						daytimeDataMonth={daytimeDataMonth}
						daytimeDataBarWidthMonth={daytimeDataBarWidthMonth}
						peakMWMonth={peakMWMonth}
						updateBarContext={updateBarContext}
					/>
				)}
				{graphToDisplay === "year" && (
					<YearlyGraph
						daytimeDataYear={daytimeDataYear}
						daytimeDataBarWidthYear={daytimeDataBarWidthYear}
						peakMWYear={peakMWYear}
						updateBarContext={updateBarContext}
					/>
				)}
			</section>
		</>
	);
}
