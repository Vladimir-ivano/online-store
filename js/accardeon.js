$(document).ready(function() {
  $('.filter__title').click(function(event){
      $(this).toggleClass('active').next().slideToggle(300);
  });
})