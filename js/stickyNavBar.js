window.onscroll = function() {myFunction()};

var navbar = document.getElementById("flowWindow");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= 680) {
    navbar.classList.add("flowWindowAbs")
  } else {
    navbar.classList.remove("flowWindowAbs");
  }
}