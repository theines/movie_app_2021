const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


//login 버튼 누르면 입력창이 없어지면 좋겠어
//방법 1. className에 hidden을 추가해서 없에기(css에 hidden이라는 클래스 추가함)
function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);
