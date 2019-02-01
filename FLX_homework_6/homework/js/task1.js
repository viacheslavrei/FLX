var a = (prompt('Enter a')); 
var b = (prompt('Enter b'));
var c = (prompt('Enter c'));

if (isNaN(parseInt(a)) || isNaN(parseInt(b)) || isNaN(parseInt(c))) {
  alert("Invalid input data");
} else {
  var D = (b*b) - (4 * a * c);
  if (D < 0) {
    alert("no solution"+"; Discriminant = "+D);
    
  } else if (D === 0) {
    var S = -b / (2 * a);
     alert("x = "+S+"; Discriminant = " + D);
  } else {
    var S1 = ( -b + Math.sqrt(D) ) / (2 * a),
      S2 = ( -b - Math.sqrt(D) ) / (2 * a);
     alert("x1 = "+S1+"; x2 = "+S2+"; Discriminant = "+D);
  }
}
