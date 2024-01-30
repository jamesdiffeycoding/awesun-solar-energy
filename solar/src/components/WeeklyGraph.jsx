"use client"
import { useState } from "react"

export default function WeeklyGraph({dayTimeSolarDataWeek, dayTimeSolarDataBarWidthWeek, highestSolarDataValueWeek}){
    
    return(
        <div className="weekly-graph">
        {/* WEEK CONTAINER */}
            <h2>Weekly Data</h2>
            <p>Data from last 7 days from 9-430pm</p>
            <div>Highest production day: 
            {highestSolarDataValueWeek}
            </div>
    
            <div className="graph-container">
            <div className="graph">
                {dayTimeSolarDataWeek.reverse().map((dataPoint, index) => (dataPoint[1].includes("09:00:00")) ? (
                <>
                <div className="verticalstrip" key={index}>
                    <div className="break"></div>
                </div>
                <div className="verticalstrip" key={index} style={{ width: `${dayTimeSolarDataBarWidthWeek}%` }}>
                    <div className="bar" style={{ height:  `${98*dataPoint[2]/highestSolarDataValueWeek}%`  }}></div>
                </div>
                </>
                ) : (
                <div className="verticalstrip" key={index} style={{ width: `${dayTimeSolarDataBarWidthWeek}%` }}>
                    {/* <p className="popup-data" style={{  position: 'absolute',  top: '50%', left: `${100*index/dayTimeSolarDataWeek.length}%`, color: 'green', backgroundColor: 'red'}}>1</p> */}
                    <div className="bar" style={{ height: `${98*dataPoint[2]/highestSolarDataValueWeek}%` }}></div>
                </div>
                ))}
            </div>
                <div className="bottom-banner">We can code this in different ways. For now here's a bottom banner like on the winderful site</div>
            </div>
        </div>        
    )
}