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

  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");
  var swiper = new Swiper(".mySwiperautoplay", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      }
    }
  });


  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      },
      pagination: {
      el: ".swiper-pagination",
      clickable: true,
      },
      navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      },
  });

  var swiper_cube = new Swiper(".mySwipercube", {
      effect: "cube",
      grabCursor: true,
      autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      },
      cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
      },
      pagination: {
      el: ".swiper-pagination",
      },
  });

  const testmony_grid = document.querySelector('.test-grid');
  const testTemplate = document.getElementById('test-template');
  for(let i = 0; i < 4; i++) {
    
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

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper_cube = new Swiper(".mySwipercube", {
    effect: "cube",
    grabCursor: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
  