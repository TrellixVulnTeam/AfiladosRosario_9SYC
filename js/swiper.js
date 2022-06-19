var swiper = new Swiper(".mySwiper", {
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
    },
    grabcursor: true,

    breakpoints: {
        620: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        680: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        920: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1240: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
      }
  })

 

