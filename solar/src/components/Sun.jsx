"use client";
import "../App.css"
import { useEffect, useState } from "react";

const Sun = ({ energyProduced, peakMWDay, peakMWWeek }) => {
	const [sunSize, setSunSize] = useState(10); // default size
	const [widthOfScreenWhenLoaded, setwidthOfScreenWhenLoaded] = useState(window.innerWidth);
	useEffect(() => {
		const updateSunSize = () => {
			// Assuming that energyProduced is an array and you want to use the first value as an example
			const currentEnergy =
				energyProduced.length > 0 ? energyProduced[1][2] : 0;
				console.log("energy", energyProduced[1][2])
            console.log(currentEnergy)
			console.log("day",peakMWDay)
			console.log("week", peakMWWeek)
			const widthOfScreenWhenLoaded = window.innerWidth; 
			const newSize = (peakMWDay / peakMWWeek) * 0.7 * widthOfScreenWhenLoaded; // Adjust the multiplier as needed
			setSunSize(newSize);
			setwidthOfScreenWhenLoaded(window.innerWidth);
		};

		// Update sun size whenever energyProduced changes
		updateSunSize();
	}, [energyProduced, widthOfScreenWhenLoaded]);


	return (
		<div class="sun"
			style={{
				transition: 'width 0.5s ease-in-out, height 0.5s ease-in-out',
				width: `${sunSize}px`,
				height: `${sunSize}px`,
				backgroundColor: "yellow",
				borderRadius: "50%",
				justifyContent: "center",
			}}
		/>
	);
};

export default Sun;
