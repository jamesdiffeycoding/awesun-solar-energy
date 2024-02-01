"use client"
import { useState } from "react"
import React from "react"

export default function WeeklyGraph({dayTimeSolarDataWeek, dayTimeSolarDataBarWidthWeek, highestSolarDataValueWeek}){
    
    return(
        <div className="weekly-graph">
        {/* WEEK CONTAINER */}
    
            <div className="graph-container">
            <div className="graph" key="graph">
                {dayTimeSolarDataWeek.reverse().map((dataPoint, index) => (dataPoint[1].includes("09:00:00")) ? (
                <React.Fragment key={`${index}-frag`} >
                <div className="verticalstrip" key={index}>
                    <div className="break" key={`${index}-break`} ></div>
                </div>
                <div className="verticalstrip" key={`${index}-strip`} style={{ width: `${dayTimeSolarDataBarWidthWeek}%` }}>
                    <div className="bar" style={{ height:  `${98*dataPoint[2]/highestSolarDataValueWeek}%`  }} key={`${index}-bar`} ></div>
                </div>
                </React.Fragment>
                ) : (
                <div className="verticalstrip" key={`${index}-2`} style={{ width: `${dayTimeSolarDataBarWidthWeek}%` }}>
                    {/* <p className="popup-data" style={{  position: 'absolute',  top: '50%', left: `${100*index/dayTimeSolarDataWeek.length}%`, color: 'green', backgroundColor: 'red'}}>1</p> */}
                    <div className="bar" style={{ height: `${98*dataPoint[2]/highestSolarDataValueWeek}%` }} key={`${index}-bar2`}></div>
                </div>
                ))}
            </div>
                <div className="graph-base" key="base" ></div>
            </div>
        </div>        
    )
}
