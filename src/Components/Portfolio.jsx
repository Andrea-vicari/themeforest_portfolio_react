import React from 'react'
import portFolio from '../assets/works/works.json';


function Portfolio() {


    const categoryArray = [];

    portFolio.forEach(element => {
        categoryArray.push(element.category)

    });

    const uniqueFilters = ['All']


    function eliminateDuplicates(arr) {
        const arrayClone = [...arr];

        let supportObject = {};

        for (let i = 0; i < arrayClone.length; i++) {
          supportObject[arrayClone[i]] = 0;
        }
        for (let i in supportObject) {
          uniqueFilters.push(i);
        }
        console.log(uniqueFilters)
        return uniqueFilters;
    }

    eliminateDuplicates(categoryArray)

    console.log(uniqueFilters)

    function hidePort(ciao){
        console.log(ciao)
        document.getElementById(ciao).classList.add("d-block")

    }

    function showAll(){

    }

  return (
    <>
    <section id="portfolio" className="bg-body-secondary pb-5">
    <h1 className="section-title pt-5">Our Portfolio</h1>
        <p className='mb-3 text-center'>We are proud of what we do. This is just an example of our greatest projects.</p>

        <div>
            <div className="container gray-bg">
                <div className='container d-flex justify-content-center pt-1 mb-5'>
                    <div className="mx-auto">
                    {uniqueFilters.map((e)=>{
                    return(
                        <button key={e.title} onClick={()=>hidePort(e)} type="button" className="btn btn-outline-primary mx-2">{e}</button>
                        )})}
                    </div>
                </div>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                {portFolio.map((e)=>{
                    return(

                    <div className="col" id={e.category} key={e.title}>
                        <div className="card shadow-sm">
                            <img src={e.thumbImage}/>
                            <div className="card-body">
                            <p className="card-text">{e.excerpt}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                </div>
                                <small className="text-body-secondary">{e.category}</small>
                            </div>
                            </div>
                        </div>
                    </div>
                    )})}
                </div>


            </div>
        </div>
    </section>
    </>
  )
}

export default Portfolio