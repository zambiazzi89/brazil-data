import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  return (
    <header>
      <div className="brand-name">Pindorama</div>
      <div className="main-nav">
        <div className="close-button">
          <FaTimes />
        </div>
        <div className="nav-links">
          <div>Sobre</div>
          <div>Fontes</div>
        </div>
      </div>
      <div className="lang-select">ENG</div>
      <div className="hamburger-button">
        <FaBars />
      </div>
    </header>
  )
}

export default Header
