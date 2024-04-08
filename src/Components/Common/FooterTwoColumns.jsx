import React from 'react'
import { useEffect } from 'react'

function FooterTwoColumns() {

// Scroll to top function
  useEffect(() => {
    const element = document.getElementById('myBtn');
    element.style.display = "block";
  }, []);

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <>
        <div className='container-fluid bg-primary'>
            <div className="container bg-primary">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
                    <div className="col-md-6 d-flex align-items-center">
                    <span className="mb-3 mb-md-0 text-white">&copy;2024 Proudly coded using React and ready to showcase your next projects</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li><a href="#link"><i className="text-white fab fa-github fa-fw"></i></a></li>
                    <li><a href="#link"><i className="text-white fab fa-facebook fa-fw"></i></a></li>
                    <li><a href="#link"><i className="text-white fab fa-codepen fa-fw"></i></a></li>
                    <li><a href="#link"><i className="text-white fab fa-linkedin fa-fw"></i></a></li>
                    </ul>
                    <button id="myBtn" onClick={topFunction} className='btn btn-sm btn-outline-secondary'>
                    <i className='fa fa-arrow-up'></i>
                    </button>
                </footer>

            </div>
        </div>
</>
  )
}

export default FooterTwoColumns