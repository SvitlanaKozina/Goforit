$(function (){
	$('.carousel-element').mycarousel();
	
	var html = $('#test').html();
	var I = {
		title: 'Козина Светлана Александровна',
		slogan: 'Никогда не сдаюсь, могу, хочу и буду!!!',
		question: 'Хочу учить фронтенд, потому что:',
		answer1: 'Быть программистом - моя мечта!',
		answer2: 'ИТ-технологиям принадлежит будущее!',
		answer3: 'Фронтенд - отличная зарядка для мозгов:)',
		tel: '+380000000000',
		vk: 'vk.vk',
	};
	var content = tmpl(html, {
		data: I});
	
	$('body').append(content);
})   