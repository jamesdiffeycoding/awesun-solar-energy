import { useState } from 'react'
import './App.css'
import  SolarData  from './components/SolarData'
import  SolarTitle  from './components/SolarTitle'
import Graph from './components/Graph'


export default function App() {
  // const getStaticProps = async () => {
  //   const url = 'https://google.com';
  //   const response = await fetch (url);
  //   const data = await response.text();
  //   console.log(data);
  //   return {
  //     props:{googleData: data}
  //   }
  // }
  // getStaticProps();
  fetch('https://google.com');
  console.log("MESSAGE")



  return (
    <div className='h-screen bg-gradient-to-b from-orange-500 to-yellow-300'>
      <div className='flex justify-between m-8'>
        <SolarTitle />
        <SolarData />
        <Graph />
      </div>
    </div>
  )
}

