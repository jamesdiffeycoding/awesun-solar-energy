"use client";
import "../App.css"
import { useEffect, useState } from "react";

const Sun = ({ energyProduced, peakMWDay, peakMWWeek }) => {
	const [sunSize, setSunSize] = useState(10); // default size

	useEffect(() => {
		const updateSunSize = () => {
			// Assuming that energyProduced is an array and you want to use the first value as an example
			const currentEnergy =
				energyProduced.length > 0 ? energyProduced[1][2] : 0;
				console.log("energy", energyProduced[1][2])
            console.log(currentEnergy)
			console.log("day",peakMWDay)
			console.log("week", peakMWWeek)
			
			const newSize = (peakMWDay / peakMWWeek) * 200 
			setSunSize(newSize);
			console.log(sunSize)
		};

		// Update sun size whenever energyProduced changes
		updateSunSize();
	}, [energyProduced]);


	return (<>
      <div className="sunGrid grid absolute w-screen h-screen">
       {/* placeholder 4 grid items  */}
          <div className="text-transparent"></div>
          <div className="text-transparent"></div>
          <div className="text-transparent"></div>
          <div className="text-transparent"></div>

        {/* THE SUN  */}
          <div className = "flex text-center justify-center items-center w-full">
            <div className="heroContainer pb-square h-full flex justify-center items-center">
              <div className="largestSquare w-full aspect-square flex justify-center items-center">
                <div className= "sunCircle bg-yellow-400 w-full h-full z-30" 
				
				// style = {{width: "50%", height: "50%"}}
				></div>
              </div>
            </div>
          </div>
        {/* placeholder 4 grid items */}
        <div className="text-transparent"></div>
        <div className="text-transparent"></div>
        <div className="text-transparent"></div>
        <div className="text-transparent"></div>
      </div> 		
	</>
	  );
	};

	

export default Sun;
