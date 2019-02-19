function userCard(index) {
  let date = new Date().toLocaleString('en-GB');
  const error = 'Error: not enough money in your account';
  const tax = 0.005;
  let cardOptions = {
    key: index,
    balance: 100,
    transactionLimit: 100,
    historyLog: []
  };
  const changeHistoryLogs = function(operationType, credits) {
    let log = {
      operationType,
      credits,
      operationTime: date
    };
    cardOptions.historyLog.push(log);
  };
  const getCardOptions = function() {
    return cardOptions;
  };
  const putCredits = function(amount) {
    cardOptions.balance += amount;
    changeHistoryLogs('Received credits', amount);
  };
  const takeCredits = function(amount) {
    if (amount <= cardOptions.balance && amount <= cardOptions.transactionLimit) {
      cardOptions.balance -= amount;
      changeHistoryLogs('Withdrawal of credits', amount);
    } else {
      console.error(error);
    }
  };
  const setTransactionLimit = function(amount) {
    cardOptions.transactionLimit = amount;
    changeHistoryLogs('Transaction limit change', amount);
  };
  const transferCredits = function(amount, receiver) {
    let amountWithTax = tax * amount + amount;
    if (amountWithTax <= cardOptions.balance && amountWithTax <= cardOptions.transactionLimit) {
      receiver.putCredits(amount);
      this.takeCredits(amountWithTax);
    } else {
      console.error(error);
    }
  };
  return {
    getCardOptions,
    putCredits,
    takeCredits,
    setTransactionLimit,
    transferCredits
  };
}
const maxCards = 3;
class UserAccount {
  constructor(name) {
    this.name = name;
    this.cards = [];
  }
  addCard() {
    if (this.cards.length < maxCards) {
      this.cards.push(userCard(this.cards.length + 1));
    } else {
      console.error('Error: exceeded the maximum number of cards');
    }
  }
  getCardByKey(key) {
    return this.cards[key - 1];
  }
}
