/* global $*/

$(document).ready(function () {
    console.log('Ready');
    
    let data = {
    
        
    };
    
    $.post('https://todo-app-codingadrian85.c9users.io/fetchTasks', data , function (response){
        for (let i = 0; i < response.tasks.length; i++) {
        console.log(response.tasks[i]);
        
        let html = '<li><input type="checkbox">'+ response.tasks[i] +'<button>Edit</button><button>Delete</button></li>';
        $('#todo-list ul').append(html);
        }
    });
    
    
    $('#submitNewTask').click(function() {
       
    
    let input = $('#task').val();
    let inputDate = $('#date').val()
    
    let newData = {
        "task": input,
        "dueDate": inputDate,
        "action": "create"
    }
   
    $.post('https://todo-app-codingadrian85.c9users.io/newTask',newData, function (response, error) {
       $('#message').text('Task Added!');
       
      $('#message').text('').fadeOut(2000, function (){
           $(this).text('');
           $(this).fadeIn(0);
       })
       
       $('#todo-list ul').empty();
       
        for (let i = 0; i < response.tasks.length; i++) {
        console.log(response.tasks[i]);
        
          let html = '<li><input type="checkbox">'+ response.tasks[i] +'<button>Edit</button><button>Delete</button></li>';
          $('#todo-list ul').append(html);
         }
       });
    });
});

