/*
Game concept
- There are 3 choices (Rock, Paper, Scissors)
- Rock v. Paper -> Paper wins
- Paper v. Scissors -> Scissors wins
- Scissors v. Rock -> Rock wins
*/

/*
PROGRAM getComputerChoice(){
  There are three choices: Rock, Paper, Scissors.
  When a function is invoked, it will randomly output a choice.
}
*/

let choice = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * choice.length);
  return choice[randomChoice];
}

/*
PROGRAM playRound(playerSelection, computerSelection) {
  playerSelection will be converted to case insensitive. After that, the first letter will be capitalized.
  A computer's input is generated from function getComputerChoice().
  Inputs from both players will need to be compared.
  IF (playerSelection === computerSelection){
    THEN "You draw! Both are `playerSelection`"
  } ELSEIF (playerSelection === 'rock' && computerSelection === 'paper'){
    THEN "You lose! `computerSelection` beats `playerSelection".
  } ELSEIF (playerSection === 'paper' && computerSelection === 'rock`){
    THEN "You win! `playerSelection` beats `computerSelection".
  } ELSEIF (playerSelection === 'paper' && computerSelection === 'scissors'){
    THEN "You lose! `computerSelection` beats `playerSelection".
  } ELSEIF (playerSection === 'scissors' && computerSelection === 'paper`){
    THEN "You win! `playerSelection` beats `computerSelection".
  } ELSEIF (playerSelection === 'scissors' && computerSelection === 'rock'){
    THEN "You lose! `computerSelection` beats `playerSelection".
  } ELSEIF (playerSection === 'rock' && computerSelection === 'scissors`){
    THEN "You win! `playerSelection` beats `computerSelection".
  }
  The output must be a RETURN instead of a console.log
}
*/

function playRound(playerSelection, computerSelection) {
  let lowerCaseInput = playerSelection.toLowerCase();
  let firstLetter = lowerCaseInput.substr(0, 1);
  let remainingLetter = lowerCaseInput.substr(1);
  let playerInput = firstLetter.toUpperCase() + remainingLetter;
  //console.log(playerInput);
  //console.log(playerInput, computerSelection);
  if (playerInput === computerSelection) {
    return `You draw! Both are ${playerInput}`;
  } else if (playerInput === "Rock" && computerSelection === "Paper") {
    return `You lose! ${computerSelection} beats ${playerInput}`;
  } else if (playerInput === "Paper" && computerSelection === "Rock") {
    return `You win! ${playerInput} beats ${computerSelection}`;
  } else if (playerInput === "Paper" && computerSelection === "Scissors") {
    return `You lose! ${computerSelection} beats ${playerInput}`;
  } else if (playerInput === "Scissors" && computerSelection === "Paper") {
    return `You win! ${playerInput} beats ${computerSelection}`;
  } else if (playerInput === "Scissors" && computerSelection === "Rock") {
    return `You lose! ${computerSelection} beats ${playerInput}`;
  } else if (playerInput === "Rock" && computerSelection === "Scissors") {
    return `You win! ${playerInput} beats ${computerSelection}`;
  }
  //return "Still developing";
}
