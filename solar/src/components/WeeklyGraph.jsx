"use client"
import { useState, useContext} from "react"
import React from "react"
import { formatDateToGetDayOnly } from "@/app/helper"
export default function WeeklyGraph({daytimeDataWeek, daytimeDataBarWidthWeek, peakMWWeek, updateBarContext}){

    return(
        <>
        {/* WEEK CONTAINER */}
        <section className="w-full animate-slide">
            <div className="graph" key="graph">
                {daytimeDataWeek.map((dataPoint, index) => (dataPoint[1].includes("09:00:00")) ? (
                <React.Fragment key={`${index}-frag`} >
                <div className="verticalstrip" key={index}>
                    <div className="break flex flex-col-reverse" key={`${index}-break`} ><div className="pl-2">{formatDateToGetDayOnly(dataPoint[1])}</div></div>
                </div>
                <div className="verticalstrip" key={`${index}-strip`} style={{ width: `${daytimeDataBarWidthWeek}%` }}  onMouseEnter={function () {updateBarContext(dataPoint)}}>
                    <div className="w-full bg-green-800 rounded-t-lg bg-gradient-to-b from-green-800 to-green-600" style={{ height:  `${98*dataPoint[2]/peakMWWeek}%`  }} key={`${index}-bar`} ></div>
                </div>
                </React.Fragment>
                ) : (
                <div className="verticalstrip" key={`${index}-2`} style={{ width: `${daytimeDataBarWidthWeek}%` }} onMouseEnter={function () {updateBarContext(dataPoint)}}>
                    {/* <p className="popup-data" style={{  position: 'absolute',  top: '50%', left: `${100*index/daytimeDataWeek.length}%`, color: 'green', backgroundColor: 'red'}}>1</p> */}
                    <div className="w-full bg-green-800 rounded-t-lg bg-gradient-to-b from-green-800 to-green-600" style={{ height: `${98*dataPoint[2]/peakMWWeek}%` }} key={`${index}-bar2`}></div>
                </div>
                ))}
            </div>
                {/* BASE OF GRAPH */}
                <div className="w-full h-4  bg-green-700 bg-gradient-to-b from-green-600 to-green-500" key="base"></div>
        </section>        
        </>
    )
}
