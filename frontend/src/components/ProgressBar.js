import React, { useState, useEffect } from 'react'

const ProgressBar = ({
  yearArray,
  minYear,
  maxYear,
  selectedYear,
  setSelectedYear,
}) => {
  const [playButton, setPlayButton] = useState(true)

  useEffect(() => {
    let interval = selectedYear
    if (!playButton) {
      interval = setInterval(() => {
        setSelectedYear((selectedYear) => selectedYear + 1)
      }, 200)
      if (selectedYear === maxYear) {
        clearInterval(interval)
        setPlayButton(true)
      }
    }
    return () => clearInterval(interval)
  }, [playButton, selectedYear, maxYear, setSelectedYear])

  return (
    <div className="legend-and-progress">
      <div className="color-legend">
        <div className="sub-legend low-color">
          <svg viewBox="0 0 20 20" width="1rem">
            <rect width="20" height="20" stroke="white" fill="red" />
          </svg>
          <div>low #</div>
        </div>
        <div className="sub-legend mid-color">
          <svg viewBox="0 0 20 20" width="1rem">
            <rect width="20" height="20" stroke="white" fill="orange" />
          </svg>
          <div>mid #</div>
        </div>
        <div className="sub-legend high-color">
          <svg viewBox="0 0 20 20" width="1rem">
            <rect width="20" height="20" stroke="white" fill="green" />
          </svg>
          <div>high #</div>
        </div>
      </div>
      <div className="progress-bar">
        {playButton ? (
          <svg
            viewBox="0 0 20 20"
            width="1rem"
            onClick={() => setPlayButton(!playButton)}
          >
            <path d="M0 0 L15 10 L0 20" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 20 20"
            width="1rem"
            onClick={() => setPlayButton(!playButton)}
          >
            <rect width="20" height="20" />
          </svg>
        )}
        <div>{minYear}</div>
        <input
          type="range"
          min={minYear}
          max={maxYear}
          className="input-range"
          value={selectedYear}
          onChange={(e) => setSelectedYear(parseInt(e.target.value))}
        />
        <div>{maxYear}</div>
      </div>
    </div>
  )
}

export default ProgressBar
