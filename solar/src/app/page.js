import Image from "next/image";
import SolarData from "@/components/SolarData";
import SolarTitle from "@/components/SolarTitle";
import Graph from "@/components/Graph";
import "../app.css"

async function getSolar() {
  console.log("hello")
  const res = await fetch(`https://api.solar.sheffield.ac.uk/pvlive/api/v4/pes/12`)
  return res.json()
}

export default async function Home() {
  
  const data =getSolar()
  const solarData = await Promise.all([data])
  const solar = (solarData[0].data[0])
  return (
    <div className='h-screen bg-gradient-to-b from-orange-500 to-yellow-300'>
      <div className='flex justify-between m-8'>
       <p>{solar}</p>
        <SolarTitle />
        <SolarData />
      </div>
        <Graph />
    </div>
  )
}
