const loginInput = document.querySelector("#loginForm input");
const loginButton = document.querySelector("#loginForm");

const link = document.querySelector("a");

//고치고 싶은 문제점 : form태그에서 input이 submit되면 전체 페이지가 새로고침이 되는 게 싫어
//그래서 기본 동작을 실행하지 못하도록 아래에 첫 번째로 들어오는 매개변수를 만져볼거야
function onLoginSubmit(event){
    event.preventDefault(); //기본동작을 실행하지 못하게 하는 코드
    console.log(loginInput.value);
    //아래에서 onLoginSubmit을 호출하면 그냥 호출되는 것이 아니라 onLoginSubmit(information)이렇게
    //첫 번째 매개변수로 정보가 들어온다.
}

function handleLinkClick(){
    alert("clicked");//alert가 먼저 실행되고 그 다음에 기본동작이 실행될 것이다. 
}

loginButton.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
//가장 중요한 개념은 addEventListener()안에서 handleLinkClick()이렇게 pressplay하지 않는다는거야
//브라우저가 하는거. 그냥하는거 아니라 이벤트의 정보까지 담아서!