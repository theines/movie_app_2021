const h1 = document.querySelector("div.hello:first-child h1");

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

window.addEventListener("resize", handleWindowResize);
//hey