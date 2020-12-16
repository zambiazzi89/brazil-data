import React from 'react'

const ProgressBar = ({ years }) => {
  years = Array.from(years)

  return (
    <div className="progress-bar">
      {years.map((year) => (
        <div className="year-and-bar">
          <div key={year} className="progress-year">
            {year}
          </div>
          <div className="bar-fill"></div>
        </div>
      ))}
    </div>
  )
}

export default ProgressBar
