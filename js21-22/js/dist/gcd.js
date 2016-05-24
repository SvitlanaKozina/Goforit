'use strict';

$(function(){

//Вариант№1 Объект unit, результат в console.log:

var unit = {
  GCD: function(c, d) {
    var c, d, result; 
    var c_t_f = !isNaN(parseFloat(c)) && isFinite(c);
    var d_t_f = !isNaN(parseFloat(d)) && isFinite(d);

    if (c_t_f && d_t_f) {
      c = Math.abs(+c);
      d = Math.abs(+d); 

      if(c==0 || d==0) {
        console.log('Число должно быть больше 0, result = NaN');
      return result = NaN;
      }
      
      else {
        if ((c-Math.floor(c)!==0) || (d-Math.floor(d)!==0)){
          console.log('Число должно быть целым, result = undefined');
        return result = undefined;
        }                 
        else {        
          while (c!==d) {
            if (c>d){c=c-d} 
            else {d=d-c}};
          if (c==d) {
            console.log('Наибольший общий делитель: '+c);
          return result = c;}}            
      }}

    else{
      console.log('Введите число');
    return;};  
    }
};

unit.GCD(0,0);  

//Конец Unit

//Вариант№2, наибольший общий делитель (НОД), тестить работу на странице:

function inputGCD(a, b) {
var a = $('.inpnod_a_nod').val();
var b = $('.inpnod_b_nod').val();
var result; 
var a_t_f = !isNaN(parseFloat(a)) && isFinite(a);
var b_t_f = !isNaN(parseFloat(b)) && isFinite(b);

if (a_t_f && b_t_f){
  a = Math.abs(+a);
  b = Math.abs(+b); 
    if(a==0 || b==0){
      alert('Число должно быть больше 0');
      document.getElementById("form_nod").reset();
    return;
    }
    else {
      if((a-Math.floor(a)!==0) || (b-Math.floor(b)!==0)){
        alert('Число должно быть целым');
        document.getElementById("form_nod").reset();
      return; 
      }
      else {
        while (a!==b) {
          if (a>b){a=a-b} 
          else {b=b-a}};
        if (a==b) {
          alert ('Наибольший общий делитель: '+a);
          document.getElementById("form_nod").reset();
        return result = a;}
    }} ;
}

else{
  alert('Введите число');
  document.getElementById("form_nod").reset();
return;
}
};

$('.inpnod_but_nod').on('click', inputGCD);

//Конец НОД

  
});