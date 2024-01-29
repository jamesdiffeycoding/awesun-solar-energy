// COMPONENTS
import SolarData from "@/components/SolarData";
import SolarTitle from "@/components/SolarTitle";
import Graph from "@/components/Graph";

// HELPER FUNCTIONS
import {getEndDate, getEndTime, getEndDateAndTime, getStartingDate} from "@/components/getDates";

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
  const res = await fetch (`https://api.solar.sheffield.ac.uk/pvlive/api/v4/pes/10?start=${startingDate}T${startingTime}&end=${EndDate}T${EndTime}`)
  return res.json()
}
export default async function Home() {
  // Call getSolar Function
  const data = getSolar(startingDate, startingTime, endDateAndTime, endTime)
  // Await the data
  const solarData = await Promise.all([data])
  // Log the data
  console.log(solarData[0].data)

  console.log(solarData[0].data[0])
  const solar = (solarData[0].data[0])

  return (<>
  {startingDate}
    <div className='h-screen bg-gradient-to-b from-orange-500 to-yellow-300'>
      <div className='flex justify-between m-8'>
        <SolarTitle />
        <SolarData endDateAndTime={endDateAndTime}/>
      </div>
        <Graph />
    </div>
  </>
  )
}
