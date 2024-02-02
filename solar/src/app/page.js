// COMPONENTS
import SolarData from "@/components/SolarData";
import SolarTitle from "@/components/SolarTitle";
import Graphs from "@/components/Graphs";
import Sun from "@/components/Sun";
// HELPER FUNCTIONS
import {getEndDate, getEndTime, getEndDateAndTime, getStartingDate} from "@/app/getDates";
import {formatDateForSolarData} from "./helper.js"

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
  const patternNineToFive = /^(\d{4}-\d{2}-\d{2}T(?:0[9]|1[0-6]):[0-5]\d:00Z)$/;
  // Daily get solar data
  const dataDay = getSolar(startingDateDay, "00:00:00", endDateAndTime, endTime)
  const solarDataDay = await Promise.all([dataDay])
  const solarDay = (solarDataDay[0].data)
  const daytimeDataDay = solarDay.filter(solardata=> patternNineToFive.test(solardata[1])) 
  const daytimeDataBarWidthDay = 100/(daytimeDataDay.length) //ensures that the bars fill 99% of the width of the graph
  const peakMWDay= Math.max(...daytimeDataDay.map(solardata=>solardata[2]))

  // Weekly get solar data
  const dataWeek = getSolar(startingDateWeek, startingTime, endDateAndTime, endTime)
  const solarDataWeek = await Promise.all([dataWeek])
  const solarWeek = (solarDataWeek[0].data)
  const daytimeDataWeek = solarWeek.filter(solardata=> patternNineToFive.test(solardata[1])) 
  const daytimeDataBarWidthWeek = 100/(daytimeDataWeek.length) //ensures that the bars fill 99% of the width of the graph
  const peakMWWeek= Math.max(...daytimeDataWeek.map(solardata=>solardata[2]))
  const peakMWWeekDayAndTime= formatDateForSolarData(daytimeDataWeek.find(solardata=>solardata[2]===peakMWWeek)[1])

  // Monthly get solar data
  const dataMonth = getSolar(startingDateMonth , startingTime, endDateAndTime, endTime)
  const solarDataMonth = await Promise.all([dataMonth])
  const solarMonth = (solarDataMonth[0].data)
  const daytimeDataMonth = solarMonth.filter(solardata=> patternNineToFive.test(solardata[1])) 
  const daytimeDataBarWidthMonth = 100/(daytimeDataMonth.length) //ensures that the bars fill 99% of the width of the graph
  const peakMWMonth= Math.max(...daytimeDataMonth.map(solardata=>solardata[2]))
  const peakMWMonthDayAndTime= formatDateForSolarData(daytimeDataMonth.find(solardata=>solardata[2]===peakMWMonth)[1])

  // Annual get solar data
  const patternTwoPM = /^(\d{4}-\d{2}-\d{2}T14:00:00Z)$/;
  const dataYear = getSolar(startingDateYear , startingTime, endDateAndTime, endTime)
  const solarDataYear = await Promise.all([dataYear])
  const solarYear = (solarDataYear[0].data)
  const daytimeDataYear = solarYear.filter(solardata=> patternTwoPM.test(solardata[1])) 
  const daytimeDataBarWidthYear = 100/(daytimeDataYear.length) //ensures that the bars fill 99% of the width of the graph
  const peakMWYear= Math.max(...daytimeDataYear.map(solardata=>solardata[2]))
  const peakMWYearDayAndTime= formatDateForSolarData(daytimeDataYear.find(solardata=>solardata[2]===peakMWYear)[1])

  return (<>
    <div className='background flex-col justify-between align-between text-sm'>
    {/* TOP HALF OF PAGE */}
      <div className='flex justify-between p-8'>
        <SolarTitle />
        <SolarData peakMWWeek={peakMWWeek} peakMWWeekDayAndTime={peakMWWeekDayAndTime} peakMWMonth={peakMWMonth} peakMWMonthDayAndTime={peakMWMonthDayAndTime} 
        peakMWYear={peakMWYear} peakMWYearDayAndTime={peakMWYearDayAndTime}/>
      </div>
      <div className="fixed left-1/2 top-1/3  transform -translate-x-1/2 -translate-y-1/2">
        <Sun energyProduced={solarDay} peakMWDay={peakMWDay} peakMWWeek={peakMWWeek}/>
      </div>
      <Graphs daytimeDataWeek={daytimeDataWeek} daytimeDataBarWidthWeek={daytimeDataBarWidthWeek} peakMWWeek={peakMWWeek} daytimeDataMonth={daytimeDataMonth} daytimeDataBarWidthMonth={daytimeDataBarWidthMonth} peakMWMonth={peakMWMonth} daytimeDataYear={daytimeDataYear} daytimeDataBarWidthYear={daytimeDataBarWidthYear} peakMWYear={peakMWYear} dayDate={dataDay} />
    </div> 
  </>
  )
}
