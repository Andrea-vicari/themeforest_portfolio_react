// Create an array for each element with class .nav-link
let menu_links = document.querySelectorAll(".nav-link");

// Create an array for each element with class .main-section
let activeSection = document.querySelectorAll(".main-section");

for(let i=0;i<activeSection.length;i++){
activeSection[i].addEventListener("mouseenter",
(mouseEnter) =>{
  menu_links[i].className += " active";
});
activeSection[i].addEventListener("mouseleave",
(mouseLeave) =>{
  menu_links[i].className -= "active";
});
}

// Scroll to top button
// Get the button
let mybutton = document.getElementById("myBtn");

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
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}