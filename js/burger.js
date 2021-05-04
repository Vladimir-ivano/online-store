//меню бургера

const iconsMenu = document.querySelector( ' .burger');
if(iconsMenu ) {
  const iconBody = document.querySelector( '.navigation__nav ');
  iconsMenu .addEventListener("click", function(e){
    iconsMenu.classList.toggle( 'activ')
    iconBody.classList.toggle( 'activ')
  });
};
const iconsMenu = document.querySelector( '.search__btn');
if(iconsMenu ) {
  const iconBody = document.querySelector( '.search__categories');
  iconsMenu .addEventListener("click", function(e){
    iconsMenu.classList.toggle( 'activ')
    iconBody.classList.toggle( 'activ')
  });
}