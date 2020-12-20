import React, { useState } from 'react'
import { tempData } from '../data/TemporaryData'
import BrazilMap from './BrazilMap'
import ProgressBar from './ProgressBar'
import Sidebar from './Sidebar'

const Main = () => {
  const [barToggle, setBarToggle] = useState(false)

  const sidebarClassName = `sidebar-view ${
    barToggle ? 'open-sidebar' : 'closed-sidebar'
  }`

  // Create a set with years of the Objects
  const yearSet = new Set()
  tempData.map((stateData) =>
    Object.keys(stateData).map((year) => yearSet.add(parseInt(year)))
  )
  if (yearSet.has(NaN)) {
    yearSet.delete(NaN)
  }
  const yearArray = Array.from(yearSet).sort()
  const minYear = Math.min(...yearArray)
  const maxYear = Math.max(...yearArray)

  const [selectedYear, setSelectedYear] = useState(minYear)

  return (
    <main>
      <div className="main-view">
        <div className="map-area">
          <BrazilMap />
          <div className="selected-year">{selectedYear}</div>
        </div>
        <ProgressBar
          yearArray={yearArray}
          minYear={minYear}
          maxYear={maxYear}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
      </div>
      <div className={sidebarClassName}>
        <Sidebar barToggle={barToggle} setBarToggle={setBarToggle} />
      </div>
    </main>
  )
}

export default Main
