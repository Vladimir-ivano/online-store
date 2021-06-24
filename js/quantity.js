const orderItems = document.querySelectorAll('.order__items'), // Все карточки корзины.
	totalSum = document.querySelector('#total-prise'); // Итоговая сумма всех товаров в корзине.

// Установка начального значения итоговой суммы товаров в корзине, если оно не установлено.
if (orderItems.length === 0) totalSum.textContent = 0;

// Переберем все имеющиеся карточки и навесим функционала на каждую:
for (let oi = 0; oi < orderItems.length; oi++) {
	const orderItem = orderItems[oi], // Карточка товара.
		inputCount = orderItem.querySelector('.quantity__inputs'), // Поле количества штук этого товара.
		productPrice = +inputCount.getAttribute('data-prise'), // Цена товара.
		btnMinus = orderItem.querySelector('.quantity__button-minus'), // Кнопка уменьшения количества.
		btnPlus = orderItem.querySelector('.quantity__button-plus'), // Кнопка увеличения количества.
		totalPrice = orderItem.querySelector('.order__total__prise'); // Итоговая цена товара.

	let counterItem = 1; // Начальное количество товара.

	// Установка начального значения количества штук товара, если оно не установлено.
	if (inputCount.value === '' || inputCount.value === 0) inputCount.value = counterItem;

	// Изменение итоговой суммы исходя от выбранных товаров:
	if ((totalSum.textContent === '' || totalSum.textContent === 0) && orderItems.length > 0) totalSum.textContent += productPrice;

	// Уменьшение количества штук товара и уменьшение общей цены за товар:
	btnMinus.addEventListener('click', function() {
		counterItem <= 1 ? counterItem = 1 : counterItem--;
		totalPrice.textContent = productPrice*counterItem;
	});

	// Увеличение количества штук товара и увеличение общей цены за товар:
	btnPlus.addEventListener('click', function() {
		counterItem++;
		totalPrice.textContent = productPrice*counterItem;
	});
};
