var wantToPlay = confirm('Do you want to play a game?');
if (wantToPlay) {
  while (wantToPlay) {
    var maxRange = 5,
      prize = 0,
      maxPrize = 10,
      attemptsCount = 3,
      attemptsLeft = 0,
      tempPrize = 10;
    var numberInRange = Math.floor(Math.random() * maxRange);
    while (attemptsLeft < 3) {
      var userChoice = +prompt('Enter a number from 0 to ' + maxRange + "\r\n" + 
      'Attempts left: ' + attemptsCount + "\r\n" + 
      'Total prize: ' + prize + "\r\n" + 
      'Possible prize on current attempt: ' + tempPrize);
      if (userChoice === numberInRange) {
        prize += tempPrize;
        attemptsCount = 3;
        attemptsLeft = 0;
        maxPrize *= 3;
        maxRange *= 2;
        tempPrize = maxPrize;
        numberInRange = Math.floor(Math.random() * maxRange);
        wantToPlay = confirm('Congratulation! Your prize is: ' + prize + '. Do you want to continue?');
      } else {
        attemptsLeft++;
        attemptsCount--;
        tempPrize = Math.floor(maxPrize / (attemptsLeft * 2));
      }
    }
    alert('Thank you for a game. Your prize is: ' + prize);
    wantToPlay = confirm('Do you want to try again?');
  }
} else {
  alert('You did not become a millionaire, but can.');
}
