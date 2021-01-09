//hook to div
//create a func to start timer
//always have global variable at top
//functions 
//event listeners
//callers of functions 
var timeLeft = 100;//timer total num seconds
var t = document.getElementById("timer");//get a ref to the div id timer on html form
var res = document.getElementById("reset");//get a ref to the reset button on html form
var sAgain = document.getElementById('startAGAIN');//get a ref to the start button on html form
var tAway = document.getElementById("takeAway");//get a ref to the take away button
var hand;//set a variable to teh handle of the setInterval function

//need handles to the 3 radio buttons and the click from the html page
var ques1 = document.getElementById("q1");
var ques2 = document.getElementById("q2");
var ques3 = document.getElementById("q3");
var subButton = document.getElementById("butSubmit");
var sCORE;//the score!



function start(){//make a function that starts the count down
    timeLeft = 100;//reset the timer 
    hand = setInterval(function() {//set the ref to the handle of setInterval
      //this is the function we are passing into setInterval  
      t.innerHTML = timeLeft;//set the div id timer on html form to the timer value
        timeLeft--;//take 1 away from the timer value
        if (timeLeft < 0){//if the timer is , 0 then clear the handle and bounce
            clearInterval(hand);//clears the handle to the setInterval
        }
      },1000  )//is the number of milliseconds to wait
}

//make the controls from the array 
function MakeTestControls(){
//set the question up 
//set up the 3 controls with right and worng answers
//setup login for if they choose worng then -10 from timer else +1 on correct vals


}

//when the user clicks on the reset button on the html form
//clear the handle to the setInterval and set the value of the div id back top 10
res.addEventListener("click", function(){
  clearInterval(hand);
  t.innerHTML=100;
})

//when the user clicks on the start button on the html form run the fucntion to start the timer again 
sAgain.addEventListener("click",function(){
    start();
})

//if the user f up the question take 2 away. But make sure that the current value is > 2.
tAway.addEventListener("click",function(){
  if (timeLeft>1){
    timeLeft = timeLeft-2;
  }
})

//initialize the functions!
start();
