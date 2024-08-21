// COMPONENTS
import SolarData from "@/components/SolarData";
import SolarTitle from "@/components/SolarTitle";
import GraphContainer from "@/components/GraphContainer.jsx";

// DATE AND TIME VARIABLES
import { formatDateForDisplay, getEndTime, getEndDateAndTime, getStartingDate } from "./timeAndDateHelpers.js"
let endTime = getEndTime()
let startingTime = endTime
let endDateAndTime = getEndDateAndTime()
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


export default async function Home() {
  // DATA FETCHES AND FILTERING
  const RegExNineToFive = /^(\d{4}-\d{2}-\d{2}T(?:0[9]|1[0-6]):[0-5]\d:00Z)$/;
  const RegExPM = /^(\d{4}-\d{2}-\d{2}T14:00:00Z)$/;

  const daytimeDataWeek = (await Promise.all([getSolar(startingDateWeek, startingTime, endDateAndTime, endTime)]))[0].data
    .filter(data => RegExNineToFive.test(data[1]))
    .reverse();
  const daytimeDataMonth = (await Promise.all([getSolar(startingDateMonth, startingTime, endDateAndTime, endTime)]))[0].data
    .filter(data => RegExNineToFive.test(data[1]))
    .reverse();
  const daytimeDataYear = (await Promise.all([getSolar(startingDateYear, startingTime, endDateAndTime, endTime)]))[0].data
    .filter(data => RegExNineToFive.test(data[1]))
    .reverse();
  const PMDataYear = daytimeDataYear.filter(data => RegExPM.test(data[1]));



  // PEAK DATA
  const peakFromWeek = Math.max(...daytimeDataWeek.map(data => data[2]))
  const peakFromWeekDayAndTime = formatDateForDisplay(daytimeDataWeek.find(data => data[2] === peakFromWeek)[1])
  const peakFromMonth = Math.max(...daytimeDataMonth.map(data => data[2]))
  const peakFromMonthDayAndTime = formatDateForDisplay(daytimeDataMonth.find(data => data[2] === peakFromMonth)[1])
  const peakFromYear = Math.max(...daytimeDataYear.map(solardata => solardata[2]))
  const peakFromYearDayAndTime = formatDateForDisplay(daytimeDataYear.find(solardata => solardata[2] === peakFromYear)[1])

  const peakData = {
    peakFromWeek,
    peakFromWeekDayAndTime,
    peakFromMonth,
    peakFromMonthDayAndTime,
    peakFromYear,
    peakFromYearDayAndTime
  }


  return (<>
    <div className="backgroundImage -z-30"></div> {/* This does not need to wrap the page, it just goes behind */}
    <div className='flex justify-between p-8 text-sm'>
      <SolarTitle />
      <SolarData peakData={peakData} />
    </div>
    <GraphContainer dataWeek={daytimeDataWeek} dataMonth={daytimeDataMonth} dataYear={PMDataYear} peakData={peakData} />
  </>
  )
}
