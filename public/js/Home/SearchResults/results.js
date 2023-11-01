function openSearchPanel(){
    document.querySelector('.search-panel').style.display = 'block';
    var search_input = document.querySelector('.search-input');
    search_input.focus();
}

/**
 * Fetching students informations
 */

const grid = document.querySelector('.grid');
const schoolTemplate = document.getElementById('card-template');
for(let i = 0; i < 24; i++){
    grid.append(schoolTemplate.content.cloneNode(true));
}

fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(posts => {
    grid.innerHTML = ''
    posts.forEach(post => {
        const div = schoolTemplate.content.cloneNode(true);
        div.querySelector('[data-title]').textContent = post.title;
        div.querySelector('[data-body]').textContent = post.body;
        grid.append(div);
    })
})


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