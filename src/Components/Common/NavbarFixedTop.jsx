import React from 'react'
import DarkSelector from '../Common/SwitchDark'
import { useSelector, useDispatch } from 'react-redux'

function NavbarFixedTop() {
      // Dark theme logics
  const count = useSelector((state) => state.counter.value)
  return (
    <>
        <nav className="navbar navbar-expand-md bg-body-tertiary fixed-top" data-bs-theme={count}>
        <div className="container">
        <a className="navbar-brand d-flex" href='#intro'>

            <span className='fs-1'>OM<span className='text-primary'>S</span>EL</span>
            </a>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbarCollapse">
            <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link fs-5" data-bs-spy="scroll" data-bs-target="#intro" aria-current="page" href='#intro'>Home</a>
            </li>
            <li className="nav-item" data-bs-spy="scroll" data-bs-target="#about" >
              <a className="nav-link fs-5"href="#about">About</a>
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
              <a className="nav-link fs-5" href="#features">Features</a>
            </li>

            <li className="nav-item">
              <a className="nav-link fs-5" href="#contact">Contact</a>
            </li>

          </ul>
          <DarkSelector />
            </div>
        </div>
        </nav>
    </>
  )
}

export default NavbarFixedTop