$(function (){
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