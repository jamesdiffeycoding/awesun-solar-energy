// COMPONENTS
import SolarData from "@/components/SolarData";
import SolarTitle from "@/components/SolarTitle";
import Graphs from "@/components/Graphs";
import Sun from "@/components/Sun";
// HELPER FUNCTIONS
import {getEndDate, getEndTime, getEndDateAndTime, getStartingDate} from "@/app/getDates";

// DATE AND TIME VARIABLES
let endTime = getEndTime()
let startingTime = endTime
let endDateAndTime = getEndDateAndTime()
let startingDateDay = getStartingDate(0)
let startingDateWeek = getStartingDate(7)
let startingDateMonth = getStartingDate(31)
let startingDateYear = getStartingDate(365)

// SOLAR FETCH
async function getSolar(startingDate, startingTime, EndDate, EndTime) {
  const res = await fetch (`https://api.solar.sheffield.ac.uk/pvlive/api/v4/pes/0?start=${startingDate}T${startingTime}&end=${EndDate}T${EndTime}`)
  return res.json()
}
// 

// HELPER FUNCTIONS

export default async function Home() {


  // Helper
  const pattern = /^(\d{4}-\d{2}-\d{2}T(?:0[9]|1[0-6]):[0-5]\d:00Z)$/;
  // Daily get solar data
  const dataDay = getSolar(startingDateDay, "00:00:00", endDateAndTime, endTime)
  const solarDataDay = await Promise.all([dataDay])
  const solarDay = (solarDataDay[0].data)
  console.log(solarDay)
  const dayTimeSolarDataDay = solarDay.filter(solardata=> pattern.test(solardata[1])) 
  const dayTimeSolarDataBarWidthDay = 99/(dayTimeSolarDataDay.length) //ensures that the bars fill 99% of the width of the graph
  const highestSolarDataValueDay= Math.max(...dayTimeSolarDataDay.map(solardata=>solardata[2]))

  // Weekly get solar data
  const dataWeek = getSolar(startingDateWeek, startingTime, endDateAndTime, endTime)
  const solarDataWeek = await Promise.all([dataWeek])
  const solarWeek = (solarDataWeek[0].data)
  const dayTimeSolarDataWeek = solarWeek.filter(solardata=> pattern.test(solardata[1])) 
  const dayTimeSolarDataBarWidthWeek = 99/(dayTimeSolarDataWeek.length) //ensures that the bars fill 99% of the width of the graph
  const highestSolarDataValueWeek= Math.max(...dayTimeSolarDataWeek.map(solardata=>solardata[2]))
  const solarDaySun = getSolar(solardata=>solardata[1].data)

  
  // Monthly get solar data
  const dataMonth = getSolar(startingDateMonth , startingTime, endDateAndTime, endTime)
  const solarDataMonth = await Promise.all([dataMonth])
  const solarMonth = (solarDataMonth[0].data)
  const dayTimeSolarDataMonth = solarMonth.filter(solardata=> pattern.test(solardata[1])) 
  const dayTimeSolarDataBarWidthMonth = 99/(dayTimeSolarDataMonth.length) //ensures that the bars fill 99% of the width of the graph
  const highestSolarDataValueMonth= Math.max(...dayTimeSolarDataMonth.map(solardata=>solardata[2]))


  // Annual get solar data
  const dataYear = getSolar(startingDateYear , startingTime, endDateAndTime, endTime)
  const solarDataYear = await Promise.all([dataYear])
  const solarYear = (solarDataYear[0].data)
  const dayTimeSolarDataYear = solarYear.filter(solardata=> pattern.test(solardata[1])) 
  const dayTimeSolarDataBarWidthYear = 99/(dayTimeSolarDataYear.length) //ensures that the bars fill 99% of the width of the graph
  const highestSolarDataValueYear= Math.max(...dayTimeSolarDataYear.map(solardata=>solardata[2]))

  return (<>
    <div className='background'>
      <Sun energyProduced={solarDay} highestSolarDataValueDay={highestSolarDataValueDay} highestSolarDataValueWeek={highestSolarDataValueWeek}/>
      <div className='flex justify-between m-8'>
        <SolarTitle />
        <SolarData highestSolarDataValueWeek={highestSolarDataValueWeek} highestSolarDataValueMonth={highestSolarDataValueMonth} highestSolarDataValueYear={highestSolarDataValueYear}/>
      </div>
        <Graphs dayTimeSolarDataWeek={dayTimeSolarDataWeek} dayTimeSolarDataBarWidthWeek={dayTimeSolarDataBarWidthWeek} highestSolarDataValueWeek={highestSolarDataValueWeek} dayTimeSolarDataMonth={dayTimeSolarDataMonth} dayTimeSolarDataBarWidthMonth={dayTimeSolarDataBarWidthMonth} highestSolarDataValueMonth={highestSolarDataValueMonth} dayTimeSolarDataYear={dayTimeSolarDataYear} dayTimeSolarDataBarWidthYear={dayTimeSolarDataBarWidthYear} highestSolarDataValueYear={highestSolarDataValueYear} />
    </div> 
  </>
  )
}
