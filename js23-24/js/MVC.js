//MVC

function Model () {
  var self = this;
 var  arrtasks = ["Задача 1", "Задача 2", "Задача 3"]; 
 var todo = {
  arrtasks: arrtasks
};
  
  self.addItem = functin (item) {
    if (item.length === 0) {
      return;
    };
    self.arrtasks.push(item);
  return self.data;
  };
  
  self.removeItem = function (item) {
    var index = self.arrtasks.indexOf(item);
    
    if (index===-1) {
      return;
    };
    self.arrtasks.splice(index, 1);
    return self.arrtasks;
    };
  
  
var new_task;
var identMyTemplInHTML;
var readyMyTempl;
var obj; 
}






function View (Model) {
  var self = this;
  self.renderList = function (arrtasks) {
    
  };
  
}

function Controller () {
  
}

$(function() {
  
})