'use strict';

$(function() {
  let identMyTemplInHTML = $('#mytest').html();
	let readyMyTempl = tmpl(identMyTemplInHTML, info);
	$('body').append(readyMyTempl);
	
	for(let i=0;i<info.question.length; i++){
		$('.check'+i).addClass('disabled'+i);};
    
		$('.disabled0').on('change',function(){
			if(this.checked){
				$(this).removeClass('disabled0');
				$('.disabled0').attr('disabled','disabled');
			} else {
				$(this).addClass('disabled0');
				$('.disabled0').removeAttr('disabled');
			}
		});
		$('.disabled1').on('change',function(){
			if(this.checked){
				$(this).removeClass('disabled1');
				$('.disabled1').attr('disabled','disabled');
			} else {
				$(this).addClass('disabled1');
				$('.disabled1').removeAttr('disabled');
			}
		});
	

	$('.verification').on('click', showResult);
	
  let result;
  function showResult(){
    let cor_ans = 0;
    let in_cor_ans = 0;
		let $chBox = $('input:checked');
    for(let y=0; y< $chBox.length; y++) {
			let str = $chBox.eq(y).attr('id');
			str = str.substr(str.indexOf('_')+1);
			let q = +str.substr(0,str.indexOf('_'));
			let a = +str.substr(str.indexOf('_')+1);
			if (info.question[q].answer[a].check){
        cor_ans++;
				result = 'Ответ № ' + (a+1) + ' ' + 'на вопрос № ' + (q+1) + ' ' + '<span class="correct">' + 'правильный. ' + '</span>'+'<br>';
				$('#modalText').append(result);
			} else {
        in_cor_ans++;
				result = 'Ответ № ' + (a+1) + ' ' + 'на вопрос № ' + (q+1) + ' ' + '<span class="incorrect">' + 'неправильный. ' + '</span>'+'<br>';
				$('#modalText').append(result);
			}
		}
    $('#modalText').prepend('Всего правильных ответов: ' + cor_ans + ', неправильных: ' + in_cor_ans + '.' + '<br>');
    
    let cor=0;
    for(let v=0;v<info.question.length; v++){
    for ( let l = 0; l < info.question[v].answer.length; l++ ) {
      if(info.question[v].answer[l].check){
      cor++
      }}};
    
		let error; 
    if(cor > $("input:checked").length){
		error = 'Пожалуйста, выберите все правильные ответы.'+'<br>' };
        
		$('#modalText').prepend(error); 
      
      
		let selection = $(':checkbox');
		for (let i=0; i<selection.length; i++){
				selection[i].checked = false;
		  };
		  $('.check0').addClass('disabled0').removeAttr('disabled');
		  $('.check1').addClass('disabled1').removeAttr('disabled');
	};
  
	
	$('.verification').on('click',function(e){ 
		e.preventDefault(); 
		$('#overlay').fadeIn(400,function(){ 
				$('#modal_form').css('display', 'block') 
								.animate({
									opacity: 1,
									top: '50%'
								}, 200); 
		});
	});
	
	$('#modal_close, #overlay').on('click',function(){ 
		$('#modal_form').animate({
							opacity: 0, 
							top: '25%'
						}, 200, function(){
									$(this).css('display', 'none'); 
									$('#overlay').fadeOut(400); 
    });
					    $('#modalText').empty();  
  }); 
    
});