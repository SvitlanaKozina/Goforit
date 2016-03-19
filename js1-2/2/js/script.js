//Заполнение массива через prompt, дальнейшая проверка имени пользователя

//Записываем в массив из 5 индексов допустимые имена пользователей
var names = [];
var n = 5;

for(var i = 0; i < n; i++){
    names[i] = prompt('Введите имя пользователя', '');
    };
alert(names);
console.log(names);

//Проверяем есть ли имя пользователя в массиве, приветствуем или сообщаем об ошибке

function enterTo() {

var result;
result='startRes';
var userName;
userName = prompt('Уважаемый пользователь, введите Ваше имя:', '');

for(i = 0; i < names.length; i++) {
  if((userName === null) || (userName === '')) {
    alert('К сожалению, все ушли на обед, приходите завтра.');
    result = 'unknUser';
    console.log(result);
    return result;} else if(userName == names[i]) {
    alert(userName + ', вот это да, Вы успешно вошли!:)');
    result = 'ourUser';
    console.log(result);
    return result;} else {
    result = 'otherUser';
    console.log(result);
    }};
if(result = 'otherUser'){
    alert('Имя не найдено, зарегистрируйтесь.');
    return result;
}
};

enterTo();