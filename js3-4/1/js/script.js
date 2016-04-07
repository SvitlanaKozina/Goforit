test = {
makerBody: function(){
    var box = document.createElement('div');
    box.className = "box_class";
    var body = document.body;
    body.appendChild(box);
    var title = document.createElement('h2');
    title.innerHTML = "Тест по программированию";
    box.appendChild(title);
    var menu_js = document.createElement('ol');
    menu_js.className = 'menu_js';
    box.appendChild(menu_js);
    for(var i = 1; i < 4; i++){
    var qw = document.createElement("li");
    qw.innerHTML = "Вопрос №" + i;
    menu_js.appendChild(qw);
    for(var b = 1; b < 4; b++){
    var ans = document.createElement('p');
    ans.innerHTML = " Вариант ответа №" + b;
    qw.appendChild(ans);
    var check = document.createElement('input');
    check.type = 'checkbox';
    ans.insertBefore(check, ans.firstChild)}}},
makerBtn: function(){
    var box = document.getElementsByTagName("div")[0];
    var btn = document.createElement (('v' == '\v') ? '<input name="myName">' : 'input'); 
    btn.name = 'myName';
    btn.type = 'button'; 
    btn.value = 'Проверить мои результаты'; 
    box.appendChild(btn)}};

test.makerBody();
test.makerBtn();
