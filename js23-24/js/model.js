define(
    "model",
    [],
        function(){
        Model =  function (arrtasks){
        this.arrtasks = []; 
        this.todo = {
        arrtasks: arrtasks
        };
    }     
    
    return Model
    });