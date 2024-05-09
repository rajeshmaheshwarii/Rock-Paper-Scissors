let modeBtn = document.querySelector("#modeBtn");
let body = document.querySelector("body");
let paraText = document.querySelectorAll("p");
let allChoiceDiv = document.querySelectorAll(".choice");
let winMsg = document.querySelector("#msg");
var userScore = 0;
var compScore = 0;


modeBtn.addEventListener("click", function () {
    var modeBtnText = modeBtn.textContent;
    if (modeBtnText === "Light") {
        isLightThemeChoise();
    }
    else if (modeBtnText === "Dark") {
        isDarkThemeChoice();
    }
})

document.addEventListener('DOMContentLoaded',function(){
    isLightThemeChoise();
});

function isLightThemeChoise() {
    body.style.backgroundColor = "#f8f8f8";
    modeBtn.textContent = "Dark";
    modeBtn.style.color = "#fff";
    modeBtn.style.backgroundColor="#282C34";
    modeBtn.style.border = "4px solid white";
    paraText.forEach(function (paraTexts) {
        paraTexts.style.color = "Black";
        winMsg.style.color = "white";
    });
    winMsg.style.backgroundColor = "Black";
    winMsg.style.color = "White";

    allChoiceDiv.forEach(function (ch) {
        ch.addEventListener('mouseenter', function () {
            ch.style.backgroundColor = "Black";
        });
        ch.addEventListener('mouseleave', function () {
            ch.style.backgroundColor = "";
        });
    });

}

function isDarkThemeChoice() {
    body.style.backgroundColor = "#343541";
    modeBtn.textContent = "Light";
    modeBtn.style.color = "white";
    modeBtn.style.backgroundColor="#624F82";
    modeBtn.style.border = "4px solid white";
    paraText.forEach(function (paraTexts) {
        paraTexts.style.color = "white";
    }); 
    winMsg.style.backgroundColor = "black";
    winMsg.style.color = "white";

    allChoiceDiv.forEach(function(ch){
    ch.addEventListener('mouseenter',function(){
        ch.style.backgroundColor="white";
    });
    ch.addEventListener('mouseleave',function(){
        ch.style.backgroundColor="";
    }); 
});

}


//User choice selectin

allChoiceDiv.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})


function playGame(userChoice){
    const compChoice =  getCompChoise();
    console.log("userChoise : " + userChoice);
    console.log("ComputerChoice :" + compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = false; 

        if (userChoice === "rock") {
            // paper,scissors
            userWin = compChoice === "scissors" ? true : false;
        } else if (userChoice === "paper") {
            // rock,scissors
            userWin = compChoice === "rock" ? true : false;
        } else {
            // rock,paper
            userWin = compChoice === "paper" ? true : false;
        }
        

        displayResult(userWin);
         
    }
}

function drawGame(){
    console.log("draw");
    winMsg.textContent="Game Draw!!";
    winMsg.style.backgroundColor="black";

}
function userWinner(){
    console.log("You Win");
    winMsg.textContent="You win";
    winMsg.style.backgroundColor="green";
    document.querySelector("#user-score").textContent=++userScore;
}
function userLose(){
    console.log("computer win");
    winMsg.textContent="You Lose";
    winMsg.style.backgroundColor="red";
    document.querySelector("#comp-score").textContent=++compScore;
}

function displayResult(userWin){
    if(userWin){
        userWinner();
    }
    else{
       userLose();
    }
}
function getCompChoise(){
    let choice = ["rock","paper","scissors"];
    let compChoice = Math.floor(Math.random()*3);
    return choice[compChoice];

}
   


