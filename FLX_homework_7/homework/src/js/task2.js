var wantToPlay = confirm('Do you want to play a game?');
if (wantToPlay) {
  var maxRange = 5,
    prize = 0,
    maxPrize = 10,
    attemptsCount = 3,
    currentPrize = maxPrize;
  while (attemptsCount > 0) {
    var userChoice = +prompt('Enter a number from 0 to '+maxRange+"\r\n"+
'Attempts left: '+attemptsCount+"\r\n"+
'Total prize: '+prize+"\r\n"+
'Possible prize on current attempt: '+currentPrize)
    if (userChoice === Math.floor(Math.random() * maxRange)) {
      prize += currentPrize;
      var continuePlay = confirm('Congratulation! Your prize is: ' + prize + '. Do you want to continue?');
      if (continuePlay) {
        maxPrize *= 3;
        attemptsCount = 3;
        maxRange *= 2;
        currentPrize = maxPrize;
      } else {
        alert('Thank you for a game. Your prize is: ' + prize);
      }
    } else {
      currentPrize = Math.floor(currentPrize / 2);
      attemptsCount--;
    }
  }
  alert('Thank you for a game. Your prize is: ' + prize);
} else {
  alert('You did not become a millionaire, but can.');
}
