import React from 'react'

function SocialMenu() {
  return (
    <ul className="nav align-items-center justify-content-lg-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-body-secondary" href="#">
        <i className='fab fa-github fs-5'></i>
        </a>
      </li>
      <li className="ms-3"><a className="text-body-secondary" href="#">
          <i className='fab fa-linkedin fs-5'></i>
        </a>
      </li><li className="ms-3"><a className="text-body-secondary" href="#">
      <i className='fab fa-codepen fs-5'></i>
        </a>
      </li>
    </ul>
  )
}

export default SocialMenu