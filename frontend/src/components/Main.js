import React, { useState } from 'react'
import BrazilMap from './BrazilMap'
import ProgressBar from './ProgressBar'
import Sidebar from './Sidebar'

const Main = () => {
  const [barToggle, setBarToggle] = useState(false)

  const sidebarClosed = 'calc(100% - 30px)'
  const sidebarOpen = '0'

  return (
    <main>
      <div className="main-view">
        <div className="map-area">
          <BrazilMap />
        </div>
        <ProgressBar />
      </div>
      <div
        className="sidebar-view"
        style={{ left: barToggle ? sidebarOpen : sidebarClosed }}
      >
        <Sidebar barToggle={barToggle} setBarToggle={setBarToggle} />
      </div>
    </main>
  )
}

export default Main
