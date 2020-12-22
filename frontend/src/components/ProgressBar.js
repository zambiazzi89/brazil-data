import React, { useState, useEffect } from 'react'

const ProgressBar = ({
  minYear,
  maxYear,
  selectedYear,
  setSelectedYear,
  minValue,
  maxValue,
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
        <div>{minValue}</div>
        <div className="color-legend-bar" />
        <div>{maxValue}</div>
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
