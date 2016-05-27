requirejs.config({
  paths: {
    'jquery': 'http://code.jquery.com/jquery-1.7.2'
  }, 
  shim: {
    'jquery': {
      exports: 'jQuery'
    },
    'jrtmpl': {
			exports: 'jrtmpl'
		}
  }
});

require(
  [
    
// Массив модулей, которые мы хотим загрузить, 
//объявленных путями к ним относительно точки входа 
//(атрибут data-main в HTML) и без расширения .js    
    'jquery',
    'jrtmpl',
    'model',
    'view',
    'controller',
  ],
  
  //Функция вызывается после того, как зависимости
  //будут загружены. 
  //Модули передаются в качестве параметров функции. 
  function ($, jrtmpl, model, view, controller) {
  arrtasks = [];  
 	var model = new Model(arrtasks);
  var view = new View; 
  var controller = new Controller(model);
        
           
  });