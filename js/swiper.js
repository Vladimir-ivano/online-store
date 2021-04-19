const Slider = new Swiper('.slider__body', {
  // Optional parameters
  observer: true,
  observeParenrs: true,
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 800,

  // If we need pagination
  pagination: {
    el: '.slider__dotts',
    clickable: true,
  },


  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});