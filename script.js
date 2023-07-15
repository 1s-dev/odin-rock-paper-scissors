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
  } ELSE {
    THEN "Wrong Input! Please input Rock, Paper or Scissors only."
  }
  The output must be a RETURN instead of a console.log
}
*/

function normalizeWord(input) {
  let lowerCaseInput = input.toLowerCase();
  let firstLetter = lowerCaseInput.substr(0, 1);
  let remainingLetter = lowerCaseInput.substr(1);
  let playerInput = firstLetter.toUpperCase() + remainingLetter;
  return playerInput;
}

function gameRule(playerInput, computerInput) {
  if (playerInput === computerInput) {
    return `You draw! Both are ${playerInput}`;
  } else if (playerInput === "Rock" && computerInput === "Paper") {
    return `You lose! ${computerInput} beats ${playerInput}`;
  } else if (playerInput === "Paper" && computerInput === "Rock") {
    return `You win! ${playerInput} beats ${computerInput}`;
  } else if (playerInput === "Paper" && computerInput === "Scissors") {
    return `You lose! ${computerInput} beats ${playerInput}`;
  } else if (playerInput === "Scissors" && computerInput === "Paper") {
    return `You win! ${playerInput} beats ${computerInput}`;
  } else if (playerInput === "Scissors" && computerInput === "Rock") {
    return `You lose! ${computerInput} beats ${playerInput}`;
  } else if (playerInput === "Rock" && computerInput === "Scissors") {
    return `You win! ${playerInput} beats ${computerInput}`;
  } else {
    return "Wrong Input! Please input Rock, Paper or Scissors only.";
  }
}

function playRound(playerSelection, computerSelection) {
  let input = playerSelection;
  let normalizeInput = normalizeWord(input);
  console.log(normalizeInput);
  return gameRule(normalizeInput, computerSelection);
}

/*
PROGRAM game(){
  Call this function to play five rounds of function playRound()
  For each round, it should prompt for user input.
  Each round should output a result.
  playerScore = 0
  computerScore = 0
  IF (result contains You win) {
    playerScore =+ 0;
  } ELSE IF (result contains You lose) {
    computerScore =+ 0;
  }
  A score is accumulated for each round.
  At the end of 5 rounds, it should output the final winner.
  IF (playerScore > computerScore) {
    THEN print You win!
    } ELSEIF (playerScore === computerScore) {
      THEN print No one wins!
    } ELSE {
      THEN print You lose!
    }
  }
}
*/

function game() {
  let playerSelection = prompt();
  let computerSelection = getComputerChoice();
  let playerScore = 0;
  let computerScore = 0;
  let result = playRound(playerSelection, computerSelection);
  if (result.includes("You win")) {
    playerScore += 1;
  } else if (result.includes("You lose")) {
    computerScore += 1;
  } else if (result.includes("You draw")) {
    console.log("No score given");
  } else {
    console.log("Please input Rock, Paper or Scissors only");
  }
  console.log(playerScore, computerScore);

  playerAnswer = prompt();
  computerSelection = getComputerChoice();
  result = playRound(playerAnswer, computerSelection);
  if (result.includes("You win")) {
    playerScore += 1;
  } else if (result.includes("You lose")) {
    computerScore += 1;
  } else if (result.includes("You draw")) {
    console.log("No score given");
  } else {
    console.log("Please input Rock, Paper or Scissors only");
  }
  console.log(playerScore, computerScore);

  playerAnswer = prompt();
  computerSelection = getComputerChoice();
  result = playRound(playerAnswer, computerSelection);
  if (result.includes("You win")) {
    playerScore += 1;
  } else if (result.includes("You lose")) {
    computerScore += 1;
  } else if (result.includes("You draw")) {
    console.log("No score given");
  } else {
    console.log("Please input Rock, Paper or Scissors only");
  }
  console.log(playerScore, computerScore);

  playerAnswer = prompt();
  computerSelection = getComputerChoice();
  result = playRound(playerAnswer, computerSelection);
  if (result.includes("You win")) {
    playerScore += 1;
  } else if (result.includes("You lose")) {
    computerScore += 1;
  } else if (result.includes("You draw")) {
    console.log("No score given");
  } else {
    console.log("Please input Rock, Paper or Scissors only");
  }
  console.log(playerScore, computerScore);

  playerAnswer = prompt();
  computerSelection = getComputerChoice();
  result = playRound(playerAnswer, computerSelection);
  if (result.includes("You win")) {
    playerScore += 1;
  } else if (result.includes("You lose")) {
    computerScore += 1;
  } else if (result.includes("You draw")) {
    console.log("No score given");
  } else {
    console.log("Please input Rock, Paper or Scissors only");
  }
  console.log(playerScore, computerScore);

  if (playerScore > computerScore) {
    console.log("You win! =p");
  } else if (playerScore === computerScore) {
    console.log("You draw! Try again.");
  } else {
    console.log("You lose! Don't lose hope.");
  }
}
