





let sliderBody = new Swiper('.swiper-container', {
  /*
    effect: 'fade',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    */
    observer:true,
    observerParents: true,
    slidesPerView: 1,
    autoHeight: true,
    speed: 800,
    //spaceBetween: 0,
    //loop: true,
    //touchRatio: 0 ,
    //simuLateTouch: false,
    //Lazy: true
    //Dotts
    pagination: {
      el: '.slider__dotts',
      clickable: true,
    },
    
    //Arrws
    /*
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    */
    /*
      breakpoints:{
        320:{
          slidesPerView: 1,
          autoHeight: true,
          spaceBetween: 0,
        },
        720{
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992{
          spaceBetween: 20,
          slidesPerView: 3,
        },
        1286{
          spaceBetween: 30,
          slidesPerView: 4,
        },

      },
    */

    on:{
      lazyImageReady: function(){
        ibg();
      },
    }  
    // And if we need scrollbar
  //scrollbar: {
    //el: '.swiper-scrollbar',
  //},
});