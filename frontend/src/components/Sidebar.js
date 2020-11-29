import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { SidebarData } from '../data/SidebarData'

const Sidebar = ({ barToggle, setBarToggle }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-button">
        {barToggle ? (
          <div
            className="chevron chevron-close"
            onClick={() => setBarToggle(!barToggle)}
          >
            <FaChevronRight />
          </div>
        ) : (
          <div
            className="chevron chevron-open"
            onClick={() => setBarToggle(!barToggle)}
          >
            <FaChevronLeft />
          </div>
        )}
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
