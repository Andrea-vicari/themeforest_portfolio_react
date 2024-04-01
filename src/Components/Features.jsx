import React from 'react'
import { useSelector} from 'react-redux'

function Features() {

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType;

  themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-black"

  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"

  return (
    <>
      <section id="features" className={"features"+ " " + bgType + " " + textType}>
          <div id='features_container' className="container">
              <h1 className="section-title pt-5">Features</h1>
              <p className='mb-5 text-center'>We are a small team with great skills.</p>
            <p className='text-center'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            <div className="row pt-3 pb-5">
              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon"><i className="fab fa-react"></i></div>
                <h4 className="title">React</h4>
                <p className="description">Coded with React, smooth user experience and device compatibility</p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon"><i className="fa fa-cog"></i></div>
                <h4 className="title">Components</h4>
                <p className="description">Functional components, well organized and fully reusable</p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon"><i className="fab fa-css3"></i></div>
                <h4 className="title">Bootstrap5</h4>
                <p className="description">Coded using Bootstrap5 framework, to speed up future developments</p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon"><i className="fa fa-palette"></i></div>
                <h4 className="title">Clean</h4>
                <p className="description">Clean and elegant design suitable for many projects and business</p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon"><i className="fab fa-android"></i></div>
                <h4 className="title">Responsive</h4>
                <p className="description">Responsive layout, perfectly showcase your projects in all devices</p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon"><i className="fab fa-js"></i></div>
                <h4 className="title">JSON</h4>
                <p className="description">JSON or API friendly. Customize portfolio via JSON or APIs </p>
              </div>
            </div>

          </div>
        </section>
    </>
  )
}

export default Features