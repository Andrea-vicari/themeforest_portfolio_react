import React from 'react'
import { useDispatch } from 'react-redux'
import { dark, ligth } from '../../CounterSlice'


function SwitchDark() {

  const dispatch = useDispatch()


  return (
    <>

    <div id='ligth_dark_button' className="dropdown">
          <button className="btn dropdown-toggle px-2 mt-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className='fa fa-sun fs-4 text-primary'></i>
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" onClick={()=>dispatch(dark())}>Dark</a></li>
            <li><a className="dropdown-item" onClick={()=>dispatch(ligth())}>Light</a></li>

          </ul>

        </div>

    </>
  )
}

export default SwitchDark