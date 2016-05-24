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

module.exports = unit;