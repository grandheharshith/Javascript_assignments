let count = 0;
const newTodoInput = document.querySelector('input');
const addTodoBtn = document.querySelector('button.add_todo');
const show_pendingBtn = document.querySelector('button.show_pending');
const show_completedBtn = document.querySelector('button.show_completed');
const show_allBtn = document.querySelector('button.show_all');
const todolist = document.querySelector('div.todos');
const manualTodos = document.querySelector('div.Manual_Todos');
const fetchedTodos = document.querySelector('div.Fetched_Todos');
const fullData = [];
const completedArray = [];
const pendingArray = [];

addTodoBtn.addEventListener("click",addTodo);
show_pendingBtn.addEventListener("click",showPending);
show_completedBtn.addEventListener("click",showCompleted);
show_allBtn.addEventListener("click",showAll);

function addTodo(){
    let typedInput = newTodoInput.value;
    let paragraphContent = document.createElement("p");
    paragraphContent.setAttribute("key",count);
    count += 1;
    if (typedInput == ""){
        alert("There is nothing to add!!! Please type something.")
    }
    else{
    paragraphContent.innerHTML = typedInput;
    manualTodos.append(paragraphContent);
    newTodoInput.value = "";
    paragraphContent.addEventListener("click",paragraphContent.remove);
    currentTodo = {"userId": 'New',"id": "New "+ count,"title": typedInput,"completed": false};
    pendingArray.unshift(currentTodo);
    fullData.unshift(currentTodo);
    showAll();
    }
}

async function fetchTodos(){
    fetchedTodos.innerHTML="";
    let res = await fetch('https://jsonplaceholder.typicode.com/todos');
    let data = await res.json();
    let output = `<table><tr> <th>Id</th> <th>User Id</th> <th>Description</th> <th>Status</th> </tr>`;
    data.forEach(function(todo) {
        output +=`<tr data-tag="${todo.completed}"> <td>${todo.id}</td> <td>${todo.userId}</td> <td>${todo.title}</td> <td>${todo.completed ? "Completed" : "Pending...."}</td> </tr>`;
        if (todo.completed) {
            completedArray.push({"userId": todo.userId,"id": todo.id,"title": todo.title,"completed": true});
        }
        else {
            pendingArray.push({"userId": todo.userId,"id": todo.id,"title": todo.title,"completed": false});
        }
        fullData.push({"userId": todo.userId,"id": todo.id,"title": todo.title,"completed": todo.completed});
    });
    output += `</table>`;
    fetchedTodos.innerHTML = output;    
}
fetchTodos();

function showPending(){
    fetchedTodos.innerHTML="";
    let output = `<table> <tr> <th>Id</th> <th>User Id</th> <th>Description</th> <th>Status</th> </tr>`;
    pendingArray.forEach(function(todo) {
        output +=`<tr data-tag="${todo.completed}"> <td>${todo.id}</td> <td>${todo.userId}</td> <td>${todo.title}</td> <td>${todo.completed ? "Completed" : "Pending...."}</td> </tr>`;
    });
    output += `</table>`;
    fetchedTodos.innerHTML = output;
}

function showCompleted(){
    fetchedTodos.innerHTML="";
    let output = `<table> <tr> <th>Id</th> <th>User Id</th> <th>Description</th> <th>Status</th> </tr>`;
    completedArray.forEach(function(todo) {
        output +=`<tr data-tag="${todo.completed}"> <td>${todo.id}</td> <td>${todo.userId}</td> <td>${todo.title}</td> <td>${todo.completed ? "Completed" : "Pending...."}</td> </tr>`;
    });
    output += `</table>`;
    fetchedTodos.innerHTML = output;
}

function showAll(){
    fetchedTodos.innerHTML="";
    let output = `<table> <tr> <th>Id</th> <th>User Id</th> <th>Description</th> <th>Status</th> </tr>`;
    fullData.forEach(function(todo) {
        output +=`<tr data-tag="${todo.completed}"> <td>${todo.id}</td> <td>${todo.userId}</td> <td>${todo.title}</td> <td>${todo.completed ? "Completed" : "Pending...."}</td> </tr>`;
    });
    output += `</table>`;
    fetchedTodos.innerHTML = output;
}