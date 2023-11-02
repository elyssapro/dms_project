window.onscroll = function() {myFunction()};
        
var navbar = document.querySelector(".header-section");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    } else {
    navbar.classList.remove("sticky");
    }
}


function openSearchPanel(){
    document.querySelector('.search-panel').style.display = 'block';
    var search_input = document.querySelector('.search-input');
    search_input.focus();
}

const inte_grid = document.querySelector('.inte-grid');
const inteTemplate = document.getElementById('small-content-container');
for(let i = 0; i < 4; i++){
  inte_grid.append(inteTemplate.content.cloneNode(true));
}

fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(posts => {
  inte_grid.innerHTML = '';
  posts.forEach(post => {
    const div = inteTemplate.content.cloneNode(true);
    div.querySelector('[data-content-title]').textContent = post.title;
    div.querySelector('[data-content-body]').textContent = post.body;
    inte_grid.append(div)
  })
})


var swiperslidesystem = new Swiper(".mySwiperslidesystem", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    },
});


var swipervertical = new Swiper(".mySwipervertical", {
  direction: "vertical",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    }
});


  const testmony_grid = document.querySelector('.test-grid');
  const testTemplate = document.getElementById('test-template');
  for(let i = 0; i < 8; i++) {
    
    testmony_grid.append(testTemplate.content.cloneNode(true));
  }

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(posts => {
    testmony_grid.innerHTML = '';
    posts.forEach(post => {
      const div = testTemplate.content.cloneNode(true);
      div.querySelector('[data-title]').textContent = post.title;
      div.querySelector('[data-body]').textContent = post.body;
      testmony_grid.append(div)
    })
  })

  