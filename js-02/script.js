let textField = document.querySelector("#input");
let addButton = document.querySelector(".add");

textField.addEventListener("keyup",enterTodo);
function enterTodo(event) {
    if(event.keyCode==13) {
        if(textField.value != 0){
            let todo = document.createElement("div");
            todo.innerHTML += "<p class='value'>"+textField.value+"</p>";
            todo.classList.add("to-do");
            todo.setAttribute("onclick","addChecked(this)");
            todo.innerHTML += "<span class='close' onclick='isClose(this)' style='position:relative;padding:5px 15px 5px 15px;text-decoration: none !important;'>×</span>";
            document.body.appendChild(todo);  
            textField.value = "";
        }
    }
}

function addChecked(checkedTodo) {checkedTodo.classList.toggle("checked");}

addButton.addEventListener("click",addingTodo);
function addingTodo() {
    if(textField.value != 0) {
        let todo = document.createElement("div");
        todo.innerHTML += "<p class='value'>"+textField.value+"</p>";
        todo.classList.add("to-do");
        todo.setAttribute("onclick","addChecked(this)");
        todo.innerHTML += "<span class='close' onclick='isClose(this)' style='position:relative;padding:5px 15px 5px 15px;text-decoration: none !important;'>×</span>";
        document.body.appendChild(todo);  
        textField.value = "";
    }
}

function isClose(closeTodo) {
    closeTodo.parentElement.remove()
}