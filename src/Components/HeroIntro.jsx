import React from 'react'

function HeroIntro() {
  return (
    <>
<section id="hero">
    <div className="hero-container" id='intro'>
      <h1 className='text-center tracking-in-expand'>Web developer</h1>
      <h2 className='text-center tracking-in-expand-slow'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In deserunt quibusdam</h2>
      <a href="#services" className="btn-scroll btn scrollto bounce-top" title="Scroll Down">
        <i className="fa fa-chevron-down"></i>
      </a>
    </div>
  </section>
    </>
  )
}

export default HeroIntro