"use client";
import "../App.css"
import { useEffect, useState } from "react";

const Sun = ({ energyProduced, peakMWDay, peakMWWeek }) => {
	const [sunSize, setSunSize] = useState(10); // default size
	// let windowSize =  1000
	// console.log(windowSize)
	// const [widthOfScreenWhenLoaded, setwidthOfScreenWhenLoaded] = useState(windowSize);
	useEffect(() => {
		const updateSunSize = () => {
			// Assuming that energyProduced is an array and you want to use the first value as an example
			const currentEnergy =
				energyProduced.length > 0 ? energyProduced[1][2] : 0;
				console.log("energy", energyProduced[1][2])
            console.log(currentEnergy)
			console.log("day",peakMWDay)
			console.log("week", peakMWWeek)
			// const widthOfScreenWhenLoaded = window.innerWidth; 
			// const newSize = (peakMWDay / peakMWWeek) * 0.7 * widthOfScreenWhenLoaded; // Adjust the multiplier as needed
			const newSize = (peakMWDay / peakMWWeek) * 200 
			setSunSize(newSize);
			console.log(sunSize)
			// setwidthOfScreenWhenLoaded(windowSize);
		};

		// Update sun size whenever energyProduced changes
		updateSunSize();
	}, [energyProduced, sunSize]);


	return (
		<div
		  className={`sun w-12 sm:w-20 md:w-48 lg:w-64 xl:96 2xl:w-128 
					  h-12 sm:h-20 md:h-48 lg:h-64 xl:h-96 2xl:h-128 
					  transition-width duration-500 ease-in-out 
					  transition-height duration-500 ease-in-out 
					  bg-yellow-400 rounded-full flex items-center justify-center animate-shine`}
		  style={{
			width: `${sunSize}px`,
			height: `${sunSize}px`,
		  }}
		/>
	  );
	};

	// return (
		// div 1
		// <div className = {`sun 2xl:w-${1536 * newSunSize} 2xl:h-${1536 * newSunSize} xl:w-${1280 * newSunSize} xl:h-${1280 * newSunSize} lg:w-${1024 * newSunSize} lg:h-${1024 * newSunSize} md:w-${768 * newSunSize} md:h-${768 * newSunSize} sm:w-${500 * newSunSize} sm:h-${500 * newSunSize} transition-all duration-500 ease-in-out bg-yellow-400 rounded-full flex items-center justify-center animate-shine`}
		//div 2
		// <div className = {`sun w-500 h-500 transition-all duration-500 ease-in-out bg-yellow-400 rounded-full flex items-center justify-center animate-shine`} />
		//div 3
		// <div className="sun"
		// 	style={{
		// 		transition: 'width 0.5s ease-in-out, height 0.5s ease-in-out',
		// 		width: `${sunSize}px`,
		// 		height: `${sunSize}px`,
		// 		backgroundColor: "yellow",
		// 		borderRadius: "50%",
		// 		justifyContent: "center",
		// 	}}
		// />
		// div4
		

	// );
// };

export default Sun;
