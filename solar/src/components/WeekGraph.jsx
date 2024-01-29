// HELPER FUNCTIONS
import {getEndDate, getEndTime, getEndDateAndTime, getStartingDate} from "@/app/getDates";

// STYLES
import "../app.css"


// DATE AND TIME VARIABLES
let endTime = getEndTime()
let startingTime = endTime
let endDateAndTime = getEndDateAndTime()
let startingDate = getStartingDate()

// SOLAR FETCH
async function getSolar(startingDate, startingTime, EndDate, EndTime) {
  // const res = await fetch(`https://api.solar.sheffield.ac.uk/pvlive/api/v4/pes/12`)
  // const res = await fetch (`https://api.solar.sheffield.ac.uk/pvlive/api/v4/pes/10?start=2019-01-01T12:00:00&end=2019-02-02T12:40:59`)
  const res = await fetch (`https://api.solar.sheffield.ac.uk/pvlive/api/v4/pes/0?start=${startingDate}T${startingTime}&end=${EndDate}T${EndTime}`)
  return res.json()
}

export default async function WeekGraph() {
    // Call getSolar Function
    const data = getSolar(startingDate, startingTime, endDateAndTime, endTime)
    // Await the data
    const solarData = await Promise.all([data])
    const solar = (solarData[0].data)
    // console.log(dayTimeSolarData)
    const pattern = /^(\d{4}-\d{2}-\d{2}T(?:0[9]|1[0-6]):[0-5]\d:00Z)$/;
    const dayTimeSolarData = solar.filter(solardata=> pattern.test(solardata[1])) 
    const dayTimeSolarDataBarWidth = 99/(dayTimeSolarData.length) //ensures that the bars fill 99% of the width of the graph
    console.log(dayTimeSolarData)
    return (
      <>
        <h2>Weekly Data</h2>
        <p>Data from last 7 days from 9-430pm</p>
    
        <div className="graph-container">
          {/* <div className="message-container">
              hello
          <p className="message">display</p>
            <p className="message">display</p>
          </div> */}
          <div className="graph">
            {dayTimeSolarData.reverse().map((dataPoint, index) => (dataPoint[1].includes("09:00:00")) ? (
              <>
              <div className="verticalstrip" key={index}>
                <div className="break"></div>
              </div>
              <div className="verticalstrip" key={index} style={{ width: `${dayTimeSolarDataBarWidth}%` }}>
                <div className="bar" style={{ height: `${dataPoint[2] / 20}px` }}></div>
              </div>
              </>
            ) : (
              <div className="verticalstrip" key={index} style={{ width: `${dayTimeSolarDataBarWidth}%` }}>
                <div className="bar" style={{ height: `${dataPoint[2] / 20}px` }}></div>
              </div>
            ))}
          </div>
          {solar}
        </div>
      </>
    )}