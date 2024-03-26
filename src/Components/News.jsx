import React from 'react'
import newsList from '../assets/news/news.json';


function News() {

        // This for loop is to assign the class "rigth" every two blocks
        // in order to create the Timeline effect

       for(let i=0;i<newsList.length;i++){
        i % 2 !== 0 ? newsList[i].side = "right" : newsList[i].side = "left"
        }


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

            {newsList.map((e)=>{

                return(

                <div id='news_block' className={"col-sm-6 news-item" + " " + e.side}>

                    <div className="news-content">

                        <div className="date">
                            <p>{e.Date}</p>
                            <small>{e.Month}</small>
                        </div>

                        <h2 className="news-title">{e.title}</h2>
                            <div className="news-media">
                                <a className="colorbox cboxElement" href={e.NewsImg}>
                                    <img className="img-responsive" src={e.ThumbImg} alt=""/>
                                </a>
                            </div>

                        <p>{e.excerpt}</p>

                        <a className="read-more" href="#">Read More</a>

                    </div>
                </div>
                )})}

            </div>
        </div>

        <p className="text-center"><a className="btn btn-primary mt-1 p-3 fs-5" href="blog/blog.html">Read our Blog</a></p>

    </div>

    </section>
    </>
  )
}

export default News