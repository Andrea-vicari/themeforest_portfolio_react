import React from 'react'
import newsList from '../assets/news/news.json';
import { useSelector} from 'react-redux'


function News() {

        // This for loop is to assign the class "rigth" every two blocks
        // in order to create the Timeline effect

       for(let i=0;i<newsList.length;i++){
        i % 2 !== 0 ? newsList[i].side = "right" : newsList[i].side = "left"
        }


        const themeType = useSelector((state) => state.counter.value)

        let bgType, textType, textColor;

        themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
        themeType == "ligth" ? textType = "" : textType = "text-bg-dark"
        themeType == "ligth" ? textColor = "" : textColor = "text-body-secondary"

  return (
    <>
    <section id="news" className={"padding-top-bottom"+ " " + bgType + " " + textType}>

    <div className="container">

        <h1 className="section-title">Latest News</h1>
        <p className="section-description">We write about our travel stories and our thoughts. </p>

        <div className="timeline">

            <div className="date-title">
                <span>Jan 2024</span>
            </div>

            <div className="row">

            {newsList.map((e)=>{

                return(

                <div id='news_block' key={e.title} className={"col-sm-6 news-item" + " " + e.side}>

                    <div className="news-content">

                        <div className="date">
                            <p>{e.Date}</p>
                            <small>{e.Month}</small>
                        </div>

                        <h2 className={"news-title" + " " + textColor}>{e.title}</h2>
                            <div className="news-media">
                                <a className="colorbox cboxElement" href={e.NewsImg}>
                                    <img className="img-responsive" src={e.ThumbImg} alt=""/>
                                </a>
                            </div>

                        <p className={textColor}>{e.excerpt}</p>

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