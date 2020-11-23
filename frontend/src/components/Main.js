import React, { useState } from 'react'
import BrazilMap from './BrazilMap'
import ProgressBar from './ProgressBar'
import Sidebar from './Sidebar'

const Main = () => {
  const [barToggle, setBarToggle] = useState(false)

  const sidebarClassName = `sidebar-view ${
    barToggle ? 'open-sidebar' : 'closed-sidebar'
  }`

  return (
    <main>
      <div className="main-view">
        <div className="map-area">
          <BrazilMap />
        </div>
        <ProgressBar />
      </div>
      <div className={sidebarClassName}>
        <Sidebar barToggle={barToggle} setBarToggle={setBarToggle} />
      </div>
    </main>
  )
}

export default Main
