//hook to div
//create a func to start timer

var timeLeft = 10;//timer total num seconds
var t = document.getElementById("timer");//get a ref to the div id timer on html form
var res = document.getElementById("reset");//get a ref to the reset button on html form
var sAgain = document.getElementById('startAGAIN');//get a ref to the start button on teh htm,l form
var hand;//set a variable to teh handle of the setInterval function

function start(){//make a function that starts the count down
    timeLeft = 10;//reset the timer 
    hand = setInterval(function() {//set the ref to the handle of the setInterval
      //this is the function we are passing into setInterval  
      t.innerHTML = timeLeft;//set the div id timer on html form to the timer value
        timeLeft--;//take 1 away from the timer value
        if (timeLeft < 0){//if the timer is , 0 then clear teh handle and bounce
            clearInterval(hand);//clears the handle to the setInterval
        }
      },1000  )//is teh number of milliseconds to wait
}

//when the user clicks on the reset button on the html form
//clear the handle to the setInterval and set the value of the div id back top 10
res.addEventListener("click", function(){
  clearInterval(hand);
  t.innerHTML=10;
})

//when the user clicks on the start button on the html form run the fucntion to start the timer again 
sAgain.addEventListener("click",function(){
    start();
})

//initialize the functions!
start();
