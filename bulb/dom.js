var btn = document.querySelector("button");
var bulb = document.querySelector("#bulb");
var flag = 0;
btn.addEventListener("click", function(){
    if(flag == 0){
        btn.innerHTML = "ON";
        bulb.style.backgroundColor = "yellow";
        flag = 1;
    }else{
        btn.innerHTML="OF" ;
        bulb.style.backgroundColor = "white";
        flag = 0;
    }
})