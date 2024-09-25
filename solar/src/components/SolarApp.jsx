"use client";
import { useState } from "react";
import Header from "./Header";
import Sun from "./Sun";
import Clouds from "./Clouds";
import Graph from "./Graph.jsx";
import GraphSelector from "./GraphSelector";
import BarHoveredInformation from "./BarHoveredInformation";
import {
  formatDateForDisplay,
  formatDateToGetDayOnly,
  formatDateToGetMonthOnly,
  formatDateToGetNumberAndMonthOnly,
  getTimeHalfHourLater,
} from "@/app/timeAndDateHelpers.js";

export default function SolarApp({ allData }) {
  const { displayData, peakData } = allData;
  const [graphToDisplay, setGraphToDisplay] = useState("week");
  const { dataWeek, dataMonth, dataYear } = displayData;
  const { peakFromWeek, peakFromMonth, peakFromYear } = peakData;
  const [sunSize, setSunSize] = useState(60); // default size
  const [cloudOpacityState, setCloudOpacityState] = useState(20);

  const [barHoveredInformation, setBarHoveredInformation] = useState(
    "Hover a time below to see"
  );
  const [barHovered, setBarHovered] = useState("the weather change");

  const handleDisplay = (event) => {
    setGraphToDisplay(event.target.textContent);
  };

  function handleBarHover(newValue) {
    let peakForComparison = {
      week: peakFromWeek,
      month: peakFromMonth,
      year: peakFromYear,
    }[graphToDisplay];

    let newValueRounded = Math.ceil(newValue[2]);
    setSunSize(20 + (newValueRounded / peakForComparison) * 80);
    setCloudOpacityState(
      (prev) => 100 - (newValueRounded / peakForComparison) * 120
    );
    setBarHovered(`${newValueRounded} MW`);
    setBarHoveredInformation(
      `${formatDateForDisplay(newValue[1])}-${getTimeHalfHourLater(
        newValue[1]
      )}`
    );
  }

  const graphConfig = {
    week: {
      dataToDisplay: dataWeek,
      peakValue: peakFromWeek,
      labelFormatter: formatDateToGetDayOnly,
      labelBreakTime: "09:00:00",
      labelScheme: "days",
    },
    month: {
      dataToDisplay: dataMonth,
      peakValue: peakFromMonth,
      labelFormatter: formatDateToGetNumberAndMonthOnly,
      labelBreakTime: "09:00:00",
      labelScheme: "weeks",
    },
    year: {
      dataToDisplay: dataYear,
      peakValue: peakFromYear,
      labelFormatter: formatDateToGetMonthOnly,
      labelBreakTime: "14:00:00",
      labelScheme: "months",
    },
  };

  return (
    <main>
      <Header peakData={peakData} />
      <Sun sunSize={sunSize} />
      <Clouds cloudOpacityState={cloudOpacityState} />
      <section className="flex w-full justify-between pl-9 pr-9 fixed bottom-[37%] z-50">
        <GraphSelector
          graphToDisplay={graphToDisplay}
          handleDisplay={handleDisplay}
        />
        <BarHoveredInformation
          barHovered={barHovered}
          barHoveredInformation={barHoveredInformation}
        />
      </section>
      <Graph
        dataToDisplay={graphConfig[graphToDisplay].dataToDisplay}
        peakValue={graphConfig[graphToDisplay].peakValue}
        labelFormatter={graphConfig[graphToDisplay].labelFormatter}
        labelBreakTime={graphConfig[graphToDisplay].labelBreakTime}
        labelScheme={graphConfig[graphToDisplay].labelScheme}
        handleBarHover={handleBarHover}
        barHovered={barHovered}
      />
    </main>
  );
}
