$(function(){

  if (!document.all) {
    $("#owl-carousel").owlCarousel({
      responsive:{ 
        0:{
          items:1
        },
        768:{
          items:3
        }},
      autoplayHoverPause:true,
      loop:true,
      margin:0,
      nav:false,
      autoplay:true,
      smartSpeed:1000,
      autoplayTimeout:2000
    });   
  } else {
    $("#owl-carousel").owlCarousel({
      responsive:{ 
        0:{
          items:1
        },
        768:{
          items:3
        }},
      autoplayHoverPause:true,
      loop:true,
      margin:10,
      nav:false,
      autoplay:true,
      touchDrag: false,
      mouseDrag: true,
      smartSpeed:1000,
      autoplayTimeout:2000
    });    
  };

  $("#owl-slider1, #owl-slider2, #owl-slider3").owlCarousel({
    items : 1, 
    slideSpeed : 1000,
    nav: true,
    loop:true,
    pagination: false,
    touchDrag: false,
    mouseDrag: false,
    responsiveRefreshRate : 200
  }); 

  var div;
  var searchThis = 'HOLIDAY';
  var myArUrl=['https://pixabay.com/static/uploads/photo/2013/10/28/22/22/garda-202065_640.jpg', 'https://pixabay.com/static/uploads/photo/2016/06/14/18/12/dolomites-1457207_640.jpg', 'https://pixabay.com/static/uploads/photo/2015/05/29/23/39/summer-789974_640.jpg', 'https://pixabay.com/static/uploads/photo/2014/08/12/00/01/oia-416135_640.jpg', 'https://pixabay.com/static/uploads/photo/2016/06/12/03/48/thailand-1451382_640.jpg', 'https://pixabay.com/static/uploads/photo/2015/09/09/17/57/ski-932188_640.jpg', 'https://pixabay.com/static/uploads/photo/2015/03/09/18/34/maldives-666122_640.jpg', 'https://pixabay.com/static/uploads/photo/2016/06/12/21/45/lake-1453079_640.jpg', 'https://pixabay.com/static/uploads/photo/2015/03/26/09/39/pool-690034_640.jpg', 'https://pixabay.com/static/uploads/photo/2013/02/21/19/06/beach-84533_640.jpg', 'https://pixabay.com/static/uploads/photo/2015/03/17/13/24/lamp-677698_640.jpg', 'https://pixabay.com/static/uploads/photo/2014/08/20/14/56/swim-422546_640.jpg', 'https://pixabay.com/static/uploads/photo/2014/08/15/11/29/sea-418742_640.jpg'];

  var newArUrl = [];
  var uniqNewArUrl = [];
  var result = [];
  var rand;
  var urlRand;

  function unique(arr) {
    nextInput:
    for (var i = 0; i < arr.length; i++) {
      var str = arr[i];
      for (var j = 0; j < result.length; j++) {
        if (result[j] == str) continue nextInput;
      }
      result.push(str);
    }
    return result;
  };
  
  while (uniqNewArUrl.length<7) {
    rand = Math.floor(Math.random() * myArUrl.length);
    urlRand = myArUrl[rand];
    newArUrl.push(urlRand);
    unique(newArUrl);
    uniqNewArUrl=result;
  };

  for (var b=0; b<7; b++) {
    div = document.createElement("div");
    if (b===4 || b===5 ){
      div.classList.add("myitem", "persent-size", "width2", "numb"+b)}
    else {div.classList.add("myitem", "persent-size", "numb"+b)};
    var inner = "<div>"+'<a href="'+uniqNewArUrl[b]+'"  target="_blank">'+'<img src="'+ uniqNewArUrl[b] +'" alt="'+searchThis+'" >'+"</a>"+'<span>'+ searchThis+'</span>'+"</div>";
    div.innerHTML = inner;                 
    $('.grid').append(div);
  };

  var req_but = document.getElementById("req_but");

  req_but.onclick = function (){
    $('.grid').empty();
    searchButThis = $("#req").val().toUpperCase();
    API_KEY = '2614678-ea63183beb77f4f55524b94e0';
    URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(searchButThis)+"&orientation=horizontal"+"&image_type=photo"+"&per_page=7"+"&callback=?";  
    $.ajax({
      url: URL,
      type: 'POST',
      dataType: "jsonp",
      success: function(data) {
        myArUrl=[];
        
        $.each(data.hits, function(i, val){
          myArUrl.push(val.webformatURL); 
        });
         
        for (b=0; b<7; b++) {
          div = document.createElement("div");
          if (b===4 || b===5 ){
            div.classList.add("myitem", "persent-size", "width2", "numb"+b)}
          else {div.classList.add("myitem", "persent-size", "numb"+b)};
          inner = "<div>"+'<a href="'+myArUrl[b]+'"  target="_blank">'+'<img src="'+ myArUrl[b]+'" alt="'+searchButThis+'" >'+"</a>"+'<span>'+ searchButThis +'</span>'+"</div>";
          div.innerHTML = inner;
          $('.grid').append(div);
        }
      }
    });
    $('#req').val("");
  };

});