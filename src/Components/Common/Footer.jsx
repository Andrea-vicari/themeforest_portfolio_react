import React from 'react'
import { useEffect } from 'react'

function Footer() {

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
    <React.Fragment>
    <footer id="main-footer" className="bg-primary light-typo">
        <div className="container text-center">
            <ul className="social-links">
                <li><a href="#link"><i className="fab fa-github fa-fw"></i></a></li>
                <li><a href="#link"><i className="fab fa-facebook fa-fw"></i></a></li>
                <li><a href="#link"><i className="fab fa-codepen fa-fw"></i></a></li>
                <li><a href="#link"><i className="fab fa-linkedin fa-fw"></i></a></li>
            </ul>
            <hr></hr>
            <p className='text-black'>&copy;2024 Proudly coded using React and ready to showcase your next projects</p>


        </div>
        <button id="myBtn" onClick={topFunction} className='btn btn-sm btn-outline-secondary'>
          <i className='fa fa-arrow-up'></i>
        </button>
    </footer>
    </React.Fragment>
  )
}

export default Footer