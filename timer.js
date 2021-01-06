//hook to div
//create a func to start timer

var timeLeft = 10;
var t = document.getElementById("timer");
var res = document.getElementById("reset");
var sAgain = document.getElementById('startAGAIN');
var hand;

function start(){
    timeLeft = 10;
    hand = setInterval(function() {
        t.innerHTML = timeLeft;
        timeLeft--;
        if (timeLeft < 0){
            clearInterval(hand);
        }
      },1000  )
}

res.addEventListener("click", function(){
  clearInterval(hand);
  t.innerHTML=10;
})

sAgain.addEventListener("click",function(){
    start();
})

//initialize the functions!
start();
