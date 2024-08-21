"use client"
import React from "react"


export default function Graph({ dataToDisplay, peakValue, labelFormatter, labelBreakTime, labelScheme, updateBarContext }) {
    const barWidth = `${100 / dataToDisplay.length}%`

    function BreakLine({ value }) {
        return (
            <div className="break flex flex-col-reverse"><div className="pl-2">{value}</div></div>
        )
    }
    return (
        <>
            {/* WEEK CONTAINER */}
            <section className="w-full animate-slide">
                <div className="graph" key="graph">
                    {dataToDisplay.map((dataPoint, index) => (dataPoint[1].includes(labelBreakTime)) ? (
                        <React.Fragment key={`${index}-frag`} >
                            <div className="verticalstrip" key={index}>

                                {/* CONDITIONAL LABELLING AND BREAK POINTS */}
                                {labelScheme == "days" ? (<BreakLine key={`${index}-break`} value={labelFormatter(dataPoint[1])}></BreakLine>) :
                                    (labelScheme == "weeks" ? (<>
                                        {index % 7 === 0 && <BreakLine key={`${index}-break`} value={labelFormatter(dataPoint[1])}></BreakLine>}
                                    </>
                                    ) : (<>
                                        {dataPoint[1].includes("01T") && <div className="break flex flex-col-reverse" key={`${index}-break`} ><div className="pl-2  text-xs sm:text-xs md:text-base lg:text-base xl:text-base 2xl:text-base">{labelFormatter(dataPoint[1])}</div></div>}
                                    </>
                                    ))
                                }


                            </div>
                            <div className="verticalstrip" key={`${index}-strip`} style={{ width: barWidth }} onMouseEnter={function () { updateBarContext(dataPoint) }}>
                                <div className="w-full bg-green-800 rounded-t-lg bg-gradient-to-b from-green-800 to-green-600" style={{ height: `${98 * dataPoint[2] / peakValue}%` }} key={`${index}-bar`} ></div>
                            </div>
                        </React.Fragment>
                    ) : (
                        <div className="verticalstrip" key={`${index}-2`} style={{ width: barWidth }} onMouseEnter={function () { updateBarContext(dataPoint) }}>
                            <div className="w-full bg-green-800 rounded-t-lg bg-gradient-to-b from-green-800 to-green-600" style={{ height: `${98 * dataPoint[2] / peakValue}%` }} key={`${index}-bar2`}></div>
                        </div>
                    ))}
                </div>
                {/* BASE OF GRAPH */}
                <div className="w-full h-4  bg-green-700 bg-gradient-to-b from-green-600 to-green-500" key="base"></div>
            </section>
        </>
    )
}
