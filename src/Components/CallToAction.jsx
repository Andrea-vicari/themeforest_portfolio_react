import React from 'react'
import CtaImg from "../Components/images/react_port_cover_cropped.jpg"


function CallToAction() {
  return (
    <React.Fragment>
        <section className="bg-primary light-typo padding-top-bottom cta-iphones">

        <div className="container">

            <div className="row">

                <div className="col-sm-6">
                    <img className="img-fluid rounded-4" src={CtaImg} alt=""/>
                </div>

                <div className="col-sm-5 col-sm-offset-1">

                    <h2>Are You Ready To Enjoy?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in varius erat.</p>
                    <p>Nam id felis eu felis consequat adipiscing. Suspendisse sit amet faucibus nunc, dignissim vehicula enim. Vestibulum luctus turpis sit amet varius venenatis.</p>

                    <a className="btn btn-outline-light" href="#services"><i className="fa fa-arrow-down"></i>See the magic</a>

                </div>

            </div>

        </div>

    </section>
    </React.Fragment>
  )
}

export default CallToAction