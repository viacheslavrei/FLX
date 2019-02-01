/*eslint no-console: ["error", { allow: ["log"] }] */
var a = (prompt('Enter a')); 
if (isNaN(parseInt(a))) { 
 console.log("Invalid input data"); 
}
var b = (prompt('Enter b'));
if (isNaN(parseInt(b))) { 
console.log("Invalid input data");
}
var c = (prompt('Enter c'));
if (isNaN(parseInt(c))) { 
console.log("Invalid input data");  
}
var D = (b*b) - (4 * a * c);
  if (D < 0) {
    console.log("no solution");
    console.log("Discriminant = "+D);
  } else if (D === 0) {
    var S = -b / (2 * a);
     console.log("x = "+S);
     console.log("Discriminant = "+D);
  } else {
    var S1 = ( -b + Math.sqrt(D) ) / (2 * a),
      S2 = ( -b - Math.sqrt(D) ) / (2 * a);
     console.log("x1 = "+S1);
     console.log("x2 = "+S2);
     console.log("Discriminant = "+D);
  }
console.log('dsds');