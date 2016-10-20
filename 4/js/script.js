$(function (){
var human = {
name: 'Petrenko',
age: 33,
gender: 'man or woman',
height: 175,
weight: 62,
};

function Worker () {
this.company = 'ABC';
this.salary = 4000;
this.work = function () {
	console.log('Worker work')};
};

Worker.prototype = human;
	
function Student (name) {
this.university = 'DonNU';
this.stipend = 1500;
this.watch = function () {
	console.log('Student watching TV');
};
};	

Student.prototype = human;
	
var worker1 = new Worker();
var worker2 = new Worker();
	
var student1 = new Student();
var student2 = new Student();
	
for (var key in worker1) {
  console.log( "worker1: " + "ключ: " + key + "," + " значение: " + worker1[key]);
};
worker1.work();

for (var key in student1) {
  console.log( "student1: " + "ключ: " + key + "," + " значение: " + student1[key]);
};
student1.watch();	
 

//Делаем поиск фото на https://pixabay.com/:  

  var searchThis = 'dog';
 	var API_KEY = '2614678-ea63183beb77f4f55524b94e0';
  var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(searchThis)+"&callback=?";
    
$.ajax({
  url: URL,
  type: 'POST',
  dataType: "jsonp",
  success: function(data) {
    var ul = document.createElement("ul");
    $.each(data.hits, function(i, val){
           var li = document.createElement("li");
            var inner = '<a href="'+val.pageURL+'" title="'+val.Url+'" target="_blank">'+'<img src="'+ val.previewURL+'" alt="'+searchThis+'" >'+"</a>";
            
            li.innerHTML = inner;                               
            ul.appendChild(li);
    });
    $('.foto').append(ul);},
  
//  error: function() {alert("Ошибка выполнения")},
//  complete: function() {alert("Завершение выполнения") }  
});

$('.forma').submit(function(){
 $('.foto').empty();
 var searchThis = $("#req").val();
var API_KEY = '2614678-ea63183beb77f4f55524b94e0';
var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(searchThis)+"&callback=?";  
 $.ajax({
  url: URL,
  type: 'POST',
  dataType: "jsonp",
  success: function(data) {
    var ul = document.createElement("ul");
    $.each(data.hits, function(i, val){
           var li = document.createElement("li");
            var inner = '<a href="'+val.pageURL+'" title="'+val.Url+'" target="_blank">'+'<img src="'+ val.previewURL+'" alt="'+searchThis+'" >'+"</a>";
            
            li.innerHTML = inner;                               
            ul.appendChild(li);
    });
    $('.foto').append(ul);},
});});
  
}) 