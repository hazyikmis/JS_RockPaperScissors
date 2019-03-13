let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//setTimeout(function() {console.log("hello")}, 3000);

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
//console.log(getComputerChoice());

function convertToWord(letter) {
  if (letter === 'r') return "Rock";
  if (letter === 'p') return "Paper";
  return "Scissors";
}

function win(usrChoice, cmpChoice) {
  //console.log("WIN");
  userScore++;
  userScore_span.innerHTML = userScore;
  //computerScore_span.innerHTML = computerScore;
  //result_div_p.innerHTML = convertToWord(usrChoice) + " beats " + convertToWord(cmpChoice) + ". You win! 🔥";
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(usrChoice);
  const compChoice_div = document.getElementById(cmpChoice);
  result_div_p.innerHTML = `${convertToWord(usrChoice)}${smallUserWord} beats ${convertToWord(cmpChoice)}${smallCompWord}. You win! 🔥`;
  //document.getElementById(usrChoice).classList.add('green-glow');
  //setTimeout(function() { document.getElementById(usrChoice).classList.remove('green-glow')}, 3000)
  userChoice_div.classList.add('green-glow');
  //setTimeout(function() { userChoice_div.classList.remove('green-glow')}, 3000)
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 3000)
  compChoice_div.classList.add('red-glow');
  //setTimeout(function() { compChoice_div.classList.remove('red-glow')}, 3000)
  setTimeout(() => compChoice_div.classList.remove('red-glow'), 3000)
};

function lose(usrChoice, cmpChoice) {
  //console.log("LOST");
  computerScore++;
  //userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(usrChoice);
  const compChoice_div = document.getElementById(cmpChoice);
  result_div_p.innerHTML = `${convertToWord(usrChoice)}${smallUserWord} loses ${convertToWord(cmpChoice)}${smallCompWord}. You lost! 😭`;
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 3000);
  compChoice_div.classList.add('green-glow');
  setTimeout(() => compChoice_div.classList.remove('green-glow'), 3000);
}

function draw(usrChoice, cmpChoice) {
  //console.log("DRAW");
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(usrChoice);
  //const compChoice_div = document.getElementById(cmpChoice);
  result_div_p.innerHTML = `${convertToWord(usrChoice)}${smallUserWord} equals ${convertToWord(cmpChoice)}${smallCompWord}. It's a draw!`;
  userChoice_div.classList.add('gray-glow');
  setTimeout(() => userChoice_div.classList.remove('gray-glow'), 3000);
  //compChoice_div.classList.add('gray-glow');
  //setTimeout(function() { compChoice_div.classList.remove('gray-glow')}, 3000);
  //usrChoice = cmpChoice, so no need commented lines
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  //console.log("computer choice => " + computerChoice + " : " + userChoice + " <= user choice");
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      //console.log("USER WINS.");
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      //console.log("USER LOSES.");
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      //console.log("It's a draw.");
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
/*
  rock_div.addEventListener('click', function() {
    game("r");
  });

  paper_div.addEventListener('click', function() {
    game("p");
  });

  scissors_div.addEventListener('click', function() {
    game("s");
  });
*/
  rock_div.addEventListener('click', () => game("r"));
  paper_div.addEventListener('click', () => game("p"));
  scissors_div.addEventListener('click', () => game("s"));
};

main();
