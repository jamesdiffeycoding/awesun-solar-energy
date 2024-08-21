"use client";
import Graph from "./Graph.jsx";
import { useState } from "react";
import { formatDateForDisplay, formatDateToGetDayOnly, formatDateToGetMonthOnly, formatDateToGetNumberAndMonthOnly, getTimeHalfHourLater } from "@/app/timeAndDateHelpers.js";
import "../App.css";


export default function Graphs({
	daytimeDataWeek,
	peakFromWeek,
	daytimeDataMonth,
	peakFromMonth,
	peakFromYear,
	PMDataYear,
}) {
	const [graphToDisplay, setGraphToDisplay] = useState("last week");
	const handleDisplay = (event) => {
		setGraphToDisplay(event.target.textContent);
	};

	const [barHoveredInformation, setBarHoveredInformation] = useState("Hover below to see");
	const [barHovered, setBarHovered] = useState("data");

	const [sunSizeState, setSunSizeState] = useState(60);
	const [cloudPositionState, setCloudPositionState] = useState(0);
	const [cloudOpacityState, setCloudOpacityState] = useState(0);

	function updateBarContext(newValue) {
		let peakFromForComparison = 0;
		if (graphToDisplay == "last week") {
			peakFromForComparison = peakFromWeek;
		} else if (graphToDisplay == "month") {
			peakFromForComparison = peakFromMonth;
		} else {
			peakFromForComparison = peakFromYear;
		}
		// PRODUCTION NUMBER
		let newValueRounded = Math.ceil(newValue[2]);
		setBarHovered(newValueRounded + " MW")
		setSunSizeState(sunSizeState => 20 + newValueRounded / peakFromForComparison * 80);
		setCloudPositionState(cloudPositionState => -20 + newValueRounded / peakFromForComparison * 20);
		setCloudOpacityState(cloudOpacityState => 100 - newValueRounded / peakFromForComparison * 100);
		// DATE AND TIME INFORMATION USING HELPER.JS IMPORTED FUNCTIONS
		let formattedInformation = formatDateForDisplay(newValue[1]);
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
				<div className="flex text-center justify-center items-center w-full">
					<div className="heroContainer pb-square h-full flex justify-center items-center aspect-square">
						<div className="largestSquare w-full h-full aspect-square flex justify-center items-center"
							style={{ height: `${sunSizeState}%`, width: `${sunSizeState}%`, transition: 'width 1s ease, height 1s ease' }}>
							<div className="sunCircle bg-yellow-400 w-full h-full z-30 aspect-square"></div>
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
			{/* CLOUD GRID */}
			<div className="cloudGrid grid absolute w-screen h-screen top-0">
				{/* placeholder 2 grid items  */}
				<div className=""></div>
				<div className=""></div>
				{/*  item 3, CLOUD 1  */}
				<div className="">
					<img src="./clouds-left.png" alt="cloud" style={{ width: '200%', height: 'auto', position: 'relative', opacity: `${cloudOpacityState}%`, right: `${cloudPositionState}%`, transition: 'right 1s ease, opacity 1s ease' }} />
				</div>
				{/* <div className = "flex text-center justify-center items-center w-full">
							<div className="heroContainer pb-square h-full flex justify-center items-center aspect-square">
							<div className="largestSquare w-full h-full aspect-square flex justify-center items-center"
									style={{height: `${sunSizeState}%`, width: `${sunSizeState}%`, transition: 'width 1s ease, height 1s ease'}}>
									<div className= "sunCircle bg-slate-800 w-full h-full z-30 aspect-square"></div>
							</div>
							</div>
						</div> */}
				{/*  item 4, CLOUD 2  */}
				<div className="">
					<img src="./clouds-right.png" alt="cloud" style={{ position: 'relative', opacity: `${cloudOpacityState}%`, left: `${cloudPositionState}%`, transition: 'left 1s ease, opacity 1s ease' }} />
				</div>

			</div>
			<div>
			</div>

			{/* FULL COMPONENT SECTION CONTAINER */}
			<section className="w-full fixed bottom-0">
				{/* GRAPH SELECTOR AND HOVERED STATISTICS */}
				<div className="flex w-full justify-between pl-9 pr-9 fixed bottom-1/3 z-50">
					<div className="text-slate-600 text-xs sm:text-xs md:text-base lg:text-base xl:text-base 2xl:text-base">
						<div><span className="hide-when-portrait text-slate-600 ">Choose date range: </span></div>
						<span onClick={handleDisplay} className={`cursor-pointer hover:text-white ${graphToDisplay === "last week" ? "text-yellow-500 underline bg-slate-600 rounded-lg p-1" : "text-slate-600"}`} >
							last week</span>{" "} /{" "}
						<span onClick={handleDisplay} className={`cursor-pointer hover:text-white ${graphToDisplay === "month" ? "text-yellow-500 underline  bg-slate-600 rounded-lg p-1" : "text-slate-600"}`} >
							month</span>{" "} /{" "}
						<span onClick={handleDisplay} className={`cursor-pointer hover:text-white ${graphToDisplay === "year" ? "text-yellow-500 underline  bg-slate-600 rounded-lg p-1" : "text-slate-600"}`} >
							year</span>
					</div>
					<div className="text-right "><span className="text-slate-600 text-xs sm:text-xs md:text-base lg:text-base xl:text-base 2xl:text-base">{barHoveredInformation} </span><p className="text-yellow-700 text-xs sm:text-xs md:text-base lg:text-base xl:text-base 2xl:text-base">{barHovered}</p> </div>
				</div>
				{/* GRAPH DISPLAY */}
				{graphToDisplay === "last week" && (
					<Graph
						dataToDisplay={daytimeDataWeek}
						peakValue={peakFromWeek}
						labelFormatter={formatDateToGetDayOnly}
						labelBreakTime="09:00:00"
						labelScheme="days"
						updateBarContext={updateBarContext}
						barHovered={barHovered}>
					</Graph>
				)}
				{graphToDisplay === "month" && (
					<Graph
						dataToDisplay={daytimeDataMonth}
						peakValue={peakFromMonth}
						labelFormatter={formatDateToGetNumberAndMonthOnly}
						labelBreakTime="09:00:00"
						labelScheme={"weeks"}
						updateBarContext={updateBarContext}
						barHovered={barHovered}>
					</Graph>
				)}
				{graphToDisplay === "year" && (
					<Graph
						dataToDisplay={PMDataYear}
						peakValue={peakFromYear}
						labelFormatter={formatDateToGetMonthOnly}
						labelBreakTime="14:00:00"
						labelScheme={"months"}
						updateBarContext={updateBarContext}
						barHovered={barHovered}>
					</Graph>
				)}
			</section>
		</>
	);
}
