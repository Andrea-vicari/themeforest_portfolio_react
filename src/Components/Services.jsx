import React from 'react'

function Services() {
  return (
    <React.Fragment>
        <section id="services" className="white-bg padding-top-bottom">

        <div className="container">

            <h1 className="section-title">Our Services</h1>
            <p className="section-description">We create awesome Websites and Mobile Apps, the perfect solution for your project.We don't make designs, we make magic!</p>

            <div className="row services">

                <div className="col-sm-3 item text-center">

                    <div className="icon mb-3"><i className="fa fa-flag fs-1"></i></div>
                    <h3>Branding</h3>
                    <p>Phasellus ac mi quam. Suspendisse eu erat venenatis, euismod tellus sollicitudin, egestas lacus.</p>

                </div>

                <div className="col-sm-3 item text-center">

                    <div className="icon mb-3"><i className="fa fa-cogs fs-1"></i></div>
                    <h3>Design</h3>
                    <p>Phasellus ac mi quam. Suspendisse eu erat venenatis, euismod tellus sollicitudin, egestas lacus.</p>

                </div>

                <div className="col-sm-3 item text-center">

                    <div className="icon mb-3"><i className="fa fa-code fs-1"></i></div>
                    <h3>Development</h3>
                    <p>Phasellus ac mi quam. Suspendisse eu erat venenatis, euismod tellus sollicitudin, egestas lacus.</p>

                </div>

                <div className="col-sm-3 item text-center">

                    <div className="icon mb-3"><i className="fa fa-rocket fs-1"></i></div>
                    <h3>Rocket Science</h3>
                    <p>Phasellus ac mi quam. Suspendisse eu erat venenatis, euismod tellus sollicitudin, egestas lacus.</p>

                </div>

            </div>


            <h1 className="subsection-title">Our Process</h1>
            <p className="subsection-description">You are a serious company. You deserve a serious sollution.We'll be there from the beginning to the very end of your project's development.</p>

            <div className="process-box  in">

                <ul className="process-list">
                    <li>
                        <p className="icon mb-3"><i className="fa fa-search fa-fw"></i></p>
                        <h4>Research &amp; Analysis</h4>
                    </li>
                    <li>
                        <p className="icon mb-3"><i className="fa fa-pen fa-fw"></i></p>
                        <h4>Design</h4>
                    </li>
                    <li>
                        <p className="icon mb-3"><i className="fa fa-code fa-fw"></i></p>
                        <h4>Development</h4>
                    </li>
                    <li>
                        <p className="icon mb-3"><i className="fa fa-cogs fa-fw"></i></p>
                        <h4>Testing</h4>
                    </li>
                    <li className="colored">
                        <p className="icon mb-3"><i className="fa fa-globe fa-fw"></i></p>
                        <h4>Publish</h4>
                    </li>
                </ul>

                <div className="process-line"></div>

            </div>

            <p className="text-center">
                <a className="btn btn-outline-primary scrollto" href="#pricing">Check Our Prices</a>
            </p>

        </div>

    </section>

    </React.Fragment>
  )
}

export default Services