import { useState } from 'react'
import './App.css'
import  SolarData  from './components/SolarData'
import  SolarTitle  from './components/SolarTitle'

export default function App() {
  return (
    <div className='flex justify-between m-8'>
      <SolarTitle />
      <SolarData />
      
    </div>
  )
}

