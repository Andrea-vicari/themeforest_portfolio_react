import React from 'react'
import { useDispatch } from 'react-redux'
import { dark, ligth } from '../../CounterSlice'


function SwitchDark() {

  const dispatch = useDispatch()


  return (
    <>

    <div className="dropdown">
          <button className="btn dropdown-toggle px-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className='fa fa-sun fs-5 text-warning'></i>
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