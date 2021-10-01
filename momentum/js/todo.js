const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; //paint될 때마다 해당 배열에 추가할 것이다.
//const toDos = []; 이렇게 submit될 때마다 배열이 초기화되기 때문에 localStorage에는 옛투두가 없어지고 새투두만 남게된다.
// 그래서 업데이트 가능하게 const를 let으로 바꾼다.

function saveToDos(){
    //todos라는 키값에 toDos배열의 값을 넣는 모습.
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //로컬스토리지는 배열을 저장을 못해서 이렇게 stringify를 해줘야함. 
}



function deleteToDo(event){
    //console.log(event.target.parentElement); //이렇게 하면 어떤 버튼이 선택되었는지 알 수 있다.(부모요소 li 나옴)
    const li = event.target.parentElement;
    li.remove();//화면에 그린걸 지우기
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));//toDos array를 새로운 섹시한 array로 바꿔줌.
    saveToDos();//새로운 sexy array를 로컬스토리지에 다시 저장.
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id; //HTML에 newToDoObj.id를 생성
    const span = document.createElement("span");
    span.innerText = newTodo.text;//object라서 이제 .text로 접근해야함.
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);//li 밑에 span 이라는 자식 두기
    li.appendChild(button);
    toDoList.appendChild(li);
}

const TODOLIST = "todolist";

function handleToDoSubmit(event){
    event.preventDefault(); //새로고침 방지
    const newTodo = toDoInput.value; //비우기전에 변수에 값 저장
    toDoInput.value = ""; //값 비우기  
    //그냥 string아니라 object를 푸쉬하고싶다  
    const newTodoObj = {
        text: newTodo,
        id: Date.now(), //random한 숫자를 부여함
    }
    toDos.push(newTodoObj); //toDos 배열에 추가
    paintToDo(newTodoObj); //값 그리는 곳으로 보내기
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//localStorage에 저장된게 있다면 꺼내서 스트링을 live object로 바꿔준다. each item of the array가 function을 수행할 수 있도록.
const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){ //savedToDos가 존재하면
    const parsedToDos = JSON.parse(savedToDos);
    
    toDos = parsedToDos; //이렇게 옛투두를 투두배열에 업데이트 해주면 초기화문제해결.

    //parsedToDos.forEach((item) => console.log("this is the turn of ", item));//배열의 길이만큼 돌면서 화살표 함수를 실행시키는 모습.
    //매개변수(item)은 (event)처럼 자바스크립트가 제공하는걸로써 we can know which item of array is executing. 
    parsedToDos.forEach(paintToDo);
}

//[1,2,3,4].filter(sexyFilter) 이렇게 할건데 섹시필터가 false이면 그 item은 새 array에 포함되지 않는다!
//filter함수는 매개변수의 function이 false이면 해당 item을 array에 포함시키지 않는다.
function sexyFilter(item){//sexyFilter must return true if you want to keep the old array.!!
    //아래 if 조건문에 exclude하고싶은 아이템만 적으면 그것을 제외하고 배열이 만들어질것이다.
    //그리고 이 filter function은 새로운 array를 return할 것이다.
    
}