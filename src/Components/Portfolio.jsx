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

        return uniqueFilters;
    }

    eliminateDuplicates(categoryArray)

    console.log(uniqueFilters)

    function showAll(){
        let allBlocks = document.getElementsByClassName('port_block')

        for(let i=0;i<allBlocks.length;i++){
            allBlocks[i].style.display = "block"
          }
    }
    showAll()



    function filterSelection(whatClicked){

        let toTest = whatClicked;
        console.log(toTest)

        if(toTest == "All"){
        showAll()
        }

        let allBlocks = document.getElementsByClassName('port_block')
        let figa = document.getElementsByClassName(`${toTest}`)
        // figa[i].style.display = "block"
        console.log(figa[0])
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
                        <button key={e.title} onClick={()=>filterSelection(e)} type="button" className="btn btn-outline-primary mx-2">{e}</button>
                        )})}
                    </div>
                </div>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                {portFolio.map((e)=>{
                    return(

                    <div className={"col" + " " + e.category + " " + "port_block"} key={e.title}>
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