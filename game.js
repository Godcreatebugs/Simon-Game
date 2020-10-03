//game pattern array
var gamePattern=[];

//user click pattern array
var userClickedPatterns=[];

//butoon color array
var buttonColors=["red","blue","green","yellow"];

//level 
var level=0;

//var for game started track
var started = false;

//check pressed key and wether game has started or not
//avoid accidental touch using boolean started
$(document).keydown(function(){
    if(!started){
    $("h1").text("level "+level);
    nextSequence(); 
    started=true;      
}   
});

//event handler to identify clicks 
$(".btn").click(function(){
 
    //use id to identify the click button
    var userChosenColor =  $(this).attr("id");

    //add bnutton to user pattern
    userClickedPatterns.push(userChosenColor);
            // console.log(userClickedPatterns);
    
    //add sound to click via play function
    playSound(userChosenColor);
    animatePress(userChosenColor);
    
}
);

//random number generator function
function nextSequence(){

    //increase level 
    level++;

    //update level on h1
    $("h1").text("Level "+level);

    var randomNumber= Math.floor(Math.random()*4);

    //random chosen color
    var randomChosenColor=buttonColors[randomNumber];

    //add random number to gamePattern  
    gamePattern.push(randomChosenColor); 
    
    //animate the selcted color wo adding an event using JQuery
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
    //play sound 
    playSound(randomChosenColor);
    
}

// to play sound
function playSound(name){
    //add sound for selected color using JavaScript
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

//animate press(no fadein/fadeout effect)
function animatePress(currentColor){
      //add animation when button got pressed/ helper function when get clicked
      $("#" + currentColor).addClass("pressed");
      //remove effect after some time 
      setTimeout(function(){
          $("#"+currentColor).removeClass("pressed");
      },100);   
}








