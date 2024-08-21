// COMPONENTS
import SolarData from "@/components/SolarData";
import SolarTitle from "@/components/SolarTitle";
import Graphs from "@/components/Graphs";

// HELPER FUNCTIONS
import { getEndDate, getEndTime, getEndDateAndTime, getStartingDate } from "@/app/getDates";
import { formatDateForSolarData } from "./helper.js"

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
  const apiUrl = `https://api.solar.sheffield.ac.uk/pvlive/api/v4/pes/0?start=${startingDate}T${startingTime}&end=${EndDate}T${EndTime}`;

  const res = await fetch(apiUrl, {
    headers: {
      'Cache-Control': 'no-cache'
    },
    cache: 'no-store'
  });

  return res.json();
}
// 

// HELPER FUNCTIONS

export default async function Home() {
  // Timestamp
  const timestamp = Date.parse(new Date().toString());


  // Helper
  const patternNineToFive = /^(\d{4}-\d{2}-\d{2}T(?:0[9]|1[0-6]):[0-5]\d:00Z)$/;
  // Daily get solar data
  const dataDay = getSolar(startingDateDay, "00:00:00", endDateAndTime, endTime)

  // Weekly get solar data
  const dataWeek = getSolar(startingDateWeek, startingTime, endDateAndTime, endTime)
  const solarDataWeek = await Promise.all([dataWeek])
  const solarWeek = (solarDataWeek[0].data)
  const daytimeDataWeek = solarWeek.filter(solardata => patternNineToFive.test(solardata[1])).reverse()
  const daytimeDataBarWidthWeek = 100 / (daytimeDataWeek.length) //ensures that the bars fill 99% of the width of the graph
  const peakMWWeek = Math.max(...daytimeDataWeek.map(solardata => solardata[2]))
  const peakMWWeekDayAndTime = formatDateForSolarData(daytimeDataWeek.find(solardata => solardata[2] === peakMWWeek)[1])

  // Monthly get solar data
  const dataMonth = getSolar(startingDateMonth, startingTime, endDateAndTime, endTime)
  const solarDataMonth = await Promise.all([dataMonth])
  const solarMonth = (solarDataMonth[0].data)
  const daytimeDataMonth = solarMonth.filter(solardata => patternNineToFive.test(solardata[1])).reverse()
  const daytimeDataBarWidthMonth = 100 / (daytimeDataMonth.length) //ensures that the bars fill 99% of the width of the graph
  const peakMWMonth = Math.max(...daytimeDataMonth.map(solardata => solardata[2]))
  const peakMWMonthDayAndTime = formatDateForSolarData(daytimeDataMonth.find(solardata => solardata[2] === peakMWMonth)[1])

  // Annual get solar data
  const patternTwoPM = /^(\d{4}-\d{2}-\d{2}T14:00:00Z)$/;
  const dataYear = getSolar(startingDateYear, startingTime, endDateAndTime, endTime)
  const solarDataYear = await Promise.all([dataYear])
  const solarYear = (solarDataYear[0].data)
  const daytimeDataYear = solarYear.filter(solardata => patternTwoPM.test(solardata[1])).reverse()
  const daytimeDataBarWidthYear = 100 / (daytimeDataYear.length) //ensures that the bars fill 99% of the width of the graph
  const peakMWYear = Math.max(...daytimeDataYear.map(solardata => solardata[2]))
  const peakMWYearDayAndTime = formatDateForSolarData(daytimeDataYear.find(solardata => solardata[2] === peakMWYear)[1])
  console.log(daytimeDataWeek[daytimeDataWeek.length - 1])
  return (<>
    <div className="backgroundImage -z-30"></div> {/* This does not need to wrap the page, it just goes behind */}
    <div className='flex justify-between p-8 text-sm bg-transparent'>
      <SolarTitle />
      <SolarData peakMWWeek={peakMWWeek} peakMWWeekDayAndTime={peakMWWeekDayAndTime} peakMWMonth={peakMWMonth} peakMWMonthDayAndTime={peakMWMonthDayAndTime}
        peakMWYear={peakMWYear} peakMWYearDayAndTime={peakMWYearDayAndTime} />
    </div>
    <Graphs daytimeDataWeek={daytimeDataWeek} daytimeDataBarWidthWeek={daytimeDataBarWidthWeek} peakMWWeek={peakMWWeek} daytimeDataMonth={daytimeDataMonth} daytimeDataBarWidthMonth={daytimeDataBarWidthMonth} peakMWMonth={peakMWMonth} daytimeDataYear={daytimeDataYear} daytimeDataBarWidthYear={daytimeDataBarWidthYear} peakMWYear={peakMWYear} dayDate={dataDay} />
  </>
  )
}
