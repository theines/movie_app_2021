const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
getClock(); //함수를 바로 실행시켜줘야지 안그럼 1초 기다렸다가 실행됨.
setInterval(getClock, 1000);
//setInterval(getClock, 1000);//3초 간격으로 계속 실행
//setTimeout(sayHello,3000);//3초뒤에 한 번만 실행