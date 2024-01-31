"use client"
import { useState } from "react"
import React from "react";

export default function YearlyGraph({dayTimeSolarDataYear, dayTimeSolarDataBarWidthYear, highestSolarDataValueYear}){
  return (
    <div>
      {/* YEAR CONTAINER  */}
      <div className="graph-container">
        <div className="graph" key="graph2">
          {dayTimeSolarDataYear.reverse().map((dataPoint, index) => (
            (
              <React.Fragment key={`${index}-frag`}>
                <div className="verticalstrip" key={index}>
                  {dataPoint[1].includes("01T") && <div className="break2" key={`${index}-break`}></div>}
                </div>
                <div className="verticalstrip" key={`${index}-2`} style={{ width: `${dayTimeSolarDataBarWidthYear}%` }}>
                  <div className="bar" key={`${index}-bar-2`} style={{ height: `${98 * dataPoint[2] / highestSolarDataValueYear}%` }}></div>
                </div>
              </React.Fragment>
            ) 
          ))}
        </div>
        <div className="graph-base" key="base"></div>
      </div>
    </div>
  );
  
}