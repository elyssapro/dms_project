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