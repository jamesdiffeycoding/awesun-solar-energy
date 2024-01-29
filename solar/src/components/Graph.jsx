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
  const res = await fetch (`https://api.solar.sheffield.ac.uk/pvlive/api/v4/pes/0?start=${startingDate}T${startingTime}&end=${EndDate}T${EndTime}`)
  return res.json()
}

export default async function Graph() {
    // Call getSolar Function
    const data = getSolar(startingDate, startingTime, endDateAndTime, endTime)
    // Await the data
    const solarData = await Promise.all([data])
    const solar = (solarData[0].data)
    // console.log(dayTimeSolarData)
    const pattern = /^(\d{4}-\d{2}-\d{2}T(?:0[9]|1[0-6]):[0-5]\d:00Z)$/;
    const dayTimeSolarData = solar.filter(solardata=> pattern.test(solardata[1])) 


    // PRINTING BARS FOR EACH OF THE DAYTIME DATA POINTS
    for (let i=0; i<dayTimeSolarData.length; i++) {
      // Create the main container element with the className "verticalstrip"
      // const verticalstripElement = document.createElement("div");
      // verticalstripElement.className = "verticalstrip";
      // // Create the bar element with the className "bar"
      // const barElement = document.createElement("div");
      // barElement.className = "bar";
      // // Set the height of the bar element to a specific value, e.g. 100px
      // barElement.style.height = "100px";
      // // Get the element with the className "graph-container"
      // const graphContainerElement = document.querySelector(".graph-container");
      // // Append the bar element as a child of the verticalstripElement
      // verticalstripElement.appendChild(barElement);
      // // Append the verticalstripElement as a child of the graphContainerElement
      // graphContainerElement.appendChild(verticalstripElement)
    }
    return (
      <div className="graph-container">
        {/* <div className="message-container">
            hello
        <p className="message">display</p>
          <p className="message">display</p>
        </div> */}
        <div className="graph">
          <div className="verticalstrip">
            <div className="bar small"></div>
          </div>
          <div className="verticalstrip">
            <div className="bar med"></div>
          </div>
          <div className="verticalstrip">
            <div className="bar tall"></div>
          </div>
        </div>
        {solar}
      </div>
    );
  }