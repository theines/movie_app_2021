const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);//li 밑에 span 이라는 자식 두기
    span.innerText = newTodo;
    toDoList.appendChild(li);
}


function handleToDoSubmit(event){
    event.preventDefault(); //새로고침 방지
    const newTodo = toDoInput.value; //비우기전에 변수에 값 저장
    toDoInput.value = ""; //값 비우기    
    paintToDo(newTodo); //값 그리는 곳으로 보내기
}

toDoForm.addEventListener("submit", handleToDoSubmit);