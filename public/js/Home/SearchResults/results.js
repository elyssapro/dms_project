function openSearchPanel(){
    document.querySelector('.search-panel').style.display = 'block';
    var search_input = document.querySelector('.search-input');
    search_input.focus();
}

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("header-section");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}