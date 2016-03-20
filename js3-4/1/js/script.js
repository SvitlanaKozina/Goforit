var parentElem = document.body;

var newBox = document.createElement('div');
newBox.className = 'shapka';
newBox.innerHTML = '<strong>Тест по программированию</strong>';

parentElem.appendChild(newBox);

var menu_js = document.createElement('ol');
menu_js.className = 'test';
newBox.appendChild(menu_js);


var questions1 = document.createElement('li');
questions1.innerHTML = '<strong>Вопрос №1 </strong>';
menu_js.insertBefore(questions1, menu_js.firstChild);

var questions1_menu_js = document.createElement('ul');
questions1_menu_js.className = 'sub_menu_test_questions';
questions1.appendChild(questions1_menu_js);

var q1_answer1 = document.createElement('li');
q1_answer1.innerHTML = 'Вариант ответа №1';
questions1_menu_js.appendChild(q1_answer1);

var q1_check1 = document.createElement('input');
q1_check1.type = 'checkbox';
q1_answer1.insertBefore(q1_check1, q1_answer1.firstChild);

var q1_answer2 = document.createElement('li');
q1_answer2.innerHTML = 'Вариант ответа №2';
questions1_menu_js.appendChild(q1_answer2);

var q1_check2 = document.createElement('input');
q1_check2.type = 'checkbox';
q1_answer2.insertBefore(q1_check2, q1_answer2.firstChild);

var q1_answer3 = document.createElement('li');
q1_answer3.innerHTML = 'Вариант ответа №3';
questions1_menu_js.appendChild(q1_answer3);

var q1_check3 = document.createElement('input');
q1_check3.type = 'checkbox';
q1_answer3.insertBefore(q1_check3, q1_answer3.firstChild);



var questions2 = document.createElement('li');
questions2.innerHTML = '<strong>Вопрос №2 </strong>';
menu_js.appendChild(questions2);

var questions2_menu_js = document.createElement('ul');
questions2_menu_js.className = 'sub_menu_test_questions';
questions2.appendChild(questions2_menu_js);

var q2_answer1 = document.createElement('li');
q2_answer1.innerHTML = 'Вариант ответа №1';
questions2_menu_js.appendChild(q2_answer1);

var q2_check1 = document.createElement('input');
q2_check1.type = 'checkbox';
q2_answer1.insertBefore(q2_check1, q2_answer1.firstChild);

var q2_answer2 = document.createElement('li');
q2_answer2.innerHTML = 'Вариант ответа №2';
questions2_menu_js.appendChild(q2_answer2);

var q2_check2 = document.createElement('input');
q2_check2.type = 'checkbox';
q2_answer2.insertBefore(q2_check2, q2_answer2.firstChild);

var q2_answer3 = document.createElement('li');
q2_answer3.innerHTML = 'Вариант ответа №3';
questions2_menu_js.appendChild(q2_answer3);

var q2_check3 = document.createElement('input');
q2_check3.type = 'checkbox';
q2_answer3.insertBefore(q2_check3, q2_answer3.firstChild);



var questions3 = document.createElement('li');
questions3.innerHTML = '<strong>Вопрос №3 </strong>';
menu_js.appendChild(questions3);

var questions3_menu_js = document.createElement('ul');
questions3_menu_js.className = 'sub_menu_test_questions';
questions3.appendChild(questions3_menu_js);

var q3_answer1 = document.createElement('li');
q3_answer1.innerHTML = 'Вариант ответа №1';
questions3_menu_js.appendChild(q3_answer1);

var q3_check1 = document.createElement('input');
q3_check1.type = 'checkbox';
q3_answer1.insertBefore(q3_check1, q3_answer1.firstChild);

var q3_answer2 = document.createElement('li');
q3_answer2.innerHTML = 'Вариант ответа №2';
questions3_menu_js.appendChild(q3_answer2);

var q3_check2 = document.createElement('input');
q3_check2.type = 'checkbox';
q3_answer2.insertBefore(q3_check2, q3_answer2.firstChild);

var q3_answer3 = document.createElement('li');
q3_answer3.innerHTML = 'Вариант ответа №3';
questions3_menu_js.appendChild(q3_answer3);

var q3_check3 = document.createElement('input');
q3_check3.type = 'checkbox';
q3_answer3.insertBefore(q3_check3, q3_answer3.firstChild);


var btn = document.createElement (('v' == '\v') ? '<input name="myName">' : 'input'); btn.name = 'myName';
btn.type = 'button'; 
btn.id = 'myUniqueID';
btn.value = 'Проверить мои результаты'; 
 
parentElem.appendChild (btn);