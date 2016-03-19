//Заполнение массива через prompt, дальнейшая верификация пользователя

//Записываем в массив из 5 индексов допустимые имена пользователей
var names = [];
var n = 5;
for(var i = 0; i < n; i++){
    names[i] = prompt('Введите имя пользователя', '');
    };
alert (names);
console.log(names);

//Проверяем есть ли имя пользователя в массиве, приветствие или сообщение об ошибке

function enterTo() {
var userName;
userName = prompt('Самый мудрый, успешный, спортивный пользователь, пожалуйста, введите Ваше имя!', '');
for(i = 0; i<names.length; i++) {
if((userName === null) || (userName === '')) {
alert('К сожалению, все ушли на обед, приходите завтра.')
return;
}
else if (userName === names[i]) {
alert(userName + ', вот это да, вы успешно вошли!');
return; 
}
else {
alert('К сожалению, все ушли на обед, приходите завтра.')
return;
}   
}
};

enterTo();

