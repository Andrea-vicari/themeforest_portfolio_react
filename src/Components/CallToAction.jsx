import React from 'react'
import CtaImg from "../assets/images/omsel_screen1.jpg"


function CallToAction() {

  return (
    <React.Fragment>
        <section className="bg-primary light-typo py-5 call-to-action">

        <div className="container">

            <div className="row d-flex align-items-center">

                <div className="col-sm-6">
                    <img className="img-fluid rounded-4" src={CtaImg} alt=""/>
                </div>

                <div className="col-sm-5 col-sm-offset-1">

                    <h1 className='text-black'>Call to Action Section</h1>
                    <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in varius erat.</p>
                    <p className='text-black'>Nam id felis eu felis consequat adipiscing. Suspendisse sit amet faucibus nunc, dignissim vehicula enim. Vestibulum luctus turpis sit amet varius venenatis.</p>

                    <a className="btn btn-outline-light" href="#services"><i className="fa fa-arrow-down"></i> Check our service</a>

                </div>

            </div>

        </div>

    </section>
    </React.Fragment>
  )
}

export default CallToAction