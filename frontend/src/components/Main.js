import React from 'react'
import BrazilMap from './BrazilMap'
import ProgressBar from './ProgressBar'
import Sidebar from './Sidebar'

const Main = () => {
  return (
    <main>
      <div className="main-view">
        <div className="map-area">
          <BrazilMap />
        </div>
        <ProgressBar />
      </div>
      <div id="sidebar-view" className="sidebar-view">
        <Sidebar />
      </div>
    </main>
  )
}

export default Main
