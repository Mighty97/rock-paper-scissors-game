function pickComputerMove(){
  const computerRandomPick = Math.random();
         if (computerRandomPick >= 0 && computerRandomPick <1/3){
      computerMove = 'Rock';
    }else if (computerRandomPick >=1/3 && computerRandomPick <2/3){
      computerMove= 'Paper';
    }else if(computerRandomPick >2/3 && computerRandomPick <1){
      computerMove='Scissors';
    }
}

let playerMove, computerMove, result ='';
let scoreBoard = JSON.parse(localStorage.getItem('scoreBoard'));

if (scoreBoard === null) {
    scoreBoard ={
  Wins: 0,
  Losses: 0,
  Tie: 0
  }
}

function playGame(playerMove) {
  pickComputerMove();
  if (playerMove === 'Rock'){
     pickComputerMove();

    if(computerMove === 'Rock'){
      result ='Tie'
    }else if(computerMove === 'Paper'){
      result ='You Lose'
    }else if (computerMove === 'Scissors'){
      result ='You Win'
    }
    
  }else if (playerMove === 'Paper'){
      pickComputerMove();
          if(computerMove === 'Rock'){
        result ='You Win'
      }else if(computerMove === 'Paper'){
        result ='Tie'
      }else if (computerMove === 'Scissors'){
        result ='You Lose'
      }
    
  }else if(playerMove ==='Scissors'){
        pickComputerMove();
        if(computerMove === 'Rock'){
          result ='You Lose'
        }else if(computerMove === 'Paper'){
          result ='You Win'
        }else if (computerMove === 'Scissors'){
          result ='Tie'
        }
    
  }
  document.querySelector('.js-moves-outcome').innerHTML = `you pick ${playerMove}, Computer pick ${computerMove}, ${result}`;

  if(result === 'You Win'){
      scoreBoard.Wins++;
    }else if (result === 'You Lose'){
      scoreBoard.Losses++;
    }else if (result === 'Tie'){
      scoreBoard.Tie++;
    }
  
  localStorage.setItem('scoreBoard', JSON.stringify(scoreBoard));
  
const score = `Wins:${scoreBoard.Wins}, Losses:${scoreBoard.Losses}, Ties:${scoreBoard.Tie}`;
  document.querySelector('.js-scoreBoard').innerHTML= score;
}


// paly with keyboard
function keyboardPlayGame(){
      console.log(event.key);
    if(event.key === 'R'){
      playGame('Rock');
    }else if(event.key === 'P'){
      playGame('Paper');
    }else if (event.key === 'S'){
      playGame('Scissors');
    }else if (event.key=== 'Delete'){
      resetScore();
    }
}
// Reset Score button

function resetScore() {
 localStorage.removeItem('scoreBoard');
  if (scoreBoard === null) {
    scoreBoard.Wins = 0;
    scoreBoard.Losses = 0;
    scoreBoard = 0;
}

let score = `Wins:${scoreBoard.Wins=0}, Losses:${scoreBoard.Losses=0}, Ties:${scoreBoard.Tie=0}`;
document.querySelector('.js-scoreBoard').innerHTML= score;
document.querySelector('.js-moves-outcome').innerHTML = 'Start Playing all over';
}
