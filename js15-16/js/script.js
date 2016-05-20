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

//$.getJSON("http://ajax.googleapis.com/ajax/services/search/web?v=1.0?&q=PHP&callback=GoogleCallback&context=?",
//function(data){
//    var ul = document.createElement("ul");
//    $.each(data.results, function(i, val){
//            var li = document.createElement("li");
//            li.innerHTML = '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+"</a> - "+val.content;                            
//            ul.appendChild(li);
//    });
//    $('body').html(ul);
//});	
	
	
}) 