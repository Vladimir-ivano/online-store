//меню бургера
const iconsMenu = document.querySelector( ' .burger');
if(iconsMenu ) {
  const iconBody = document.querySelector( '.navigation__nav');
  iconsMenu .addEventListener("click", function(e){
    iconsMenu.classList.toggle( 'activ')
    iconBody.classList.toggle( 'activ')
  });
};


