"use client"
import { useState } from "react"

export default function MonthlyGraph({dayTimeSolarDataMonth, dayTimeSolarDataBarWidthMonth, highestSolarDataValueMonth}) {
    
    return(
        <div className="monthly-graph">
            <h2>Monthly Data</h2>
            <p>Data from last 30 days from 9-430pm</p>
            <div>Highest production day: 
                {highestSolarDataValueMonth}
            </div>
             {/* MONTH CONTAINER */}
            <div className="graph-container">
                <div className="graph">
                    
                    {dayTimeSolarDataMonth.reverse().map((dataPoint, index) => (dataPoint[1].includes("09:00:00")) ? (
                    <>
                    <div className="verticalstrip" key={index}>
                        <div className="break"></div>
                        </div>
                    <div className="verticalstrip" key={index} style={{ width: `${dayTimeSolarDataBarWidthMonth}%` }}>
                        <div className="bar" style={{ height:  `${98*dataPoint[2]/highestSolarDataValueMonth}%`  }}></div>
                    </div>
                    </>
                    ) : (
                    <div className="verticalstrip" key={index} style={{ width: `${dayTimeSolarDataBarWidthMonth}%` }}>
                        <div className="bar" style={{ height:  `${98*dataPoint[2]/highestSolarDataValueMonth}%`  }}></div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}