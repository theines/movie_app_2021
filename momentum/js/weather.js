
function onGeoOk(position){//geolocation object를 유일한 매개변수로 받는 콜백 함수.
    //javascript가 user의 위치를 전달해 줄 것이다. 확인해보자.
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    
    console.log("You live in", lat, lng);
}

function onGEoError(){
    console.log("cannot find you. No weather for you.");
}


//첫번째 매개변수는 모든게 잘 됐을 때 실행 될 함수.
//나머지 하나는 에러가 발생했을 때 실행 될 함수.
navigator.geolocation.getCurrentPosition(onGeoOk, onGEoError);