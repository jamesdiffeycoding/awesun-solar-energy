// COMPONENTS
import SolarData from "@/components/SolarData";
import SolarTitle from "@/components/SolarTitle";
import Graph from "@/components/Graph";

// HELPER FUNCTIONS
import {getCurrentDate, getCurrentTime, getCurrentDateAndTime, getStartingDate} from "@/components/getDates";

// STYLES
import "../app.css"


// DATE AND TIME VARIABLES
let startingDate = getCurrentDate()
let currentTime = getCurrentTime()
let startingTime = currentTime
let currentDateAndTime = getCurrentDateAndTime()

// SOLAR FETCH
async function getSolar(startingDate, startingTime, currentDate, currentTime) {
  console.log("hello")
  // const res = await fetch(`https://api.solar.sheffield.ac.uk/pvlive/api/v4/pes/12`)
  const res = await fetch (`https://api.solar.sheffield.ac.uk/pvlive/api/v4/pes/10?start=${startingDate}T${startingTime}&end=${currentDate}T${currentTime}`)
  return res.json()
}
export default async function Home() {

  
  const data =getSolar(startingDate, startingTime, currentDateAndTime, currentTime)
  const solarData = await Promise.all([data])
  const solar = (solarData[0].data[0])

  return (<>
  {startingDate}
    <div className='h-screen bg-gradient-to-b from-orange-500 to-yellow-300'>
      <div className='flex justify-between m-8'>
        <SolarTitle />
        <SolarData currentDateAndTime={currentDateAndTime}/>
      </div>
        <Graph />
    </div>
  </>
  )
}
