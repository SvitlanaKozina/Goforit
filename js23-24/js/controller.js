define (
    'controller',
    ['jquery', 'model', 'view', 'jrtmpl'],
    function ($) {
      Controller = function (model, view) {
        
        $('.contr_for').submit(add);
        $('.res').on('click', removeToDo);
        $('.inp_but_load').on('click', history);
        $(".past").on("click", ".ok", ok);
        $(".past").on("click", ".V", edit);
        $(".past").on("click", ".del", removeTask);
        
        //Добавляем новую задачу:
        function add (){
          new_task = $('.inp_text').val();
          obj=JSON.parse(localStorage.getItem('todo'));
          if(obj===null|| obj.arrtasks.length ==1){
            arrtasks.push(new_task);
            localStorage.setItem('todo',JSON.stringify(model.todo));
            }
          else {
          obj.arrtasks.push(new_task);
          localStorage.setItem('todo',JSON.stringify(obj));
        };          
          obj=JSON.parse(localStorage.getItem('todo'));
          $('.past').empty();
          identMyTemplInHTML = $('#mytest').html();
          readyMyTempl = tmpl(identMyTemplInHTML, obj);
          $('.past').append(readyMyTempl);
          }; 

        //Удаляем список: 
        function removeToDo(){
          localStorage.clear(); 
          arrtasks = [];              
          $('.past').empty();          
        };  

        //Загружаем данные из памяти:
        function history(){
          $('.past').empty();
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
        };  

        //Отмечаем, что сделали:
        function ok() {
          $(this).toggleClass('done');
        };  

        //Редактируем:
        function edit() {
          var a = this.previousSibling.value;
          var id = this.id;
          arrtasks.splice(id, 1, a);
          obj=JSON.stringify(model.todo);
          localStorage.setItem('todo',obj);
          localStorage.getItem('todo');  
          obj=JSON.parse(obj);  
        };

        //Удаляем элемент:
        function removeTask() {
          var par_id = this.parentNode.id;
          console.log(par_id);
          obj.arrtasks.splice(par_id, 1);
          obj=JSON.stringify(obj);
          localStorage.setItem('todo',obj);
          localStorage.getItem('todo');  
          obj=JSON.parse(obj);
          $(this).parent().remove();
        };
              
            }
        return Controller
            });