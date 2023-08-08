const SELECTIONS = [
    { name: 'rock', emoji: '✊', beats: 'scissors' },
    { name: 'paper', emoji: '✋', beats: 'rock' },
    { name: 'scissors', emoji: '✌', beats: 'paper' }
  ];
  
  const display = document.querySelector('#display');
  const [yourScore, computerScore] = [document.querySelector('[data-your-score]'), document.querySelector('[data-computer-score]')];
  
  document.querySelectorAll('[data-selection]').forEach(button => {
    button.addEventListener('click', () => {
      const userSelection = SELECTIONS.find(sel => sel.name === button.dataset.selection);
      const computerSelection = SELECTIONS[Math.floor(Math.random() * 3)];
      const youWin = userSelection.beats === computerSelection.name;
      const computerWin = computerSelection.beats === userSelection.name;
  
      display.innerHTML = `You chose ${userSelection.name}. Bot chose ${computerSelection.name}.<br>`;
      display.innerHTML += youWin ? 'You win!' : computerWin ? 'You lose!' : "It's a draw!";
      
      if (youWin) incrementScore(yourScore);
      if (computerWin) incrementScore(computerScore);
    });
  });
  
  function incrementScore(scoreElement) {
    scoreElement.innerText = parseInt(scoreElement.innerText) + 1;
  }
  const resetButton = document.querySelector('#reset-button');
  resetButton.addEventListener('click', resetHistory);
  

  function resetHistory() {
    display.innerHTML = '';
  
    yourScore.innerText = '0';
    computerScore.innerText = '0';
  }