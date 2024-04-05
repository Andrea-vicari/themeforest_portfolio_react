import React from 'react'

function CallToActionSmall() {
  return (
<section className="bg-primary py-5">

        <div className="container">

            <div className="row d-flex align-items-center">
                <div className="col-md-9">
                    <h2 className='display-4 fw-bolder text-black'>Call to Action</h2>
                    <p className=' text-black-50 fs-4'>Call to action (CTA) is a marketing term for any device designed to prompt an immediate response or encourage an immediate sale.</p>
                </div>
                <div className="col-md-3 mt-3">
                    <p className="text-center">
                        <a className="btn btn-outline-dark btn-lg p-3" href="#link">
                            <i className="fs-3 fa fa-shopping-cart"></i> Purchase Now
                        </a>
                    </p>
                </div>
            </div>

        </div>

    </section>
    )
}

export default CallToActionSmall