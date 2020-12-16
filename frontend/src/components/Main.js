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
  const years = new Set()
  tempData.map((stateData) =>
    Object.keys(stateData).map((year) => years.add(parseInt(year)))
  )
  if (years.has(NaN)) {
    years.delete(NaN)
  }
  console.log(years)

  return (
    <main>
      <div className="main-view">
        <div className="map-area">
          <BrazilMap />
        </div>
        <ProgressBar years={years} />
      </div>
      <div className={sidebarClassName}>
        <Sidebar barToggle={barToggle} setBarToggle={setBarToggle} />
      </div>
    </main>
  )
}

export default Main
