/*eslint no-console: ["error", { allow: ["log"] }] */
var money = +(prompt('Please, enter amount of money, amount of money should be in range 0 to 9999999')); 
var tallage = +(prompt('Please, enter amount of discount, amount of discount should be in range 0 to 99  '));
var saved = money / 100 * tallage; 
var result = money - saved; 
if (isNaN(money) || isNaN(tallage) || (money < 0) || (tallage < 0) || (money > 9999999) || (tallage > 99)) {
console.log("Invalid input data");
} else {
console.log('Price without discount: ' + money);
console.log('Discount: ' + tallage + '%');
console.log('Price with discount: ' + result.toFixed(2));
console.log('Saved: ' + saved.toFixed(2));
}