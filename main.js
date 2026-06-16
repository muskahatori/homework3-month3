// app.js
const taskInput = document.getElementById("taskInput");
const submitBtn = document.getElementById("submitBtn");
const taskList = document.getElementById("taskList");
const sortSelect = document.getElementById("sortSelect");
const todos = [];

function renderTodos(data){
    taskList.innerHTML = "";
    data.forEach((todo) => {
        const item = document.createElement("div");
        item.classList.add("taskItem");
        item.classList.add(todo.done ? "finished" : "pending");
        item.innerText = todo.title;
        item.onclick = function(){
            todo.done = !todo.done;
            applyFilter();
        };
        taskList.append(item);
    });
}

submitBtn.onclick = function(){
    const value = taskInput.value.trim();
    if(value === ""){
        alert("Введите задачу");
        return;
    }
    todos.push({ title: value, done: false });
    applyFilter();
    taskInput.value = "";
};

function applyFilter(){
    const mode = sortSelect.value;
    if(mode === "all"){
        renderTodos(todos);
        return;
    }
    if(mode === "done"){
        renderTodos(todos.filter((t) => t.done === true));
        return;
    }
    if(mode === "notDone"){
        renderTodos(todos.filter((t) => t.done === false));
        return;
    }
}

sortSelect.onchange = function(){
    applyFilter();
};