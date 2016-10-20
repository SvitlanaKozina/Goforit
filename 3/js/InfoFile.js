'use strict'
var info = {
	title: 'Тест №1',
	toDo: 'Уважаемый пользователь, ответьте на вопросы. На вопрос №3 есть 2 правильных ответа, на остальные -  только 1.',
	question: [
		{
			text: 'Какое событие не вызывается кликом мыши ?',
			answer: [
				{text: 'onfocus', check: false},
				{text: 'onclick', check: false},
				{text: 'onkeydown', check: true},
			]
		},	
		
		{
			text: 'Какие конструкции для циклов есть в javascript?',
			answer: [
				{text: 'Только две: for и while.', check: false},
				{text: 'Только одна: for', check: false},
				{text: 'Три: for, while и do...while.', check: true},
			]
		},	
		
		{
			text: 'Какой код корректно найдёт максимальное значение в непустом массиве arr?',
			answer: [
				{text: 'arr.reduce(function(prev, item) { return Math.max(prev, item) })', check: true},
				{text: 'Math.max(arr)', check: false},
				{text: 'Math.max.apply(null, arr)', check: true},
			]
		},	
	]	
};	

	localStorage.setItem('info',JSON.stringify(info));
	var info = JSON.parse(localStorage.getItem('info'));
	