import React from 'react'
import portimg from "../Components/images/portfolio_images/bicycle_ride.jpg"

function Portfolio() {




  return (
    <>
    <section id="portfolio" className="bg-body-secondary pb-5">
    <h1 className="section-title pt-5">Our Portfolio</h1>
        <p className='mb-3 text-center'>We are proud of what we do. This is just an example of our greatest projects.</p>

        <div>
            <div className="container gray-bg">
                <div className='container d-flex justify-content-center pt-1 mb-5'>
                    <div className="mx-auto">
                        <button type="button" className="btn btn-outline-primary mx-2">Apple</button>
                        <button type="button" className="btn btn-outline-primary mx-2">Samsung</button>
                        <button type="button" className="btn btn-outline-primary mx-2">Sony</button>
                    </div>
                </div>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div className="col">
                    <div className="card shadow-sm">
                        <img src={portimg}/>
                        <div className="card-body">
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small className="text-body-secondary">Category</small>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>


            </div>
        </div>
    </section>
    </>
  )
}

export default Portfolio