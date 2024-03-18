import React from 'react'
import NewsImgFull from '../Components/images/news_images/bicycle_ride.jpg'
import NewsImgThumb from '../Components/images/news_images/bicycle_ride_thumb.jpg'

function News() {
  return (
    <>
    <section id="news" className="white-bg padding-top-bottom">

    <div className="container">

        <h1 className="section-title">Latest News</h1>
        <p className="section-description">We write about our travel stories and our thoughts. </p>

        <div className="timeline">

            <div className="date-title">
                <span>March 2014</span>
            </div>

            <div className="row">

                <div className="col-sm-6 news-item">

                    <div className="news-content">

                        <div className="date">
                            <p>28</p>
                            <small>Fri</small>
                        </div>

                        <h2 className="news-title">A Bicycle Ride</h2>

                        <div className="news-media">
                            <a className="colorbox" href={NewsImgFull}><img className="img-responsive"
                                    src={NewsImgThumb} alt="" /></a>
                        </div>

                        <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because
                            those who do not know how to pursue pleasure&hellip;</p>

                        <a className="read-more" href="#">Read More</a>

                    </div>
                </div>


            </div>


        </div>

        <p className="text-center"><a className="btn btn-qubico" href="blog/blog.html">Read our Blog</a></p>

    </div>

    </section>
    </>
  )
}

export default News