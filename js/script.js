const game = ()=>{
    let pScore = 0;
    let cScore = 0;

    //Comienzo del juego
    const startGame = ()=>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () =>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };
    //Partida
    const playMatch = () =>{
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand =>{
           hand.addEventListener('animationend', function(){
               this.style.animation = "";
           });
        });
        //Opciones del oprdenador
        const computerOptions = ['rock','paper','scissors'];

        options.forEach((options)=>{
              options.addEventListener('click', function() {
                //Elección del ordenador  
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    compareHands(this.textContent, computerChoice);
                    //Combio de imagenes
                    playerHand.src = `./images/${this.textContent}.svg`;
                    computerHand.src = `./images/${computerChoice}.svg`;
    
                }, 2000);

                //animacion
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
              });
        });
       
    };

    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) =>{
       const winner = document.querySelector('.winner'); 
       //Si ocurre un empate
      if(playerChoice === computerChoice){
         winner.textContent = 'IT IS A TIE!';
         return;
      }

      // Si elige piedra
      if(playerChoice === 'rock'){
          if(computerChoice === 'scissors'){
              winner.textContent = 'PLAYER WINS!';
              updateScore();
              pScore++;
              return;
          }else{
              winner.textContent = 'COMPUTER WINS!';
              cScore++;
              updateScore();
              return;
          }
          
      }

      //Si elige papel
      if(playerChoice === 'paper'){
        if(computerChoice === 'scissors'){
            winner.textContent = 'COMPUTER WINS!';
            cScore++;
            updateScore();
            return;
        }else{
            winner.textContent = 'PLAYER WINS!';
            pScore++;
            updateScore();
            return;
        }
        
    }

    //Si elige tijera
    if(playerChoice === 'scissors'){
        if(computerChoice === 'rock'){
            winner.textContent = 'COMPUTER WINS!';
            cScore++;
            updateScore();
            return;
        }else{
            winner.textContent = 'PLAYER WINS!';
            pScore++;
            updateScore();
            return;
        }  
    }

    }

    //Llamada de las funcciones internas
    startGame();
    playMatch();
};


//Aqui comienza la funcción 'game'
game();


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

