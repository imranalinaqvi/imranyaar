import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me-about.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Welcome! I'm</h5>
        <h1>Syed Imran Murtaza Shah</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Neeche Scroll Karo!</a>
      </div>
    </header>
  )
}

export default Header
