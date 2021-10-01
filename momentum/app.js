const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//string 스펠링 틀리면 안되는 것을 여기에 대문자로 변수로 선언함으로써 오타가 나도 js가 알려줄 수 있게 하자
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//local storage에 유저정보가 있으면 input창 숨기고 h1 보여주자.
//localStorage.getItem("username")
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    const usernameThatTheUserWrote = loginInput.value;
    localStorage.setItem(USERNAME_KEY, usernameThatTheUserWrote);
    paintGreetings(usernameThatTheUserWrote);
}

loginForm.addEventListener("submit", onLoginSubmit);

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greeting
    paintGreetings(savedUsername);
}