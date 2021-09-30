const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"

//form은 숨기고 h1은 내용물이 있을 때만 표시하고 싶다
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);//클래스 리스트에서 히든이라는 클래스를 삭제해서 사용자에게 보여준다.

}

loginForm.addEventListener("submit", onLoginSubmit);
