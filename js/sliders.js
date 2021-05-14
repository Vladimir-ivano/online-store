let sliders = document.querySelectorAll('._swiper');
if(sliders) {
  for (let index = 0 ; index < sliders.length; index++ ){
    let slider = sliders[index];
    if(!slider.classList.contains('swiper-bild')){
    let  slider_items = slider.children;
      if(slider_items) {
        for(let index = 0;index < slider_items.length; index++){
          let el = slider_items[index];
          el.classList.add('swiper-slide');
        }
      }
      let slider_content = slider.innerHTML;
      let slider_wrapper = document.createElement('div');
      slider_wrapper.classList.add('swiper-wrapper');
      slider_wrapper.innerHTML = slider_content;
      slider.innerHTML = '';
      slider.appendChild(slider_wrapper);
      slider.classList.add('swiper-bild');
    }
    if(slider.classList.contains('_gallery')){
    //slider.data('lidhtGallery').destroy(true);
    }
  }

  sliders_bild_callback();

}
function sliders_bild_callback(params) { }




if(document.querySelector('.slider__body')){
  let sliderBody = new Swiper('.slider__body', {
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
    speed: 900,
    spaceBetween: 0,
    loop: true,
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
  let sliderImages = document.querySelectorAll('.slider__image');
  let sliderDotts = document.querySelectorAll('slider__dotts .swiper-pagination-bullet');
  for (let index = 0 ; index < sliderImages.length; index++){
    const sliderImage = sliderImages[index].querySelector('img').getAttribute('src');
    sliderDotts[index].style.backgroundImage = "url('+ sliderImage + ')"
  }

}