import React from 'react'

function Footer() {
  var mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

return (
    <React.Fragment>
    <footer id="main-footer" className="bg-primary light-typo">
        <div className="container text-center">
            <ul className="social-links">
                <li><a href="#link"><i className="fab fa-github fa-fw"></i></a></li>
                <li><a href="#link"><i className="fab fa-facebook fa-fw"></i></a></li>
                <li><a href="#link"><i className="fab fa-codepen fa-fw"></i></a></li>
                <li><a href="#link"><i className="fab fa-linkedin fa-fw"></i></a></li>
            </ul>
            <hr></hr>
            <p>&copy;2024 Proudly coded using React and ready to showcase your next projects</p>
        </div>
        <div>
        <button onClick={topFunction} id="myBtn" title="Go to top">
          <i className='fa fa-arrow-up'></i>
        </button>
      </div>
    </footer>
    </React.Fragment>
  )
}

export default Footer