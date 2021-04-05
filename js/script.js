'use strict';

document.addEventListener('DOMContentLoaded', function() {
 let catalog = document.querySelector('.catalog'), // Каталог товаров.
     burger = catalog.querySelector('.catalog__btn-switch'), // Кнопка скрытия/раскрытия списка категорий.
     categoriesList = catalog.querySelector('.catalog__category'), // Список категорий.
     categories = catalog.querySelectorAll('.catalog__item'), // Пункты категорий.
     submenu = catalog.querySelectorAll('.catalog__submenu-item'), // Пункты подменю.
     classCategoriesList = 'is-visible-list', // Класс активации списка категорий.
     classSubmenu = 'is-visible-submenu', // Класс активации блока подменю.
     classActive = 'is-active', // Класс активации элемента.
     numberSubmenu, // Номер пункта меню, активировавший блок подменю.
     counterSubmenu = 0; // Счётчик блоков подменю, списка категорий.

 // Изменение состояния списка категорий с развёрнутого на свёрнутый и наоборот:
 burger.addEventListener('click', function() {
  if (!catalog.classList.contains(classCategoriesList)) {
   categoriesList.style.maxHeight = (categories[0].offsetHeight*categories.length) + 100 + 'px';
   catalog.classList.add(classCategoriesList);

  } else {
   categoriesList.style.maxHeight = 0;
   catalog.classList.remove(classCategoriesList);
  };

  catalog.classList.remove(classSubmenu);
 });
 
 // Открытие/закрытие подменю, по клику на категорию каталога:
 for (let ci = 0; ci < categories.length; ci++) {
  let item = categories[ci];
  
  if (item.querySelector('svg')) {
   item.setAttribute('data-number-submenu', counterSubmenu);
   counterSubmenu++;

   item.addEventListener('click', function() {
    let currentSubmenu = +item.getAttribute('data-number-submenu');

    if (!catalog.classList.contains(classSubmenu)) {
     catalog.classList.add(classSubmenu);
     numberSubmenu = ci;

    } else {
     if (ci === numberSubmenu && submenu[currentSubmenu].classList.contains(classActive)) catalog.classList.remove(classSubmenu);
    };

    switchClassBetweenItems(currentSubmenu, submenu);
   });
  };
 };
 
 /* Функция переключения класса между элементами.
  @param {NUMBER} selectedItemNumber - номер выбранного элемента.
  @param {ARRAY} listItems - список элементов, между котороми будет переключение класса. */
 function switchClassBetweenItems(selectedItemNumber, listItems) {
  for (let li = 0; li < listItems.length; li++) {
   let item = listItems[li];
   
   selectedItemNumber === li ? item.classList.add(classActive) : item.classList.remove(classActive);
  };
 };
});
