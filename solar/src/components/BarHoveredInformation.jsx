import React from "react";

export default function BarHoveredInformation({
  barHovered,
  barHoveredInformation,
}) {
  return (
    <section className="text-right text-xs sm:text-xs md:text-base lg:text-base xl:text-base 2xl:text-base">
      <p className="text-slate-600">{barHoveredInformation} </p>
      <p className="text-yellow-700">{barHovered}</p>
    </section>
  );
}
