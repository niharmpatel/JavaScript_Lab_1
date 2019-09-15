let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let userChoice;
function game(){
    userChoice = this.innerText;
    document.querySelector('#userChoice').innerHTML = userChoice;
    ComputerC();
    rules();
}
    rock.onclick = game;   
    paper.onclick  = game;
    scissor.onclick = game;   
function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function ComputerC(){
    let computerChoice = null;
    const gameOptions = ["Rock", "Paper", "Scissor"];
    let arrayIndex = randomNumber(0,2);
    computerChoice = gameOptions[arrayIndex];
    document.querySelector('#computerChoice').innerHTML = computerChoice;
}
yourScore = 0;
computerScore = 0;
draws = 0;
function rules() { 
console.log(userChoice);
console.log(computerChoice.innerText);
if (userChoice === computerChoice.innerText){
    document.querySelector('#result').innerHTML = "Result: " + "Draw";
    console.log("draw");
    draws += 1;
    console.log(draws);

} else if ((userChoice === "Rock" && computerChoice.innerText ==="Scissor") ||
    (userChoice === "Scissor" && computerChoice.innerText === "Paper") ||
    (userChoice === "Paper" && computerChoice.innerText === "Rock")){
    document.querySelector('#result').innerHTML = "Result: " + "you won";
    console.log("win");
    yourScore += 1;
} else {
    document.querySelector('#result').innerHTML = "Result: " + "you loose";
    console.log("looose");
    computerScore += 1;
}
}
let endButton = document.getElementById("finish");
endButton.onclick = function(){
    let decision = confirm("Are you sure that wanna quit!");
    if(decision == true ){
    document.querySelector('#userScore').innerHTML = yourScore;
    document.querySelector('#computeScore').innerHTML = computerScore;
    console.log("draw");
    document.querySelector('#draws').innerHTML = draws;
    } else {
        game();
    }
}