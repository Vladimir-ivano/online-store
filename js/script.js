'use strict';

document.addEventListener('DOMContentLoaded', function() {
	let burger = document.querySelector('.burger'), // Кнопка скрытия/раскрытия списка категорий.
		categoryList = document.querySelector('.menu__products'); // Списко категорий товарав.

	// Изменение состояния списка категорий с развёрнутого на свёрнутый и наоборот:
	burger.addEventListener('click', function() {
		categoryList.classList.toggle('activ');
	});
});