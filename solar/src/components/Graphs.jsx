"use client"
import WeeklyGraph from "./WeeklyGraph.jsx";
import MonthlyGraph from "./MonthlyGraph.jsx";
import YearlyGraph from "./YearlyGraph.jsx";
import { useState } from "react";

// HELPER FUNCTIONS
// import {getEndDate, getEndTime, getEndDateAndTime, getStartingDate} from "@/app/getDates";

// STYLES
import "../app.css"


// DATE AND TIME VARIABLES
// let endTime = getEndTime()
// let startingTime = endTime
// let endDateAndTime = getEndDateAndTime()
// let startingDateWeek = getStartingDate(7)
// let startingDateMonth = getStartingDate(31)
// let startingDateYear = getStartingDate(365)

// SOLAR FETCH
// async function getSolar(startingDate, startingTime, EndDate, EndTime) {
//   // const res = await fetch(`https://api.solar.sheffield.ac.uk/pvlive/api/v4/pes/12`)
//   // const res = await fetch (`https://api.solar.sheffield.ac.uk/pvlive/api/v4/pes/10?start=2019-01-01T12:00:00&end=2019-02-02T12:40:59`)
//   const res = await fetch (`https://api.solar.sheffield.ac.uk/pvlive/api/v4/pes/0?start=${startingDate}T${startingTime}&end=${EndDate}T${EndTime}`)
//   return res.json()
// }

export default function Graphs({dayTimeSolarDataWeek, dayTimeSolarDataBarWidthWeek, highestSolarDataValueWeek, dayTimeSolarDataMonth, dayTimeSolarDataBarWidthMonth, highestSolarDataValueMonth, dayTimeSolarDataYear, dayTimeSolarDataBarWidthYear, highestSolarDataValueYear}) {

  const[display, setDisplay] = useState("this works")
  console.log("state",display)
  
  
    // Helper
    // const pattern = /^(\d{4}-\d{2}-\d{2}T(?:0[9]|1[0-6]):[0-5]\d:00Z)$/;
    // // Weekly get solar data
    // const dataWeek = getSolar(startingDateWeek, startingTime, endDateAndTime, endTime)
    // const solarDataWeek = await Promise.all([dataWeek])
    // const solarWeek = (solarDataWeek[0].data)
    // const dayTimeSolarDataWeek = solarWeek.filter(solardata=> pattern.test(solardata[1])) 
    // const dayTimeSolarDataBarWidthWeek = 99/(dayTimeSolarDataWeek.length) //ensures that the bars fill 99% of the width of the graph
    // const highestSolarDataValueWeek= Math.max(...dayTimeSolarDataWeek.map(solardata=>solardata[2]))

    
    // // Monthly get solar data
    // const dataMonth = getSolar(startingDateMonth , startingTime, endDateAndTime, endTime)
    // const solarDataMonth = await Promise.all([dataMonth])
    // const solarMonth = (solarDataMonth[0].data)
    // const dayTimeSolarDataMonth = solarMonth.filter(solardata=> pattern.test(solardata[1])) 
    // const dayTimeSolarDataBarWidthMonth = 99/(dayTimeSolarDataMonth.length) //ensures that the bars fill 99% of the width of the graph
    // const highestSolarDataValueMonth= Math.max(...dayTimeSolarDataMonth.map(solardata=>solardata[2]))


    // // Annual get solar data
    // const dataYear = getSolar(startingDateYear , startingTime, endDateAndTime, endTime)
    // const solarDataYear = await Promise.all([dataYear])
    // const solarYear = (solarDataYear[0].data)
    // const dayTimeSolarDataYear = solarYear.filter(solardata=> pattern.test(solardata[1])) 
    // const dayTimeSolarDataBarWidthYear = 99/(dayTimeSolarDataYear.length) //ensures that the bars fill 99% of the width of the graph
    // const highestSolarDataValueYear= Math.max(...dayTimeSolarDataYear.map(solardata=>solardata[2]))




    return (
      <>
      <div>Choose a date range: </div>
      <div>last week / last month / last year </div>
      <WeeklyGraph dayTimeSolarDataWeek={dayTimeSolarDataWeek} dayTimeSolarDataBarWidthWeek={dayTimeSolarDataBarWidthWeek} highestSolarDataValueWeek={highestSolarDataValueWeek} />
      {/* WEEK CONTAINER
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
                <p class="popup-data" style={{  position: 'absolute',  top: '50%', left: `${100*index/dayTimeSolarDataWeek.length}%`, color: 'green', backgroundColor: 'red'}}>1</p>
                <div className="bar" style={{ height: `${98*dataPoint[2]/highestSolarDataValueWeek}%` }}></div>
              </div>
            ))}
          </div>
            <div className="bottom-banner">We can code this in different ways. For now here's a bottom banner like on the winderful site</div>
        </div> */}


        {/* MONTH CONTAINER */}

        <MonthlyGraph dayTimeSolarDataMonth={dayTimeSolarDataMonth} dayTimeSolarDataBarWidthMonth={dayTimeSolarDataBarWidthMonth} highestSolarDataValueMonth={highestSolarDataValueMonth} />

        {/* <h2>Monthly Data</h2>
        <p>Data from last 30 days from 9-430pm</p>
        <div>Highest production day: 
          {highestSolarDataValueMonth}
        </div>
  
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
        </div> */}

        {/* YEAR CONTAINER */}

        <YearlyGraph dayTimeSolarDataYear={dayTimeSolarDataYear} dayTimeSolarDataBarWidthYear={dayTimeSolarDataBarWidthYear} highestSolarDataValueYear={highestSolarDataValueYear} />
        {/* <h2>Yearly Data</h2>
        <p>Data from last 30 days from 9-430pm</p>
        <div>Highest production day: 
          {highestSolarDataValueYear}
        </div>
  
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
        </div> */}
      </>
    )}