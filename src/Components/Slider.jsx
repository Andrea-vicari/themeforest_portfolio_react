
import React from 'react'
import slide1 from "../Components/images/space_bg.jpg"
import slide2 from "../Components/images/NetworkBackground.jpg"

function Slider() {
  return (
    <React.Fragment>
        <div id="myCarousel" className="carousel carousel-fade slide mb-6" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>

    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={slide1} />
        <div className="container">
          <div className="carousel-caption text-center">
            <h1>FrontEnd web developer</h1>
            <p className="opacity-75">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione a, voluptatibus modi veniam perspi</p>
            <p><a className="btn btn-lg btn-primary" href="#">Check my portfolio</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
      <img src={slide2} />
        <div className="container">
          <div className="carousel-caption text-center">
            <h1>Creative agency</h1>
            <p>We create awesome Websites and Mobile Apps, the perfect solution for your project.</p>
            <p><a className="btn btn-lg btn-primary" href="#">Our services</a></p>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    </React.Fragment>
  )
}

export default Slider