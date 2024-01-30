"use client";
import { useEffect, useState } from "react";

const Sun = ({ energyProduced, highestSolarDataValueDay, highestSolarDataValueWeek }) => {
	const [sunSize, setSunSize] = useState(200); // default size

	useEffect(() => {
		const updateSunSize = () => {
			// Assuming that energyProduced is an array and you want to use the first value as an example
			const currentEnergy =
				energyProduced.length > 0 ? energyProduced[1][3] : 0;
            console.log(currentEnergy)
			// Adjust the sun size based on the amount of energy produced
			const newSize = (highestSolarDataValueDay / highestSolarDataValueWeek) * 700; // Adjust the multiplier as needed
			setSunSize(newSize);
		};

		// Update sun size whenever energyProduced changes
		updateSunSize();
	}, [energyProduced]);

	return (
		<div
			style={{
				width: `${sunSize}px`,
				height: `${sunSize}px`,
				backgroundColor: "yellow",
				borderRadius: "50%",
				justifyContent: "center",
				zIndex: 999,
			}}
		/>
	);
};

export default Sun;
