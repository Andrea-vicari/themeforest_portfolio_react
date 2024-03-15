import React from 'react'
import { useState, useEffect } from 'react'

function SwitchDark() {

    const [color, setColor] = useState("")





  return (
    <>

    <div className="dropdown">
          <button className="btn btn-outline-primary dropdown-toggle px-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className='fa fa-sun fs-5 text-warning'></i>
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Dark</a></li>
            <li><a className="dropdown-item" href="#">Light</a></li>

          </ul>
        </div>

    </>
  )
}

export default SwitchDark