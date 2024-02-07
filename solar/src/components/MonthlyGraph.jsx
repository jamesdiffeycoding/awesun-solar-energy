"use client"
import { useState } from "react"
import React from "react"
import { formatDateToGetNumberAndMonthOnly } from "../app/helper.js"

export default function MonthlyGraph({daytimeDataMonth, daytimeDataBarWidthMonth, peakMWMonth, updateBarContext}) {
    const breakPoints = ["01T", "08T", "15T", "22T", "29T"]

    return(
        <>
        {/* MONTH CONTAINER */}
        <section className="fixed bottom-0 w-full">
            <div className="graph" key="graph">
            {daytimeDataMonth.map((dataPoint, index) => (dataPoint[1].includes("09:00:00")) ? (
                <React.Fragment key={`${index}-frag`}>
                    <div className="verticalstrip" key={index}>
                        {index % 7 === 0 && <div className="break flex flex-col-reverse" key={`${index}-break`} ><div className="pl-2">{formatDateToGetNumberAndMonthOnly(dataPoint[1])}</div></div>
}
                    </div>
                    <div className="verticalstrip" key={`${index}-strip`} style={{ width: `${daytimeDataBarWidthMonth}%` }}  onMouseEnter={function () {updateBarContext(dataPoint)}}>
                    <div className="w-full bg-green-800 rounded-t-lg bg-gradient-to-b from-green-800 to-green-600" key={`${index}-bar`} style={{ height:  `${98*dataPoint[2]/peakMWMonth}%`  }}></div>
                    </div>
                </React.Fragment>
) : (
                <div className="verticalstrip" key={`${index}-2`} style={{ width: `${daytimeDataBarWidthMonth}%` }}  onMouseEnter={function () {updateBarContext(dataPoint)}}>
                    <div className="w-full bg-green-800 rounded-t-lg bg-gradient-to-b from-green-800 to-green-600" key={`${index}-bar-2`} style={{ height:  `${98*dataPoint[2]/peakMWMonth}%`  }}></div>
                </div>
))}
            </div>
            {/* BASE OF GRAPH */}
            <div className="w-full h-4 bg-green-700 bg-gradient-to-b from-green-600 to-green-500" key="base"></div>
        </section>
        </>
    )
}