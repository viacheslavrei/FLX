function reverseNumber(number) {
  number = number.toString().split('')
  if (number[0] === "-") {
    number.shift()
    number = +number.reverse().join('')
    number = -number;
  } else if (number[0] !== "-") {
    number = +number.reverse().join('')
  }
  return number;
}

reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);
