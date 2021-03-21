'use strict';

document.addEventListener('DOMContentLoaded', function() {
	let burger = document.querySelector('.burger'), // Кнопка скрытия/раскрытия списка категорий.
		categoryList = document.querySelector('.menu__products'); // Списко категорий товарав.

	// Изменение состояния списка категорий с развёрнутого на свёрнутый и наоборот:
	burger.addEventListener('click', function() {
		categoryList.classList.toggle('activ');

	});
	VK.Widgets.Group("vk_groups", {mode: 0, width: "263",height: "263"}, 20003922);
	VK.Widgets.Group("vk_groups", {mode: 0, width: "263",height: "263"}, 20003922);
});

