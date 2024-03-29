import React from 'react'

function ModalPortfolio() {

    const closeModal = () =>{
        document.getElementById('portfolioModal').classList.add("d-none");
      }


    return (
        <>

       {/** MODAL */}
       <div className="modal modal-sheet bg-dark px-4 py-md-5" tabIndex="-1" role="dialog" id="portfolioModal">
                <div className="modal-dialog-centered modal-md bg-dark" role="document">
                  <div className="modal-content rounded-4 shadow bg-success" >
                    <div className="modal-header d-flex justify-content-between">

                      <h2 className="modal-title text-white text-center">MESSAGE SENT!</h2>

                    </div>
                    <div className="modal-body py-3 text-white">

                    <h4 className="text-white mt-3 fw-bold">Thanks for contacting!</h4>
                    <h5 className="text-white mt-3 fw-bold">We will take care of your request</h5>
                      </div>

                    <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">

                      <div className="modal-footer">
                        <button type="button" onClick={()=>closeModal()} className="btn btn-danger align-items-center" data-bs-dismiss="modal" aria-label="Close">
                        <i className='fa fa-times px-2 fs-4'></i>Close
                          </button>
                      </div>
                    </div>
                </div>
              </div>
              </div>
              {/** END MODAL */}

        </>
      )
    }

export default ModalPortfolio