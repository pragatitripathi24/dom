var img = document.querySelector("img");
var heart = document.querySelector("i");
var newheart = document.querySelector(".ri-heart-fill")
var count = document.querySelector("h3");
var check = 0;
img.addEventListener("dblclick", function(){
   check = 1;
    newheart.style.color = "red";
    count.innerHTML = "955 likes"
 heart.style.transform = "translate(-50% , -50%) scale(1)";
 setTimeout(function(){
    heart.style.transform = "translate(-50% , -50%) scale(0)";
 },3000);
 setTimeout(function(){
    heart.style.transition = "transform ease 0.0s"
    },2000)
})
newheart.addEventListener("click" , function(){

if(check == 1){
    newheart.style.color = "black";
    count.innerHTML = "954 likes";
    check =0;
}
else{
    newheart.style.color = "red";
    count.innerHTML = "955 likes"
    check = 1;
}
})
