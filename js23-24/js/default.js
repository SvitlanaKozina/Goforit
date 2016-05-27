$(function() {
var  arrtasks = []; 
var todo = {
arrtasks: arrtasks
};
var new_task;
var identMyTemplInHTML;
var readyMyTempl;
var obj;

//Добавляем новую задачу:
$('#forma_cr').submit(function(){
  $('.tasks').empty();
  new_task = $('.inp_text').val();
  arrtasks.push(new_task);
  todo = {
    arrtasks: arrtasks}; 
  obj=JSON.stringify(todo);
  localStorage.setItem('todo',obj);
  localStorage.getItem('todo');  
  obj=JSON.parse(obj);
  document.getElementById("forma_cr").reset();
  if(obj===null|| obj.arrtasks.length <1){
    alert('Список пуст. Добавьте задачу');
  return;
  }
  else {
    identMyTemplInHTML = $('#mytest').html();
    readyMyTempl = tmpl(identMyTemplInHTML, obj);
    $('.past').append(readyMyTempl);
  };
});  

//Удаляем список: 
$('.res').on('click', function(){
  localStorage.clear(); 
  arrtasks = [];  
  todo = {};  
  $('.tasks').empty();
  document.getElementById("forma_cr").reset();  
});  

//Загружаем данные из памяти:
$('.inp_but_load').on('click', function(){
  document.getElementById("forma_cr").reset();
  $('.tasks').empty();
  obj=JSON.parse(localStorage.getItem('todo'));
  if(obj===null || obj.arrtasks.length <1){
  alert('Список пуст. Добавьте задачу');
  return;
  }
  else {
  arrtasks = obj.arrtasks;
  identMyTemplInHTML = $('#mytest').html();
  readyMyTempl = tmpl(identMyTemplInHTML, obj);
  $('.past').append(readyMyTempl);
  };   
});  

//Отмечаем, что сделали:
$(".past").on("click", ".ok", function () {
  $(this).toggleClass('done');
});

//Редактируем:
$(".past").on("click", ".V", function () {
   var a = this.previousSibling.value;
  var id = this.id;
  arrtasks.splice(id, 1, a);
  todo = {
    arrtasks: arrtasks}; 
  obj=JSON.stringify(todo);
  localStorage.setItem('todo',obj);
  // localStorage.getItem('todo');  
  // obj=JSON.parse(obj);  
});

//Удаляем элемент:
$(".past").on("click", ".del", function () {
  // var id = $(this).parent().attr('id');
  var par_id = this.parentNode.id;
  console.log(par_id);
  $(this).parent().remove();
  arrtasks.splice(par_id, 1);
  todo = {
    arrtasks: arrtasks};
  obj=JSON.stringify(todo);
  localStorage.setItem('todo',obj);
});


});