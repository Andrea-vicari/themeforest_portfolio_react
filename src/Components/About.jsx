import React from 'react'

function About() {
  return (
    <>
        <div className="container about" id='about'>
          <h1 className="section-title text-center">Main Features</h1>
          <p className="section-description">These are some of React Portfolio's Great Features. Explore the possibilities...</p>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">

              <div className="about-icon col d-flex align-items-start">
                <i className='fab fa-react text-bg-primary bg-primary p-2 mx-3'></i>
                <div>
                  <h3 className="fw-bold mb-0 fs-4">React</h3>
                  <p>Coded with React, smooth user experience and device compatibility</p>
                </div>
              </div>
              <div className="about-icon col d-flex align-items-start">
                <i className='fa fa-cog text-bg-primary bg-primary p-2 mx-3'></i>
                <div>
                  <h3 className="fw-bold mb-0 fs-4">Components</h3>
                  <p>Functional components, well organized and fully reusable</p>
                </div>
              </div>
              <div className="about-icon col d-flex align-items-start">
                <i className='fab fa-bootstrap text-bg-primary bg-primary p-2 mx-3'></i>
                <div>
                  <h3 className="fw-bold mb-0 fs-4">Bootstrap5</h3>
                  <p>Coded using Bootstrap5 framwork, to speed up future developments</p>
                </div>
              </div>

              <div className="about-icon col d-flex align-items-start">
                <i className='fa fa-pen text-bg-primary bg-primary p-2 mx-3'></i>
                <div>
                  <h3 className="fw-bold mb-0 fs-4">Clean</h3>
                  <p>Clean and elegant design suitable for many projects and business</p>
                </div>
              </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">

              <div className="about-icon col d-flex align-items-start">
                <i className='fab fa-android text-bg-primary bg-primary p-2 mx-3'></i>
                <div>
                  <h3 className="fw-bold mb-0 fs-4">Responsive</h3>
                  <p>Responsive layout, perfectly showcase your projects in all devices</p>
                </div>
              </div>
              <div className="about-icon col d-flex align-items-start">
                <i className='fab fa-react text-bg-primary bg-primary p-2 mx-3'></i>
                <div>
                  <h3 className="fw-bold mb-0 fs-4">JSON</h3>
                  <p>JSON or API friendly. Customize portfolio via JSON or APIs </p>
                </div>
              </div>
              <div className="about-icon col d-flex align-items-start">
                <i className='fab fa-react text-bg-primary bg-primary p-2 mx-3'></i>
                <div>
                  <h3 className="fw-bold mb-0 fs-4">Feature</h3>
                  <p>Paragraph of text beneath the heading to explain the heading.</p>
                </div>
              </div>

              <div className="about-icon col d-flex align-items-start">
                <i className='fab fa-react text-bg-primary bg-primary p-2 mx-3'></i>
                <div>
                  <h3 className="fw-bold mb-0 fs-4">Feature</h3>
                  <p>Paragraph of text beneath the heading to explain the heading.</p>
                </div>
              </div>
        </div>
      </div>

    </>
  )
}

export default About