const game = ()=>{
  cScore = 0;
  pScore = 0;
  //start game
  const startGame = ()=>{
    let playBtn = document.querySelector('.intro button');
    let introScreen = document.querySelector('.intro');
    let match = document.querySelector('.match');
    playBtn.addEventListener("click",()=>{
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  }
  startGame();
  //play the match
  const playMatch = ()=>{
    let options = document.querySelectorAll(".options button");
    let playerHand = document.querySelector(".player-hand");
    let computerHand = document.querySelector(".computer-hand");
    let hands = document.querySelectorAll(".hands img");

    hands.forEach(hand=>{
      hand.addEventListener("animationend",function(){
        this.style.animation = "";
      })
    })

    const computerOptions = ["rock","paper","scissors"];
    options.forEach(option=>{
    option.addEventListener("click",function(){
        const computerNumber = Math.floor(Math.random()*3);
        const computerChoice = computerOptions[computerNumber];
//call compareHands function
setTimeout(()=>{
  compareHands(this.textContent,computerChoice);
  computerHand.src = `./assets/${computerChoice}.png`;
  playerHand.src = `./assets/${this.textContent}.png`;

},2000);


playerHand.style.animation = "shakePlayer 2s ease";
computerHand.style.animation = "shakeComputer 2s ease";
    });
  });

  }
  const updateScore = ()=>{
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;

  }

  const compareHands = (playerChoice,computerChoice)=>{
    const winner = document.querySelector(".winner");
    if(playerChoice===computerChoice){
      winner.textContent = "It's a tie!";
      return;
    }
    if(playerChoice==="rock"){
      if(computerChoice==="scissors"){
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }else{
        winner.textContent = "Computer wins";
        cScore++;
        updateScore();
        return;
      }
    }
    if(playerChoice==="paper"){
      if(computerChoice==="scissors"){
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }else{
        winner.textContent = "Player wins";
        pScore++;
        updateScore();
        return;
      }
    }
    if(playerChoice==="scissors"){
      if(computerChoice==="paper"){
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }else{
        winner.textContent = "Computer wins";
        cScore++;
        updateScore();
        return;
      }

  }
}
  playMatch();
};
game();
