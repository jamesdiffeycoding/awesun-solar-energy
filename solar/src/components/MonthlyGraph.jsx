"use client"
import { useState } from "react"
import React from "react"

export default function MonthlyGraph({dayTimeSolarDataMonth, dayTimeSolarDataBarWidthMonth, highestSolarDataValueMonth}) {
    
    return(
        <div className="monthly-graph">
             {/* MONTH CONTAINER */}
            <div className="graph-container">
                <div className="graph">
                    
                    {dayTimeSolarDataMonth.reverse().map((dataPoint, index) => (dataPoint[1].includes("09:00:00")) ? (
                    <React.Fragment key={`${index}-frag`}>
                    <div className="verticalstrip" key={index}>
                    <div className="break" key={`${index}-break`}></div>
                        </div>
                    <div className="verticalstrip" key={`${index}-strip`} style={{ width: `${dayTimeSolarDataBarWidthMonth}%` }}>
                        <div className="bar" key={`${index}-bar`} style={{ height:  `${98*dataPoint[2]/highestSolarDataValueMonth}%`  }}></div>
                    </div>
                    </React.Fragment>
                    ) : (
                    <div className="verticalstrip" key={`${index}-2`} style={{ width: `${dayTimeSolarDataBarWidthMonth}%` }}>
                        <div className="bar" key={`${index}-bar-2`} style={{ height:  `${98*dataPoint[2]/highestSolarDataValueMonth}%`  }}></div>
                    </div>
                    ))}
                </div>
                <div className="graph-base" key="base"></div>

            </div>
        </div>
    )
}