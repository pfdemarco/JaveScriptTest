// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

//big dirty array of JSON objects with an array of choices gonna be fun traversing this beast
var objTryOut = [
  {
    question: "Which is a keyword to declare a JS variable?",
    choices: ["the", "describe", "let"],
    answer: "let",
  },
  {
    question: "What is var x = {firstName:John, lastName:Doe};",
    choices: ["number", "string", "object"],
    answer: "object",
  },
  {
    question: "What index is the BMW in? var cars = [Saab, Volvo, BMW];",
    choices: ["1", "2", "3"],
    answer: "2",
  },
  {
    question: "What syntax is var x, y, z;",
    choices: ["Declare Variables", "Assign Values", "Compute Values"],
    answer: "Declare Variables",
  },
  {
    question: "What syntax is x = 5; y = 6;",
    choices: ["Compute Values", "Declare Variables", "Assign Values"],
    answer: "Assign Values",
  },
  {
    question: "What syntax is z = x + y",
    choices: ["Assign Values", "Compute Values", "Declare Variables"],
    answer: "Compute Values",
  }
]

var t = document.getElementById("timer");//get a ref to the div id timer on html form
var timeLeft = 100;//timer total num seconds
var hand;//set a variable to the handle of the setInterval function

var indexnum = 0;//this lets us know where we r in the json array
var GAMEOVER = false;//if the game is over
var correct = 0;//how many did they get correct
var cho = $('#choice');
var quest = $('#quest');
var stat = $('#status');
var star = $('#start');
var subm = $('#but');
var nam = $('input#name');
var log = $('#log');

//maybe create a ref to each list item and screw cho?
var li1 = $("#choice li:first");
var li2 = $("#choice li:nth-child(2)");
var li3 = $("#choice li:nth-child(3)");

li1.css('list-style', 'none');
li2.css('list-style', 'none');
li3.css('list-style', 'none');

$(document).ready(function(){
  //this runs first 
  function init(){ 
    
    quest.text('Please click the start button to start the game. Click on an item to choose you only get 1 click per question');
    
  };

  //go thru array and populate the li with the choices
  function funUpdateQuestions(e){
    //e.preventDefault();
    //get the choices out of the array and stick them in the li 
    if (indexnum < objTryOut.length){
      var q = objTryOut[indexnum];
      //make the p tag in html = the question
      quest.text(q.question);
      //make a variable for the text of the 1st list item
      li1.text(objTryOut[indexnum].choices[0]);
      li2.text(objTryOut[indexnum].choices[1]);
      li3.text(objTryOut[indexnum].choices[2]);  
    }
    else if (indexnum = objTryOut.length){//when the testing is done
      //reset the list items
      li1.text('');
      li2.text('');
      li3.text('');
      stat.text('Correct Answers: ' + correct + ' Your score ' + timeLeft);//let them know their score and how many they got right
      clearInterval(hand);//clear the timer
      indexnum=0;//so important to reset thE game counter this 
      init();//run init
    }
  };

  function start(){//make a function that starts the count down
    timeLeft = 100;//reset the timer 
    hand = setInterval(function() {//set the ref to the handle of setInterval
      //this is the function we are passing into setInterval  
      t.innerHTML = timeLeft;//set the div id timer on html form to the timer value
        timeLeft--;//take 1 away from the timer value
        if (timeLeft < 0){//if the timer is , 0 then clear the handle and bounce
          star.show();//show the start button
            clearInterval(hand);//clears the handle to the setInterval
        }
      },1000  )//is the number of milliseconds to wait
  };

  //if they click start start the timer
  //load the questions
  star.on('click', function(e){
    stat.text('');
    start();//start the timer load the questions
    funUpdateQuestions();//load questions
  });

  //when they click submit we want the data to append a new div withthe text info from name and timeleft(score)
  subm.on('click', function(e){//if name is empty or indexnum = 0 then dont do it 
    e.preventDefault();
    var thename = $('input#name').val();//only way i could grab the initials text
    if (thename != "") {
      //log it
     //have to figure out how to append prepend a new div with the initials and score...
      var div = document.createElement('div');
      document.body.appendChild(div);
      div.textContent=thename + " " + timeLeft;
      //$('#log').text(thename + " " + timeLeft);
    }
  });

  //when they click on each list item be able to tell if they clicked the right choice and log it
  li1.on("click", function(e){
    var str1 = li1.text();
    if (str1 === objTryOut[indexnum].answer){
      correct++;
      stat.text('Correct');
    }
    else {
      stat.text('WORNG');
      if (timeLeft>1){
        timeLeft = timeLeft-5;//wrong answer fool minus 5 sec!
      }
    }
    indexnum++;
    funUpdateQuestions();
  });

  li2.on("click", function(e){
    var str2 = li2.text();
    if (str2 === objTryOut[indexnum].answer){
      correct++;
      stat.text('Correct');
    }
    else {
      stat.text('WRONG!');
      if (timeLeft>1){
        timeLeft = timeLeft-5;
      }
    }
    indexnum++;
    funUpdateQuestions();
  });

  li3.on("click", function(e){
    var str3 = li3.text();
    if (str3 === objTryOut[indexnum].answer){
      correct++;
      stat.text('Correct');
    }
    else {
      stat.text('WRONG!');
      if (timeLeft>1){
        timeLeft = timeLeft-5;
      }
    }
    indexnum++;
    funUpdateQuestions();
  });

  init();//just run init and let it pour over you / happen
});

