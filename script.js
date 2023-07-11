/*
PROGRAM getComputerChoice(){
  There are three choices: Rock, Paper, Scissors.
  When a function is invoked, it will randomly output a choice.
}
*/

let choice = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * choice.length);
  console.log(choice[randomChoice]);
}
