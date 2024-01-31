"use client"
import { useState } from "react"

export default function YearlyGraph({dayTimeSolarDataYear, dayTimeSolarDataBarWidthYear, highestSolarDataValueYear}){
  return(
        <div>
            {/* YEAR CONTAINER  */}  
        <div className="graph-container">
          <div className="graph">
            {dayTimeSolarDataYear.reverse().map((dataPoint, index) => (dataPoint[1].includes("09:00:00")) ? (
              <>
              <div className="verticalstrip" key={index}>
                <div className="break"></div>
              </div>
              <div className="verticalstrip" key={index} style={{ width: `${dayTimeSolarDataBarWidthYear}%` }}>
              <div className="bar" style={{ height:  `${98*dataPoint[2]/highestSolarDataValueYear}%`  }}></div>
              </div>
              </>
            ) : (
              <div className="verticalstrip" key={index} style={{ width: `${dayTimeSolarDataBarWidthYear}%` }}>
                <div className="bar" style={{ height:  `${98*dataPoint[2]/highestSolarDataValueYear}%`  }}></div>
              </div>
            ))}
          </div>
          <div className="graph-base"></div>

        </div>

        </div>
    )
}