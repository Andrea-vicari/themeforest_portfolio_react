import React from 'react'
import portFolio from '../assets/works/portfolio.json';
import { Link } from "react-router-dom";

function Portfolio() {

    // Declare a fixed length excerpt
    var fixedLengthExcerpt;
    // Function to short down a long description and generate an excerpt
    // the length can be set by editing "arrayPh.length = x"
    const shorter = (phrase) =>{
      let arrayPh = phrase.split(' ');
      arrayPh.length = 12;
      fixedLengthExcerpt = arrayPh.join(' ');
      return fixedLengthExcerpt
    }
    // Run shorter() and add an excerpt to each object of portfolio
    for(let i=0;i<portFolio.length;i++){
        shorter(portFolio[i].description)
        portFolio[i].fixedLengthExcerpt = fixedLengthExcerpt
    }

    // Empty array to get the categories
    const categoryArray = [];
    // Loop on portfolio and push the category into the array
    portFolio.forEach(element => {
        categoryArray.push(element.category)
    });
    // Declare an array with the first elemnt "all"
    const uniqueFilters = ['All']
    // Function to eliminate double category from the array
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
    // Run the eliminateDuplicates function on the array of categories
    eliminateDuplicates(categoryArray)

    // Function to filter the portfolio blocks
    function filterSelection(whatClicked){

        // array of all css props of portfolios block
        let allBlocks = document.getElementsByClassName('port_block')

        // Loop through all blocks
        for(let i =0; i<allBlocks.length;i++){
            // Array of the css props of single portfolio block
            let arrayOfPropsBlock = allBlocks[i].classList.value.split(' ')

            // Function to test if element is equal to whatClicked
            const isPresent = (element) => element == whatClicked;
                // If .some() returns false hide the blocks
                if(arrayOfPropsBlock.some(isPresent) == false && whatClicked != "All"){
                    allBlocks[i].classList.add('hidden')
                }
                // Otherwise shows the block whose cat is equal to whatclicked
                else{
                      allBlocks[i].classList.remove('hidden')
                      allBlocks[i].classList.add('visible')
                  }
          }
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
                        <button key={e} onClick={()=>filterSelection(e)} type="button" className="btn btn-outline-primary mx-2">{e}</button>
                        )})}
                    </div>
                </div>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                {portFolio.map((e)=>{
                    return(

                    <div key={e.title} className={"col" + " " + e.category + " " + "port_block"}>
                        <div className="card shadow-sm">
                            <img src={e.thumbImage}/>
                            <div className="card-body">
                                <p className="card-text">{e.fixedLengthExcerpt}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <Link className="btn btn-outline-primary p-1" to={`/singlePost/`}>
                                            <i className="fs-6 fa fa-search"></i> See Project
                                        </Link>
                                    </div>
                                    <small className="text-primary fs-6">{e.category}</small>
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