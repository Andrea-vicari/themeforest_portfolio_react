import React from 'react'
import reactLogo from "../images/react.svg"
import SocialMenu from '../Common/SocialMenu';

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="light">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src={reactLogo}></img>
      React Portfolio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">React Portfolio</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link fs-5 active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fs-5" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fs-5" href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fs-5" href="#portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fs-5" href="#pricing">Prices</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fs-5" href="#contact">Contact</a>
          </li>

        </ul>

        <SocialMenu />

      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar