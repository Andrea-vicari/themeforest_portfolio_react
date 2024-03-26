import React from 'react'
import CtaImg from "../Components/images/react_port_cover_cropped.jpg"
import { useSelector, useDispatch } from 'react-redux'

function CallToAction() {
  const count = useSelector((state) => state.counter.value)
  return (
    <React.Fragment>
        <section className="bg-primary light-typo padding-top-bottom call-to-action">

        <div className="container">

            <div className="row">

                <div className="col-sm-6">
                    <img className="img-fluid rounded-4" src={CtaImg} alt=""/>
                </div>

                <div className="col-sm-5 col-sm-offset-1">

                    <h1>Call to Action Section {count}</h1>
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