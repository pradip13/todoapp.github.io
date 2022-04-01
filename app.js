var mainTodoContainer = document.querySelector("#todos");

var input = document.querySelector(".todo-input");

var addingButton  = document.querySelector(".add-item");

var  deleteAllBtn = document.querySelector(".deleteBtn");


addingButton.addEventListener("click", function(e){
    /* create all the elements*/
    if(input.value.trim()){
        // ul tag

        var ulTag = document.createElement("ul");
        ulTag.classList.add("todo-list-container")
        
        // todolist div
        var todoList = document.createElement("div");
        todoList.classList.add("todo-list");
        
        var liTag = document.createElement("li");
        liTag.innerHTML = input.value;
        liTag.classList.add("todo-item");

        // button div

        var buttonDiv = document.createElement("div");
        buttonDiv.classList.add("button");

        // complete button
        var completeButton = document.createElement("button");
        completeButton.classList.add("completed");
        completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';

        var editButton = document.createElement("button");
        editButton.classList.add("editBtn");
        editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
        editButton.onclick = function(){
            editWorking(liTag);
        }

        var deleteButton = document.createElement("button");
        deleteButton.classList.add("trash");
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

   
        // appending element into each other
        ulTag.appendChild(todoList);
        todoList.appendChild( liTag);
        todoList.appendChild(buttonDiv);

        buttonDiv.appendChild(completeButton);
        buttonDiv.appendChild(editButton);
        buttonDiv.appendChild(deleteButton);

        mainTodoContainer.appendChild(ulTag);
       
        // complete and trash button working
        todoList.addEventListener("click", function(e){
                var items = e.target;
                if(items.classList[0] === "completed"){
                    var todo = items.parentElement;
                    var todo2 = todo.parentElement;
                    todo2.classList.add('line_through');
                }else if(items.classList[0] === "trash"){
                    var todo = items.parentElement;
                    var todo2 = todo.parentElement;
                    var todo3 = todo2.parentElement;
                    todo2.classList.add('fall');
                    todo3.remove();
                }

                
        })



    //    when add button click clear the input value
            input.value="";

     

    }
    else if(input.value ===""){
        alert("please fill the input field");
    }
})

function editWorking(e){
    var editValue =prompt("edit the selected item",e.firstChild.nodeValue);
    e.firstChild.nodeValue = editValue;

}

function deleteAllElements(){
    var gettingUlTag = document.querySelectorAll('.todo-list-container');
    for(var i =0;i<gettingUlTag.length;i++){
        gettingUlTag[i].remove();
    }
    input.value="";
}

