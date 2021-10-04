const API_KEY = "192a4ada39fb601a2778a4f7127ba06c";

function onGeoOk(position){//geolocation object를 유일한 매개변수로 받는 콜백 함수.
    //javascript가 user의 위치를 전달해 줄 것이다. 확인해보자.
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //fetch(url)하면 javascript가 알아서 url을 네트워크 요청을 해 줄 것이다.
    //fetch는 해당 url로 어떠한 서버에 요청을 하게 되는데 응답 시간이 5분이 걸릴 수도 있고 그래서 then을 쓴다. 
    fetch(url)
        .then(response => response.json()
        .then(data =>{
            const weather = document.querySelector("#weather span:first-child");    
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `\n오늘의 온도 : ${data.main.temp}\n
                                체감 온도: ${data.main.feels_like}\n
                                최고 기온: ${data.main.temp_max}\n
                                최저 기온: ${data.main.temp_min}\n`;
    }));   
}

function onGEoError(){
    console.log("cannot find you. No weather for you.");
}


//첫번째 매개변수는 모든게 잘 됐을 때 실행 될 함수.
//나머지 하나는 에러가 발생했을 때 실행 될 함수.
navigator.geolocation.getCurrentPosition(onGeoOk, onGEoError);

