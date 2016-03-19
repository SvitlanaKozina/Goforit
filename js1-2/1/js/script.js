//Возведение числа a в степень b

var a = prompt('Введите число a:', '');
var b = prompt('Введите степень b:', '');

function pow(a, b) {
  var result = a;
  for (var i = 1; i < b; i++) {
  result *= a;
  }
  console.log(result);
  return result;
}

//Задаем условие, согласно которому используем только целые числа, и запускаем функцию
if (parseInt(a) != a) {
  alert('Число ' + a +  'не поддерживается, введите целое число');
} 
else if (parseInt(b) != b) {
  alert('Степень ' + b +  'не поддерживается, введите целую степень');
}
else {
  alert( pow(a, b) );
}