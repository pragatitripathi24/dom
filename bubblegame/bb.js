var timer = 60;
var score = 0;
var rnhit;
function makebubble() {
    var clutter = "";
    for (var i = 1; i <= 90; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble"><h2>${rn}</h2></div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}
function runtimer(){
 var timerint = setInterval(function(){
    if(timer>0){
        timer--;
        document.getElementById("timer").textContent= timer;
    }
    else{
        var yourscore = score;
        clearInterval(timerint) ;
        document.querySelector("#pbtm").innerHTML = `<h1>GAME-OVER AND</h1>`+ `<h1>YOUR SCORE IS : &nbsp ${yourscore}</h1>`;



    }
 },1000);
}
function hit(){
    rnhit =  Math.floor(Math.random() * 10);
    document.querySelector("#hiton").textContent = rnhit;
}
function incscore(){
    score = score + 10;
    document.querySelector("#incscore").textContent = score;
}
document.querySelector("#pbtm").addEventListener("click", function(dets){
var clickednum = Number(dets.target.textContent);
if(clickednum === rnhit){
    incscore();
    makebubble();
    hit();
}
})
makebubble();
runtimer();
hit();
