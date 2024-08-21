"use client";
import React from "react";

// Main GraphContainer component
export default function GraphContainer({
  dataToDisplay,
  peakValue,
  labelFormatter,
  labelBreakTime,
  labelScheme,
  updateBarContext,
}) {
  const barWidth = `${100 / dataToDisplay.length}%`;

  // Determine if label should be displayed
  function shouldDisplayLabel(index, dateAndTime) {
    if (labelScheme === "days") return true;
    if (labelScheme === "weeks") return index % 7 === 0;
    return dateAndTime.includes("01T");
  }

  return (
    <section className="w-full animate-slide">
      <div className="graph" key="graph">
        {dataToDisplay.map((dataPoint, index) => {
          const isBreak = dataPoint[1].includes(labelBreakTime);
          const height = `${(98 * dataPoint[2]) / peakValue}%`;

          return (
            <React.Fragment key={`${index}-frag`}>
              <GraphTransparentBar
                width={barWidth}
                onMouseEnter={() => updateBarContext(dataPoint)}
              >
                {isBreak && shouldDisplayLabel(index, dataPoint[1]) && (
                  <GraphLabel value={labelFormatter(dataPoint[1])} />
                )}
                <GraphGreenBar height={height} />
              </GraphTransparentBar>
            </React.Fragment>
          );
        })}
      </div>
      {/* BASE OF GRAPH */}
      <div className="w-full h-4 bg-green-700 bg-gradient-to-b from-green-600 to-green-500"></div>
    </section>
  );
}

function GraphTransparentBar({ width, onMouseEnter, children }) {
  return (
    <div
      className="vertical-rectangle"
      style={{ width }}
      onMouseEnter={onMouseEnter}
    >
      {children}
    </div>
  );
}

function GraphGreenBar({ height }) {
  return (
    <div
      className="w-full bg-green-800 rounded-t-lg bg-gradient-to-b from-green-800 to-green-600"
      style={{ height }}
    ></div>
  );
}

function GraphLabel({ value }) {
  return (
    <div className="break flex flex-col-reverse">
      <span className="pl-2">{value}</span>
    </div>
  );
}
