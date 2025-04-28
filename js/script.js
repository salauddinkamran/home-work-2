AOS.init();



let swiperTestimonial = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 30,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    768: {
      slidesPerView: 1,
      conteredSlides: true,
    },
    992: {
      slidesPerView: 2,
      conteredSlides: true,
    },
    1150: {
      slidesPerView: 3,
      conteredSlides: true,
    },
  }
})