//меню бургера

const iconMenu = document.querySelector( ' .burger');
if(iconMenu ) {
  const iconBody = document.querySelector( '.nav__navigation ');
  iconMenu .addEventListener("click", function(e){
    iconMenu.classList.toggle( 'activ')
    iconBody.classList.toggle( 'activ')
  });
}