const choices = ["rock", "paper", "scissors"];

const computerPlay = () => choices[Math.floor(Math.random() * choices.length)];

const answer = () => {
  let resp = prompt("Type rock, paper, or scissors");
  while (!choices.includes(resp)) {
    console.log("Sorry please type a valid choice.");
    return answer();
  }
  return resp;
};

const playAgain = () => {
  let resp = prompt("Play again? Y/n");
  if (resp === "Y" || resp === "y") {
    game();
  } else if (resp === "N" || resp === "n") {
    console.log("Thank you for playing!");
  } else {
    console.log("Please enter a valid response.");
    return playAgain();
  }
};

const game = () => {
  let computerChoice = computerPlay();
  let humanChoice = answer();
  console.log(`Computer: ${computerChoice}\nYou: ${humanChoice}`);

  if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      console.log("You Win!");
    } else if (computerChoice === "paper") {
      console.log("You Lose!");
    } else {
      console.log("Tie!");
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      console.log("You Win!");
    } else if (computerChoice === "rock") {
      console.log("You Lose!");
    } else {
      console.log("Tie!");
    }
  } else {
    if (computerChoice === "rock") {
      console.log("You Win!");
    } else if (computerChoice === "scissors") {
      console.log("You Lose!");
    } else {
      console.log("Tie!");
    }
  }

  playAgain();
};

game();