//
//var res = document.getElementById("reset");//get a ref to the reset button on html form
//var sAgain = document.getElementById('startAGAIN');//get a ref to the start button on html form
//var tAway = document.getElementById("takeAway");//get a ref to the take away button
// var button = $("#but");
  // button.on("click", function(){
  //   indexnum++;
  //   if (indexnum >= objTryOut.length){
  //     GAMEOVER === true;
  //     button.attr("disabled", true);
  //   }
  //   else{
  //     funUpdateQuestions();
  //   }
    
  // });
//initialize the functions!
//start();

//when the user clicks on the reset button on the html form
  //clear the handle to the setInterval and set the value of the div id back top 10
  // res.addEventListener("click", function(){
  //   clearInterval(hand);
  //   t.innerHTML=100;
  // })

  // //when the user clicks on the start button on the html form run the fucntion to start the timer again 
  // sAgain.addEventListener("click",function(){
  //     start();
  // })

  // //if the user f up the question take 2 away. But make sure that the current value is > 2.
  // tAway.addEventListener("click",function(){
  //   if (timeLeft>1){
  //     timeLeft = timeLeft-2;
  //   }
  // })














// // This line of jQuery selects the div with the matching id (#drink-options)
// var drinkDiv = $("#ques");

// // For Loop then loops through our total drink list...
// for (var i = 0; i < objTryOut.length; i++) {

//   // It then creates a new div for each drink. Note we create divs and add the content in the same line.
//   var nextQues = $("<div>" + objTryOut[i] + "</div>");

//   // It then adds this new div to the drinkList div.
//   drinkDiv.append(nextQues);
// }
// Question	Which is a keyword to declare a JS variable?
// Choices	"the", "describe", "let"
// Answer	"let"
	
// Question	var x = {firstName:"John", lastName:"Doe"}; is a Number String or Object
// Choices	"number", "string", "object"
// Answer	"object"
	
// Question	What index is the BMW in? var cars = ["Saab", "Volvo", "BMW"];
// Choices	"1", "2", "3"
// Answer	"2"
	
// Question	What syntax is var x, y, z;
// Choices	"Declare Variables", "Assign Values", "Compute Values"
// Answer	"Declare Variables"
	
// Question	What syntax is x = 5; y = 6;
// Choices	"Declare Variables", "Assign Values", "Compute Values"
// Answer	"Declare Variables"
	
// Question	What syntax is z = x + y;
// Choices	"Declare Variables", "Assign Values", "Compute Values"
// Answer	"Compute Values"

//JSON.parse() to objectify the data 

//console.log(objTryOut[0].choices[0]);
// console.log(objTryOut.forEach(function(elem){
//   console.log(elem);
// }));

//need to figure out the clicking on a li object event and make it log the score etc.

  //loops through the list need to figure this out 
  // cho.children().each(function(i, elem){
  //   var $elem = $(elem);//wraps vanilla javascrip node in DOM in a jquery object
  //   console.log(i);
  //   console.log($elem);
  // });