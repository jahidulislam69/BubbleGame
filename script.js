var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function hitVal(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;

}
function makeBubble(){
    var clutter = "";
    for(i=1; i<=162; i++){
        var rn = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector("#pbtm").innerHTML = clutter

}
function runTime(){
    var timerint = setInterval(function(){
        if (timer > 0){
            timer --;
            document.querySelector("#timerval").textContent = timer;
        } else{
            clearInterval(timerint)
            document.querySelector("#pbtm").innerHTML = `<h1 class="end">Game over and You scored ${score}</h1>`
        }
    },1000)
}

document.querySelector("#pbtm").addEventListener("click", function(details){
    var clickedNumber = (Number(details.target.textContent));
    if(clickedNumber === hitrn){
        increaseScore();
        makeBubble();
        hitVal();
    }
})

makeBubble();
runTime();
hitVal();
