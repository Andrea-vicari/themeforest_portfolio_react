import React from 'react'


function Footer() {
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
            <p>&copy;2024 Proudly coded using React and ready to showcase your next projects</p>


        </div>

    </footer>
    </React.Fragment>
  )
}

export default Footer