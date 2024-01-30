"use client"

import React, { useState, useEffect } from 'react';



export default function SolarData({endDateAndTime}) {
    const [appliance, setAppliance] = useState('kettles');
    const [numberOfAppliances, setNumberOfAppliances] = useState('number of kettles');

    useEffect(() => {
        const numberOfAppliancesArray = ["555(perMW)", "555(perMW)", "830(perMW)", "200,000(per MW)", "950(perMW)", "200,000", "1,000", "8700"];
        const applianceArray = ["kettles!", "PS5s", "toasters!", "smartphones!", "washing machines!", "bike lights!", "hob-cookers", "LED TVs"];
        const interval = setInterval(() => {
          const randomIndex = Math.floor(Math.random() * applianceArray.length);
        setAppliance(applianceArray[randomIndex]);
        setNumberOfAppliances(numberOfAppliancesArray[randomIndex]);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="text-right">
            <div className="">On <span>DAY</span> at <span>TIME</span></div>
            <div>
                <div className="">solar power was generating</div>
                <div className="">-POWER- MW</div>
                <hr style={{borderTop: 'dotted 4px'}} /> 
                <div className="">-%-</div>
                <div className="">of the UK's daily electricity demand</div>
                <hr style={{borderTop: 'dotted 4px'}} /> 
                <div className="">That's enough to power</div>
                <div className="">{numberOfAppliances}</div>
                <div className="">{appliance}</div>
                {/* change every 1 seconds - change it to 7 seconds later */}
                <div className="content-div">
            </div>
    </div>            
        </div>
	);
}