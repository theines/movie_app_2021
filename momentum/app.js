const h1 = document.querySelector("div.hello:first-child h1");

//색은 css에서 하고 javascript에서는 className을 줬다뺐으면서 효과 주기
function handleTitleClick(){
    const clickedClass = "clicked";
    if (h1.className === "clickedClass"){
        h1.className = "";//클릭하면 다시 클래스네임을 공백으로 만들고 
    } else{
        h1.className = "clickedClass";//여기에서 className을 지정해주고
    }
}

h1.addEventListener("click", handleTitleClick);
