import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { SidebarData } from '../data/SidebarData'

const Sidebar = () => {
  const [barToggle, setBarToggle] = useState(false)

  useEffect(() => {
    barToggle ? console.log('open') : console.log('closed')
  })

  return (
    <div className="sidebar">
      <div className="sidebar-button">
        <a
          href="#closed"
          className="chevron chevron-close"
          onClick={() => setBarToggle(!barToggle)}
        >
          <FaChevronRight />
        </a>

        <a
          href="#sidebar-view"
          className="chevron chevron-open"
          onClick={() => setBarToggle(!barToggle)}
        >
          <FaChevronLeft />
        </a>
      </div>
      <div className="datalist">
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <div>
                {item.icon} {item.title}
              </div>
              {/*<Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
          </Link>*/}
            </li>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
