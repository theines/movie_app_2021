const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event){
    //console.log(event.target.parentElement); //이렇게 하면 어떤 버튼이 선택되었는지 알 수 있다.(부모요소 li 나옴)
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);//li 밑에 span 이라는 자식 두기
    li.appendChild(button);
    toDoList.appendChild(li);
}


function handleToDoSubmit(event){
    event.preventDefault(); //새로고침 방지
    const newTodo = toDoInput.value; //비우기전에 변수에 값 저장
    toDoInput.value = ""; //값 비우기    
    paintToDo(newTodo); //값 그리는 곳으로 보내기
}

toDoForm.addEventListener("submit", handleToDoSubmit);