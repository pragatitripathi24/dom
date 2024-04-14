var inc = document.getElementById("inc");
var stranger = document.querySelector("h3");
var follow = document.querySelector(".btn");
var check = 0;
follow.addEventListener("click" , function(){
    if(check == 0){
    follow.innerHTML = "following";
    stranger.innerHTML = "...friends...";
    stranger.style.color = "green";
    inc.innerHTML = "24903";
    check = 1;
    
    }
    else{
    follow.innerHTML = "follow";
    stranger.innerHTML = "...Strangers...";
    stranger.style.color = "black";
    inc.innerHTML = "24902";
    check = 0;
    
    }
} )